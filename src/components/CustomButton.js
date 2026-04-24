import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const CustomButton = ({
  containerClassName,
  label,
  textClassName,
  onPress,
  loading,
}) => {

  return (
    <>
      {loading ? (
        <View className="h-20 p-4">
          <ActivityIndicator size={'large'} color={'blue'} />
        </View>
      ) : (
        <View className={containerClassName}>
          <TouchableOpacity onPress={onPress} className="p-4">
            <Text className={textClassName}>{label}</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default CustomButton;