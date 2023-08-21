import './landingpage.css';
import { useNavigate} from 'react-router-dom';

function LandingPage() {
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
          <h5>Welcome to the internet banking portal of #1 US Bank</h5>
          <div className='bttn'>
            <button className='register' onClick={navigateRegister}>Register</button>
            <button className='login' onClick={navigateLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default LandingPage;
