import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
        <View style={styles.txtContainer}>
          <Text style={styles.teksti}>Mobiiliohjelmointi</Text>
          <Text style={styles.tekstiIso}>SWD4TA021-3011</Text>
          <Text style={styles.teksti}>Ensimmäinen palautus</Text>
        </View>
        <View>
          <Image source = {require('./assets/splash.png')} style={styles.img}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161c26',
    alignItems: 'center',
    justifyContent: 'center'
  },
  txtContainer: {
    backgroundColor: '#19202b',
    padding: 30,
    width: '100%'
  },
  teksti: {
    color: '#708bb5',
    textAlign: 'center'
  },
  tekstiIso: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 22,
    marginVertical: 7
  },
  img: {
    width: 300,
    height: 300,
    position: 'absolute',
    alignSelf: 'center'
  }
});
