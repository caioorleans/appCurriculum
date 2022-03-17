import React from 'react'
import {View, Text} from 'react-native'

import style from './style.js'

export default ({titulo, children}) => {
    return(
        <View style={style.card_container}>
          <View style={style.card}>
            <View style={style.card_header}>
              <Text style={style.card_content_header}>{titulo}</Text>
            </View>
            <View style={style.card_content}>
              {children}
            </View>
          </View>
        </View>
    )
}