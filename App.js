import { ScrollView, View } from "react-native";
import Card from "./src/type-weather/pages/dash/components/card";
import Search from "./src/type-weather/pages/search";
import WeatherDetail from "./src/type-weather/pages/dash/components/weather-detail";
import NextDays from "./src/type-weather/pages/dash/components/next-days";

export default function App() {
  return (
  <ScrollView 
  contentContainerStyle={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center", 
    gap:20

  }}
  style={{ backgroundColor: '#13131A'}}>
    <Card />
    <WeatherDetail/>
    <NextDays/>
  </ScrollView>
  
  )

}
