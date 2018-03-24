import React from "react";
import PropTypes from "prop-types";
import { View, Text, StatusBar } from "react-native";

const AppContainer extends Component {
    static propTypes = {
        isLoggedIn: PropTypes.booli.isRequired
    };
    render () {
        const { isLoggedIn } = this.props;
        <View>
            { isLoggedIn ? (
            <Text>Hahaha Login </Text>
            ) : (
            <Text>No I'm not log in</Text>
            )}
        </View>
    }    
}

export default AppContainer;
