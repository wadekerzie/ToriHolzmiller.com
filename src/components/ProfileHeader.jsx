export default function ProfileHeader() {
    return (
        <div className="text-center mb-8">
            {/* Headshot */}
            <div className="mb-6">
                <img
                    src="/headshot.jpg"
                    alt="Tori Holzmiller"
                    className="w-28 h-28 rounded-full ring-4 ring-white shadow-lg mx-auto object-cover"
                />
            </div>

            {/* Name */}
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-primary mb-3">
                Tori Holzmiller
            </h1>

            {/* Bio */}
            <p className="text-secondary text-lg max-w-md mx-auto mb-4">
                Professional Hair Stylist ✨<br />
                Specializing in Color, Cuts & Styling
            </p>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-200">
                <span className="text-2xl">💇‍♀️</span>
                <span className="text-sm font-medium text-primary">Making You Look & Feel Beautiful</span>
            </div>
        </div>
    )
}
