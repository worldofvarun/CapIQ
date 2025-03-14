import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MagnifyingGlassIcon,
  FolderPlusIcon,
  Cog6ToothIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';
import { Button } from './Button.tsx';
import { CreateProjectDialog } from '../media/CreateProjectDialog';
import { useProjectCreation } from '@/hooks/useProjectCreation.ts';

export const Sidebar = () => {
  const navigate = useNavigate();
  const [isProjectsExpanded, setIsProjectsExpanded] = useState(true);
  const {
    isDialogOpen,
    setIsDialogOpen,
    fileCount,
    defaultProjectName,
    handleFileSelection,
    handleProjectCreation,
  } = useProjectCreation();

  return (
    <aside className="h-full bg-[#1C1C1E] text-white">
      <div className="flex h-full flex-col">
        {/* Brand */}
        <div className="flex items-center px-4 py-6">
          <img src="/icon.png" alt="CapIQ" className="h-8 w-8" />
          <h1 className="ml-2 text-xl font-bold">CapIQ</h1>
        </div>

        {/* Search */}
        <div className="px-4">
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search across all projects..."
              className="w-full rounded-lg bg-neutral-700 py-2 pl-10 pr-4 text-sm text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Import Button */}
        <div className="mx-4 mt-6">
          <Button
            icon={<FolderPlusIcon className="h-5 w-5" />}
            onClick={handleFileSelection}
          >
            Import Footage
          </Button>
        </div>

        {/* Projects Section */}
        <div className="mt-8 flex-1 px-4">
          <div
            className="flex cursor-pointer items-center"
            onClick={() => setIsProjectsExpanded(!isProjectsExpanded)}
          >
            <ChevronDownIcon
              className={`h-4 w-4 transition-transform ${
                isProjectsExpanded ? 'rotate-0' : '-rotate-90'
              }`}
            />
            <span className="ml-2 text-sm font-semibold">Projects</span>
          </div>
        </div>

        {/* Settings */}
        <div className="mt-auto border-t border-gray-800 p-4">
          <button 
            onClick={() => navigate('/settings')}
            className="flex w-full items-center rounded-md px-2 py-1.5 text-sm text-gray-300 hover:bg-gray-800"
          >
            <Cog6ToothIcon className="mr-2 h-5 w-5" />
            Settings
          </button>
        </div>
      </div>

      <CreateProjectDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onConfirm={handleProjectCreation}
        defaultName={defaultProjectName}
        fileCount={fileCount}
      />
    </aside>
  );
};
