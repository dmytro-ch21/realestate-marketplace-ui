import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router';

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log('Registration data', formData);
    navigate('/home');
  };

  const handleOnChange = (e) => {
    console.log(e.target.name, ':', e.target.value);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container py-4">
      <h2 className="fw-bolder text-center">Login Page</h2>

      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card border shadow-sm">
            <div className="card-body py-3">
              <form onSubmit={handleOnSubmit} className="p-4">
                <div className="mb-3">
                  <label for="emailInput" className="form-label">
                    Email address
                  </label>
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    id="emailInput"
                    aria-describedby="emailHelp"
                    placeholder="Enter your email..."
                    value={formData.email}
                    required
                    onChange={handleOnChange}
                  />
                </div>
                <div className="mb-3">
                  <label for="passwordInput" className="form-label">
                    Password
                  </label>
                  <input
                    name="password"
                    type="password"
                    className="form-control"
                    id="passwordInput"
                    placeholder="Enter your password..."
                    value={formData.password}
                    required
                    onChange={handleOnChange}
                  />
                </div>
                <div className="mt-3">
                  <button type="submit" className="btn btn-primary w-100 mt-2">
                    Login
                  </button>
                </div>

                <div className='text-center mt-3'>
                    <p>
                        Don't have an account? <Link to="/signup">Sign Up</Link>
                    </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
