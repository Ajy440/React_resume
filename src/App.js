import { Route, Switch } from "react-router-dom";
import Admin from "./Admin";
import Welcome from "./Welcome/welcome";
import Resume from "./Resume/resume";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/admin" exact>
          <Admin />
        </Route>
        <Route path="/resume" exact>
          <Resume />
        </Route>
        <Route path="" exact>
          <Welcome />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
