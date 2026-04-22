import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="auto" hidden={true} />
      <Stack />
    </>
  )
}
