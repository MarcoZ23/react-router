export default function AppFooter() {

    return (

        <footer className="bg-light py-5">
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <h5>OmniShop</h5>
                        <p>
                            Il tuo e-commerce per moda, tecnologia er molto altro.
                        </p>
                    </div>
                    <div className="col-4">
                        <h5>Link utili</h5>
                        <ul>
                            <li><a>Home</a></li>
                            <li><a>Chi siamo</a></li>
                            <li><a>Prodotti</a></li>
                            <li><a>Contatti</a></li>
                        </ul>
                    </div>
                    <div className="col-4">
                        <h5>Help</h5>
                        <ul>
                            <li><a>Spedizioni</a></li>
                            <li><a>Resi e rimborsi</a></li>
                            <li><a>Termini e condizioni</a></li>
                            <li><a>Privacy policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}