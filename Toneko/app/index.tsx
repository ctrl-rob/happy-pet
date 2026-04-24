import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from "react";

import { Injection } from "./injection";

const Home = () => {
  const insets = useSafeAreaInsets()
  const [unitInsuline, setUnitInsuline] = useState<number>(3.5)

  const decreaseUnit = (): void => {
    setUnitInsuline(prev => prev - 0.5)
  }

  const increaseUnit = (): void => {
    setUnitInsuline(prev => prev + 0.5)
  }

  return (
    <View
      style={styles.container}
    >
      <Text style={styles.title}>
        Toneko - Cat Companion
      </Text>

      <View style={styles.injectionBlock}>
        <Injection unitInsuline={unitInsuline}
          decreaseUnit={decreaseUnit} increaseUnit={increaseUnit} />
      </View>
    </View >
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <Home />
    </SafeAreaProvider>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  injectionBlock: {
    marginBottom: 20
  }
});