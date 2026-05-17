import { NavLink } from "react-router-dom";

export default function AppHeader() {

    const menu = [
        {
            id: 1,
            name: "Home",
            to: "/"
        },
        {
            id: 2,
            name: "Chi siamo",
            to: "/about"
        },
        {
            id: 3,
            name: "Prodotti",
            to: "/products"
        }
    ]

    return (

        <>
            <header>
                <nav className="navbar navbar-expand bg-body-tertiary">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand px-2 fw-bold" to="/">OmniShop</NavLink>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                {menu.map(item =>
                                    <li className="nav-item" key={item.id}>
                                        <NavLink className="nav-link" aria-current={item.name} to={item.to}>{item.name}</NavLink>
                                    </li>
                                )}

                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}