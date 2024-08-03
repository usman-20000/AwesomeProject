import React, { useEffect, useState, useCallback } from "react";
import { FlatList, Image, Text, View, ActivityIndicator } from "react-native";
import styles from "./style";
import HeaderItem2 from "../../components/HeaderItem2";
import { BaseUrl } from "../../Theme/GlobalTheme";

export default function ApiIntegration() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [hasMoreData, setHasMoreData] = useState(true);

    const fetchData = useCallback(async () => {
        if (!loading && hasMoreData) {
            setLoading(true);
            try {
                const response = await fetch(`${BaseUrl}/products?page=${page}&limit=10`);
                const json = await response.json();
                if (json.products.length > 0) {
                    setData((prevData) => [...prevData, ...json.products]);
                } else {
                    setHasMoreData(false); // No more data to fetch
                }
            } catch (e) {
                console.log('error while fetching...', e);
            } finally {
                setLoading(false);
            }
        }
    }, [loading, hasMoreData, page]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const handleLoadMore = () => {
        if (!loading && hasMoreData) {
            setPage((prevPage) => prevPage + 1);
        }
    };

    const renderFooter = () => {
        if (!loading) return null;
        return (
            <View style={styles.footer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    };

    const renderItem = ({ item }) => (
        <View style={styles.subContainer}>
            <Image source={{ uri: item.thumbnail }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <HeaderItem2 text="Api Integration" />
            <FlatList
            showsVerticalScrollIndicator={false}
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                ListFooterComponent={renderFooter}
                onEndReached={handleLoadMore}
                onEndReachedThreshold={0.5}
            />
        </View>
    );
}

