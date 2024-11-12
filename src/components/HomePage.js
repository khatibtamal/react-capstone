import About from "./MainComponents/About";
import PromoReserveTable from "./MainComponents/PromoReserveTable";
import PromoWeekSpecials from "./MainComponents/PromoWeekSpecials";
import Testimonials from "./MainComponents/Testimonials";

function HomeMain() {
    return (
        <main>
            <PromoReserveTable />
            <PromoWeekSpecials />
            <Testimonials />
            <About />
        </main>
    );
}

export default HomeMain;