import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import React, {useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/core'
import { auth } from '../firebase'

const LoginScreen = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if(user) {
        navigation.replace("Home")
      }
    })

    return unsubscribe
  }, [])

  const handleSignUp = () => {
    auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
          const user = userCredentials.user;
          console.log("Registered with: ",user.email);
      })
      .catch(error => alert(error.message))
      console.log("Registered with: ");
  }

  const handleLogin = () => {
    auth
    .signInWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log("Logged in with: ", user.email);
        })
        .catch(error => alert(error.message))
    }

  return (
    <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
    >
        <View style={styles.logoContainer}>
            <Image style={styles.logo}
                source={require('./logo_icon.png')} />
        </View>
    <View style={[styles.inputContainer, styles.buttonOutline]}>
        <TextInput
            placeholder='Email'
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.input}
        />
        <TextInput
            placeholder='Password'
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.input}
            secureTextEntry
        />
    </View>

    <View style={styles.buttonContainer}>
    <TouchableOpacity
        onPress={handleLogin}
        style={styles.button}
    >
        <Text style={styles.buttonText}>Login</Text>
    </TouchableOpacity>
    <TouchableOpacity
        onPress={handleSignUp}
        style={[styles.button, styles.buttonOutline]}
    >
        <Text style={styles.buttonOutlineText}>Register</Text>
    </TouchableOpacity>
    </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    logoContainer: {
        justifyContent: 'center',
        height: 200,
    },
    logo: {
        resizeMode: 'contain',
        width: '100%',
        height: '100%',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },

    inputContainer: {
        width: '80%'
    },
    input:{
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center', 
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: '#87ae73',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#87ae73',
        borderWidth: 2,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    }, 
    buttonOutlineText: {
        color: '#87ae73',
        fontWeight: '700',
        fontSize: 16,
    },  
})