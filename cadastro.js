import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from "react-native";
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { Avatar, Input, Button } from 'react-native-elements';
// import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView } from 'react-native';

import {
  Image,
  NativeBaseProvider,
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  Icon,
  IconButton,
  HStack,
  Divider,
} from 'native-base';
import { marginTop } from 'styled-system';
const style = StyleSheet.create({
  Imagem: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  container: {
    display: 'flex',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#8257E5',
    height: '50px',
    fontSize: '20px',
    marginTop: '20px'
  },
  body: {
    paddingHorizontal: '20px',
    paddingTop: '25px',
    margin: '0',
    width: '100%',
    backgroundColor: '#121214'

  },
  input:{
    backgroundColor: '#202024',
    borderStyle: 'none',
    height: '45px',
    color: 'white',
    fontSize: '16px'
  }

});


export default function Cadastro() {
  return (
    <NativeBaseProvider >
      <Box safeArea flex={1} style={style.body}>
        <Heading style={style.container} size="lg" fontWeight="600" color="coolGray.800">
          <Image

            style={style.Imagem}
            size={150}
            resizeMode={"contain"}
            borderRadius={100}
            source={require('./Vector (3).svg')} 
            alt="Icone de usuario"
          />
        </Heading>


        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label
              _text={{
                color: '#D4D4D4',
                fontSize: '20px',
                fontWeight: 500,
              }}>
              Nome
            </FormControl.Label>
            <Input style={style.input} />
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{
                color: '#D4D4D4',
                fontSize: '20px',
                fontWeight: 500,
              }}>
              Cpf
            </FormControl.Label>
            <Input  style={style.input} />
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{
                color: '#D4D4D4',
                fontSize: '20px',
                fontWeight: 500,
              }}>
              Email
            </FormControl.Label>
            <Input  style={style.input}/>
            <Link
              _text={{ fontSize: 'xs', fontWeight: '500', color: 'white' }}
              alignSelf="flex-end"
              mt="1">
              Esqueceu a senha?
            </Link>
          </FormControl>
          <Button style={style.button} mt="2" colorScheme="indigo" _text={{ color: 'white' }}>
            Salvar
          </Button>

        </VStack>
      </Box>
    </NativeBaseProvider>
  );

}
