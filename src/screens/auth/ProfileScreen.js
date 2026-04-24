import { Image, Text, View } from 'react-native';
import { IMG } from '../../utils';

const ProfileScreen = () => {
  return (
    <View className="flex-1 justify-center items-center border-4 border-blue-500">
      <Image
        source={{
          uri: IMG.LOGO,
        }}
        className="w-50 h-50"
      />
      <Text>ProfileScreen</Text>
    </View>
  );
};

export default ProfileScreen;