import Navbar from "./Components/Navbar/Navbar"
import Anim from "./Pages/Anim/Anim"
import List from "./Pages/List/List"
import Scroll from "./Pages/Scroll/Scroll"
import {BrowserRouter, Switch, Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <Switch>
          <Route path="/" exact component={List} />
          <Route path="/anim" exact component={Anim} />
          <Route patch="/scroll" exact component={Scroll} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
