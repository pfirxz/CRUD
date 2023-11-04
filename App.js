import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

function App() {
  const [alunos, setAlunos] = useState([]);
  const [aluno, setAluno] = useState({ nome: '', matricula: '', turno: '', curso: '' });

  const addAluno = () => {
    setAlunos([...alunos, aluno]);
    setAluno({ nome: '', matricula: '', turno: '', curso: '' });
  };

  const deleteAluno = (index) => {
    const updatedAlunos = [...alunos];
    updatedAlunos.splice(index, 1);
    setAlunos(updatedAlunos);
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text>CRUD de Alunos</Text>
        <TextInput
          placeholder="Nome"
          value={aluno.nome}
          onChangeText={(text) => setAluno({ ...aluno, nome: text })}
        />
        <TextInput
          placeholder="Matrícula"
          value={aluno.matricula}
          onChangeText={(text) => setAluno({ ...aluno, matricula: text })}
        />
        <TextInput
          placeholder="Turno"
          value={aluno.turno}
          onChangeText={(text) => setAluno({ ...aluno, turno: text })}
        />
        <TextInput
          placeholder="Curso"
          value={aluno.curso}
          onChangeText={(text) => setAluno({ ...aluno, curso: text })}
        />
        <Button title="Adicionar Aluno" onPress={addAluno} />
      </View>
      <FlatList
        data={alunos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.listItem}>
            <Text>
              {item.nome} - {item.matricula} - {item.turno} - {item.curso}
            </Text>
            <Button title="Excluir" onPress={() => deleteAluno(index)} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 40, // Ajuste o valor da margem inferior, se necessário
  },
  formContainer: {
    width: '80%', // Remova a largura fixa
  },
  listItem: {
    marginVertical: 10,
  },
});

export default App;
