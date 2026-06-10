import i18n from '@/constants/i18n';
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{i18n.t('appName')}</Text>
      </View>
      <View style={styles.main}>
        <Text>𐑴𐑝𐑼𐑒𐑳𐑥 𐑰𐑝𐑩𐑤 𐑢𐑦𐑞 𐑜𐑫𐑛</Text>
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
  },
  subtitle: {
    fontSize: 20,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginTop: 20,
    fontSize: 15,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    marginTop: 12,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
  }
});
