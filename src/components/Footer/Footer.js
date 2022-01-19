import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  FooterLinksWrapper,
  FooterLinksContainer,
  FooterLinkItem,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
  WebsiteRights
} from './FooterElements';
import Image from '../../Assets/images/logo-lvn-small.png';
import './Footer.scss';
import { animateScroll as scroll } from "react-scroll";

export default function Footer() {
  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItem>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/">How it works</FooterLink>
              <FooterLink to="/">Testimonials</FooterLink>
              <FooterLink to="/">Careers</FooterLink>
              <FooterLink to="/">Investors</FooterLink>
              <FooterLink to="/">Terms of Services</FooterLink>
            </FooterLinkItem>
            <FooterLinkItem>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to="/">Contact</FooterLink>
              <FooterLink to="/">Support</FooterLink>
              <FooterLink to="/">Destination</FooterLink>
              <FooterLink to="/">Sponsorships</FooterLink>
            </FooterLinkItem>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItem>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to="/">Submit Video</FooterLink>
              <FooterLink to="/">Ambassadors</FooterLink>
              <FooterLink to="/">Agency</FooterLink>
              <FooterLink to="/">Influencer</FooterLink>
            </FooterLinkItem>
            <FooterLinkItem>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to="/">Instagram</FooterLink>
              <FooterLink to="/">Facebook</FooterLink>
              <FooterLink to="/">Youtube</FooterLink>
              <FooterLink to="/">Twitter</FooterLink>
              <FooterLink to="/">LinkedIn</FooterLink>
            </FooterLinkItem>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <hr />
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" className="logo">
              <img src={Image} className="logo-img" alt="lvn" onClick={toggleHome} />
            </SocialLogo>
            <WebsiteRights className="copyright">
              <p>
                Learning Vietnamese &copy; {new Date().getFullYear()} - All rights reserved.<br />
                <p style={{ textAlign: 'center' }}>Developed by Thanh Tinh</p>
              </p>
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}
