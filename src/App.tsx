import { useHead } from "./hooks/useMeta";
import MainPage from "./pages/MainPage";
// import { useHead } from 'react-native-web';
function App() {
  useHead({
    title: "ООО ТАНИС Брянск | Бухгалтерские услуги и автоматизация Брянск",
    meta: [
      { name: "description", content: "Профессиональные бухгалтерские услуги в Брянске. Оптимизация расходов на бухучет Брянск." },
      { name: "keywords", content: "бухучет, автоматизация, Брянск, бухгалтерские услуги" },
      { property: "og:title", content: "ООО ТАНИС - бухгалтерские услуги" },
      { property: "og:description", content: "Профессиональные бухгалтерские услуги в Брянске" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/logo.png" }
    ],
  });
  return <MainPage />;
}

export default App;
