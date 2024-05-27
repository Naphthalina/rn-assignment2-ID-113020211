import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My name is <Text style={{fontWeight:'bold'}}>Benedicta Naphthalina Assefuah</Text> </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#29c5f6',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  text:{
    fontSize:24,
    color:'white'
  }
});
