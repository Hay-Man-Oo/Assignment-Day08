import { Text, View } from "react-native";

export default function Profile( { navigation }: any ) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:30,fontWeight:'bold'}}>Profile</Text>
    </View>
  );
}