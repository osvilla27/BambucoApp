import { Text,View} from 'react-native';
import { TouchableOpacity } from 'react-native';
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from "react";
import { StyledView } from './styled';
import {colors, shadow } from '../../library/utils/theme';
import Icon from 'react-native-vector-icons/FontAwesome5';


export const HomeScreen = () => {
  const [students, setStudents] = useState([])
  const [themeDark, setThemeDark] = useState(false)
  console.log(students)
  useEffect(()=>{
    async function getAllStudent() {
      try {
        const students = await axios.get('https://bambuco.herokuapp.com/api/student/')
        setStudents(students.data)
      } catch (error) {
        console.log(error)
      }
    }
    getAllStudent()
  }, [])
  return (
    <StyledView style={[shadow.light]}>
      <View style={[shadow.dark, {height: 100, backgroundColor: 'red'}]}>
      <Text style={{color: colors.primary}}>Hola</Text>
      </View>
      {/* <TouchableOpacity onPress={() =>setThemeDark(!themeDark)}>
          <Icon name='palette' size={30} color={!themeDark?colors.black:colors.light}/>
      </TouchableOpacity> */}
    </StyledView>
  );
}
