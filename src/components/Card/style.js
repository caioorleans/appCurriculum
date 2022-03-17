import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    card_container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
      },
      card: {
        width: '60%',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#939393',
        padding: 10,
        backgroundColor: '#fff',
        marginBottom: 20
      },
      card_content: {
        marginTop: 20,
      },
      card_content_header:{
        color: 'black',
        fontWeight: 'bold'
      }
})