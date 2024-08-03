import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../Theme/GlobalTheme";

export default function HeaderItem2(props){

    return(
        <View style={styles.headerContainer}>
        {/* <TouchableOpacity onPress={props.onPress}>
            <Image source={require('../assets/images/blackLeft.png')} style={{ height: 14, width: 15 }} />
        </TouchableOpacity> */}
        <Text style={styles.headerText}>{props.text}</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    headerContainer:{
        flexDirection:'row',
        width:'100%',
        padding:'5%',
        paddingTop:'10%',
        alignItems:'center',
        backgroundColor:colors.lightGreen,
    },
    headerText:{
        fontSize:20,
        fontFamily:'Gilroy-SemiBold',
        // paddingLeft:'10%',
        color:colors.white,
    }
})