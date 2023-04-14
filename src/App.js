import Home from "./routes/home/home.route";
import Nav from "./routes/nav/nav.route";
import SignIn from "./routes/signin/signin.route";
import { Route, Routes } from "react-router-dom";
import Shop from "./routes/shop/shop.route";
const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} /> {/*just means add to home path*/}
        <Route path="sign-in" element={<SignIn />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
