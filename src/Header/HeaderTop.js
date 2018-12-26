import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class HeaderTop extends Component {
    render() {
        return (
            <View style={styles.headerDetail}>
                <View>
                    <Text style={{fontSize:10,marginHorizontal: 18,fontWeight: 'bold'}}>Primary Account</Text>
                </View>
                <View style={styles.headerDetailBody}>
                    <View style={[styles.commonStyle,styles.headerTop]}>
                        <Text style={[styles.textDetail1,styles.textDetail3]}>Balance</Text>
                        <Text style={[styles.textDetail1,styles.textDetail3]}>Pending</Text>
                    </View>
                    <View style={styles.commonStyle}>
                        <Text style={{fontSize:30,color:'black'}}>$34,576.9</Text>
                        <View style={{fontWeight:'bold'}}><Text style={{fontWeight:'bold'}}>-$235.34</Text><Text style={{color:'#7bd594',fontWeight:'bold'}}>+$134.12</Text></View>
                    </View>
                    <View style={[styles.commonStyle,styles.footerDetail]}>
                        <Text style={styles.textDetail1}>BSD:</Text><Text style={styles.textDetail2}>012 456</Text>
                        <Text style={styles.textDetail1}>ACC:</Text><Text style={styles.textDetail2}>578767999</Text>
                        <Text style={styles.textDetail1}>2</Text><Text style={styles.textDetail2}>Linked</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    
    headerDetail: {
        flex: .66,
        backgroundColor:'#f9fafc',
    },
    headerDetailBody: {
        flex: 1,
        // backgroundColor: 'red',
        marginHorizontal: 13,
        marginVertical: 10,
    },
    commonStyle:{
        justifyContent: 'space-between',
        flex:1,
        flexDirection: 'row'
    },
    footerDetail:{
        alignItems: 'flex-end',
        flex:1,
        flexDirection: 'row'
    },
    textDetail1:{
        color: '#b9b9c9',
        fontWeight: 'bold'
    },
    textDetail2:{
        alignItems: 'flex-start',
        fontWeight: 'bold',
        marginRight: 30
    },
    textDetail3:{
        fontSize:10
    },
    headerTop:{
        marginTop: 10,
    }
});