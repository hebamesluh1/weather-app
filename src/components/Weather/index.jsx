import React from 'react'
import logo from '../../assets/cloudy.svg'
import {
    WeatherContainer,
    Condition,
    WeatherIcon,
    Location,
    WeatherInfoLabel,
    WeatherInfoContainer,
    InfoContainer,
    InfoIcon,
    InfoLabel
} from './style'
import { WeatherInfoIcons, WeatherInfoLabels } from '../../mock/data';
const WeatherInfoComponents = ({ name, value }) => {
    return <>
        <InfoContainer>
            <InfoIcon src={WeatherInfoIcons[name]} />
            <InfoLabel>
                {value}
                <span>{name}</span>
            </InfoLabel>
        </InfoContainer>
    </>
}
const Weather = () => {
    return (
        <>
            <WeatherContainer>
                <Condition><span>30ْ C</span> Cloudy</Condition>
                <WeatherIcon src={logo} alt="icon" />
            </WeatherContainer>
            <Location>London , GB </Location>
            <WeatherInfoLabel>Weather info</WeatherInfoLabel>
            <WeatherInfoContainer>
                <WeatherInfoContainer>
                    {WeatherInfoLabels.map((info, index) => (
                        <WeatherInfoComponents
                            name={info}
                            key={index}
                            value="6543"
                        />
                    ))}
                </WeatherInfoContainer>
            </WeatherInfoContainer>
        </>
    )
}

export default Weather