import React, { memo } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

function BrandIcon(props) {
    const { title, detail } = props.products && props.products.item
    return (
        <View style={styles.brandIconWrapper}>
            <View style={styles.brandIconContainer}>
                <Image source={utils.productIcons[props.products.index]} style={styles.tinyLogo} />
            </View>
            <Text style={styles.brandName}>{title}</Text>
            <View style={styles.copyContainer}><Text style={styles.copyText}>{detail}</Text></View>
        </View>
    )
}

const styles = StyleSheet.create({
    brandIconContainer: {
        width: 104,
        height: 80,
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 24,
        borderBottomColor: '#e0e0e0',
        borderBottomWidth: 4,


    },
    brandIconWrapper: {
        flex: 1,
        alignItems: 'center'
    },
    brandName: {
        textAlign: "center",
        fontSize: 14,
        lineHeight: 18,
        fontFamily: 'Product-Sans-Regular'
    },
    copyContainer: {
        minHeight: 14,
        width: 44,
        backgroundColor: '#7ae0be',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4
    },
    copyText: {
        fontSize: 8,
        color: '#ffffff',
        fontFamily: 'Product-Sans-Regular',

    },
    tinyLogo: {
        width: 79
    }
})

export default memo(BrandIcon)