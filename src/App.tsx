import React from 'react';
import { projectFirestore } from '.';
import './App.css';
import Header from './components/Header';
import Photo from './components/Photo'

const handleDropdownSelect= (character: string, x: number, y: number) => {
  switch(character) {
    case 'waldo':
      projectFirestore.collection('placements').doc('image1').collection('characters').doc('waldo').get().then((character_info) => {
        const data = character_info?.data();
        if (data) {
          if ((data.starting_x < x && x < data.starting_x + data.acceptable_x_offset) &&
              (data.starting_y < y && y < data.starting_y + data.acceptable_y_offset)) {
                console.log(`You found ${character}`);
              }
          else {
                console.log(`That\'s not where ${character} is!`);
          }
        }
      }).catch((error) => {
        console.log('Error getting data:', error);
      });
      break;
    case 'wenda':
      //implement
      break;
    case 'wizard':
      //implement
      break;
  }
}

const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <Photo dropdownSelect={handleDropdownSelect}></Photo>
    </div>
  );
}

export default App;
