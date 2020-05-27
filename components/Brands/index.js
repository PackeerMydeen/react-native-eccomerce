import React, { memo } from 'react'
import { View, StyleSheet, FlatList, YellowBox } from 'react-native'
import normalize from 'react-native-normalize';

import * as utils from '../../utils'
import Title from '../Title'
import BrandIcon from '../BrandIcon'

function Brands() {
    return (
        <View style={styles.brandWrapper}>
            <View style={{ marginTop: 20, }}>
                <Title title='BRANDS to crush on' subTitle='Shop our most-loved brands!' />
                <View style={styles.brandList}>
                    <FlatList
                        nestedScrollEnabled
                        LisHeaderComponent={<Title title={'Brands to crush on'} subTitle={'Shop our most-loved brands!'} />}
                        data={utils.products}
                        keyExtractor={item => item.id}
                        renderItem={(item) => <View style={{ flex: 1, flexDirection: 'row', margin: 8 }}><BrandIcon products={item} /></View>}
                        numColumns={3}
                    />
                </View>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    brandWrapper: {
        flex: 1,
        padding: normalize(16)
    },
    brandList: {
        flex: 1,
        marginTop: normalize(18)
    },
    icons: {
        marginRight: normalize(80)
    },
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
})

YellowBox.ignoreWarnings([
    'VirtualizedLists should never be nested', // TODO: Remove when fixed
])

export default memo(Brands)