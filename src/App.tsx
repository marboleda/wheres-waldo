import React , { useState } from 'react';
import { projectFirestore } from '.';
import './App.css';
import Header from './components/Header';
import Photo from './components/Photo'

const App = () => {
  const [isCharacterFound, setIsCharacterFound] = useState(Array(3).fill(false));

  const handleDropdownSelect = (character: string, x: number, y: number) => {
    projectFirestore.collection('placements').doc('image1').collection('characters').doc(character).get().then((character_info) => {
      const data = character_info?.data();
      if (data) {
        if ((data.starting_x < x && x < data.starting_x + data.acceptable_x_offset) &&
            (data.starting_y < y && y < data.starting_y + data.acceptable_y_offset)) {
              console.log(`You found ${character}`);
              const newIsCharacterFoundArray = [...isCharacterFound];
              switch(character) {
                case 'waldo':
                  newIsCharacterFoundArray[0] = true;
                  break;
                case 'wenda':
                  newIsCharacterFoundArray[1] = true;
                  break;
                case 'wizard':
                  newIsCharacterFoundArray[2] = true;
                  break;
              }
              setIsCharacterFound(newIsCharacterFoundArray);
            }
        else {
              console.log(`That's not where ${character} is!`);
        }
      }
    }).catch((error) => {
      console.log('Error getting data:', error);
    });
  } 

  return (
    <div className="App">
      <Header></Header>
      <Photo 
        dropdownSelect={handleDropdownSelect}
        charactersFound={isCharacterFound}>  
      </Photo>
    </div>
  );
}

export default App;
