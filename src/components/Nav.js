import { Link } from "react-router-dom";

// ! Forgot to add the word function to export default and encountered an error
export default function Nav() {
    return (
        <div className="nav fixed w-screen">
            {/* Link to will not refresh the page but an a tag will refresh the page */}
            <Link to="/">
                <div>Crypto Prices</div>
            </Link>
            <Link to="/currencies">
                <div>Currencies</div>
            </Link>
        </div>
    );
}


