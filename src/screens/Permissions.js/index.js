import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Platform } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import Permissions from 'react-native-permissions';
import { colors } from '../../Theme/GlobalTheme';

const Permission = () => {
  const [image, setImage] = useState(null);

  const requestPermission = async () => {
    if (Platform.OS === 'ios') {
      const permission = await Permissions.check('photo');
      if (permission !== 'granted') {
        const requestPermission = await Permissions.request('photo');
        if (requestPermission !== 'granted') {
          alert('Permission denied');
          return;
        }
      }
    } else {
      const permission = await Permissions.check('android.permission.READ_EXTERNAL_STORAGE');
      if (permission !== 'granted') {
        const requestPermission = await Permissions.request('android.permission.READ_EXTERNAL_STORAGE');
        if (requestPermission !== 'granted') {
          alert('Permission denied', );
          console.log(requestPermission);
          return;
        }
      }
    }
  };

  const selectImage = async () => {
    await requestPermission();
    const result = await launchImageLibrary({ mediaType: 'photo' });
    if (!result.didCancel) {
      setImage(result.assets[0].uri);
    }
  };

  const uploadImage = async () => {
    if (image) {
      const formData = new FormData();
      formData.append('image', { uri: image, name: 'image.jpg', type: 'image/jpeg' });
      // Upload formData to API
    }
  };

  return (
    <View style={{width:'100%', alignItems:'center', justifyContent:'center', flex:1}}>
      <TouchableOpacity onPress={selectImage}>
        <Text style={{color:colors.blue, textDecorationLine:'underline', paddingBottom:'5%'}}>Select Image</Text>
      </TouchableOpacity>
      {image && (
        <View>
          <Image source={{ uri: image }} style={{ width: 300, height: 200 }} />
          <TouchableOpacity onPress={uploadImage}>
            <Text style={{color:colors.blue, textDecorationLine:'underline', paddingTop:'5%'}}>Upload Image</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Permission;
