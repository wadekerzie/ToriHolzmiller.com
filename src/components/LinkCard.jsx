export default function LinkCard({
    emoji,
    title,
    description,
    href,
    primary = false,
    useCustomIcon = false,
    liveIndicator = null
}) {
    const isExternal = href?.startsWith('http')

    return (
        <a
            href={href}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            className={`
        group flex items-center gap-3 w-full max-w-md mx-auto p-3 
        rounded-2xl bg-white/80 backdrop-blur-sm border border-border 
        shadow-card hover:shadow-card-hover transition-all duration-300 
        hover:-translate-y-0.5
        ${primary ? 'ring-2 ring-accent/20' : ''}
      `}
        >
            {/* Icon */}
            <div className="flex-shrink-0">
                {useCustomIcon ? (
                    <img
                        src={emoji}
                        alt=""
                        className="w-10 h-10 rounded-lg object-cover"
                    />
                ) : (
                    <span
                        role="img"
                        aria-hidden="true"
                        className="text-3xl w-10 h-10 flex items-center justify-center"
                    >
                        {emoji}
                    </span>
                )}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
                <div className="font-medium text-sm text-primary group-hover:text-accent transition-colors">
                    {title}
                </div>
                <div className="text-xs text-secondary truncate">
                    {description}
                </div>
                {liveIndicator && (
                    <div className="flex items-center gap-1 mt-1">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-xs text-green-600">{liveIndicator}</span>
                    </div>
                )}
            </div>

            {/* Chevron */}
            <div className="flex-shrink-0">
                <svg
                    className="w-4 h-4 text-secondary group-hover:translate-x-0.5 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </div>
        </a>
    )
}
