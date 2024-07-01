import React from 'react';
import { View, Text, Button, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';

const friends = [
  { id: '1', name: 'Alhaitham', description: 'Alhaitham adalah seorang Mahasiswa dari Sumeru Academia.', image: require('../assets/Alhaitham_Icon.webp'), email: 'Alhaitham@example.com', phone: '08123456789' },
  { id: '2', name: 'Diluc', description: 'Diluc adalah seorang pemilik dari Kerajaan Kilang Anggur "Dawn Winery".', image: require('../assets/Red_Dead_of_Night_Icon.webp'), email: 'Diluc@example.com', phone: '08123456788' },
  { id: '3', name: 'Hu Tao', description: 'Hu Tao adalah seorang manajer dari Wangsheng Funeral Parlor.', image: require('../assets/Hu_Tao_Icon.webp'), email: 'Tao@example.com', phone: '08123456787' },
  { id: '4', name: 'Paimon', description: 'Paimon adalah seorang teman perjalanan setia Traveler.', image: require('../assets/Paimon_Icon.webp'), email: 'Paimonnn@example.com', phone: '08123456786' },
  { id: '5', name: 'Wriothesley', description: 'Wriothesley adalah seorang Kepala Sipir dari Penjara Fortress Meropide.', image: require('../assets/Wriothesley_Icon.webp'), email: 'Wirowiro@example.com', phone: '08123456785' },
];

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={friends}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.friendContainer}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('About', { friend: item })}
              >
                <Text style={styles.buttonText}>Lihat Detail</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  friendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#FFD700',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Home;
