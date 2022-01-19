import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { logOut } from "../../actions/profile";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  NavLinksBtnLink,
  NavRouterLinks
} from "./NavBarElements";
import { FaBars } from "react-icons/fa";
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from "react-scroll";
import Logo from "../../Assets/images/logo-lvn-small.png";
import './Header.scss';

const Header = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  // const navigate = useNavigate();

  const { userInfo, isLoading, error } = useSelector((state) => state.profile);

  const log_Out = () => {
    dispatch(logOut(history));
    localStorage.clear();
    setTimeout(() => {
      history.push("/");
    }, 3000);
  };

  const renderIsLogin = () => {
    if (!userInfo) {
      return (
        <NavBtn>
          <NavRouterLinks to="/signup">Sign Up</NavRouterLinks>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      );
    }
    return (
      <NavBtn>
        <NavLinksBtnLink to="/profile">
          {userInfo && userInfo.name}
        </NavLinksBtnLink>
        <NavBtnLink onClick={log_Out}>Logout</NavBtnLink>
      </NavBtn>
    );
  };

  return (
    <>
        <IconContext.Provider value={{ color: '#fff' }}>
          <Nav >
          {/* scrollNav={scrollNav} */}
            <NavbarContainer>
              <NavLogo to="/" onClick={toggleHome}>
                <img src={Logo} alt="lvn" style={{ width: "150px" }} />
              </NavLogo>
              <MobileIcon onClick={toggle}>
                <FaBars />
              </MobileIcon>
              <NavMenu>
                <NavItem>
                  <NavLinks
                    to="about"
                    duration={500}
                    spy={true}
                    exact='true'
                  >About</NavLinks>
                  {/* smooth={true} */}
                </NavItem>
                <NavItem>
                  <NavLinks
                    to="discover"
                    duration={500}
                    spy={true}
                    exact='true'
                  >Discover</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks
                    to="courses"
                    duration={500}
                    spy={true}
                    exact='true'
                  >Courses</NavLinks>
                </NavItem>
                <NavItem>
                  <NavRouterLinks
                    to="blogs"
                    duration={500}
                    spy={true}
                    exact='true'
                  >Blogs</NavRouterLinks>
                </NavItem>
              </NavMenu>
              {/* <NavBtn>
                <NavBtnLink to="/signin">Sign In</NavBtnLink>
              </NavBtn> */}
              <NavBtn>{renderIsLogin()}</NavBtn>
            </NavbarContainer>
          </Nav>
        </IconContext.Provider>
    </>
  );
};

export default Header;