import { useState } from 'react'
import LinkCard from './LinkCard'
import CalendarModal from './CalendarModal'
import CampbellModal from './CampbellModal'
import NewClientModal from './NewClientModal'

export default function LinkHub() {
    const [isCalendarOpen, setIsCalendarOpen] = useState(false)
    const [isCampbellOpen, setIsCampbellOpen] = useState(false)
    const [isNewClientOpen, setIsNewClientOpen] = useState(false)

    const linkCards = [
        {
            emoji: '📅',
            title: 'Book an Appointment',
            description: 'Schedule your next hair transformation',
            onClick: () => setIsCalendarOpen(true),
            primary: true
        },
        {
            emoji: '📝',
            title: 'New Client Form',
            description: 'First time? Fill out our intake form',
            onClick: () => setIsNewClientOpen(true)
        },
        {
            emoji: '📸',
            title: 'Instagram',
            description: 'See my latest work & hair inspiration',
            href: 'https://instagram.com/toriholzmiller'
        },
        {
            emoji: '💌',
            title: 'Email Me',
            description: 'Questions? I\'d love to hear from you!',
            href: 'mailto:tori@example.com'
        },
        {
            emoji: '✂️',
            title: 'Services & Pricing',
            description: 'View all services and pricing details',
            href: '#services'
        },
        {
            emoji: '⭐',
            title: 'Client Reviews',
            description: 'See what my clients are saying',
            href: '#reviews'
        },
        {
            emoji: '👶',
            title: 'See pictures of Campbell',
            description: 'Adorable photos of the sweetest baby!',
            onClick: () => setIsCampbellOpen(true)
        }
    ]

    return (
        <div className="space-y-3 mb-12">
            {linkCards.map((card, index) => {
                if (card.onClick) {
                    return (
                        <button
                            key={index}
                            onClick={card.onClick}
                            className={`
                group flex items-center gap-3 w-full max-w-md mx-auto p-3 
                rounded-2xl bg-white/80 backdrop-blur-sm border border-border 
                shadow-card hover:shadow-card-hover transition-all duration-300 
                hover:-translate-y-0.5
                ${card.primary ? 'ring-2 ring-accent/20' : ''}
              `}
                        >
                            {/* Icon */}
                            <div className="flex-shrink-0">
                                <span
                                    role="img"
                                    aria-hidden="true"
                                    className="text-3xl w-10 h-10 flex items-center justify-center"
                                >
                                    {card.emoji}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0 text-left">
                                <div className="font-medium text-sm text-primary group-hover:text-accent transition-colors">
                                    {card.title}
                                </div>
                                <div className="text-xs text-secondary truncate">
                                    {card.description}
                                </div>
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
                        </button>
                    )
                }

                return (
                    <LinkCard
                        key={index}
                        emoji={card.emoji}
                        title={card.title}
                        description={card.description}
                        href={card.href}
                        primary={card.primary}
                    />
                )
            })}

            <CalendarModal
                isOpen={isCalendarOpen}
                onClose={() => setIsCalendarOpen(false)}
            />
            <CampbellModal
                isOpen={isCampbellOpen}
                onClose={() => setIsCampbellOpen(false)}
            />
            <NewClientModal
                isOpen={isNewClientOpen}
                onClose={() => setIsNewClientOpen(false)}
            />
        </div>
    )
}
