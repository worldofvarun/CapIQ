import { useState } from 'react';
import { open } from '@tauri-apps/plugin-dialog';
import { readDir } from '@tauri-apps/plugin-fs';
import { basename } from '@tauri-apps/api/path';

const VIDEO_EXTENSIONS = [
  '.mp4',
  '.mov',
  '.avi',
  '.mkv',
  '.wmv',
  '.flv',
  '.webm',
];

export const useProjectCreation = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [fileCount, setFileCount] = useState(0);
  const [defaultProjectName, setDefaultProjectName] = useState('');

  const countVideoFiles = async (path: string): Promise<number> => {
    try {
      const entries = await readDir(path);
      let count = 0;
      console.log(entries);
      for (const entry of entries) {
        if ('children' in entry) {
          count += await countVideoFiles(entry.path);
        } else if (entry.name) {
          const ext = entry.name
            .toLowerCase()
            .slice(entry.name.lastIndexOf('.'));
          if (VIDEO_EXTENSIONS.includes(ext)) {
            count++;
          }
        }
      }

      return count;
    } catch (error) {
      console.error('Error counting video files:', error);
      return 0;
    }
  };

  const processFiles = async (files: File[]) => {
    try {
      let totalCount = 0;
      let folderName = '';

      for (const file of files) {
        const ext = file.name.toLowerCase().slice(file.name.lastIndexOf('.'));
        if (VIDEO_EXTENSIONS.includes(ext)) {
          totalCount++;
          if (!folderName) {
            folderName = file.name.split('.')[0];
          }
        }
      }

      if (totalCount > 0) {
        setFileCount(totalCount);
        setDefaultProjectName(folderName);
        setIsDialogOpen(true);
      }
    } catch (error) {
      console.error('Error processing files:', error);
    }
  };

  const handleFileSelection = async () => {
    try {
      const selected = await open({
        multiple: true,
        directory: true,
        filters: [
          {
            name: 'Video Files',
            extensions: VIDEO_EXTENSIONS.map((ext) => ext.slice(1)),
          },
        ],
      });

      if (!selected) return;

      const paths = Array.isArray(selected) ? selected : [selected];
      let totalCount = 0;
      let folderName = '';

      for (const path of paths) {
        if (typeof path === 'string') {
          const isDirectory = await readDir(path)
            .then(() => true)
            .catch(() => false);

          if (isDirectory) {
            const count = await countVideoFiles(path);
            totalCount += count;
            if (!folderName) {
              folderName = await basename(path);
            }
          } else {
            totalCount++;
            if (!folderName) {
              folderName = await basename(path);
            }
          }
        }
      }

      if (totalCount > 0) {
        setFileCount(totalCount);
        setDefaultProjectName(folderName);
        setIsDialogOpen(true);
      }
    } catch (error) {
      console.error('Error selecting files:', error);
    }
  };

  const handleProjectCreation = async (projectName: string) => {
    // TODO: Implement project creation logic
    console.log('Creating project:', projectName);
    setIsDialogOpen(false);
  };

  return {
    isDialogOpen,
    setIsDialogOpen,
    fileCount,
    defaultProjectName,
    handleFileSelection,
    handleProjectCreation,
    processFiles,
  };
};
