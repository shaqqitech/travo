import Main from './components/Main'
import PopularPlaces from './components/PopularPlaces'
import SearchMenu from './components/SearchMenu'
import ExplorePlaces from './components/ExplorePlaces'
import Destinations from './components/Destinations'
import Copyright from './components/Copyright'

export default function Home() {
  return (
    <main className="">
      <Main />
      <SearchMenu />
      <PopularPlaces />
      <ExplorePlaces />
      <Destinations />
      <Copyright />
    </main>
  )
}
