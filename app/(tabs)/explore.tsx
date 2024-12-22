import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/app-example/components/Collapsible';
import { ExternalLink } from '@/app-example/components/ExternalLink';
import { ThemedText } from '@/app-example/components/ThemedText';
import { ThemedView } from '@/app-example/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ThemedView>
      <ThemedText>hellooo</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
