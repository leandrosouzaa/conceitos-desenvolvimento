import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, StatusBar, FlatList, TouchableOpacity, SafeAreaView} from 'react-native'

import api from './services/api'

export default function App() {
   const [projects, setProjects] = useState([])

   const handleLoadProjects = async () => {
      const response = await api.get('/projects');

      await setProjects(response.data)
   }

   const handleAddProject = async () => {
     const response = await api.post('/projects', {
        title: `Novo projeto ${Date.now()}`,
        owner: 'Leandro Ribeiro de Souza'
     });

     await setProjects([...projects, response.data])
   }

   useEffect(() => {
      handleLoadProjects();
   },[])

   return (
      <>
         <StatusBar barStyle='light-content' backgroundColor='#7159c1' />
         <SafeAreaView style={styles.container}>
            <FlatList 
               data={projects}
               keyExtractor={p => p.id }
               renderItem={({item: p}) => (
               <Text style={styles.project}>{p.title}</Text>
               )}
            />

            <TouchableOpacity onPress={handleAddProject} activeOpacity={0.8} style={styles.button}>
                  <Text style={styles.buttonText}>Adicionar Projeto</Text>
            </TouchableOpacity>
         </SafeAreaView>
      </>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor:'#7159c1',
   },

   project: {
      color:'#FFF',
      fontSize:20,
   },

   button: {
      backgroundColor: '#FFF',
      margin: 20,
      height: 50,
      borderRadius: 4,
      justifyContent: 'center',
      alignItems: 'center'
   },

   buttonText: {
      fontWeight:'bold',
      fontSize: 16,

   }
})