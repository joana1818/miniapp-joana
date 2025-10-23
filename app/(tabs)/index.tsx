import React, { useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const screenWidth = Dimensions.get('window').width;

interface Exercise {
  name: string;
  series: string;
  desc: string;
  image: any;
  color: string;
}

const App = () => {
  const [completed, setCompleted] = useState<{[key: string]: boolean}>({});

  const toggleComplete = (exercise: string) => {
    setCompleted(prev => ({ ...prev, [exercise]: !prev[exercise] }));
  };

  // ✅ Treinos organizados por grupo muscular
  const workouts = [
    {
      group: 'Quadríceps',
      exercises: [
        {
          name: 'Agachamento',
          series: '3x12',
          desc: 'Foque na execução correta.',
          image: require('../../assets/agachamento.png'),
          color: '#1e3d59',
        },
        {
          name: 'Hack Squat',
          series: '5x10',
          desc: 'Estabilize bem os joelhos.',
          image: require('../../assets/hacksquat.png'),
          color: '#3a5a75',
        },
        {
          name: 'Cadeira Extensora',
          series: '5x10',
          desc: 'Isola os quadríceps.',
          image: require('../../assets/cadeiraextensora.png'),
          color: '#1e3d59',
        },
        {
          name: 'Afundo',
          series: '3x10',
          desc: 'Foque na execução e equilíbrio.',
          image: require('../../assets/afundo.png'),
          color: '#3a5a75',
        },
      ],
    },
    {
      group: 'Posterior de Perna',
      exercises: [
        {
          name: 'Stiff',
          series: '4x12',
          desc: 'Alongue bem e não force a lombar.',
          image: require('../../assets/stiff.png'), // adicione na pasta assets
          color: '#1e3d59',
        },
        {
          name: 'Terra Sumô',
          series: '4x12',
          desc: 'Mantenha coluna reta e pés afastados.',
          image: require('../../assets/terra.png'), // adicione na pasta assets
          color: '#3a5a75',
        },
        {
          name: 'Agachamento Sumô',
          series: '3x12',
          desc: 'Foque na postura e amplitude.',
          image: require('../../assets/agachamentosumo.png'), // adicione na pasta assets
          color: '#1e3d59',
        },
        {
          name: 'Afundo', 
          series: '3x10',
          desc: 'Bom para equilíbrio e glúteos.',
          image: require('../../assets/afundo.png'),
          color: '#3a5a75',
        },
      ],
    },
    {
      group: 'Braço',
      exercises: [
        {
          name: 'Rosca Direta',
          series: '3x12',
          desc: 'Controle o movimento.',
          image: require('../../assets/roscadireta.png'), // adicione na pasta assets
          color: '#1e3d59',
        },
        {
          name: 'Rosca Alternada',
          series: '3x12',
          desc: 'Faça com ritmo e postura.',
          image: require('../../assets/roscaalternada.png'), // adicione na pasta assets
          color: '#3a5a75',
        },
        {
          name: 'Tríceps Testa',
          series: '3x10',
          desc: 'Alongue e concentre no tríceps.',
          image: require('../../assets/triceps.png'), // adicione na pasta assets
          color: '#1e3d59',
        },
        {
          name: 'Tríceps Corda',
          series: '3x12',
          desc: 'Mantenha cotovelos fixos.',
          image: require('../../assets/tricepscorda.png'), // adicione na pasta assets
          color: '#3a5a75',
        },
      ],
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Barra superior */}
      <View style={styles.headerBar}>
        <Text style={styles.consultoriaName}>Online-Joana</Text>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
      </View>

      <Text style={styles.title}>Diário de Treino</Text>

      {workouts.map((workout) => (
        <View key={workout.group} style={{ marginBottom: 25, width: '100%' }}>
          <Text style={styles.groupTitle}>{workout.group}</Text>
          <View style={styles.exerciseRow}>
            {workout.exercises.map((ex) => (
              <View key={ex.name} style={[styles.exerciseBlock, { backgroundColor: ex.color }]}>
                <Image source={ex.image} style={styles.exerciseImage} />
                <Text style={styles.exerciseName}>{ex.name}</Text>
                <Text style={styles.exerciseInfo}>{ex.series}</Text>
                <Text style={styles.exerciseDesc}>{ex.desc}</Text>
                <TouchableOpacity
                  style={[styles.completeButton, completed[ex.name] ? styles.completeButtonActive : {}]}
                  onPress={() => toggleComplete(ex.name)}
                >
                  <Text style={styles.completeButtonText}>
                    {completed[ex.name] ? 'Concluído' : 'Marcar como concluído'}
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
      ))}

      <Text style={styles.footer}>
        “Bom treino,bom desempenho e boa sorte!”
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 10,
  },
  headerBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  consultoriaName: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1e3d59',
  },
  logo: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1e3d59',
    marginBottom: 10,
  },
  groupTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1e3d59',
    marginBottom: 10,
    marginLeft: 5,
  },
  exerciseRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  exerciseBlock: {
    width: '48%',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
  },
  exerciseImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 10,
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 3,
    textAlign: 'center',
  },
  exerciseInfo: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 3,
  },
  exerciseDesc: {
    fontSize: 12,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  completeButton: {
    backgroundColor: '#fff',
    width: '100%',
    paddingVertical: 10,
    borderRadius: 5,
  },
  completeButtonActive: {
    backgroundColor: '#4caf50',
  },
  completeButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1e3d59',
    textAlign: 'center',
  },
  footer: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
    marginVertical: 20,
    color: '#1e3d59',
  },
});

export default App;
