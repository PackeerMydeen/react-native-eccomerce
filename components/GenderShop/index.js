import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import normalize from 'react-native-normalize';

import Title from '../Title'

export default function GenderShop() {
    return (
        <View style={styles.genderShopWrapper}>
            <Title title='FOR ALL GENDERS' subTitle='Shop our most-loved brands!' />
            <View style={styles.cards}>
                <TouchableOpacity>
                    <Card gender='Men' source={require('../../assets/men.jpg')} />
                </TouchableOpacity>
                <TouchableOpacity >
                    <Card gender='Women' source={require('../../assets/women.jpg')} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const Card = ({ source, gender }) => {
    return (
        <View style={styles.cardWrapper}>
            <View style={{ flex: 2 }}>
                <Image source={source} />
            </View>
            <View style={styles.cardTextWrapper}>
                <Text style={styles.cardText}>{gender}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    genderShopWrapper: {
        flex: 1,
        padding: normalize(16),

    },
    cards: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: normalize(30)
    },
    cardWrapper: {
        minHeight: normalize(162)
    },
    cardTextWrapper: {
        flex: 1,
        borderRadius: normalize(16),
        height: normalize(12),
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardText: {
        fontSize: normalize(16),
        lineHeight: 20,
        color: '#040e35',
        fontFamily: 'Product-Sans-Regular',
        marginTop: normalize(8)
    }
})

