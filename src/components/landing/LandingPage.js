import './landingpage.css';
import { useNavigate} from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div class="hero vh-100 d-flex align-items-center" id="home">
        <div class="container">
            <div class="row">
                <div class="col-lg-7 mx-auto text-center">
                    <h1 class="display-4 text-white">Bank</h1>
                    <p class="text-white my-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque quia
                        sequi eius. Quas, totam aliquid. Repudiandae reiciendis vel excepturi ipsa voluptate dicta!</p>
                    <a href="/login" class="btn me-2 btn-primary">Login</a>
                    <a href="/Register" class="btn me-2 btn-outline-light">Register</a>
                    <a href="/adminlogin" class="btn btn-outline-light">Admin Login</a>
                </div>
            </div>
        </div>
    </div>
 


  );
}

export default LandingPage;
