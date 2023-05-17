import { WeatherLogo ,ChooseCityLabel,SearchBox} from './style';
import logo from '../../assets/perfect-day.svg';

const City = ({updateCity,fetchWeather}) => {
  return (
    <>
    <WeatherLogo src={logo} alt="logo"/>
    <ChooseCityLabel>Find Weather of your city </ChooseCityLabel>
    <SearchBox onSubmit={fetchWeather}>
        <input type="text" placeholder='city' onChange={(e)=>updateCity(e.target.value)}/>
        {/* <button type="submit">{loading?'Loading...':Search}</button> */}
        <button type="submit">Search</button>
    </SearchBox>
    </>
  )
}

export default City