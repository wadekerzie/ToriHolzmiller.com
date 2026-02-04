import { useEffect, useState } from 'react'

export default function CampbellModal({ isOpen, onClose }) {
    const [expandedImage, setExpandedImage] = useState(null)

    const photos = [
        { src: '/campbell-1.jpg', alt: 'Campbell in blue towel after bath' },
        { src: '/campbell-2.jpg', alt: 'Campbell smiling in striped outfit' },
        { src: '/campbell-3.jpg', alt: 'Campbell in bouncer seat' },
        { src: '/campbell-4.jpg', alt: 'Campbell bath time' },
        { src: '/campbell-5.jpg', alt: 'Campbell with dad' }
    ]

    useEffect(() => {
        if (!isOpen) return

        // Lock body scroll
        document.body.style.overflow = 'hidden'

        // Handle escape key
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                if (expandedImage !== null) {
                    setExpandedImage(null)
                } else {
                    onClose()
                }
            }
        }

        window.addEventListener('keydown', handleEscape)

        return () => {
            document.body.style.overflow = ''
            window.removeEventListener('keydown', handleEscape)
        }
    }, [isOpen, onClose, expandedImage])

    if (!isOpen) return null

    return (
        <>
            {/* Main Gallery Modal */}
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
                            <p className="text-xs text-secondary mt-2">
                                Click any photo to view full size
                            </p>
                        </div>

                        {/* Photo Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {photos.map((photo, index) => (
                                <button
                                    key={index}
                                    onClick={() => setExpandedImage(index)}
                                    className="group relative aspect-square overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-accent/50"
                                >
                                    <img
                                        src={photo.src}
                                        alt={photo.alt}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                                        <svg
                                            className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                                        </svg>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Lightbox for Expanded Image */}
            {expandedImage !== null && (
                <div
                    className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
                    onClick={() => setExpandedImage(null)}
                >
                    {/* Close button */}
                    <button
                        onClick={() => setExpandedImage(null)}
                        aria-label="Close lightbox"
                        className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
                    >
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Navigation buttons */}
                    {expandedImage > 0 && (
                        <button
                            onClick={(e) => {
                                e.stopPropagation()
                                setExpandedImage(expandedImage - 1)
                            }}
                            aria-label="Previous photo"
                            className="absolute left-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
                        >
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                    )}

                    {expandedImage < photos.length - 1 && (
                        <button
                            onClick={(e) => {
                                e.stopPropagation()
                                setExpandedImage(expandedImage + 1)
                            }}
                            aria-label="Next photo"
                            className="absolute right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
                        >
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    )}

                    {/* Expanded image */}
                    <div
                        className="relative max-w-5xl max-h-[90vh] animate-fade-in"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={photos[expandedImage].src}
                            alt={photos[expandedImage].alt}
                            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                        />

                        {/* Photo counter */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
                            {expandedImage + 1} / {photos.length}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
