import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class Icons extends Component {
    render() {
        const {icon} = this.props;
        return (
            <View style={styles.footerIcons}>
                <Image
                    style={styles.image}
                    source={icon.image}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({

    footerIcons:{
        color: 'blue'
    },
    image:{
        width:20,
        height:20
    }
});