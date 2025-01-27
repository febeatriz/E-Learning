import { Text, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import LoginScreen from './LoginScreen'
import { ClerkProvider, SignedIn, SignedOut  } from '@clerk/clerk-react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './Navigation/TabNavigation';


export default function App() {
  const [fontsLoaded] = useFonts({
    'OpenSans-Bold': require('../assets/fonts/OpenSans-Bold.ttf'),
  });
  return (
    <ClerkProvider publishableKey={"pk_test_YWNjdXJhdGUtb2N0b3B1cy01Ni5jbGVyay5hY2NvdW50cy5kZXYk"}>
     <View style={styles.container}>

      <SignedIn>
          <NavigationContainer>
            <TabNavigation/>
          </NavigationContainer>

        </SignedIn>  
        <SignedOut>
          <NavigationContainer>
            <TabNavigation />
          </NavigationContainer>
          {/* <LoginScreen /> */}
        </SignedOut>
    </View> 
    </ClerkProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});