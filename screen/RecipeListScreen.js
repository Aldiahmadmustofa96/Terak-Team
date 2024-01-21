import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";

const RecipeListScreen = ({ icon, placeholder }) => {
    return (
        <SafeAreaView style={{ flex: 1, marginHorizontal: 16 }}>
            {/* render header */}
            <Header headerText={"Hi, Everyone"} headerIcon={"bell-o"} />

            {/* Search Filter */}
            <SearchFilter icon ="search" placeholder={"pilih resep yang kamu inginkan"} />

            {/* Categories filter */}  

            <View>
                style={{ marginTop: 22 }}
				<Text style={{ fontSize: 22, fontWeight: "bold" }}>Categories</Text>
				{/* Categories list */}
				<CategoriesFilter /> 
            </View>

            {/* Recipe List Filter */}

			<View style={{ marginTop: 22, flex: 1 }}>
				<Text style={{ fontSize: 22, fontWeight: "bold" }}>Recipes</Text>
				{/* Recipes list */}

				<RecipeCard />
			</View>
		</SafeAreaView>
            
    );
};

export default RecipeListScreen;

const style = StyleSheet.create({}); 