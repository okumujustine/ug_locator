import {
  BrowserRouter as Router,
} from "react-router-dom";
import { CustomRoutes } from "./Routes";

function App() {

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <CustomRoutes/>
      </div>
    </Router>
  );
}

export default App;
