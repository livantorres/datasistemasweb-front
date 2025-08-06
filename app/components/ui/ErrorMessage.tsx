export default function ErrorMessage({ message, onRetry }: { message: string, onRetry?: () => void }) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-red-100 dark:bg-red-900 p-6 rounded-lg max-w-md text-center">
          <h3 className="text-lg font-medium text-red-800 dark:text-red-200">Error</h3>
          <p className="mt-2 text-red-600 dark:text-red-300">{message}</p>
          {onRetry && (
            <button
              onClick={onRetry}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
            >
              Reintentar
            </button>
          )}
        </div>
      </div>
    )
  }