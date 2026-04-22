import { Text, View } from "react-native";
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
      style={{
        flex: 1,
        paddingTop: insets.top,
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>
        Toneko - Cat Companion
      </Text>

      <Injection unitInsuline={unitInsuline}
        decreaseUnit={decreaseUnit} increaseUnit={increaseUnit} />
    </View >
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <Home />
    </SafeAreaProvider>)
}