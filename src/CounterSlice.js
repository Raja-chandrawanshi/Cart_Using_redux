// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   cart: [],
// };

// export const counterSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart: (state, actions) => {
//       if (state.cart.some((item) => item.id === actions.payload.id)) {
//         state.cart = state.cart.map((elm) => {
//           if (elm.id == actions.payload.id) {
//             let { numberOfUnits } = elm;
//             console.log(numberOfUnits);
//             numberOfUnits++;
//             return { ...elm, ...actions.payload, numberOfUnits: numberOfUnits };
//           } else {
//             return elm;
//           }
//         });
//       } else {
//         state.cart.push({
//           ...actions.payload,
//           numberOfUnits: 1,
//         });
//       }
//     },
//     deleteCart: (state, actions) => {
//       state.cart = state.cart.filter((item) => item.id != actions.payload);
//     },
//   },
// });

// export const { addToCart, deleteCart } = counterSlice.actions;
// export default counterSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const counterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, actions) => {
      if (state.cart.some((item) => item.id === actions.payload.id)) {
        state.cart = state.cart.map((elm) => {
          if (elm.id == actions.payload.id) {
            let { numberOfUnits } = elm;
            console.log(numberOfUnits);
            numberOfUnits++;
            return { ...elm, ...actions.payload, numberOfUnits: numberOfUnits };
          } else {
            return elm;
          }
        });
      } else {
        state.cart.push({
          ...actions.payload,
          numberOfUnits: 1,
        });
      }
    },
    deleteCart: (state, actions) => {
      state.cart = state.cart.filter((item) => item.id != actions.payload);
    },
    decrement: (state, actions) => {
      if (actions.payload.numberOfUnits == 1) {
        state.cart = state.cart.filter((item) => item.id != actions.payload.id);
        return;
      }
      state.cart = state.cart.map((elm) => {
        if (elm.id == actions.payload.id) {
          let { numberOfUnits } = elm;
          console.log(numberOfUnits);
          numberOfUnits--;
          return { ...elm, ...actions.payload, numberOfUnits: numberOfUnits };
        } else {
          return elm;
        }
      });
    },
  },
});

export const { addToCart, deleteCart, decrement } = counterSlice.actions;
export default counterSlice.reducer;
