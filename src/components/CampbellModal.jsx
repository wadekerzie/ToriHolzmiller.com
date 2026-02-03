import { useEffect } from 'react'

export default function CampbellModal({ isOpen, onClose }) {
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
            aria-labelledby="campbell-modal-title"
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div
                className="relative bg-white rounded-2xl shadow-2xl animate-fade-in max-w-4xl mx-auto mt-12 mb-12 max-h-[85vh] overflow-hidden flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-border flex-shrink-0">
                    <h2 id="campbell-modal-title" className="text-lg font-semibold text-primary">
                        Pictures of Campbell 👶💕
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

                {/* Gallery Content */}
                <div className="p-6 overflow-y-auto flex-1">
                    <div className="text-center mb-6">
                        <p className="text-secondary text-sm">
                            Meet Campbell! The sweetest little one 💙
                        </p>
                    </div>

                    {/* Photo Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <img
                            src="/campbell-photos.png"
                            alt="Campbell photo gallery"
                            className="w-full rounded-xl shadow-lg"
                        />
                    </div>

                    <div className="mt-6 text-center">
                        <p className="text-xs text-secondary italic">
                            More photos coming soon! 📸
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
