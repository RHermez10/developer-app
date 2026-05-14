type ErrorStateProps = {
    message?: string
}

export function ErrorState({message = "Something went wrong"}: ErrorStateProps){
    return (
        <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-6">
            <h3 className="font-semibold text-red-400"> Error </h3>
            <p className="mt-2 text-sm text-red-300"> {message} </p>
        </div>
    )
}