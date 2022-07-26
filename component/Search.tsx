import { Text, View } from "react-native";

export default function Search( { navigation }: any ) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:30,fontWeight:'bold'}}>Search</Text>
    </View>
  );
}