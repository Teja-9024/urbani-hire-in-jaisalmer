export default function ServicePageSkeleton() {
  return (
    <main className="min-h-screen bg-gray-50 animate-pulse">
      {/* Hero skeleton */}
      <section className="relative w-full pt-[80px] bg-[#1a1a1a]">
        <div className="w-full h-[220px] md:h-[420px] bg-gray-700" />
        <div className="absolute bottom-6 left-4 right-4 md:left-10 space-y-2">
          <div className="h-7 md:h-10 bg-white/20 rounded-lg w-3/4 max-w-lg" />
          <div className="h-4 md:h-6 bg-white/10 rounded-lg w-1/2 max-w-sm" />
        </div>
      </section>

      <div className="container-custom px-4 py-10 space-y-12">
        {/* Trust badges skeleton */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-white rounded-xl p-4 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-full bg-gray-200 mx-auto" />
              <div className="h-5 bg-gray-200 rounded w-2/3 mx-auto" />
              <div className="h-3 bg-gray-100 rounded w-1/2 mx-auto" />
            </div>
          ))}
        </div>

        {/* About section skeleton */}
        <div className="space-y-3">
          <div className="h-7 bg-gray-200 rounded w-48" />
          <div className="h-4 bg-gray-100 rounded w-full" />
          <div className="h-4 bg-gray-100 rounded w-5/6" />
          <div className="h-4 bg-gray-100 rounded w-4/6" />
        </div>

        {/* Attractions skeleton */}
        <div className="space-y-4">
          <div className="h-7 bg-gray-200 rounded w-56" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-12 bg-gray-100 rounded-lg" />
            ))}
          </div>
        </div>

        {/* Vehicle cards skeleton */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <div className="h-5 bg-gray-200 rounded w-32 mx-auto" />
            <div className="h-8 bg-gray-200 rounded w-2/3 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <div className="h-48 bg-gray-200" />
                <div className="p-5 space-y-3">
                  <div className="h-6 bg-gray-200 rounded w-3/4" />
                  <div className="h-4 bg-gray-100 rounded w-1/2" />
                  <div className="flex gap-2">
                    <div className="h-8 bg-gray-100 rounded-full flex-1" />
                    <div className="h-8 bg-orange-100 rounded-full flex-1" />
                  </div>
                  <div className="h-10 bg-orange-200 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing table skeleton */}
        <div className="space-y-4">
          <div className="flex justify-between items-end">
            <div className="space-y-1.5">
              <div className="h-7 bg-gray-200 rounded w-64" />
              <div className="h-4 bg-gray-100 rounded w-44" />
            </div>
            <div className="h-6 bg-green-100 rounded-full w-36" />
          </div>
          <div className="bg-white rounded-2xl shadow border border-gray-200 overflow-hidden">
            <div className="h-12 bg-gradient-to-r from-orange-300 to-orange-200" />
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center gap-4 px-6 py-4 border-b border-gray-100">
                <div className="w-16 h-12 bg-gray-200 rounded-xl flex-shrink-0" />
                <div className="flex-1 space-y-1.5">
                  <div className="h-4 bg-gray-200 rounded w-40" />
                  <div className="flex gap-1">
                    <div className="h-3 bg-gray-100 rounded w-14" />
                    <div className="h-3 bg-gray-100 rounded w-14" />
                  </div>
                </div>
                <div className="h-6 bg-blue-100 rounded-full w-32" />
                <div className="space-y-1">
                  <div className="h-6 bg-orange-100 rounded w-24" />
                  <div className="h-3 bg-gray-100 rounded w-20" />
                </div>
                <div className="h-9 bg-orange-200 rounded-full w-28" />
              </div>
            ))}
            <div className="h-10 bg-gray-50 border-t border-gray-100" />
          </div>
        </div>
      </div>
    </main>
  );
}
