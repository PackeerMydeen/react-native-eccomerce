import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import normalize from 'react-native-normalize';

export default function Title({ title, subTitle }) {
    return (
        <View>
            <Text style={styles.titleText}>{title.toUpperCase()}</Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: normalize(16),
        letterSpacing: 1,
        lineHeight: 18,
        fontFamily: 'Product-Sans-Bold',
        marginBottom: normalize(2)
    },
    subTitle: {
        color: '#8f9bb3',
        fontSize: normalize(12),
        lineHeight: 16,
        fontFamily: 'Product-Sans-Regular',
    }
})