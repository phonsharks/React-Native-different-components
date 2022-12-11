import { View, Text } from 'react-native'
import React from 'react'

const item = ({item}) => {
    return (
        <View style={{}}>
          <Text>{item.userId}</Text>
        </View>
      );
}

export default item