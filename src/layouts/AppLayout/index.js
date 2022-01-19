import React, {useState} from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar'

export default function AppLayout({ children }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    }
    return (
        <div>
            <SideBar isOpen={isOpen} toggle={toggle} />
            <Header toggle={toggle} />
            {/* <Header /> */}
            {children}
            <Footer />
        </div>
    );
}
