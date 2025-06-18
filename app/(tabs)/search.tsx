import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const search = () => {
  return (
    <View className='flex-1 items-center justify-center bg-dark-100'>
      <Text className='font-bold'>Search</Text>
      <Image
        source={require('@/assets/images/rankingGradient.png')}
        className='w-24 h-24'
        resizeMode='contain'/>
        <TouchableOpacity
          className='bg-primary-500 px-4 py-2 rounded-lg mt-4'
          onPress={() => alert('Search functionality coming soon!')}></TouchableOpacity>
          <Text className='text-white font-bold'>Search Movies</Text>
    </View>
  )
}

export default search

const styles = StyleSheet.create({})