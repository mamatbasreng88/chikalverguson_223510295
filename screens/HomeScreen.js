import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Button, Card, Text, Title } from 'react-native-paper';

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={{ uri: 'https://source.unsplash.com/random/800x600' }}
      style={styles.background}
    >
      <View style={styles.container}>
        <Card style={styles.card}>
          <Card.Content>
            <Title style={styles.title}>Welcome Hello World</Title>
            <Text style={styles.text}>
              silahkan Klik unutk menlajutkan
            </Text>
          </Card.Content>
          <Card.Actions>
            <Button
              mode="contained"
              style={styles.button}
              onPress={() => navigation.navigate('Details')}
            >
              lanjutkan
            </Button>
          </Card.Actions>
        </Card>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: '90%',
    backgroundColor: '#ffffffdd',
    borderRadius: 10,
    overflow: 'hidden',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#6200ea',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
  },
  button: {
    backgroundColor: '#6200ea',
    marginTop: 10,
    alignSelf: 'center',
  },
});

export default HomeScreen;
