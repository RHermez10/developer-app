
export function LoadingSkeleton() {
    return (
        <div className="animate-pulse rounded-xl border border-gray-800 bg-gray-900 p-6">
            <div className="h-4 w-1/3 rounded bg-gray-700"></div>
            <div className="mt-4 h-3 w-full rounded bg-gray-800"></div>
            <div className="mt-2 h-3 w-2/3 rounded bg-gray-800"></div>
        </div>
    )
}