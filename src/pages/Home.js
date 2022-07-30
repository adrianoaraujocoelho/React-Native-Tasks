import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Platform,
  FlatList,
  TouchableOpacity,
} from "react-native";

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Adriano !</Text>

      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
      />

      <TouchableOpacity style={styles.button} activateOpacity={0.7}>
        <Text style={styles.buttonText}> Add</Text>
      </TouchableOpacity>

      <Text style={[styles.title, { marginTop: 20 }]}>My Skills</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121015",
    paddingVertical: 70,
    paddingHorizontal: 30,
  },

  title: {
    fontSize: 24,
    color: "#FFF",
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#1F1E25",
    color: "#FFF",
    fontSize: 18,
    padding: 10,
    marginTop: 30,
    borderRadius: 7,
  },
  button: {
    backgroundColor: "#A370f7",
    padding: 15,
    marginTop: 20,
    borderRadius: 7,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 17,
    fontWeight: "bold",
  },
});
