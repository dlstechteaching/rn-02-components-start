import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function App() {
  const isDarkMode = false;
  const { height, width, fontScale, scale} = useWindowDimensions();

  const isBiggerThanIPhoneSE = width > 375 &&  height > 667;

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? 'black' : 'white'}]}>
      <StatusBar style="auto" />
      <Text style={[styles.text, { color: 'red'}]}>Open up App.tsx to start working on your app!</Text>
      <View style={{ width: 100, height: 100, backgroundColor: isBiggerThanIPhoneSE ? 'blue' : 'green', margin: 20 }}/>
      <View style={styles.item}>
        <Text style={styles.text}>Device Height :</Text>
        <Text style={styles.text}>{ height }</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.text}>Device Width :</Text>
        <Text style={styles.text}>{ width }</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.text}>Device fontScale :</Text>
        <Text style={styles.text}>{ fontScale }</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.text}>Device scale :</Text>
        <Text style={styles.text}>{ scale }</Text>
      </View>
      <View style={styles.secondaryBox}>
        <Text style={styles.text}>Box 2</Text>
      </View>
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
    color: 'blue'
  },
  item: { 
    display: 'flex',
    width: '80%', 
    alignItems: 'center', 
    flexDirection: 'row', 
    justifyContent: 'space-between' 
  },
  secondaryBox: {
    height: hp('15%'),
    width: wp('30%'),
    backgroundColor: 'violet',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
