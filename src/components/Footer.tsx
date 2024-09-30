import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Footer = () => (
  <View style={styles.footer}>
    <Text style={styles.footerText}>App 2024</Text>
  </View>
);

const styles = StyleSheet.create({
  footer: {
    padding: 20,
    backgroundColor: "#6200EE",
    alignItems: "center",
  },
  footerText: {
    color: "#fff",
  },
});

export default Footer;
