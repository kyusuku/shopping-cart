import App from "./App.tsx";
import Shop from "./Shop.tsx";
import Checkout from "./Checkout.tsx";
import Exit from "./Exit.tsx";

const routes = [
  { path: "/", element: <App /> },
  { path: "/shop", element: <Shop /> },
  { path: "/checkout", element: <Checkout /> },
  { path: "/exit", element: <Exit /> },
];

export default routes;
