import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  menShoes: {
    "air-jordan-3-valor-blue": {
      name: "VALOUR BLUE",
      img: "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
      price: 345.00
    },
    "jordan-mars-270-london": {
      name: "JORDAN MARS 270 LONDON",
      img: "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1",
      price: 645.00
    },
    "air-jordan-1-zoom-racer-blue": {
      name: "RACER BLUE",
      img: "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
      price: 150.00
    },
    "nike-air-zoom-type": {
      name: "Nike Air Zoom-Type",
      img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5c1e3a90-b2b7-479c-b567-3b50903cf9da/air-zoom-type-mens-shoe-PZR40V.jpg",
      price: 150.00
    },
    "leBron-17": {
      name: "LeBron 17",
      img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a9808db2-aee5-4f0c-8c23-ce101daf612d/lebron-17-graffiti-basketball-shoe-DkNN8W.jpg",
      price: 225.00
    }
  },
  womenShoes: {
    "leather-pump-with-horsebit": {
      name: "Leather Pump with Horsebit",
      img: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1579017603/616596_1RH00_1000_001_100_0000_Light-Womens-leather-pump-with-Horsebit.jpg",
      price: 980.00
    },
    "platform-sandal-with-double-g": {
      name: "Platform Sandal with Double G",
      img: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1585003503/628100_A3N00_5815_001_100_0000_Light-Womens-platform-sandal-with-Double-G.jpg",
      price: 930.00
    },
  },
  cart: []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {

  const [state, dispatch] = useReducer(AppReducer, initialState);

  function deleteItem(id) {
    dispatch({
      type: 'DELETE_ITEM',
      payload: id
    });
  }

  function addItem(item) {
    dispatch({
      type: 'ADD_ITEM',
      payload: item
    });
  }

  return (
    <GlobalContext.Provider value={{
      cart: state.cart,
      menShoes: state.menShoes,
      womenShoes: state.womenShoes,
      deleteItem,
      addItem
    }}>
      {children}
    </GlobalContext.Provider>
  )
}