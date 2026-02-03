import { useEffect } from 'react'

export default function CalendarModal({ isOpen, onClose }) {
    useEffect(() => {
        if (!isOpen) return

        // Lock body scroll
        document.body.style.overflow = 'hidden'

        // Handle escape key
        const handleEscape = (e) => {
            if (e.key === 'Escape') onClose()
        }

        window.addEventListener('keydown', handleEscape)

        return () => {
            document.body.style.overflow = ''
            window.removeEventListener('keydown', handleEscape)
        }
    }, [isOpen, onClose])

    if (!isOpen) return null

    return (
        <div
            className="fixed inset-0 z-50"
            role="dialog"
            aria-modal="true"
            aria-labelledby="calendar-modal-title"
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div
                className="relative bg-white rounded-2xl shadow-2xl animate-fade-in max-w-2xl mx-auto mt-20 max-h-[80vh] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-border">
                    <h2 id="calendar-modal-title" className="text-lg font-semibold text-primary">
                        Book Your Appointment
                    </h2>
                    <button
                        onClick={onClose}
                        aria-label="Close modal"
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Calendar Iframe */}
                <div className="p-4">
                    <div className="bg-gray-50 rounded-lg p-8 text-center">
                        <p className="text-secondary mb-2">📅</p>
                        <p className="text-sm text-secondary">
                            Calendar booking widget will be embedded here.<br />
                            Replace with your actual booking URL (e.g., Calendly, Acuity, Square, etc.)
                        </p>
                        {/* 
            Uncomment and replace with actual booking URL:
            <iframe 
              src="YOUR_BOOKING_URL_HERE"
              className="w-full h-[600px] border-0"
              title="Book an appointment"
            />
            */}
                    </div>
                </div>
            </div>
        </div>
    )
}
