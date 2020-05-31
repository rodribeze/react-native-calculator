/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
   StyleSheet,
   View
} from 'react-native';

import Button from './src/components/Button'
import Display from './src/components/Display'

const initialState = {
   displayValue: '0',
   primeiro_valor: null,
   segundo_valor: null,
   condicao: null
}

class App extends Component {

   state = { ...initialState }

   resetar = () => {
      this.setState({...initialState})
   }

   inPrimeiroValor = () => {
      return this.state.condicao === null && this.state.segundo_valor === null
   }

   inSegundoValor = () => {
      return this.state.condicao !== null && this.state.primeiro_valor !== null
   }

   soma = () => {
      const resultado = eval(`${this.state.primeiro_valor} ${this.state.condicao} ${this.state.segundo_valor}`)
      this.resetar()
      this.setState({primeiro_valor:resultado,displayValue: resultado})
   }

   SET_DIGITO = digito => {

      if(this.inPrimeiroValor()){

         if(digito === '.' && this.state.primeiro_valor && this.state.primeiro_valor.includes('.')) return;

         let primeiro_valor = parseFloat(`${this.state.primeiro_valor === null ? 0 : this.state.primeiro_valor}${digito}`)

         if(this.state.primeiro_valor === null && digito == '.') primeiro_valor = '0.'
         
         this.setState({ primeiro_valor, displayValue: primeiro_valor })

      } else if (this.inSegundoValor()){
         
         if(digito === '.' && this.state.segundo_valor.includes('.')) return;

         let segundo_valor = parseFloat(`${this.state.segundo_valor === null ? 0 : this.state.segundo_valor}${digito}`)

         if(this.state.primeiro_valor === null && digito == '.') segundo_valor = '0.'
         
         this.setState({ segundo_valor, displayValue: segundo_valor })

      }
      
   }

   SET_CONDICAO = condicao => {

      const equals = condicao === '='

      if(this.state.primeiro_valor === null) return;

      if(!equals && !this.inSegundoValor() || this.state.segundo_valor === null){
         this.setState({ condicao })
         return;
      }

      if(this.inSegundoValor()) this.soma()
      if(!equals && this.inSegundoValor()) this.setState({ condicao })

   }

   render() {
      return (
         <View style={styles.container}>
            <Display value={this.state.displayValue}></Display>
            <View style={styles.buttons}>
               <Button label="AC" onClick={this.resetar} triple></Button>
               <Button label="%" value="/" operation onClick={this.SET_CONDICAO} ></Button>
               <Button label="7" onClick={this.SET_DIGITO} ></Button>
               <Button label="8"  onClick={this.SET_DIGITO} ></Button>
               <Button label="9"  onClick={this.SET_DIGITO} ></Button>
               <Button label="*" operation  onClick={this.SET_CONDICAO} ></Button>
               <Button label="4"  onClick={this.SET_DIGITO} ></Button>
               <Button label="5"  onClick={this.SET_DIGITO} ></Button>
               <Button label="6"  onClick={this.SET_DIGITO} ></Button>
               <Button label="-" operation  onClick={this.SET_CONDICAO} ></Button>
               <Button label="1"  onClick={this.SET_DIGITO} ></Button>
               <Button label="2"  onClick={this.SET_DIGITO} ></Button>
               <Button label="3"  onClick={this.SET_DIGITO} ></Button>
               <Button label="+" operation  onClick={this.SET_CONDICAO} ></Button>
               <Button label="0" double  onClick={this.SET_DIGITO} ></Button>
               <Button label="."  onClick={this.SET_DIGITO} ></Button>
               <Button label="=" operation onClick={this.SET_CONDICAO} ></Button>
            </View>
         </View>
      )
   }


};

const styles = StyleSheet.create({
   container: {
      flex: 1
   },
   buttons: {
      flexDirection: 'row',
      flexWrap: 'wrap'
   },
   display:{
      flex:1
   }
});


export default App;
