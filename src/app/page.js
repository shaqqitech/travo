import Main from './components/Main'
import PopularPlaces from './components/PopularPlaces'
import SearchMenu from './components/SearchMenu'
import ExplorePlaces from './components/ExplorePlaces'
import Destinations from './components/Destinations'
import Copyright from './components/Copyright'
import Gallery from './components/Gallery'
import Partners from './components/Partners'
import NewsLetter from './components/Newsletter'
import Footer from './components/Footer'
import Facilites from './components/Facilities'

export default function Home() {
  return (
    <main className="">
      <Main />
      <SearchMenu />
      <PopularPlaces />
      <Facilites />
      <ExplorePlaces />
      <Destinations />
      <Gallery />
      <Partners />
      <NewsLetter />
      <Footer />
      <Copyright />
    </main>
  )
}
