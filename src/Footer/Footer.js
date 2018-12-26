import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icons from "./Icons";

export default class Footer extends Component {
    render() {
        const icons = [
            {
                image: require('../images/internet.png'),
            },
            {
                image: require('../images/settings-work-tool.png'),
            },
            {
                image: require('../images/envelope.png'),
            },
            {
                image: require('../images/plane.png'),
            },
            {
                image: require('../images/clock-with-white-face.png'),
            }
        ];
        return (
            <View style={styles.footerMain}>
                <View style={styles.footerIcons}>
                    {
                        icons.map((icon, i) => <Icons icon={icon} key={i}/>)
                    }
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    footerMain: {
        flex: .08,
        backgroundColor: 'white',
        elevation: 15
    },
    footerIcons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    }
});