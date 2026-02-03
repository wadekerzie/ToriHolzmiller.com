import ProfileHeader from './components/ProfileHeader'
import LinkHub from './components/LinkHub'
import SocialFooter from './components/SocialFooter'

function App() {
    return (
        <div className="min-h-screen py-12 px-4">
            <div className="max-w-hub mx-auto">
                <ProfileHeader />
                <LinkHub />
                <SocialFooter />
            </div>
        </div>
    )
}

export default App
