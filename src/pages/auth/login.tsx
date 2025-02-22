import Link from "next/link";
import Styles from "./Login.module.css"

const LoginPage = () => {
    return (
        <div>
            <h1>Register</h1>
            <p>dont have accounts, <Link href={"/auth/register"}>Klik</Link></p>
        </div>
    )
}

export default LoginPage;