export default function AppFooter() {

    return (

        <footer className="bg-light py-5">
            <div className="container">
                <div className="row g-5">
                    <div className="col-4">
                        <h5>OmniShop</h5>
                        <p>
                            Il tuo e-commerce per moda, tecnologia e molto altro.
                        </p>
                    </div>
                    <div className="col-4">
                        <h5>Link utili</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Chi siamo</a></li>
                            <li><a href="#">Prodotti</a></li>
                            <li><a href="#">Contatti</a></li>
                        </ul>
                    </div>
                    <div className="col-4">
                        <h5>Help</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">Spedizioni</a></li>
                            <li><a href="#">Resi e rimborsi</a></li>
                            <li><a href="#">Termini e condizioni</a></li>
                            <li><a href="#">Privacy policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}