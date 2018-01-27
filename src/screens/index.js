import React from 'react'
import { View, Text, Button } from 'react-native'

export const DetailsScreen = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
)

export const HomeScreen = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
)

export const ProfileScreen = (props) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Profile Home</Text>
    <Button onPress={() => props.navigation.navigate('ProfileForm')} title="Go to Form"/>
  </View>
)

export const ProfileFormScreen = (props) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Profile Form</Text>
  </View>
)