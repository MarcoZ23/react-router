import AppFooter from "../components/AppFooter";
import AppHeader from "../components/AppHeader";

export default function HomePage() {

    return (
        <>
            <AppHeader />
            <div>
                <h1 className="text-center">Benvenuto su OmniShop</h1>
                <p className="py-3 px-4">Su OmniShop trovi una selezione di prodotti pensati per ogni esigenza: abbigliamento, accessori, tecnologia ed elettronica, tutto in un unico posto.
                    Esplora le ultime novità, scopri offerte imperdibili e acquista in modo semplice e veloce.
                </p>
            </div>
            <AppFooter />
        </>
    )
}