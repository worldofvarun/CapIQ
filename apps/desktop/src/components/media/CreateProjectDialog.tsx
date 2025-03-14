import { Dialog } from '@headlessui/react';
import { XMarkIcon, FolderIcon } from '@heroicons/react/24/outline';

interface CreateProjectDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (projectName: string) => void;
  defaultName: string;
  fileCount: number;
}

export const CreateProjectDialog = ({
  isOpen,
  onClose,
  onConfirm,
  defaultName,
  fileCount,
}: CreateProjectDialogProps) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
          <div className="flex items-center justify-between">
            <Dialog.Title className="text-xl font-semibold text-gray-900">
              Create New Project
            </Dialog.Title>
            <button
              onClick={onClose}
              className="rounded-full p-1 hover:bg-gray-100"
            >
              <XMarkIcon className="h-5 w-5 text-gray-500" />
            </button>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
              <FolderIcon className="h-6 w-6 text-blue-500" />
            </div>
            <div>
              <h3 className="text-base font-medium text-gray-900">
                {defaultName}
              </h3>
              <p className="text-sm text-gray-500">
                {fileCount} video file{fileCount !== 1 ? 's' : ''}
              </p>
            </div>
          </div>

          <div className="mt-6">
            <label
              htmlFor="projectName"
              className="block text-sm font-medium text-gray-700"
            >
              Project Name
            </label>
            <input
              type="text"
              id="projectName"
              defaultValue={defaultName}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div className="mt-6 h-px bg-gray-200" />

          <div className="mt-6 flex justify-end gap-3">
            <button
              onClick={onClose}
              className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                const input = document.getElementById(
                  'projectName',
                ) as HTMLInputElement;
                onConfirm(input.value);
              }}
              className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600"
            >
              Create Project
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
