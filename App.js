import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>App de Tarefas</Text>
      <TextInput
        style={styles.input}
        placeholder='Allan Saco de Vacilo' />

      <Text style={styles.label}>Tarefa Descrição</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder='Descrição da Tarefa'
        multiline />

    <View style={styles.buttonContainer}>
      <Button title='Salvar'
      style={styles.butoonGreen}
      color= 'darkgreen'
       onPress={
        () => {
          alert('MEU NOME É JUH')
        }
        }/>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8
  },
  input: {
    borderWidht: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 16
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top'
  },
  buttonContainer: {
    marginTop: 16
  },
  butoonGreen:{
    borderRadius: 12
  }
});
