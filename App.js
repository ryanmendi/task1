import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import LinhaInvest from './components/LinhaInvest';

export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>

      <View style={StyleSheet.lista}>
          <LinhaInvest/>
          <LinhaInvest/>
          <LinhaInvest/>
          <LinhaInvest/>
          <LinhaInvest/>
          <LinhaInvest/>
          <LinhaInvest/>
          <LinhaInvest/>
        </View>
    
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '10%',
    margin: '5%'
  },

});
