import React, { memo } from 'react'
import { View, Text, ImageBackground, Image } from 'react-native'

function Banner({ percent }) {
    return (
        <ImageBackground source={require("../../assets/bg_6.png")} style={[styles.backgroundImage]}>
            <View style={styles.bannerHeading}><Text style={styles.newCollectionText}>New Collections</Text></View>
            <View style={styles.imageAndText}>
                <View style={styles.sweatShirt}>
                    <Image source={require("../../assets/sweatshirt.jpg")} style={{ width: 194, height: 194 }} />
                </View>
                <View style={styles.discount}>
                    <Text style={styles.saveText}>SAVE UP TO</Text>
                    <View style={styles.offerContainer}>
                        <Text style={styles.offerPercent}>{percent}</Text>
                        <Text style={styles.saveText}>OFF</Text>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}

const styles = {
    backgroundImage: {
        flex: 1,
        resizeMode: "contain",
        height: 400,
    },
    bannerHeading: {
        flex: 1,
        alignItems: 'center',
        marginTop: 50,

    },
    newCollectionText: {
        color: '#040e35',
        fontSize: 30,
        width: 156,
        fontFamily: 'Product-Sans-Regular',
        lineHeight: 27
    },
    imageAndText: {
        alignItems: 'flex-end',
        flexDirection: 'row',
        flex: 1,
    },
    sweatShirt: {
        marginBottom: 57,
        marginLeft: 16
    },
    discount: {
        flex: 1,
        alignItems: 'flex-end',
        marginBottom: 38,
        marginRight: 42
    },
    saveText: {
        color: '#ffffff',
        fontFamily: 'Product-Sans-Regular',
        fontSize: 14
    },
    offerContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    offerPercent: {
        color: '#ffffff',
        fontSize: 24,
        marginRight: 5,
        fontFamily: 'Product-Sans-Regular',
    }
}

export default memo(Banner)