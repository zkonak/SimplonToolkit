import React, { useState } from "react";
import { ScrollView, StyleSheet, View ,Text} from "react-native";
import { Button, Card, TextInput } from "react-native-paper";
import { DefaultTheme } from "react-native-paper";
import { Chip } from "react-native-paper";
import { List } from "react-native-paper";

function Links({ navigation }) {
  const titleFilter = [
    "Infrastructures & Cybersecurité",
    "Développement d'Application",
    "Fondamentaux Numériques",
    "Gestion de Projet Agile",
    "Cloud & Devops",
    "Data & Intelligence Artificielle",
  ];
  const links = [
    {
      title: "DailyDev",
      description: "permet de faire ta veille",
      link: "https://daily.dev/apps",
    },
    {
      title: "Miro",
      description:
        "tu trouveras un ensemble d'outils pour le design et la conception",
      link: "https://miro.com/fr/",
    },
    {
      title: "Figma",
      description:
        "Le  meilleur outil pour le design; créé tes maquettes avec Figma",
      link: "https://www.figma.com/",
    },
  ];

  return (
    <View>
      <Text style={styles.titleFilters}>Filtres de formations</Text>
      <ScrollView style={styles.containerFilter}>
        <View style={styles.viewFilter}>
          {titleFilter.map((filter, index) => (
            <Chip
              key={index}
              icon="information"
              style={styles.chip}
              onPress={() => console.log("Pressed")}
            >
              {filter}
            </Chip>
          ))}
        </View>
      </ScrollView>
      <ScrollView style={styles.containerLink}>
        <View style={styles.viewLink}>
          {links.map((link, i) => (
            // <Text key={i}>{link.title}</Text>
            <List.Item
              style={styles.listItem}
              key={i}
              title={link.title}
              description={link.description}
              left={(props) => <List.Icon {...props} icon="link" />}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  titleFilters:{
    fontFamily:"Roboto",
    padding: 10
  },
  containerFilter: {
    // backgroundColor: "green",
    padding: 30,
  },
  viewFilter: {
    flexDirection: "row",
  },
  chip: {
    fontSize: 30,
    margin: 5,
  },
  containerLink: {
    flexDirection: "row",
    // backgroundColor: "blue",
  },
  viewLink: {
    flex: 1,
    // flexWrap: "wrap",
    // flexShrink: 1,
    width: 350,
    // margin: 100,
    flexGrow: 1,
  },
  listItem: {
    // flex: 1,
    // flexWrap: "wrap",
    // flexShrink: 1,
    // width: 200,
    // flexGrow: 1,
  },
});

export default Links;
