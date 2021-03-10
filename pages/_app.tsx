import Footer from '../components/footer'
import Header from '../components/header'
import '../styles/global.scss'
import ContactUs from './contact-us'
import Home from './home'
import News from './news'

import Services from './services'
import VideoSectionContent from './video_section/content'

const App = () => {
	return (
		<>
			<Header />
			<Home />
			<Services />
			<VideoSectionContent />
			<News />
			<ContactUs />
			<Footer />
		</>
	)
}

export default App