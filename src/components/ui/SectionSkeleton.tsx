// components/ui/SectionSkeleton.tsx
export default function SectionSkeleton() {
    return (
      <div className="h-96 bg-gray-100 dark:bg-gray-700 rounded-lg my-4 animate-pulse">
        {/* Puedes personalizar el esqueleto según tus necesidades */}
        <div className="h-full flex flex-col p-4 space-y-4">
          <div className="h-8 bg-gray-200 dark:bg-gray-600 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-full"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-5/6"></div>
          <div className="flex-grow bg-gray-200 dark:bg-gray-600 rounded"></div>
        </div>
      </div>
    );
  }