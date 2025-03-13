import { DropZone } from '@/components/media/DropZone';

export const Dashboard = () => {
  return (
    <div className="flex h-full flex-col">
      <div className="mb-6 flex-shrink-0">
        <h1 className="text-2xl font-bold text-gray-900">Media Library</h1>
      </div>

      <div className="flex-1">
        <DropZone />
      </div>
    </div>
  );
};
