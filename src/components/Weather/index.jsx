import React from 'react'
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
import { WeatherInfoIcons, WeatherIcons } from '../../mock/data';
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
const Weather = ({ weather }) => {
    const isDay = weather?.weather[0].icon?.includes('d')
    const getTime = (timeStamp) => {
        return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
    }
    return (
        <>
            <WeatherContainer>
                <Condition>
                    <span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>
                    {`  |  ${weather?.weather[0].description}`}</Condition>
                <WeatherIcon src={WeatherIcons[weather?.weather[0].icon]} alt="icon" />
            </WeatherContainer>
            <Location>{weather?.name} , {weather?.sys?.country} </Location>
            <WeatherInfoLabel>Weather info</WeatherInfoLabel>
            <WeatherInfoContainer>
                <WeatherInfoContainer>
                    <WeatherInfoComponents
                        name={isDay ? "sunset" : "sunrise"}
                        value={`${getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}`}
                    />
                    <WeatherInfoComponents
                        name="humidity"
                        value={weather?.main?.humidity}
                    />
                    <WeatherInfoComponents
                        name="wind"
                        value={weather?.wind?.speed}
                    />
                    <WeatherInfoComponents
                        name="pressure"
                        value={weather?.main?.pressure}
                    />

                </WeatherInfoContainer>
            </WeatherInfoContainer>
        </>
    )
}

export default Weather