import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1>Oh no, this route doesn't exist!</h1>
            <Link to ='/'>
                Back to Home Page
            </Link>
        </div>
    )
}

export default ErrorPage