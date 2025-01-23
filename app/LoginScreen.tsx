import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import apps from './../assets/images/app.png';
import googles from './../assets/images/google.png';
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from '@clerk/clerk-expo';
import { useWarmUpBrowser } from './../hook/warmUpBrowser'
WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
    useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow();

      if (createdSessionId && setActive) {
        // Apenas chama setActive se ele estiver definido
        setActive({ session: createdSessionId });
      } else {
        // Use signIn ou signUp para os próximos passos, se necessário
        console.log('Realizar próximos passos, como MFA ou fluxo adicional.');
      }
    }catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
  return (
    <View style = {{display:'flex', alignItems: 'center'}} >
      <Image  source={apps}
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

          <TouchableOpacity 
          onPress={onPress}
          style={{backgroundColor: 'white',
            display: 'flex', flexDirection: 'row',alignItems: 'center', 
            gap:10, justifyContent: 'center',
            padding: 10,  borderRadius:99, marginTop:25}}>
          
            <Image source={googles}
            style={{width:40,height:40}} />
            <Text style= {{
              fontSize:20, color: '#6857e8', fontFamily: 'OpenSans-Regular'
            }}>Sign in with Google</Text>

          </TouchableOpacity>
        </View>
    </View>
    
  )
}
