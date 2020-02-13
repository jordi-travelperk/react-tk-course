import React, { Component } from "react";
import styled from "styled-components";
import FastfoodIcon from '@material-ui/icons/Fastfood';

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  height: 100vh;
  width: 270px;
  background-color: #252529;
  color: #fff;
`;

const SidebarMenu = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  list-style: none;
  width: 100%;
  padding: 0;
`;

const SidebarMenuItem = styled.li`
  display: flex;
  height: 40px;
  width: 100%;
  align-items: center;
  padding: 10px 0px;
  &:hover {
    background: rgba(255, 255, 255, 0.05);
    box-shadow: inset 3px 0 0 0 #ffffff;
    cursor: pointer;
  }
`;

const SidebarMenuItemLabel = styled.p`
  font-family: "Roboto", sans-serif;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.3;
  text-align: left;
  padding: 12px 0px;
  color: #ffffff;
  margin-left: 20px;
`;

const MenuBrand = styled.div`
  margin: 30px auto;
`;

const MenuLogo = styled.img`
  width: 60px;
  height: 60px;
`;

class Sidebar extends Component {
  render() {
    return (
      <SidebarContainer>
        <MenuBrand>
          <MenuLogo src={window.location.origin + '/tk.png'} />
          <h4>Travelperk Recipe App</h4>
        </MenuBrand>

        <SidebarMenu>

          <SidebarMenuItem>
            <FastfoodIcon style={{ marginLeft: "20px" }} />
            <SidebarMenuItemLabel>Ingredients</SidebarMenuItemLabel>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <FastfoodIcon style={{ marginLeft: "20px" }} />
            <SidebarMenuItemLabel>Recipes</SidebarMenuItemLabel>
          </SidebarMenuItem>

        </SidebarMenu>
      </SidebarContainer>
    );
  }
}

export default Sidebar;
