import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { TouchableOpacity, Text, View, Image } from "react-native";

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
    image: "https://www.est-ensemble.fr/sites/default/files/styles/large_slider/public/logo_simplon_simple_red1.png?itok=J7wPlX1N",
    link: "https://discordapp.com/",
  },
  {
    id: 3,
    name: "Notion",
    image: "https://luna1.co/28ec04.png",
    link: "https://discordapp.com/",
  },
  {
    id: 4,
    name: "SWS",
    image: "https://play-lh.googleusercontent.com/orDU3uquzyUpEbz4lRLU-1u_4tVB0UyXenjKId2bE22yd5jGeqe2cNmV25iSkWZPPA",
    link: "https://discordapp.com/",
  },
  
];

function Home() {
  return (
    <View style={styles.container}>
      {Applications.map((application) => (
        <TouchableOpacity key={application.id} style={styles.card}>
          <Image style={styles.tinyLogo} source={application.image} />
          <Text style={styles.cardTitle}>{application.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    width: "100%",
    backgroundColor: "#fff",
    padding: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 25,
    justifyContent: "space-around",
  },
  card: {
    padding: 0,
    borderRadius: 10,
    height: 100,
    width: 100,
    boxShadow: "0px 0px  0px 1px rgba(0,0,0,0.5)",
  },
  tinyLogo: {
    borderRadius: 10,
    marginHorizontal: "auto",
    marginVertical: 5,
    height: 70,
    width: 70,
  },
  cardTitle: {
    textAlign: "center",
    fontSize: 12,
    color: "#000000",
  },
});

export default Home;
