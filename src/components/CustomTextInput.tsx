import { Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const CustomTextInput = ({
  placeholder,
  label,
  labelClassName,
  value,
  containerClassName,
  textClassName,
}) => {
  return (
    <View className={containerClassName}>
      <Text className={labelClassName}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        onChangeText={value}
        className={`w-full border-b ${textClassName}`}
      />
    </View>
  );
};

export default CustomTextInput;