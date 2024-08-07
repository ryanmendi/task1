import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';

export default function Invest() {
    return (
    <View style={StyleSheet.principal}>
        <View style={StyleSheet.imgs}>
            <Image source={require('../assets/tela.png')}  />
        </View>
                <View style={StyleSheet.info}>
                <Text style={StyleSheet.cotação}>
                Cotação: R$ 94,54
                
                </Text>
                <Text style={StyleSheet.knip}>
                KNIP11 DY (12M): 10,29%
                
                </Text>
                <Text style={StyleSheet.pvp}>
                P/VP: 0,99
                
                </Text>
                <Text style={StyleSheet.liquidez}>
                liquidez Diaria: R$ 8,73 M
                
                </Text>
                <Text style={StyleSheet.variacao}>
                Varialção: 15,04% 
                
                </Text>
                </View>
    </View>
    );
  }

const style = StyleSheet.create({
 info: {
    marginBottom: '-30',
    marginTop: 20,
    marginLeft: 60,
 },
});