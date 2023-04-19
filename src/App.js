import Home from "./routes/home/home.route";
import Nav from "./routes/nav/nav.route";
import Authentication from "./routes/authentication/authentication.route";
import { Route, Routes } from "react-router-dom";
import Shop from "./routes/shop/shop.route";
const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} /> {/*just means add to home path*/}
        <Route path="auth" element={<Authentication />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
