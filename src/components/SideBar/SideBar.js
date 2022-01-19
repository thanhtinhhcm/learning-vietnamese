import React from 'react';
import {
	SideBarContainer,
	Icon,
	CloseIcon,
	SidebarWrapper,
	SidebarMenu,
	SidebarLink,
	SideBtnWrap,
	SidebarRoute,
	SideBarBtnLink
} from './SidebarElements';

const SideBar = ({ isOpen, toggle, userInfo, log_Out }) => {
	// return (
	// 	<SideBarContainer isOpen={isOpen} onClick={toggle}>
	// 		<Icon onClick={toggle}>
	// 			<CloseIcon />
	// 		</Icon>
	// 		<SidebarWrapper>
	// 			<SidebarMenu>
	// 				<SidebarLink to="/about">
	// 					About
	// 				</SidebarLink>
	// 				<SidebarLink to="/discover">
	// 					Discover
	// 				</SidebarLink>
	// 				<SidebarLink to="/courses">
	// 					Courses
	// 				</SidebarLink>
	// 				<SidebarLink to="/signup">
	// 					Sign up
	// 				</SidebarLink>
	// 			</SidebarMenu>
	// 			<SideBtnWrap>
	// 				<SidebarRoute to="/signin">Sign In</SidebarRoute>
	// 			</SideBtnWrap>
	// 		</SidebarWrapper>
	// 	</SideBarContainer>
	// )
	if (userInfo) {
		return (
		  <SideBarContainer isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
			  <CloseIcon />
			</Icon>
			<SidebarWrapper>
			  <SidebarMenu className="container">
				<SidebarLink to="about" onClick={toggle}>
				  About
				</SidebarLink>
				<SidebarLink to="discover" onClick={toggle}>
				  Discover
				</SidebarLink>
				<SidebarLink to="services" onClick={toggle}>
				  Services
				</SidebarLink>
				<SideBtnWrap>
				  <SideBarBtnLink to="/profile">
					{userInfo && userInfo.name}
				  </SideBarBtnLink>
				</SideBtnWrap>
			  </SidebarMenu>
			  <SideBtnWrap>
				<SidebarRoute onClick={log_Out}className="btn">
				  Logout
				</SidebarRoute>
			  </SideBtnWrap>
			</SidebarWrapper>
		  </SideBarContainer>
		);
	  } else {
		return (
		  <SideBarContainer isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
			  <CloseIcon />
			</Icon>
			<SidebarWrapper>
			  <SidebarMenu className="container">
				<SidebarLink to="about" onClick={toggle}>
				  About
				</SidebarLink>
				<SidebarLink to="discover" onClick={toggle}>
				  Discover
				</SidebarLink>
				<SidebarLink to="services" onClick={toggle}>
				  Services
				</SidebarLink>
				<SideBarBtnLink to="/courses-all">Courses</SideBarBtnLink>
				<SideBarBtnLink to="/blogs">Blogs</SideBarBtnLink>
				{/* <SideBtnWrap> */}
				<SideBarBtnLink to="/signup">Sign Up</SideBarBtnLink>
				{/* </SideBtnWrap> */}
			  </SidebarMenu>
			  <SideBtnWrap>
				<SidebarRoute to="/signin">Sign In</SidebarRoute>
			  </SideBtnWrap>
			</SidebarWrapper>
		  </SideBarContainer>
		);
	  }
}

export default SideBar;