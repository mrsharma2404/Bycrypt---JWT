import {BrowserRouter as Router, Route} from 'react-router-dom';
import { PinDropSharp } from '@material-ui/icons';
import SignIn from './component/SignIn';
import SignUp from './component/SignUp';
import Home from './component/Home';

function App(props) {

  
  return (
    <div>
      <Router>

        <Route           
        exact
        strict
         component={SignIn}
         path="/Signin"
         history={props.history}
         ></Route>

         <Route           
        exact
        strict
         component={SignUp}
         path="/Signup"
         history={props.history}
         ></Route>

         
<Route           
        exact
        strict
         component={Home}
         path="/Home"
         history={props.history}
         ></Route>

         </Router>
    </div>
  );
}

export default App;
