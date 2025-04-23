import App from "./App.tsx";
import Shop from "./Shop.tsx";
import Checkout from "./Checkout.tsx";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "shop",
    element: <Shop />,
  },
  {
    path: "checkout",
    element: <Checkout />,
  },
];

export default routes;
