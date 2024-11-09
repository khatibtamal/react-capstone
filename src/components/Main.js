import About from "./MainComponents/About";
import PromoReserveTable from "./MainComponents/PromoReserveTable";
import PromoWeekSpecials from "./MainComponents/PromoWeekSpecials";
import Testimonials from "./MainComponents/Testimonials";

function Main() {
    return (
        <main>
            <PromoReserveTable />
            <PromoWeekSpecials />
            <Testimonials />
            <About />
        </main>
    );
}

export default Main;