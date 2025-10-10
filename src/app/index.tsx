import { Stack } from "expo-router";
import { Providers } from "../contexts/Providers";
import MyTabs from "../screens/MyTabs";

export default function Index() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <Providers>
        <MyTabs />
      </Providers>
    </>
  );
}
