import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';

export default function ProductDetailScreen({ route }) {
  const { productId } = route.params;
  const { data: userData } = useSelector(state => state.authentication || {});
  const userToken = userData?.token; // Assuming token is in userData
  const [details, setDetails] = useState(null);

  useEffect(() => {
    fetch(`http://10.0.2.2:8000/api/products/${productId}`, {
      headers: { 'Authorization': `Bearer ${userToken}` }
    })
    .then(res => res.json())
    .then(setDetails)
    .catch(console.error);
  }, [productId, userToken]);

  if (!details) return <ActivityIndicator style={{ marginTop: 50 }} />;

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{details.name}</Text>
      <Text style={{ marginTop: 10 }}>{details.description}</Text>
    </View>
  );
}