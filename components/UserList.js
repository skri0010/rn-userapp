import UserItem from "./UserItem";
import { useState } from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First User",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second User",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third User",
  },
];

export default function UserList() {
  const [selectedId, setSelectedId] = useState("");

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? "white" : "black";

    return (
      <UserItem
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };
  return (
    <View>
      <Text className="text-2xl ml-3"> Users </Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    marginLeft: 10,
    fontSize: 24,
  },
});
