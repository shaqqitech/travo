import Main from './components/Main'
import PopularPlaces from './components/PopularPlaces'
import SearchMenu from './components/SearchMenu'

export default function Home() {
  return (
    <main className="">
      <Main />
      <SearchMenu />
      <PopularPlaces />
    </main>
  )
}
