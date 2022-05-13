import React, { useState } from "react";
import { Avatar } from "react-native-paper";
import {
  StyleSheet,
  Linking,
  TouchableOpacity,
  Text,
  View,
  Image,
} from "react-native";

const Applications = [
  {
    id: 1,
    name: "Discord",
    image:
      "https://upload.wikimedia.org/wikipedia/fr/thumb/4/4f/Discord_Logo_sans_texte.svg/1818px-Discord_Logo_sans_texte.svg.png",
    link: "https://discordapp.com/",
  },
  {
    id: 2,
    name: "Simplon Line",
    image:
      "https://www.est-ensemble.fr/sites/default/files/styles/large_slider/public/logo_simplon_simple_red1.png?itok=J7wPlX1N",
    link: "https://simplonline.co/login",
  },
  {
    id: 3,
    name: "Notion",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png?20200221181224",
    link: "https://www.notion.so/login",
  },
  {
    id: 4,
    name: "SWS",
    image:
      "https://pbs.twimg.com/profile_images/1216732724687527937/JCX7O4DR_400x400.jpg",
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
          <Image
            style={styles.tinyLogo}
            source={{
              uri: application.image,
            }}
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
    paddingBottom: 300,
  },
  card: {
    padding: 0,
    borderRadius: 10,
    height: 100,
    width: 100,
    borderWidth: 1,
    marginVertical: 10,
  },
  tinyLogo: {
    borderRadius: 10,
    marginHorizontal: 10,
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
