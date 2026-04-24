import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { IMG, ROUTES } from '../../utils';

import { useDispatch } from 'react-redux';
import { resetLogin } from '../../app/reducers/auth';

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <View className="flex-1 justify-center items-center">
      <Image
        source={{
          uri: IMG.LOGO,
        }}
        className="w-50 h-50"
      />
      <Text>HomeScreen</Text>

      <TouchableOpacity
        onPress={() => {
          dispatch(resetLogin());
        }}
      >
        <View
          style={{
            padding: 20,
            backgroundColor: 'green',
            borderRadius: 20,
          }}
        >
          <Text style={{ fontSize: 40, color: 'white' }}>LOGOUT</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;