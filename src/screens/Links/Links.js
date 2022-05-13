import React, { useState } from "react";
import { ScrollView, StyleSheet, View, Text, Linking } from "react-native";
import { Chip } from "react-native-paper";
import { List } from "react-native-paper";

function Links({ navigation }) {
  const titleFilter = [
    "Infrastructures & Cybersecurité",
    "Développement d'Application",
    "Fondamentaux Numériques",
    "Gestion de Projet Agile",
    "Cloud & DevOps",
    "Data & Intelligence Artificielle",
  ];
  const links = [
    {
      title: "DailyDev",
      description: "Un site proposant des articles intéressants pour ta veille",
      category: [
        "Infrastructures & Cybersecurité",
        "Développement d'Application",
        "Fondamentaux Numériques",
        "Gestion de Projet Agile",
        "Cloud & Devops",
        "Data & Intelligence Artificielle",
      ],
      url: "https://daily.dev/apps",
    },
    {
      title: "Miro",
      description:
        "Tu trouveras un ensemble d'outils pour le design et la conception",
      category: ["Développement d'Application"],
      url: "https://miro.com/fr/",
    },
    {
      title: "Figma",
      description:
        "Le meilleur outil pour le design: créé tes maquettes avec Figma",
      category: ["Développement d'Application"],

      url: "https://www.figma.com/",
    },
  ];

  return (
    <View>
      <Text style={styles.titleFilters}>Filtres de formations</Text>
      <ScrollView style={styles.containerFilter} horizontal={true}>
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
      <View style={styles.containerLink}>
        <View style={styles.viewLink}>
          {links.map((link, i) => (
            <List.Item
              style={styles.listItem}
              key={i}
              title={link.title}
              description={link.description}
              left={(props) => <List.Icon {...props} icon="link" />}
              right={(props) => (
                <List.Icon
                  style={styles.heart}
                  {...props}
                  icon="heart"
                  // onPress={() => {
                  //   console.log("heart pressed");
                  // }}
                />
              )}
              onPress={() => {
                Linking.openURL(`${link.url}`);
                console.log(`${link.title} pressed`);
              }}
            />
          ))}
          {/* links.filter(link => link.category ===) */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleFilters: {
    padding: 10,
  },
  containerFilter: {
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
  },
  viewLink: {
    flex: 1,
    width: 350,
    flexGrow: 1,
  },
  listItem: {},
  heart: {
    zindex: 1000,
  },
});

export default Links;
