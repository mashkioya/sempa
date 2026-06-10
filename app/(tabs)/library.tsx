import AddFileForm from '@/components/AddFileForm';
import i18n from '@/constants/i18n';
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{i18n.t('appName')}</Text>
      </View>
      <View style={styles.main}>
        <AddFileForm />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    flex: 1,
    padding: 100,
    alignItems: 'center',
  },
  title: {
    fontSize: 50,
    fontWeight: 800,
  },
  main: {
    flex: 2,
    alignItems: 'center',
  }
});
