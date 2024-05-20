import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';

export default function Header () {
    return(
        <View style={styles.container}>
            <View style={styles.box1}>
              <Text style={{fontSize: 30, textAlign: 'center'}}>Lista de imagens</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    box1: {
        backgroundColor: 'orange',
        height: 50,
        alignItems: 'center'
    }
  });
  