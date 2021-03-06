import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import BlueButton from '../../comps/BlueButton';
import SubjectSquare from '../../comps/SubjectSquare';
import SubjectRectangle from '../../comps/SubjectRectangle';
import HomepageText from '../../comps/Homepage';
import FindaTutorText from '../../comps/FindaTutorText';
import NavBar from '../../comps/NavBar';

const PullOutMenu = ({history}) => {
    return <View style={styles.viewCont}>
        <View onPress={()=>history.goBack()}>
            <Image style={styles.close} source={require('../../images/whiteCloseCircle.png')} />
        </View>
        <View style={styles.selectionBox}>
            <Text style={styles.fontStyle}>Homepage</Text>
            <Text style={styles.fontStyle}>Messages</Text>
            <Text style={styles.fontStyle}>Notifications</Text>
            <Text style={styles.fontStyle}>Profile</Text>
            <Text style={styles.fontStyle}>Payment</Text>
        </View>
        <Text style={styles.signout} onPress={() => history.push('/')}>Sign Out</Text>
        <Image style={styles.logo} source={require('../../images/LogoWhite.png')} />
    </View>
}

const styles=StyleSheet.create({
    viewCont: {
        display:'flex',
        alignItems:'center',
        backgroundColor:'#595CFF',
        height:'100%',
    },

    close: {
        right:150,
        top:60,
        
    },

    fontStyle: {
        color:'white',
        fontWeight:'bold',
        fontSize:18,
        margin:10,
    },

    selectionBox: {
        right:90,
        top:140
    },

    signout: {
        position:'absolute'
 ,       color:'white',
        fontSize:18,
        fontWeight:"600",
        marginBottom:70,
        bottom:110,
    },

    logo: {
        position:'absolute',
        bottom:40,
    }
});

export default PullOutMenu;
