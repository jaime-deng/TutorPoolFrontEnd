import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import propTypes from 'prop-types';

const HomepageText = ({text}) => {
    return <View >
            <Text style={styles.description}>{text}</Text>
    </View>
}

const styles=StyleSheet.create({

    description: {
      marginTop:20,
      fontFamily: "Open Sans",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: 22,
      lineHeight: 20,
      /* identical to box height, or 91% */
      
      
      color: "#131515",
    }
});

HomepageText.defaultprops = {
    text:"Default",
}

HomepageText.propTypes = {
    text:propTypes.string,
}

export default HomepageText;