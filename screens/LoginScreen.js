import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input, Image } from "react-native-elements";

const LoginScreen = () => {
    return (
        <View>
            <StatusBar style="light" />

            <Text>I am the login screen</Text>
        </View>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({})
