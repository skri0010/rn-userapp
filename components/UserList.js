import UserItem from "./UserItem";
import { useState } from "react";
import { FlatList, View, Text, StyleSheet, Modal, Button } from "react-native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First User",
    info: "Information about the first user...",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second User",
    info: "Information about the second user...",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third User",
    info: "Information about the third user...",
  },
];

export default function UserList() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const renderItem = ({ item }) => {
    const handlePress = () => {
      setSelectedUser(item);
      setModalVisible(true);
    };

    const backgroundColor =
      item.id === selectedUser?.id ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedUser?.id ? "white" : "black";

    return (
      <UserItem
        item={item}
        onPress={handlePress}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <View>
      <Text style={styles.text}> Users </Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedUser}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{selectedUser?.info}</Text>
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    marginLeft: 10,
    fontSize: 24,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
