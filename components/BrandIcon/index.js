import React, { memo } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import normalize from 'react-native-normalize';

import * as utils from '../../utils'

function BrandIcon(props) {
    const { title, detail } = props.products && props.products.item
    return (
        <TouchableOpacity style={styles.brandIconWrapper}>
            <View style={styles.brandIconContainer}>
                <Image source={utils.productIcons[props.products.index]} style={styles.tinyLogo} />
            </View>
            <Text style={styles.brandName}>{title}</Text>
            <View style={styles.copyContainer}><Text style={styles.copyText}>{detail}</Text></View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    brandIconContainer: {
        width: normalize(104),
        height: normalize(80),
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: normalize(24),
        borderBottomColor: '#e0e0e0',
        borderBottomWidth: normalize(4),


    },
    brandIconWrapper: {
        flex: 1,
        alignItems: 'center'
    },
    brandName: {
        textAlign: "center",
        fontSize: normalize(14),
        lineHeight: 18,
        fontFamily: 'Product-Sans-Regular',
        marginTop: normalize(7)
    },
    copyContainer: {
        minHeight: normalize(14),
        padding: normalize(5),
        backgroundColor: '#7ae0be',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: normalize(4),
        marginTop: normalize(7)
    },
    copyText: {
        fontSize: normalize(10),
        color: '#ffffff',
        fontFamily: 'Product-Sans-Regular',


    },
    tinyLogo: {
        width: normalize(79)
    }
})

export default memo(BrandIcon)