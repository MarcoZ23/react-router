import { NavLink } from "react-router-dom";

export default function AppHeader() {

    return (

        <>
            <header>
                <nav className="navbar navbar-expand bg-body-tertiary">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand px-2" to="/">OmniShop</NavLink>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav list-unstyled">
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="home" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/about">Chi siamo</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/products">Prodotti</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}