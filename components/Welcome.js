import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selamat Datang!</Text>
      <Button
        title="Masuk ke Daftar Teman"
        onPress={() => navigation.navigate('Home')}
        color="#FFD700"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333', // Warna teks agar lebih terlihat jelas
  },
});

export default Welcome;
