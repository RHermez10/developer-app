type EmptyStateProps = {
    title: string,
    description: string
};

export function EmptyState ({title, description}: EmptyStateProps){
    return(
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-gray-700 bg-gray-900 p-12 text-center">
            <h1 className="text-lg font-semibold text-white"> {title} </h1>
            <p className="mt-2 max-w-sm text-sm text-gray-400"> {description} </p>
        </div>
    )
}