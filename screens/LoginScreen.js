import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { KeyboardAvoidingView, Button, TouchableHighlight } from 'react-native';
import { Input, Image } from "react-native-elements";
// import { SafeAreaInsetsContext } from 'react-native-safe-area-context';


const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = () => {

    };

    console.log(email);

    const buttonPressed = () => {

    };

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <StatusBar style="light" />
            <Image source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSl7o8d_12a8_Rze-I4KbFS2EXtoQ3pLFCDw&usqp=CAU"
            }}
                style={{
                    width: 200,
                    height: 200
                }}
            />
            <View style={styles.inputContainer}>
                <Input
                    placeholder="Email"
                    autoFocus
                    type="email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <Input
                    placeholder="Password"
                    type="password"
                    value={password}
                    secureTextEntry
                    onChangeText={(text) => setPassword(text)}
                />
            </View>

            {/* <Button containerStyle={styles.button} backgroundColor="red" onPress={signIn} title="Login" />
            <Button containerStyle={styles.button} title="Register" type="outline" /> */}
            <TouchableOpacity
                style={styles.loginScreenButton}
                // onPress={() => navigate('HomeScreen')}
                underlayColor='#fff'>
                <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.loginScreenButton}
                // onPress={() => navigate('HomeScreen')}
                underlayColor='#fff'>
                <Text style={styles.loginText}>Register</Text>
            </TouchableOpacity>



            <View style={{ height: 100 }} />
        </KeyboardAvoidingView>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        padding: 10,
    },
    inputContainer: {
        width: 300,
    },

    loginScreenButton: {
        marginRight: 40,
        marginLeft: 40,
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#1E6738',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        // width: 200,
        alignSelf: 'stretch',
    },
    loginText: {
        color: '#fff',
        textAlign: 'center',
        paddingLeft: 10,
        paddingRight: 10
    },
    inputsContainer: {
        flex: 1
    },

})
