import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import Header from './src/components/Header';

export default function App() {
  return (
    <View style={styles.container}>
    <ScrollView>
      <Header/>
      <View>
        <Image
        source={{uri: 'https://th.bing.com/th/id/R.17e68688cbe2be6317cb3db8b5736119?rik=9qLkb43hcWomLg&pid=ImgRaw&r=0'}}
        style={{width: 430, height: 300}}
        />
      </View>
      <View>
        <Image
        source={{uri: 'https://th.bing.com/th/id/OIP.h0BrGPSuItnmf4i6nf72vAHaEK?rs=1&pid=ImgDetMain'}}
        style={{width: 430, height: 300}}
        />
      </View>
      <View>
        <Image
        source={{uri: 'https://images8.alphacoders.com/910/thumb-1920-910287.jpg'}}
        style={{width: 430, height: 300}}
        />
      </View>
      <View>
        <Image
        source={{uri: 'https://th.bing.com/th/id/R.8b1b185adc9a5af3c83a0f1e8796cd79?rik=pBbnqkKMp8N9CQ&pid=ImgRaw&r=0'}}
        style={{width: 430, height: 300}}
        />
      </View>
      <View>
        <Image
        source={{uri: 'https://images.hdqwalls.com/download/black-clover-4k-57-1280x720.jpg'}}
        style={{width: 430, height: 300}}
        />
      </View>
      <View>
        <Image
        source={{uri: 'https://wallpaperaccess.com/full/1185178.jpg'}}
        style={{width: 430, height: 300}}
        />
      </View>
    </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    //flex: 1,
    gap: 26
  },
});
