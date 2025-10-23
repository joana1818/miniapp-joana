import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default function Index() {
  const [completed, setCompleted] = useState<{ [key: string]: boolean }>({});

  const toggleComplete = (exercise: string) => {
    setCompleted((prev) => ({ ...prev, [exercise]: !prev[exercise] }));
  };

  const exercises = [
    {
      name: 'Agachamento',
      series: '3 séries x 12 repetições',
      desc: 'Coloque uma boa carga, mas foque na execução correta.',
      image: require('../../assets/agachamento.png'),
      color: '#1e3d59', 
    },
    {
      name: 'Hack Squat',
      series: '5 séries x 10 repetições',
      desc: 'Estabilize o joelho e respire a cada movimento.',
      image: require('../../assets/hacksquat.png'),
      color: '#3a5a75', 
    },
    {
      name: 'Cadeira Extensora',
      series: '5 séries x 10 repetições',
      desc: 'Isola os quadríceps, dê seu melhor.',
      image: require('../../assets/cadeiraextensora.png'),
      color: '#1e3d59',
    },
    {
      name: 'Afundo',
      series: '3 séries x 10 repetições',
      desc: 'Foque mais na execução do que na carga.',
      image: require('../../assets/afundo.png'),
      color: '#3a5a75',
    },
  ];

  return (
    <View style={styles.container}>
      {/* Barra superior com nome e logo */}
      <View style={styles.headerBar}>
        <Text style={styles.consultoriaName}>Consultoria</Text>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
      </View>

      <Text style={styles.title}>Diário de Treino</Text>
      <Text style={styles.subtitle}>Exercícios do Dia - Quadríceps</Text>

      <ScrollView contentContainerStyle={styles.list}>
        {exercises.map((ex) => (
          <View
            key={ex.name}
            style={[styles.exerciseBlock, { backgroundColor: ex.color }]}
          >
            <Image source={ex.image} style={styles.exerciseImage} />
            <Text style={styles.exerciseName}>{ex.name}</Text>
            <Text style={styles.exerciseInfo}>{ex.series}</Text>
            <Text style={styles.exerciseDesc}>{ex.desc}</Text>

            <TouchableOpacity
              style={[
                styles.completeButton,
                completed[ex.name] ? styles.completeButtonActive : {},
              ]}
              onPress={() => toggleComplete(ex.name)}
            >
              <Text style={styles.completeButtonText}>
                {completed[ex.name] ? 'Concluído' : 'Marcar como concluído'}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <Text style={styles.footer}>
        “Se continuar vivo após esse treino, muito bem! Para o próximo, boa sorte!”
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 20,
    alignItems: 'center',
  },
  headerBar: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: 'space-between',
    backgroundColor: '#e0e0e0',
    marginBottom: 15,
    borderRadius: 10,
  },
  consultoriaName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e3d59',
    textAlign: 'left',
    flex: 1,
  },
  logo: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e3d59',
    marginBottom: 5,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#3a5a75',
    marginBottom: 20,
    textAlign: 'center',
  },
  list: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 20,
  },
  exerciseBlock: {
    width: screenWidth,
    borderRadius: 15,
    padding: 25,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    elevation: 5,
  },
  exerciseImage: {
    width: 140,
    height: 140,
    marginBottom: 15,
    borderRadius: 10,
  },
  exerciseName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  exerciseInfo: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 5,
  },
  exerciseDesc: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  completeButton: {
    backgroundColor: '#fff',
    width: '100%',
    paddingVertical: 14,
    borderRadius: 5,
  },
  completeButtonActive: {
    backgroundColor: '#4caf50',
  },
  completeButtonText: {
    color: '#1e3d59',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footer: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#1e3d59',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
});
