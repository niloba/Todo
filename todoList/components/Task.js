import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";


const Task= (props) => {

    return(
        <View style={styles.item}>
            <View style={styles.itemLeft}>
            <View style={styles.circle}></View>
            <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.square}></View>

        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#F2F4F6",
        padding: 20,
        borderRadius: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 17,
    },
    itemLeft: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
    },
    circle: {
        width: 24,
        height: 24,
        backgroundColor: "#FCC249",
        opacity: 0.6,
        borderRadius: 60,
        marginRight: 10,
    },
    itemText: {
        maxWidth: "80%",
    },
    square: {
        width: 13,
        height: 13,
        borderColor: "#FCC249",
        borderWidth: 3,
        borderRadius: 1,
    },

});


export default Task;