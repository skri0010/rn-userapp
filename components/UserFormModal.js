import React from "react";
import { TextInput, StyleSheet, View } from "react-native";
export default function UserForm() {
  return (
    <View style={styles.form}>
      <TextInput placeholder="Enter First Name"></TextInput>
      <TextInput placeholder="Enter Last Name"></TextInput>
      <TextInput placeholder="Enter Email"></TextInput>
      <TextInput placeholder="Enter Password"></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    width: "75%",
    backgroundColor: "lightblue",
  },
});
