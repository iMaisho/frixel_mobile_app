import { Providers } from "../contexts/Providers";
import MyTabs from "../screens/MyTabs";

export default function Index() {
  return (
    <Providers>
          <MyTabs />
    </Providers>
  );
}
