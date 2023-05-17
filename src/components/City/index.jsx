import { WeatherLogo ,ChooseCityLabel,SearchBox} from './style';
import logo from '../../assets/perfect-day.svg';

const City = () => {
  return (
    <>
    <WeatherLogo src={logo} alt="logo"/>
    <ChooseCityLabel>Find Weather of your city </ChooseCityLabel>
    <SearchBox>
        <input type="text" />
        <button>Search</button>
    </SearchBox>
    </>
  )
}

export default City