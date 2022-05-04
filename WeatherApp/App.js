import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert } from 'react-native';
import * as Location from 'expo-location';
import Loading from './Loading';
import axios from 'axios';
import Weather from './Weather';

const API_KEY = 'cf4f84367c7fea90e0edec0d35a1024d'

export default class extends React.Component{

  state= {
    isLoading: true
  }

  getWheather = async (longitude, latitude) => {
    const {data: {main: {temp}, weather}} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
    this.setState({
      isLoading:false, 
      temp: temp, 
      condition: weather[0].main,
    })
    console.log(data)
  }

  getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const {coords: {longitude, latitude}} = await Location.getCurrentPositionAsync(); 
      this.getWheather(longitude, latitude)
    } catch (error) {
      Alert.alert('Не могу определить местоположение', 'Проверьте настройки геопозиции и возвращайтесь')
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const {isLoading, temp, condition} = this.state;
    return (
      isLoading ? <Loading/> : <Weather temp={Math.round(temp)} condition= {condition} />
    );
  }
}