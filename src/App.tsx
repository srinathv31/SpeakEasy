// Warning ignores for React-Native-Tab-View
import { LogBox } from "react-native";
LogBox.ignoreLogs(["Sending"]);

import React, { useState } from "react";
import { SafeAreaView, StatusBar, useWindowDimensions } from "react-native";
import { TabView, Route } from "react-native-tab-view";
import StatsScreen from "./screens/StatsScreen";
import RecordingsScreen from "./screens/RecordingsScreen";
import RecordScreen from "./screens/RecordScreen";
import MenuTabBar from "./components/MenuTabBar";

const App = () => {
    const layout = useWindowDimensions();

    const [index, setIndex] = useState<number>(1);
    const [routes] = useState([
        { key: "third", title: "Recordings" },
        { key: "first", title: "Main" },
        { key: "second", title: "Stats" },        
    ]);

    const renderScene = ({ route }: {
        route: Route
    }) => {
        switch (route.key) {
        case "first":
            return <RecordScreen />;
        case "second":
            return <StatsScreen />;
        case "third":
            return <RecordingsScreen />;
        default:
            return null;
        }
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar barStyle={"dark-content"} />
            <TabView
                navigationState={{ index, routes }}
                onIndexChange={setIndex}
                renderScene={renderScene}
                initialLayout={{ width: layout.width }}
                tabBarPosition={"bottom"}
            />
            <MenuTabBar/>
        </SafeAreaView>
    );
};

export default App;
