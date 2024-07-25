import { Skeleton } from "@/components/ui";

export default function Loading() {
  return (
    <div className="container max-w-3xl border">
      {/* Profile */}
      <div className="flex flex-col-reverse mt-16 sm:flex-row sm:justify-between sm:items-center">
        <section>
          <div className="grid grid-cols-1 gap-1">
            <Skeleton className="w-32 h-8 rounded" />
            <Skeleton className="w-24 h-6 rounded" />
            <div className="flex flex-wrap gap-2 items-center my-2">
              {[...Array(3)].map((_, index) => (
                <Skeleton key={index} className="w-20 h-8 rounded" />
              ))}
            </div>
            <div className="flex gap-2 my-2">
              <Skeleton className="w-8 h-8 rounded" />
              <Skeleton className="w-8 h-8 rounded" />
              <Skeleton className="w-8 h-8 rounded" />
            </div>
          </div>
        </section>

        <Skeleton className="w-32 h-32 rounded-xl border" />
      </div>

      {/* About */}
      <div className="grid grid-cols-1 gap-1 my-12">
        <Skeleton className="w-32 h-8 rounded" />
        <Skeleton className="w-full h-6 rounded" />
      </div>

      {/* Experience */}
      <div className="grid grid-cols-1 gap-2 my-12">
        <Skeleton className="w-32 h-8 rounded" />
        <div className="space-y-4">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="flex gap-4">
              <Skeleton className="w-24 h-6 rounded" />
              <Skeleton className="w-48 h-6 rounded" />
            </div>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div className="grid grid-cols-1 gap-2 my-12">
        <Skeleton className="w-32 h-8 rounded" />
        <div className="space-y-4">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="flex gap-4">
              <Skeleton className="w-24 h-6 rounded" />
              <Skeleton className="w-48 h-6 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
