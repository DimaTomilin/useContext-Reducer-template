import React, { useReducer } from 'react';
import mainContext from './main-context';
import { mainReducer } from '../reducers/mainReducer';
import { listOfFriends } from '../db/listOfFriends';
const MainState = (props) => {
  const [list, dispatch] = useReducer(mainReducer, [...listOfFriends]);

  return (
    <mainContext.Provider
      value={{
        list,
        dispatch,
      }}
    >
      {props.children}
    </mainContext.Provider>
  );
};

export default MainState;
