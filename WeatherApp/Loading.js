import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'

export default function Loading(){
    return(
        <LinearGradient
                colors={['#833ab4', '#fd1d1d', '#fcb045']}
                style={styles.conteiner}>
                <Text style={styles.text}>Загрузка погоды...</Text>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    conteiner:{
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 30,
        paddingVertical: 100,
    },
    text: {
       color: 'white',
       fontSize: 30,
       fontWeight: "200",
       
    }
})