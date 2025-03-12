import { useState } from 'react';
import { FolderIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

export const DropZone = () => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  return (
    <motion.div
      className={`flex h-full w-full flex-col items-center justify-center rounded-xl border-2 border-dashed p-6 transition-colors ${
        isDragging
          ? 'border-blue-500 bg-blue-50'
          : 'border-gray-300 bg-white hover:border-gray-400'
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      animate={{
        scale: isDragging ? 1.02 : 1,
      }}
    >
      <FolderIcon className="h-16 w-16 text-blue-500" />
      <h3 className="mt-4 text-xl font-bold text-gray-900">
        Drop your footage here
      </h3>
      <p className="mt-2 text-sm text-gray-600">
        or click to browse your files
      </p>
      <button className="mt-4 rounded-lg bg-blue-500 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-600">
        Browse Files
      </button>
    </motion.div>
  );
};