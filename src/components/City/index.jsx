import { WeatherLogo, ChooseCityLabel, SearchBox } from './style';
import logo from '../../assets/perfect-day.svg';
import Spinner from '../Spinner';

const City = ({ updateCity, fetchWeather, loading }) => {
  return (
    <>
      <WeatherLogo src={logo} alt="logo" />
      <ChooseCityLabel>Find Weather of your city </ChooseCityLabel>
      <SearchBox onSubmit={fetchWeather}>
        <input type="text" placeholder='city' onChange={(e) => updateCity(e.target.value)} />
        <button type="submit">{loading ? <Spinner/> : 'Search'}</button>
      </SearchBox>
    </>
  )
}

export default City