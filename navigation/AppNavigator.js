import { StyleSheet, Text, View } from "react-native-web";
import React from "react";
import WelcomeScreen from "../screen/WelcomeScreen";
import RecipeListScreen from "../screen/RecipeListScreen";
import RecipeDetailsScreen from "../screen/RecipeDetailScreen";

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Welcome" component={welcomeScreen} />
                <Stack.Screen name="RecipeList" component={RecipeListScreen} />
                <Stack.Screen name="RecipeDetail" component={RecipeDetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;

const styles = StyleSheet.create({});