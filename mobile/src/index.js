import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, StatusBar, FlatList} from 'react-native'

import api from './services/api'

export default function App() {
   const [projects, setProjects] = useState([])

   const handleLoadProjects = async () => {
      const response = await api.get('/projects');

      await setProjects(response.data)
   }

   useEffect(() => {
      handleLoadProjects();
   },[])

   return (
      <>
         <StatusBar barStyle='light-content' backgroundColor='#7159c1' />
         <FlatList 
            style={styles.container}
            data={projects}
            keyExtractor={p => p.id }
            renderItem={({item: p}) => (
              <Text style={styles.project}>{p.title}</Text>
            )}
         />
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
   }
})