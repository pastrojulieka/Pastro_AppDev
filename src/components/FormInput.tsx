import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Feather from 'react-native-vector-icons/Feather';

const FormInput = ({
    label,
    error,
    keyboardType = 'default',
    className,
    rightLabel,
    onRightLabelPress,
    inputClassName,
    isPassword = false,
    onFocus,
    onBlur,
    ...props
}) => {

  const [isSecure, setIsSecure] = useState(isPassword);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View className="mb-5">
      {/* Top Row: Label & Optional Right Text (like "Forgot Password?") */}
      <View className="flex-row justify-between items-end mb-2 ml-1 pr-1">
        {label && (
          <Text className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2]">
            {label}
          </Text>
        )}
        {rightLabel &&(
          <TouchableOpacity onPress={onRightLabelPress} disabled={!onRightLabelPress}>
            <Text className="text-[10px] font-bold text-brand uppercase tracking-[0.2]">
              {rightLabel}
            </Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Input Container */}
      <View className={`flex-row items-center border rounded-xl px-4 py-3 ${
        isFocused ? 'border-brand' : 'border-gray-300'
      } ${error ? 'border-red-500' : ''} ${className || ''}`}>
        
        <TextInput
          className={`flex-1 text-base text-gray-700 ${inputClassName || ''}`}
          placeholderTextColor="#9CA3AF"
          secureTextEntry={isSecure}
          keyboardType={keyboardType}
          autoCapitalize="none"
          onFocus={() => {
            setIsFocused(true);
            onFocus && onFocus();
          }}
          onBlur={() => {
            setIsFocused(false);
            onBlur && onBlur();
          }}
          {...props}
        />

        {/* Password Toggle */}
        {isPassword && (
          <TouchableOpacity onPress={() => setIsSecure(!isSecure)} className="ml-2">
            <Feather 
              name={isSecure ? "eye-off" : "eye"} 
              size={20} 
              color="#6B7280" 
            />
          </TouchableOpacity>
        )}
      </View>

      {/* Error Message */}
      {error && (
        <Text className="text-red-500 text-[10px] font-bold uppercase tracking-widest mt-1 ml-1">
          {error}
        </Text>
      )}
    </View>
  );
};

export default FormInput;