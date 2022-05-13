import React, { useState } from "react";
import { Avatar } from "react-native-paper";
import {
  StyleSheet,
  Linking,
  TouchableOpacity,
  Text,
  View,
} from "react-native";

const Applications = [
  {
    id: 1,
    name: "Discord",
    image: "./images/Discord.svg",
    link: "https://discordapp.com/",
  },
  {
    id: 2,
    name: "Simplon Line",
    image: "./images/Simplon Line.svg",
    link: "https://simplonline.co/login",
  },
  {
    id: 3,
    name: "Notion",
    image: "./images/Notion.svg",
    link: "https://www.notion.so/login",
  },
  {
    id: 4,
    name: "SWS",
    image: "./images/SWS.svg",
    link: "https://sowesign.com/",
  },
];

function Home() {
  return (
    <View style={styles.container}>
      {Applications.map((application) => (
        <TouchableOpacity
          key={application.id}
          style={styles.card}
          onPress={() => {
            Linking.openURL(application.link);
          }}
        >
          <Avatar.Image
            style={styles.tinyLogo}
            source={require(`${application.image}`)}
          />
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
    backgroundColor: "#fff",
  },
  cardTitle: {
    textAlign: "center",
    fontSize: 12,
    color: "#000000",
  },
});

export default Home;
