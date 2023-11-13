import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Another text...</Text>
      </View>
      <Text style={styles.text}>Hello from React Native!</Text>
      <Button title='Click Here!'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    margin: 16,
    padding: 16,
    borderWidth: 2,
    borderColor: 'blue',
  },
});
