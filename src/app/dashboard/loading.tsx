import { Skeleton } from "@/components/ui";

export default function Loading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <aside className="p-12">
        <div className="flex justify-between items-center">
          <Skeleton className="w-24 h-24 rounded" />
          <div className="flex space-x-4">
            <Skeleton className="w-6 h-6 rounded" />
            <Skeleton className="w-6 h-6 rounded" />
          </div>
        </div>
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <div className="flex items-center space-x-2 mb-2">
            <Skeleton className="w-4 h-4 rounded" />
            <Skeleton className="w-24 h-4 rounded" />
          </div>
          <Skeleton className="w-full h-12 rounded" />
        </div>
        <h2 className="text-xl font-medium my-4">
          <Skeleton className="w-32 h-8 rounded" />
        </h2>
        <div className="w-[400px]">
          <div className="flex space-x-4 mb-4">
            <Skeleton className="w-24 h-8 rounded" />
            <Skeleton className="w-24 h-8 rounded" />
            <Skeleton className="w-24 h-8 rounded" />
          </div>
          <div className="space-y-4">
            <Skeleton className="w-full h-48 rounded" />
            <Skeleton className="w-full h-48 rounded" />
            <Skeleton className="w-full h-48 rounded" />
          </div>
        </div>
      </aside>
      <aside className="p-12">
        <Skeleton className="w-full h-[calc(100vh-3rem)] rounded" />
      </aside>
    </div>
  );
}
