
import Destination from './components/Destination'
import DownloadApp from './components/DownloadApp'
import Home from './components/Home'
import Navber from './components/Navber'
import Offer from './components/Offer'
import Service from './components/Service'
import Testimonials from './components/Testimonials'
import Tours from './components/Tours'


export default function App() {
  return (
    <div>

      <Navber></Navber>
      <Home></Home>
      <Service></Service>
      <Destination></Destination>
      <Offer></Offer>
      <Tours />
      <Testimonials></Testimonials>
      <DownloadApp></DownloadApp>


    </div>
  )
}
