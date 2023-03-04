import { KeyboardAvoidingView, StyleSheet, Text, Image, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core'
import { auth } from '../firebase'



const HomeScreen = () => {
    const navigation = useNavigation()
  const handleUpload = () => {
    auth
    .upload()
    .then(() => {
        navigation.replace("Company")
    })
    .catch(error => alert(error.message))
}

  return (
      <View style={styles.container}>
        <View style={styles.inner}>
          <Image style={styles.logo} source={require('/Users/anvibajpai/turtleneck/turtleApp/sq_upload.png')} />
          <TouchableOpacity onPress={handleUpload} style={styles.button}>
            <Text style={styles.buttonText}>Upload Image</Text>
          </TouchableOpacity>
        </View>

        <TextInput 
            placeholder="Enter Company Name Here"
            style={styles.input}
          />

      </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F7FDDB',
    },

    inner: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ADC178',
      marginTop: 200,
      width: '50%',
      height: '50%',
      borderRadius: 10,
      borderColor: "#6C584C",
      borderWidth: 3,
    },

    uploadContainer:{
      justifyContent: 'center',
      alighItemms: 'center',
      borderRadius: '30',
    },

    button:{
        backgroundColor: '#ADC178',
        width: '60%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
    },

    buttonText: {
        color: 'white',
        fontWeight: '500',
        fontSize: 16,
        color: "#6C584C",
    }, 
    logo: {
      resizeMode: "contain",
      width: "40%",
      height: "40%",
      borderRadius: '80',
    },
    input: {
      backgroundColor: "#DDE5B6",
      borderColor: "#6C584C",
      borderWidth: 3,
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 30,
      marginTop: 60,
      marginBottom: 60,
      width: "50%",
      height: "50%",
    },

})
