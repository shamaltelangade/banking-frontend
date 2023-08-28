import './LandingPage.css';


function LandingPage() {

  return (
    <div className="hero vh-100 d-flex align-items-center" id="home">
        <div className="container">
            <div className="row">
                <div className="col-lg-7 mx-auto text-center">
                    <h1 className="display-4 text-white">Welcome to SwitfCash Banking System</h1>
                    <p className="text-white my-3 landing-text">Discover financial exellence with SwiftCash, your trusted partner for personalized
                     banking solutions and secure financial growth. Welcome to a new era of banking satisfaction.</p>              
                    <div className='landing-links'>
                        <a href="/login" className="btn me-2 btn-primary" >Login</a>
                        <a href="/register" className="btn me-2 btn-outline-light">Register</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default LandingPage;