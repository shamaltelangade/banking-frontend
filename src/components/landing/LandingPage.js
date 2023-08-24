import './landingpage.css';
import { useNavigate} from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="hero vh-100 d-flex align-items-center" id="home">
        <div className="container">
            <div className="row">
                <div className="col-lg-7 mx-auto text-center">
                    <h1 className="display-4 text-white">Bank</h1>
                    <p className="text-white my-3 landing-text">Discover financial exellence with Bank, your trusted partner for personalized
                     banking solutionsand secure financial growth. Welcome to a new era of banking satisfaction.</p>              
                    <div className='landing-links'>
                        <a href="/login" className="btn me-2 btn-primary" >Login</a>
                        <a href="/Register" className="btn me-2 btn-outline-light">Register</a>
                        <a href="/adminlogin" className="btn btn-outline-light">Admin Login</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
 


  );
}

export default LandingPage;
