import Navbar from '../components/navbar/navbar';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

function MainLayout({ children }) {
    return (
        <div>
            <Header />
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}

export default MainLayout;
