// import React from "react";
// import { Navigate, Route } from "react-router-dom";
// import { useAuth } from "../contexts/AuthContext";

// export default function PrivateRoute({ element: Element, ...rest }) {
//   const { currentUser } = useAuth();

//   return (
//     <Route
//       {...rest}
//       render={(props) => {
//         return currentUser ? (
//           <Element {...props} />
//         ) : (
//           <Navigate to={"/login"} />
//         );
//       }}
//     />
//   );
// }
