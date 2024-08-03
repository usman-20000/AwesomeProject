import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser, updateUser } from './userSlice';

const Users = () => {
  const users = useSelector((state) => state.users.users); // Access the 'users' array within the 'users' slice
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  const handleUpdate = (user) => {
    // For demonstration purposes, update user with new name and email
    dispatch(updateUser({
      id: user.id,
      name: `${user.name} Updated`,
      email: `${user.email}.updated@example.com`,
    }));
  };

  return (
    <FlatList
      data={users}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Text style={styles.userText}>
            {item.name} ({item.email})
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => handleDelete(item.id)} style={styles.button}>
              <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleUpdate(item)} style={styles.button}>
              <Text style={styles.buttonText}>Update</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 0,
    marginTop:'5%',
    borderBottomColor: '#ccc',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userText: {
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop:'5%'
  },
  button: {
    marginHorizontal: 5,
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
  },
});

export default Users;
