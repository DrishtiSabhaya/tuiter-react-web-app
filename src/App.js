import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import HomeComponent from "./tuiter/home";
import ExploreComponent from "./tuiter/explore";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";

function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Routes>
                  <Route path="hello" exact={true} element={<HelloWorld />} />
                  <Route path="/" exact={true} element={<Labs />} />
                  <Route path="/tuiter/*" exact={true} element={<Tuiter />} />
                  <Route path="home" element={<HomeComponent />} />
                  <Route path="explore" element={<ExploreComponent />} />
              </Routes>
          </div>
      </BrowserRouter>
  );
}
export default App;