import i18n from '@/constants/i18n';
import { StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";

export default function AddFileForm() {
  return (
    <>
        <Text style={styles.subtitle}>{i18n.t('addFile')}</Text>
        <TextInput
            style={styles.input}
            placeholder={i18n.t('urlPlaceholder')}
        />
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{i18n.t('add')}</Text>
        </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
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
