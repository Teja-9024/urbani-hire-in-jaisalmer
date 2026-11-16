export default function VehiclePageSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white animate-pulse">
      {/* Breadcrumb skeleton */}
      <div className="bg-white border-b px-4 py-3">
        <div className="container-custom flex items-center gap-2">
          <div className="h-4 bg-gray-200 rounded w-10" />
          <div className="h-4 bg-gray-100 rounded w-4" />
          <div className="h-4 bg-gray-200 rounded w-32" />
        </div>
      </div>

      <div className="pt-20 md:pt-24 pb-12 container-custom px-4 md:px-6">
        <div className="bg-white rounded-2xl md:rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left: Gallery skeleton */}
            <div className="p-4 md:p-8 bg-gray-50/50">
              <div className="aspect-[4/3] md:aspect-[16/10] rounded-xl bg-gray-200" />
              <div className="grid grid-cols-4 gap-2 mt-3">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="aspect-square rounded-lg bg-gray-200" />
                ))}
              </div>
            </div>

            {/* Right: Details skeleton */}
            <div className="p-5 md:p-8 lg:p-10 space-y-5">
              <div className="h-8 bg-orange-200 rounded-full w-40" />
              <div className="h-10 bg-gray-200 rounded w-3/4" />
              <div className="h-5 bg-orange-100 rounded w-1/2" />

              <div className="grid grid-cols-2 gap-3">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-20 bg-gray-100 rounded-xl" />
                ))}
              </div>

              <div className="space-y-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-4 bg-gray-100 rounded w-full" />
                ))}
              </div>

              <div className="space-y-3 pt-2">
                <div className="h-12 bg-orange-200 rounded-full" />
                <div className="h-12 bg-green-100 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Features skeleton */}
        <div className="mt-10 bg-white rounded-2xl shadow-sm p-6 space-y-4">
          <div className="h-7 bg-gray-200 rounded w-48" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-12 bg-gray-100 rounded-lg" />
            ))}
          </div>
        </div>

        {/* Other vehicles skeleton */}
        <div className="mt-10 space-y-4">
          <div className="h-7 bg-gray-200 rounded w-56" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="h-40 bg-gray-200" />
                <div className="p-4 space-y-2">
                  <div className="h-5 bg-gray-200 rounded w-3/4" />
                  <div className="h-4 bg-gray-100 rounded w-1/2" />
                  <div className="h-9 bg-orange-100 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
