import Link from "next/link";

const RegisterPage = () => {
    return (
        <div className="register-container">
            <div className="register-box">
                <h1 className="register-title">Register</h1>
                <form className="register-form">
                    <div className="form-group">
                        <label htmlFor="fullName">Full Name</label>
                        <input 
                            type="text" 
                            id="fullName" 
                            className="form-input"
                            placeholder="Enter your full name" 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            className="form-input"
                            placeholder="Enter your email" 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            className="form-input"
                            placeholder="Enter your password" 
                        />
                    </div>
                    <button type="submit" className="submit-button">
                        Register
                    </button>
                </form>
                <p className="login-text">
                    Already have an account?{' '}
                    <Link href="/auth/login" className="login-link">
                        Login here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;