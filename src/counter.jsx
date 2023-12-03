// import { useDispatch, useSelector } from "react-redux";

// import { addToCart, deleteCart, decrement } from "./CounterSlice";
// import { useEffect, useState } from "react";
// import axios from "axios";
// const Cart = () => {
//   const [products, setProducts] = useState([]);
//   const dispatch = useDispatch();
//   const cart1 = useSelector((state) => state.meracounter.cart);
//   console.log("cart:", cart1);

//   useEffect(() => {
//     axios.get("https://fakestoreapi.com/products").then((response) => {
//       setProducts(response.data);
//     });
//   }, []);

//   function onCart(item) {
//     dispatch(addToCart(item));
//   }

//   function onDelete(id) {
//     dispatch(deleteCart(id));
//   }

//   function onIncrement(item) {
//     dispatch(addToCart(item));
//   }
//   function onDecrement(item) {
//     dispatch(decrement(item));
//   }

//   return (
//     <>
//       <div
//         style={{
//           display: "flex",
//           gap: 12,
//           flexWrap: "wrap",
//           border: "1px solid black",
//         }}
//       >
//         {products.map((item) => {
//           return (
//             <div style={{ width: 180 }} key={item.id}>
//               <img width={70} height={70} src={item.image} />
//               <p style={{ fontSize: 11 }}>{item.title}</p>
//               <div onClick={() => onCart(item)}>Add To Cart </div>
//             </div>
//           );
//         })}
//       </div>

//       <div
//         style={{
//           display: "flex",
//         }}
//       >
//         <div
//           style={{
//             width: "70%",
//             textAlign: "center",
//             border: "1px solid black",
//           }}
//         >
//           {cart1.map((item) => {
//             return (
//               <div
//                 style={{ display: "flex", justifyContent: "space-around" }}
//                 key={item.id}
//               >
//                 <div style={{ fontSize: 11 }}>{item.title}</div>
//                 <div>
//                   <img width={70} height={70} src={item.image} />
//                 </div>
//                 <div onClick={() => onDelete(item.id)}>Remove Cart </div>

//                 <div onClick={() => onIncrement(item)}>+</div>
//                 <div>{item.numberOfUnits}</div>
//                 <div onClick={() => onDecrement(item)}>-</div>
//               </div>
//             );
//           })}
//         </div>
//         <div
//           style={{
//             width: "30%",
//             textAlign: "center",
//             border: "1px solid black",
//           }}
//         >

//         </div>
//       </div>
//     </>
//   );
// };
// export default Cart;

import { useDispatch, useSelector } from "react-redux";

import { addToCart, deleteCart, decrement } from "./CounterSlice";
import { useEffect, useState, useMemo } from "react";
import axios from "axios";
const Cart = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const cart1 = useSelector((state) => state.meracounter.cart);
  console.log("carttt:", cart1);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  function onCart(item) {
    dispatch(addToCart(item));
  }

  function onDelete(id) {
    dispatch(deleteCart(id));
  }

  function onIncrement(item) {
    dispatch(addToCart(item));
  }
  function onDecrement(item) {
    dispatch(decrement(item));
  }

  let subTotal = useMemo(() => {
    let subTotal1 = { totalPrice: 0, totalItems: 0 };
    let totalPrice = 0,
      totalItems = 0;

    cart1.forEach((item) => {
      totalPrice += item.price.toFixed(1) * item.numberOfUnits;
      totalItems += item.numberOfUnits;
      subTotal1["totalPrice"] = totalPrice;

      subTotal1["totalItems"] = totalItems;
    });
    return subTotal1;
  }, [cart1]);
  console.log("sub", subTotal);

  return (
    <>
      <div
        style={{
          display: "flex",
          gap: 12,
          flexWrap: "wrap",
          border: "1px solid black",
        }}
      >
        {products.map((item) => {
          return (
            <div style={{ width: 180 }} key={item.id}>
              <img width={70} height={70} src={item.image} />
              <p style={{ fontSize: 11 }}>{item.title}</p>
              <div onClick={() => onCart(item)}>Add To Cart </div>
            </div>
          );
        })}
      </div>

      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            width: "70%",
            textAlign: "center",
            border: "1px solid black",
          }}
        >
          {cart1.map((item) => {
            return (
              <div
                style={{ display: "flex", justifyContent: "space-around" }}
                key={item.id}
              >
                <div style={{ fontSize: 11 }}>{item.title}</div>
                <div>
                  <img width={70} height={70} src={item.image} />
                </div>
                <div onClick={() => onDelete(item.id)}>Remove Cart </div>

                <div onClick={() => onIncrement(item)}>+</div>
                <div>{item.numberOfUnits}</div>
                <div onClick={() => onDecrement(item)}>-</div>
              </div>
            );
          })}
        </div>
        <div
          style={{
            width: "30%",
            textAlign: "center",
            border: "1px solid black",
          }}
        >
          `Subtotal ({subTotal.totalItems} Items) : Rupees
          {subTotal.totalPrice} `
        </div>
      </div>
    </>
  );
};
export default Cart;
