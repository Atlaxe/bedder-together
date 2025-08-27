import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import { ModalProvider } from "./context/ModalContext";
import { ServerProvider } from "./context/ServerContext";

export default function RootLayout() {

  const [fontsLoaded] = useFonts({
      Minecraft: require("@/assets/fonts/Minecraftia.ttf")
  })
  if ( !fontsLoaded ) {
      console.log("Fonts weren't loaded")
  }

  return (
    <ServerProvider>
      <ModalProvider>
        <ImageBackground 
          source={require("@/assets/images/Minecraft Background.png")} 
          style={styles.background}
          imageStyle={styles.image}
        >
          <SafeAreaView style={styles.container}>
            <StatusBar style="light" />
            <Stack 
              screenOptions={{
                headerShown: false,
                contentStyle: {
                  backgroundColor: 'transparent'
                }
              }}
            >
              <Stack.Screen 
                name="index" 
                options={{ title: "Home" }} 
                
              />
              <Stack.Screen name="+not-found" />
            </Stack> 
          </SafeAreaView>
        </ImageBackground>
      </ModalProvider>
    </ServerProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent"
  },
  background: {
    flex: 1,
  },
  image : {
    resizeMode: "cover",
    alignSelf: "center"
  }
});
