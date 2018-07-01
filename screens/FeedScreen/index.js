import React from "react";
import {
    View,
    Text
} from "react-native";

const SearchScreen = props => <Text onPress={() => props.navigation.navigate("TakePhoto")}> Feed < /Text>;

export default SearchScreen;