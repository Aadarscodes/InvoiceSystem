import './App.css'
import Usershome from './components/invoicebillig/usershome';
import LoginRegisterForm from './components/loginpage/LoginRegisterForm';
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RigtSide/RightSide';
import Sidebar from './components/Sidebar';

function App() {
  return (
    // <div className="App">
    //   <div className="AppGlass">
    //     <Sidebar/>
    //     <MainDash/>
    //     <RightSide/>
    //   </div>
    // </div>
    <div className="homepages">
      <LoginRegisterForm/>
    </div>
    // <div>
    //   <Usershome/>
    // </div>

  );
}

export default App;
