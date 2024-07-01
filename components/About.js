import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const About = ({ route }) => {
  const { friend } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image source={friend.image} style={styles.image} />
        <Text style={styles.name}>{friend.name}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.description}>{friend.description}</Text>
        <Text style={styles.detail}>Email: {friend.email}</Text>
        <Text style={styles.detail}>Phone: {friend.phone}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  infoContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
    textAlign: 'center',
  },
  detail: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
});

export default About;
