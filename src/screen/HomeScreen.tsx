import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {normalize} from '../utilies/dimensions';
import { SubmitUser } from '../utilies/CommonFunction';
import { firebase } from '../../SetUp';


export default function HomeScreen() {
  const [Name, setName] = useState('');
  const [Position, setPosition] = useState<any>();
  const [Id, setId] = useState<any>(0);
  const [User, setUser] = useState<any>([]);

  const SaveUsers = () => {
    SubmitUser(Id,Name,Position).
    then((result)=>{
      setName('');
      setId(null);
      setPosition('');
    }).
    catch((err)=>{
      console.log(err);
      
    })
  };

  const UpdateUser = () => {
    Alert.alert(Position);
  };

  return (
    <SafeAreaView>
      <View style={{marginTop: normalize(40)}}>
        <Text style={styles.TextCrudStyle}>CrudHomeScreen</Text>
        <View style={styles.MainContainer}>
          <TextInput
            onChangeText={(text: string) => {
              setName(text);
            }}
            placeholder="name"
            value={Name}
            style={styles.InputBoxStyle}
          />
          <TextInput
            onChangeText={(text: string) => {
              setPosition(text);
            }}
            placeholder="Position"
            value={Position}
            maxLength={10}
            style={styles.InputBoxStyle}
          />

          <TouchableOpacity onPress={SaveUsers} style={styles.TouchButtonStyle}>
            <Text>{'Insert'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.TouchButtonStyle}>
            <Text>{'Update'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.TouchButtonStyle}>
            <Text>{'Delete'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    marginHorizontal: normalize(30),
    marginTop: normalize(30),
  },
  InputBoxStyle: {
    marginVertical: normalize(8),
    backgroundColor: 'yellow',
    marginHorizontal: normalize(10),
    paddingVertical: normalize(10),
    paddingLeft: normalize(10),
    borderWidth: 1,
    borderRadius: 7,
  },
  TextCrudStyle: {
    textAlign: 'center',
  },
  TouchButtonStyle: {
    marginHorizontal: normalize(100),
    backgroundColor: '#2ecc71',
    paddingVertical: normalize(10),
    alignItems: 'center',
    marginVertical: normalize(10),
    borderRadius: 10,
  },
});
