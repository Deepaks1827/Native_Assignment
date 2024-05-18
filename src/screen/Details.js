// DetailsScreen.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Details = ({ route }) => {
  const { marker } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{marker.title}</Text>
      <Text style={styles.description}>{marker.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  description: {
    marginTop: 0,
    fontSize: 16,
  },
});

export default Details;
