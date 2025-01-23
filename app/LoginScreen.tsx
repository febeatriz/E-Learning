import { View, Text, Image } from 'react-native'
import React from 'react'
import apps from './../assets/images/app.png'
import googles from './../assets/images/google.png'
export default function LoginScreen() {
  return (
    <View style = {{display:'flex', alignItems: 'center'}} >
      <Image source={googles}
      style={{width:40,height:40}}  source={apps}
        style={{ width: 250, height: 500,
        resizeMode: 'contain', marginTop:50 }} />
        <View style={{
          height: 400,
          backgroundColor: '#6857e8',
          width: '100%',
          marginTop:-100,
          padding:20
        }}>
          <Text style= {{
            textAlign: 'center',
            fontSize: 35,
            marginTop:30,
            color: 'white',
            fontFamily: 'OpenSans-Bold'
          }}>CodeBox</Text>
          <Text style={{
            textAlign: 'center',
            fontSize: 20,
            marginTop: 20,
            color: '#c2baff',
            fontFamily: 'OpenSans-Regular'
          }}>Your Ultimate Programing Learning Box!</Text>
          <View style={{backgroundColor: 'white',
            display: 'flex', flexDirection: 'row',alignItems: 'center', 
            gap:10, justifyContent: 'center',
            padding: 10,  borderRadius:99, marginTop:25}}>
          
            <Image source={googles}
            style={{width:40,height:40}} />
            <Text style= {{
              fontSize:20, color: '#6857e8', fontFamily: 'OpenSans-Regular'
            }}>Sign in with Google</Text>

          </View>
        </View>
    </View>
    
  )
}
