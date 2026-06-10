import i18n from '@/constants/i18n';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ 
        title: i18n.t('player'),
        tabBarIcon: ({ color }) => (
          <Feather name="repeat" size={24} color={color} />
        )
      }} />
      <Tabs.Screen name="library" options={{ 
        title: i18n.t('library'), 
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="playlist-play" size={24} color={color} />
        )
      }} />
    </Tabs>
  );
}
