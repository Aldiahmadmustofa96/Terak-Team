import { StyleSheet, Text, View, Image, Touchable } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-web";

const WelcomeScreen = () => {
    return (
        <View style={{ flex: 1, alignItems: "center"}}>
            <Image source iki panggone logo />

            <Text style={{ color: "#f96163", fontSize: 22, fontWeight: "bold"}}>
                100+ Premium Recipe
            </Text>

            <Text
            style={{
                fontSize: 42,
                fontWeight: "bold",
                color: "#3c444c",
                marginTop: 44,
                marginBottom: 40,
            }}
            >
                Chef Style Food Recipes
            </Text>
            <TouchableOpacity
            // onPress={()=>} iki masukno navigation recipe list
                style={{
                    backgroundColor: "#f96163",
                    borderRadius: 18,
                    paddingVertical: 18,
                    width: "80%",
                    alignItems: "center",
                }}
            >
                <Text style={{ fontSize:18, color: "fff", fontWeight: "700"}}>
                    Let's Try
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});