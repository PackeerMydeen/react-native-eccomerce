import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.headerWrapper}>
            <Text>arrw</Text>
            <View style={styles.heading}>
                <Text style={styles.headingText}>Sweatshirts Store</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    headerWrapper: {
        height: 56,
        flexDirection: "row",
        alignItems: 'center',
        paddingLeft: 16
    },
    heading: {
        marginLeft: 27
    },
    headingText: {
        color: '#040e35',
        fontSize: 18,
        fontFamily: 'Product-Sans-Bold'

    }
});