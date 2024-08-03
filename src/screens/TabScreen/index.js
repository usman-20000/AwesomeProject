import React, { useState } from 'react';
import { View, Text, Dimensions, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ff4081' }]}>
    <Text style={{ paddingLeft: '40%' }}>First Route</Text>
  </View>
);

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]}>
    <Text style={{ paddingLeft: '40%' }}>Second Route</Text>
  </View>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const TabScreen = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ]);

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
      <View style={styles.initialView}>
        <Text style={{ paddingLeft: '20%' }}>Initial View</Text>
      </View>
      <View style={styles.tabContainer}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: Dimensions.get('window').width }}
          renderTabBar={props => (
            <TabBar
              {...props}
              style={styles.tabBar}
              labelStyle={styles.tabLabel}
              indicatorStyle={styles.indicator}
              renderLabel={({ route, focused }) => (
                <Text style={[styles.tabLabel, { opacity: focused ? 1 : 0.5 }]}>
                  {route.title}
                </Text>
              )}
            />
          )}
          style={styles.tabView}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  initialView: {
    height: 300,
    backgroundColor: '#ccc',
    width: '100%',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    // justifyContent: 'center',
    marginTop: 20,
  },
  button: {
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
  },
  tabContainer: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  tabView: {
    flex: 1,
  },
  scene: {
    flex: 1,
    justifyContent: 'center',
  },
  tabBar: {
    backgroundColor: '#fff',
  },
  tabLabel: {
    color: '#000',
  },
  indicator: {
    backgroundColor: '#000',
  },
});

export default TabScreen;
