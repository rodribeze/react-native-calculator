import React, {Component} from 'react'
import {
   StyleSheet,
   Text,
   Dimensions,
   TouchableHighlight
 } from 'react-native';

const sizeButton = Dimensions.get('window').width / 4

const styles = StyleSheet.create({
    button:{
       width: sizeButton,
       height: sizeButton,
       padding: 20,
       backgroundColor: '#f0f0f0',
       textAlign: 'center',
       borderWidth: 1,
       borderColor: '#888',
       fontSize: 40
    },
    buttonOperation:{
       color:"#fff",
       backgroundColor:'#fa8231'
    },
    buttonDouble:{
      width: sizeButton * 2
    },
    buttonTriple:{
      width: sizeButton * 3
    }
 })


export default props => {
   
   const stylesButton = [styles.button]

   if(props.double) stylesButton.push(styles.buttonDouble)
   if(props.triple) stylesButton.push(styles.buttonTriple)
   if(props.operation) stylesButton.push(styles.buttonOperation)

   return (
      <TouchableHighlight onPress={() => props.onClick && props.onClick(props.value || props.label)}>
         <Text style={stylesButton}>{props.label}</Text>
      </TouchableHighlight>
   )
}
