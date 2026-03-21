const Login = () => {
  return (
    <div className="page login-page">
      <div className="login-box">
        <h2>Welcome Back</h2>
        <p>Login to continue learning</p>
        <input type="email" placeholder="Email address" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </div>
    </div>
  );
};
export default Login;