import React from "react";
import propTypes from 'prop-types'
import { StyleSheet, Text, View, StatusBar  } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import {LinearGradient} from 'expo-linear-gradient'

const weatherOptions = {
    Thunderstorm:{
        iconName: 'thunderstorm',
        gradient: ['#cbcaa5','#334d50'],
        title: 'Гром и Молнии!',
        subtitle: 'зевс разбушевался'
    },
    Rain:{
        iconName: 'rainy',
        gradient: ['#e9d362','#333333'],
        title: 'Не забудь зонт!',
        subtitle: 'А то промокнешь'
    },
    Snow:{
        iconName: 'snow',
        gradient: ['#56ccf2','#2f80ed'],
        title: 'Шапка и Шарф!',
        subtitle: 'ничего не отморозь'
    },
    Clouds:{
        iconName: 'cloud',
        gradient: ['#f7b733','#fc4a1a'],
        title: 'Облако в форме котика!',
        subtitle: 'или это рыбка?'
    }
}

export default function Weather({temp, condition}) {
    return (
            <LinearGradient
                colors={weatherOptions[condition].gradient} 
                style={styles.conteiner}>
                <StatusBar barStyle='light-content' ></StatusBar>    
                <View style={styles.halfConteiner}> 
                    <Ionicons name={weatherOptions[condition].iconName} size={110} color="white" />
                    <Text style={styles.textWeather}>{temp}°</Text>
                </View>
                <View style={styles.halfConteiner}> 
                    <Text style={styles.title}>{weatherOptions[condition].title} </Text>
                    <Text style={styles.subtitle}>{weatherOptions[condition].subtitle} </Text>
                </View>
            </LinearGradient>
    )
}

Weather.propTypes = {
    temp: propTypes.number.isRequired,
    condition: propTypes.oneOf(["Thunderstorm", "Rain", "Snow","Haze","Dust","Fog", "Clear", "Clouds"]).isRequired 
}

const styles = StyleSheet.create({
    conteiner:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#78866b" 
    },
    halfConteiner:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textWeather:{
        fontSize: 39,
        color:"#ffffff",
    },
    title:{
        color: 'white',
        fontWeight: '200',
        fontSize: 40,
        marginBottom: 10,
        textAlign: "center"
    },
    subtitle:{
        color: 'white',
        fontWeight: '400',
        fontSize: 24,
    }
})