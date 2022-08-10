import database from '@react-native-firebase/database';
import React from 'react';

export const SubmitUser = (Id: any, Name: any, Position: any) => {
  return new Promise(function (resolve, reject) {
    let key = Id;
    if (Id != null) {
      key = Id;
    } else {
      key = database().ref().push().key;
    }
    let dataToSave = {
      Id: key,
      Name: Name,
      Position: Position,
    };
    database()
      .ref('users')
      .update(dataToSave)
      .then(snapShot => {
        resolve(snapShot);
      })
      .catch(error => {
        console.log(error);
      });
  });
};
