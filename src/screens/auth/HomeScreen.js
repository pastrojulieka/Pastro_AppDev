import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { IMG, ROUTES } from '../../utils';

import { useDispatch } from 'react-redux';
import { userLoginReset as resetLogin } from '../../app/sagas/actions';

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Image
        source={{
          uri: IMG.LOGO,
        }}
        style={{
          width: 200,
          height: 200,
        }}
      />
      <Text>HomeScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate(ROUTES.PROFILE)}>
        <Text>Go to Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => dispatch(resetLogin())}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;