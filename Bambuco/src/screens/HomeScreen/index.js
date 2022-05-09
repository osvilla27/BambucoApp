import { Text,View} from 'react-native';
import { TouchableOpacity } from 'react-native';
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from "react";
import { StyledView } from './styled';
import {colors, shadow } from '../../library/utils/theme';
import Icon from 'react-native-vector-icons/Ionicons';
import { removeToken } from '../../services/AsyncStoregeService';

export const HomeScreen = ({navigation}) => {
  const [students, setStudents] = useState([])
  const [themeDark, setThemeDark] = useState(false)
  console.log(students)

  const handleLogout = async () => {
    await removeToken()
    navigation.navigate('SignUp');
  }

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
    <View>

      <TouchableOpacity onPress={() =>setThemeDark(!themeDark)}>
          <Icon name='color-palette-outline' size={30} color={!themeDark?colors.black:colors.light}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLogout}>
          <Icon name='log-out' size={30} color={!themeDark?colors.black:colors.light}/>
      </TouchableOpacity> 
    </View>
  );
}
