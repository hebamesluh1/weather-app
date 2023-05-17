import City from "./components/City"
import Weather from "./components/Weather"
import { AppLabel } from "./global/component"

function App() {


  return (
    <div className="app">
      <AppLabel>Weather App</AppLabel>
      {/* <City/> */}
      <Weather/>
    </div>
  )
}

export default App
