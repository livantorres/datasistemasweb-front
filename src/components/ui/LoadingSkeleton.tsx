export default function LoadingSkeleton() {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="space-y-4">
          {/* Skeleton para header */}
          <div className="h-16 bg-gray-200 dark:bg-gray-700 rounded w-full max-w-3xl"></div>
          
          {/* Skeleton para contenido */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
            </div>
            <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded"></div>
          </div>
        </div>
      </div>
    );
  }