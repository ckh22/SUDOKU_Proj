import React from "react";
import { Menu, Container } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import SignedOutMenu from "./SignedOutMenu";
import SignedInMenu from "./SignedInMenu";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { authenticated } = useSelector((state) => state.auth);

  return (
    <Menu size='large' inverted fixed='top'>
      <Container>
        <Menu.Item as={NavLink} to='/members' header content='Researchers' />
        <Menu.Item as={NavLink} to='/projects' header content='Projects' />
        {authenticated ? <SignedInMenu /> : <SignedOutMenu />}
      </Container>
    </Menu>
  );
};

export default Navbar;
