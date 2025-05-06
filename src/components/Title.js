import React from "react";
import { View,Text,StyleSheet } from "react-native";
import PropTypes from "prop-types";

const Title = (props)=> {
    return(
        <View>
            {props.isVisible &&(
                <Text style={[stylesTitle.title,{color:props.color}]}>{props.number}-{props.text}</Text>
            )}
            <Text>{props.number+2}</Text>
            <Text>{props.numberstr+5}</Text>
        </View>
    );
}
const stylesTitle = StyleSheet.create({
    title:{
        fontSize:28,
        fontWeight:'700',
    }
});

export default Title;

