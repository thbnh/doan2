import Header from '../components/header/header';
import Footer from '../components/footer/footer';

function NoNavbar({ children }) {
    return (
        <div className="wrapper">
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default NoNavbar;
