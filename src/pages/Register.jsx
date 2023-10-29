import "../style/login.css";
import { useState } from "react";
import useAuth from "../auth";

function Register() {
  const { user, register } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (user) {
    window.location.href = "/";
  }

  const handleRegister = async (e) => {
    e.preventDefault();
    register(name, email, password);
  };

  return (
    <div className="login-form">
      <div class="container d-flex justify-content-center align-items-center h-100 mt-auto">
        <div class="card p-3 shadow-lg" style={{ minWidth: "50%" }}>
          <div class="card-body">
            <p class="card-title fw-bold text-center">Create an account</p>
            <h3 className="mt-4 mb-0 fw-bold">
              Welcome to <span style={{ color: "#007bff" }}>Signature</span>
            </h3>
            <p className="small">Enter your details to create your account</p>

            <form onSubmit={handleRegister}>
              <div class="form-group">
                <label className="small" for="name">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control small py-2"
                  id="name"
                  placeholder="Enter your name here"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div class="form-group mt-2">
                <label className="small" for="email">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control small py-2"
                  id="email"
                  placeholder="Enter your email here"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div class="form-group mt-2">
                <label className="small" for="password">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control small py-2"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" class="btn btn-primary w-100 mt-4 py-2">
                Register
              </button>
            </form>
            <div className="mt-3">
              <p className="text-center small">
                Already have an account?{" "}
                <span>
                  <a href="/login">Login</a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
