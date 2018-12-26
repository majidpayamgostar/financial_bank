import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {fontStyles, flexStyles,containerStyles} from '../styles';


export default class Choice extends Component {
    render() {
        const {choice} = this.props;
        
        return (
            <View style={containerStyles.container}>
                <View style={styles.imageWrapper}>
                    <Image
                        style={styles.image}
                        source={choice.image}
                    />
                </View>
                <View style={styles.content}>
                    <View>
                        <Text style={fontStyles.bold}>{choice.title}</Text>
                        <Text style={{color: '#b9b9c9'}}>{choice.description}</Text>
                    </View>
                    <View style={flexStyles.alignItemsCenter}>
                        <Text style={fontStyles.bold}>{choice.price}</Text>
                        <Text style={styles.Travel}>{choice.type}</Text>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    imageWrapper: {
        borderRadius: 50,
        backgroundColor: '#f2f2f6',
        padding: 5,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 20,
        height: 20,
    },
    content: {
        flex: 1,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    Travel: {
        backgroundColor: '#f2f2f6',
        width: 50,
        height: 17,
        textAlign: 'center',
        borderRadius: 3,
        color: '#b9b9c9',
        fontSize: 12,
        fontWeight: 'bold',
    }
});