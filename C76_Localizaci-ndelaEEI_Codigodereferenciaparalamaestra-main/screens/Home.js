import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Platform, TouchableOpacity, StatusBar } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View
                style={styles.container}>
                    <SafeAreaView style={styles.droidSafeArea}/>
                <Text style={styles.titleText}>SPACE FINDER</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    droidSafeArea:{
        marginTop: Platform.OS==="android" ? StatusBar.currentHeight:0
    }
})

