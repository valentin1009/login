import {useCallback, useEffect, useState} from "react";
import {request} from "../utils/request";

type HookProps = {
    lat: number | null | undefined;
    long: number | null | undefined;
}

type WeatherType = {
    temperature: number;
    windspeed: number;
    winddirection: number;
    weathercode: number;
}

type WeatherDataType = {
    elevation: number;
    generationtime_ms: number;
    latitude: number;
    longitude: number;
    timezone: number;
    timezone_abbreviation: number;
    utc_offset_seconds: number;
    current_weather: WeatherType;
}

const useLocationWeather = (props: HookProps): WeatherDataType | null => {

    const [weather, setWeather] = useState<WeatherDataType | null>(null);

    useEffect(() => {
        const fetchWeather = async () => {
            const weather = await request<WeatherDataType>(`https://api.open-meteo.com/v1/forecast?latitude=${props.lat}&longitude=${props.long}&current_weather=true`);
            setWeather(weather);
        }

        fetchWeather();
    }, [0]);

    return weather;
}

export default useLocationWeather;