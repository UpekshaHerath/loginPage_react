import logo from './logo.svg';
import './App.css';
import loginImage from './images/loginImage.jpg'
import { height } from '@mui/system';
import { Button } from '@mui/material';
import SearchAppBar from './components/SearchAppBar';

function App() {

  const loginFunctionality = () => {
    const userName = document.getElementById('userName');
    const password = document.getElementById('passWord');
    
    if (userName.value == 'Upeksha' && password.value == '1234') {
      alert('login successfull !');
    } else {
      alert('login failed !');
    }
    userName.value = "";
    password.value = "";
  }

  return (
    <>
      <div>
        <SearchAppBar />
      </div>
      <div className='loginCardMain'>
        <div className='loginCard'>
            <img src={loginImage} alt="login image" className='image'/>

            <div className='flexContainer'>
              <div className='title'>
                <h2>Fitlabs</h2>
                <h3 style={{color: "blue"}}>login</h3>
              </div>
              <form action="" className='form'>
                <label>User Name</label>
                <input type="text" id='userName'/>
                <label>Password</label>
                <input type="text" id='passWord'/>
                <Button variant="contained" onClick={loginFunctionality}>Login</Button>
              </form>
            </div>
        </div>
      </div>
      
    </>
    
    
  );
}

export default App;
