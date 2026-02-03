import { useEffect, useState } from 'react'

export default function NewClientModal({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        preferredDate: '',
        preferredTime: '',
        serviceInterest: '',
        hairType: '',
        hairLength: '',
        colorTreated: '',
        allergies: '',
        previousStylist: '',
        expectations: '',
        howDidYouHear: '',
        additionalNotes: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitSuccess, setSubmitSuccess] = useState(false)

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

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        // TODO: Replace with actual email service (e.g., EmailJS, FormSpree, or backend API)
        // For now, this is a placeholder that simulates sending
        console.log('Form data to be sent:', formData)

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))

        setIsSubmitting(false)
        setSubmitSuccess(true)

        // Reset form after 2 seconds and close
        setTimeout(() => {
            setFormData({
                fullName: '',
                email: '',
                phone: '',
                preferredDate: '',
                preferredTime: '',
                serviceInterest: '',
                hairType: '',
                hairLength: '',
                colorTreated: '',
                allergies: '',
                previousStylist: '',
                expectations: '',
                howDidYouHear: '',
                additionalNotes: ''
            })
            setSubmitSuccess(false)
            onClose()
        }, 2000)
    }

    if (!isOpen) return null

    return (
        <div
            className="fixed inset-0 z-50"
            role="dialog"
            aria-modal="true"
            aria-labelledby="new-client-modal-title"
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div
                className="relative bg-white rounded-2xl shadow-2xl animate-fade-in max-w-3xl mx-auto mt-8 mb-8 max-h-[90vh] overflow-hidden flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-border flex-shrink-0">
                    <div>
                        <h2 id="new-client-modal-title" className="text-lg font-semibold text-primary">
                            New Client Intake Form ✨
                        </h2>
                        <p className="text-xs text-secondary mt-1">
                            Help me create your perfect hair experience
                        </p>
                    </div>
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

                {/* Form Content */}
                <div className="p-6 overflow-y-auto flex-1">
                    {submitSuccess ? (
                        <div className="text-center py-12">
                            <div className="text-6xl mb-4">🎉</div>
                            <h3 className="text-2xl font-semibold text-primary mb-2">Thank You!</h3>
                            <p className="text-secondary">
                                Your information has been submitted successfully.<br />
                                I'll be in touch soon!
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Contact Information */}
                            <div>
                                <h3 className="text-sm font-semibold text-primary mb-3 flex items-center gap-2">
                                    <span>📋</span> Contact Information
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="fullName" className="block text-sm font-medium text-primary mb-1">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="fullName"
                                            name="fullName"
                                            required
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-colors"
                                            placeholder="Jane Doe"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-primary mb-1">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-colors"
                                            placeholder="jane@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-primary mb-1">
                                            Phone Number *
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-colors"
                                            placeholder="(555) 123-4567"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Appointment Preferences */}
                            <div>
                                <h3 className="text-sm font-semibold text-primary mb-3 flex items-center gap-2">
                                    <span>📅</span> Appointment Preferences
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="preferredDate" className="block text-sm font-medium text-primary mb-1">
                                            Preferred Date
                                        </label>
                                        <input
                                            type="date"
                                            id="preferredDate"
                                            name="preferredDate"
                                            value={formData.preferredDate}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="preferredTime" className="block text-sm font-medium text-primary mb-1">
                                            Preferred Time
                                        </label>
                                        <select
                                            id="preferredTime"
                                            name="preferredTime"
                                            value={formData.preferredTime}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-colors"
                                        >
                                            <option value="">Select a time</option>
                                            <option value="morning">Morning (9am - 12pm)</option>
                                            <option value="afternoon">Afternoon (12pm - 3pm)</option>
                                            <option value="evening">Evening (3pm - 6pm)</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Service Information */}
                            <div>
                                <h3 className="text-sm font-semibold text-primary mb-3 flex items-center gap-2">
                                    <span>✂️</span> Service Information
                                </h3>
                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="serviceInterest" className="block text-sm font-medium text-primary mb-1">
                                            Service(s) Interested In *
                                        </label>
                                        <select
                                            id="serviceInterest"
                                            name="serviceInterest"
                                            required
                                            value={formData.serviceInterest}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-colors"
                                        >
                                            <option value="">Select a service</option>
                                            <option value="haircut">Haircut</option>
                                            <option value="color">Color</option>
                                            <option value="highlights">Highlights/Balayage</option>
                                            <option value="styling">Styling</option>
                                            <option value="treatment">Treatment</option>
                                            <option value="multiple">Multiple Services</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Hair Information */}
                            <div>
                                <h3 className="text-sm font-semibold text-primary mb-3 flex items-center gap-2">
                                    <span>💇‍♀️</span> Hair Information
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="hairType" className="block text-sm font-medium text-primary mb-1">
                                            Hair Type
                                        </label>
                                        <select
                                            id="hairType"
                                            name="hairType"
                                            value={formData.hairType}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-colors"
                                        >
                                            <option value="">Select hair type</option>
                                            <option value="straight">Straight</option>
                                            <option value="wavy">Wavy</option>
                                            <option value="curly">Curly</option>
                                            <option value="coily">Coily</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="hairLength" className="block text-sm font-medium text-primary mb-1">
                                            Current Hair Length
                                        </label>
                                        <select
                                            id="hairLength"
                                            name="hairLength"
                                            value={formData.hairLength}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-colors"
                                        >
                                            <option value="">Select length</option>
                                            <option value="short">Short (above shoulders)</option>
                                            <option value="medium">Medium (shoulder length)</option>
                                            <option value="long">Long (below shoulders)</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="colorTreated" className="block text-sm font-medium text-primary mb-1">
                                            Color Treated?
                                        </label>
                                        <select
                                            id="colorTreated"
                                            name="colorTreated"
                                            value={formData.colorTreated}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-colors"
                                        >
                                            <option value="">Select option</option>
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                            <option value="natural">Natural/Virgin Hair</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="previousStylist" className="block text-sm font-medium text-primary mb-1">
                                            Previous Stylist?
                                        </label>
                                        <input
                                            type="text"
                                            id="previousStylist"
                                            name="previousStylist"
                                            value={formData.previousStylist}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-colors"
                                            placeholder="Name or 'None'"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Additional Information */}
                            <div>
                                <h3 className="text-sm font-semibold text-primary mb-3 flex items-center gap-2">
                                    <span>💬</span> Additional Information
                                </h3>
                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="allergies" className="block text-sm font-medium text-primary mb-1">
                                            Allergies or Sensitivities
                                        </label>
                                        <input
                                            type="text"
                                            id="allergies"
                                            name="allergies"
                                            value={formData.allergies}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-colors"
                                            placeholder="Any allergies to hair products?"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="expectations" className="block text-sm font-medium text-primary mb-1">
                                            What are you hoping to achieve?
                                        </label>
                                        <textarea
                                            id="expectations"
                                            name="expectations"
                                            value={formData.expectations}
                                            onChange={handleChange}
                                            rows={3}
                                            className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-colors resize-none"
                                            placeholder="Describe your hair goals..."
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="howDidYouHear" className="block text-sm font-medium text-primary mb-1">
                                            How did you hear about me?
                                        </label>
                                        <select
                                            id="howDidYouHear"
                                            name="howDidYouHear"
                                            value={formData.howDidYouHear}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-colors"
                                        >
                                            <option value="">Select option</option>
                                            <option value="instagram">Instagram</option>
                                            <option value="facebook">Facebook</option>
                                            <option value="referral">Friend/Family Referral</option>
                                            <option value="google">Google Search</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="additionalNotes" className="block text-sm font-medium text-primary mb-1">
                                            Additional Notes
                                        </label>
                                        <textarea
                                            id="additionalNotes"
                                            name="additionalNotes"
                                            value={formData.additionalNotes}
                                            onChange={handleChange}
                                            rows={3}
                                            className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-colors resize-none"
                                            placeholder="Anything else I should know?"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-4 border-t border-border">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-accent text-white font-medium py-3 px-6 rounded-lg hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Submitting...
                                        </>
                                    ) : (
                                        <>
                                            Submit Form
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </>
                                    )}
                                </button>
                                <p className="text-xs text-secondary text-center mt-3">
                                    📧 Your information will be sent directly to Tori's email
                                </p>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    )
}
