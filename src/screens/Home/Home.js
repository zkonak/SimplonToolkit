import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Card, Image } from "react-native-paper";
import { TouchableOpacity, Text } from "react-native";
import { View } from "react-native-web";

const Applications = [
  {
    id: 1,
    name: "Discord",
    image: "https://www.svgrepo.com/show/353655/discord-icon.svg",
    link: "https://discordapp.com/",
  },
  {
    id: 2,
    name: "Simplon line",
    image: "https://www.svgrepo.com/show/353655/discord-icon.svg",
    link: "https://discordapp.com/",
  },
  {
    id: 3,
    name: "Notion",
    image: "https://www.svgrepo.com/show/353655/discord-icon.svg",
    link: "https://discordapp.com/",
  },
  {
    id: 4,
    name: "Discord",
    image: "https://www.svgrepo.com/show/353655/discord-icon.svg",
    link: "https://discordapp.com/",
  },
  {
    id: 5,
    name: "Discord",
    image: "https://www.svgrepo.com/show/353655/discord-icon.svg",
    link: "https://discordapp.com/",
  },
];

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      {Applications.map((application) => (
        <TouchableOpacity key={application.id} style={styles.card}>
          <Text style={styles.cardTitle}>{application.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
    justifyContent: "space-around",
  },
  card: {
    padding: 10,
    borderRadius: 10,
    height: 150,
    width: 150,
    boxShadow: "0px 0px 3px rgba(0,0,0,0.2)",
  },
  cardCover: {
    marginHorizontal: "auto",
    height: 80,
    width: 80,
  },
  cardTitle: {
    textAlign: "center",
    fontSize: 20,
    color: "#000000",
  },
});

export default Home;
