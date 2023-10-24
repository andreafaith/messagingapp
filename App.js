import { StyleSheet, Text, View } from 'react-native';
import Status from './components/status';

export default function App() {
  return (
    <View style={styles.container}>
      <Status/>
      <View style={styles.content}>
        <Text style={styles.content}>MESSAGING APP - ALIMORONG</Text> 
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 15,
    marginTop: 50,
    fontFamily: 'Arial',
    alignItems: 'center',
    background: '#fff',
  },
  inputMethodEditor: {
    flex: 1,
    backgroundColor: '#fff',
  },
  toolbar: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(0, 0, 0, 0.04)',
    backgroundColor: '#fff' 
  },

});
