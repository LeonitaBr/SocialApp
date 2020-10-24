import React from 'react';
import { FlatList, StyleSheet } from "react-native";
import { EmptyList } from './EmptyList'

const List = ({ style, data, renderItem, orientation }) => {

    return (
        <FlatList
            horizontal={orientation}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentStyle}
            style={{ ...styles.container, ...style }}
            ListEmptyComponent={() => <EmptyList />}
            renderItem={renderItem}
            data={data}
        />
    )

};
export { List }

const styles = StyleSheet.create({
    container: {
        // height:120,
        // flex: 1,
        // backgroundColor:'green'
    },
    contentStyle: {
        flexGrow: 1
    }
})