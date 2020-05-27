import React, { memo } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import normalize from 'react-native-normalize';
import { Ionicons, AntDesign } from '@expo/vector-icons';

function Header({ title }) {
    return (
        <View style={styles.headerWrapper}>
            <Ionicons name="md-arrow-back" size={24} color="black" />
            <View style={styles.heading}>
                <Text style={styles.headingText}>{title}</Text>
            </View>
            <View >
                <AntDesign name="inbox" size={24} color="black" />
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    headerWrapper: {
        height: normalize(56),
        flexDirection: "row",
        alignItems: 'center',
        paddingLeft: normalize(16)
    },
    heading: {
        marginLeft: normalize(27),
        width: '80%'
    },
    headingText: {
        color: '#040e35',
        fontSize: normalize(18),
        fontFamily: 'Product-Sans-Bold'

    }
});

export default memo(Header)