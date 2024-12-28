import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Title, Text, Button, IconButton } from 'react-native-paper';

const DetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>Hello World</Title>
          <Text style={styles.text}>
            Silahkan Klik untuk kembali
          </Text>
        </Card.Content>
        <Card.Actions>
          <Button
            mode="outlined"
            style={styles.button}
            onPress={() => navigation.goBack()}
          >
            kembali
          </Button>
          <IconButton
            icon="home"
            size={24}
            color="#6200ea"
            onPress={() => navigation.navigate('Home')}
          />
        </Card.Actions>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
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
    margin: 10,
  },
});

export default DetailsScreen;
