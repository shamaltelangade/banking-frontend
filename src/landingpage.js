import './landingpage.css';
import { useNavigate} from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  const navigateRegister = () => {
    navigate('/register');
  };
  const navigateLogin = () => {
    navigate('/login');
  }
  return (
    <div className="containerr ">
      <div className='box '>
        <div className='block'>
          <h1>Wells Fargo</h1>
          <h5>Welcome</h5>
          <p>qwertyuiop qwertyuiop qwertyuiop qwertyuiop qwertyuiop
             qwertyuiop qwertyuiop qwertyuiop qwertyuiop qwertyuiop
             qwertyuiop qwertyuiop qwertyuiop qwertyuiop
             qwertyuiop qwertyuiop qwertyuiop qwertyuiop
          </p>
          <div className='bttn'>
            <button className='register' onClick={navigateRegister}>Register</button>
            <button className='login' onClick={navigateLogin}>Login</button>
            
          </div>
        </div>
      </div>
    </div>
    
  );
}
export default App;
