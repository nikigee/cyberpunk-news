import logo from "../assets/logo.svg";

const Header = () => {
    return (
        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-4">
                <a
                    href="/"
                    className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-light text-decoration-none"
                >
                    <img src={logo} width="32" height="37" className="me-2" />
                    <span className="fs-4 fw-bold text-uppercase">Network 54</span>
                </a>

                <ul className="nav nav-pills justify-content-center text-uppercase">
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            Stream
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            Cyberspace
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            Advertising
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            Report
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            About
                        </a>
                    </li>
                </ul>
            </header>
        </div>
    );
};

export default Header;
