type BadgeProps = {
    children: React.ReactNode
}
export function Badge ({children}: BadgeProps){
    return (
        <span className="inline-flex items-center rounded-full bg-indigo-500/10 px-2 py-1 text-xs font-medium text-indigo-400">
            {children}
        </span>
    )
}