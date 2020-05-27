import React, { memo } from 'react'
import { StyleSheet, Text, View } from 'react-native';

function Header({ title }) {
    return (
        <View style={styles.headerWrapper}>
            <Text>arrw</Text>
            <View style={styles.heading}>
                <Text style={styles.headingText}>{title}</Text>
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

export default memo(Header)