import { Stack } from 'expo-router';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function App() {
    const insets = useSafeAreaInsets();
  return (
    <>
      <View style={{paddingTop: insets.top, marginHorizontal: 20}}>
        <Text>holas</Text>
      </View>
    </>
  );
}
