import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  Image, 
  KeyboardAvoidingView, 
  Platform, 
  ScrollView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import  FormInput from "../../components/FormInput";
import { useNavigation } from '@react-navigation/native';

// React Native CLI standard for icons
import AntDesign from 'react-native-vector-icons/AntDesign'; 
import Feather from 'react-native-vector-icons/Feather';

// Redux Imports
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../app/sagas/actions';

//utilities
import { IMG } from '../../utils'; 

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { isLoading, isError, error } = useSelector((state) => state.authentication);

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert("Input Error", "Please enter your credentials.");
      return;
    }
    
    dispatch(
      userLogin({
        email: email,
        password: password,
      })
    );
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      className="flex-1"
    >
      <ScrollView 
        contentContainerStyle={{ flexGrow: 1 }} 
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        
        {/* HEADER IMAGE */}
        <View className="h-64 w-full relative bg-gray-900">
          <Image 
            source={{ uri: IMG.AUTH_BG }}
            className="absolute inset-0 w-full h-full opacity-60"
            resizeMode="cover"
          />
          <View className="absolute inset-0 items-center justify-center px-6">
            <Text className="text-white text-4xl font-black uppercase tracking-widest text-center mb-2">
              Welcome Back
            </Text>
            <Text className="text-white/80 text-xs font-bold uppercase tracking-[0.2em] text-center">
              To Conscious Craftsmanship
            </Text>
          </View>
        </View>

        {/* FORM CONTAINER */}
        <View className="flex-1 px-8 pt-8 pb-12 bg-app-bg -mt-6 rounded-t-3xl">
          
          <View className="items-center mb-8 mt-2">
            <Text className="text-2xl font-black text-brand-dark uppercase tracking-widest mb-1">
              Sign In
            </Text>
            <Text className="text-[10px] text-gray-500 font-medium uppercase tracking-widest">
              Access your Mifania account
            </Text>
          </View>

          {/* Inline Redux Error Message */}
          {isError && error && !isLoading && (
            <View className="bg-red-50 p-4 rounded-xl flex-row items-center gap-3 mb-6 border border-red-100">
              <Feather name="alert-circle" size={16} color="#EF4444" />
              <Text className="text-red-500 text-[10px] font-bold uppercase tracking-widest flex-1">
                {error}
              </Text>
            </View>
          )}

          {/* Google OAuth Button */}
          <TouchableOpacity 
            activeOpacity={0.7}
            className="w-full flex-row items-center justify-center gap-3 py-4 rounded-xl bg-white border border-border-color shadow-sm mb-6"
          >
            <AntDesign name="google" size={18} color="#374151" />
            <Text className="text-gray-700 font-bold text-[11px] uppercase tracking-widest">
              Continue with Google
            </Text>
          </TouchableOpacity>

          <View className="flex-row items-center mb-6">
            <View className="flex-1 h-[1px] bg-border-color" />
            <Text className="mx-4 text-gray-400 text-[9px] font-bold uppercase tracking-widest">
              or sign in with email
            </Text>
            <View className="flex-1 h-[1px] bg-border-color" />
          </View>

          {/* Email Input */}
          <FormInput 
            label="Email Address"
            placeholder="customer@mifania.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            editable={!isLoading}
          />

          {/* Password Input */}
          <FormInput 
            label="Password"
            placeholder="**********"
            value={password}
            onChangeText={setPassword}
            isPassword={true}
            rightLabel={"Forgot?"}
            onRightLabelPress={() => console.log('Navigate to Forgot Password')}
            editable={!isLoading}
          />

          {/* Submit Button */}
          <TouchableOpacity 
            activeOpacity={0.8}
            onPress={handleLogin}
            disabled={isLoading}
            className={`w-full py-4 rounded-xl items-center shadow-md ${
              isLoading ? 'bg-gray-400' : 'bg-brand shadow-brand/30'
            }`}
          >
            {isLoading ? (
              <ActivityIndicator color="#ffffff" />
            ) : (
              <Text className="text-white font-black text-[11px] uppercase tracking-[0.2em]">
                Sign In
              </Text>
            )}
          </TouchableOpacity>

          {/* Footer / Register Link */}
          <View className="mt-10 items-center border-t border-border-color pt-8 flex-row justify-center">
            <Text className="text-xs text-gray-500 font-medium">
              New to Mifania?{' '}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text className="font-bold text-brand uppercase tracking-widest text-[11px]">
                Create an Account
              </Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;