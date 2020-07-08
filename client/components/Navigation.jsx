import React from 'react';
import styled from 'styled-components';

const NavBox = styled.div`
  background-color: rgb(73, 79, 92);
  justify-content: center;
`;
const Nav = styled.div`
  border-top: solid 1px;
  text-align: center;
  padding: 10px;
  color: grey;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Menus = styled.div`
  font-family: roboto;
  font-size: 14px;
  font-weight: bold;
  color: #c9d0de;
  margin: 20px;
  &:hover {
    color: white;
  }
`;

const SubMenu = styled.div`
  font-family: roboto;
  font-size: 15px;
  color: #c9d0de;
  margin-bottom: 8px;
  padding-left: 50px;
  &:hover {
    color: white;
  }
`

const Humble = styled.div`
  img {
    width: 99px;
    height: 29px;
  }
`
const SearchBar = styled.div`
margin-left: 100px;
  input {
    font-style: inherit;
    background-color: grey;
    padding: 5px;
    border-radius: 4px;
    border: none;
  }
`
const Login = styled.a`
  border: 2px solid #757880;
  &:hover {
    color: white;
  }
`
const Checkout = styled.div`
  font-family: roboto;
  font-size: 15px;
  color: #c9d0de;
  display: flex;
  align-items: flex-end;
`

export default class Navigation extends React.Component {
  render() {
    return (
      <NavBox>
        <Nav>
          <Humble>
          <img src="https://humblebundle-a.akamaihd.net/static/hashed/4814f84495cd679571cb94896978da3825562075.svg"></img>
          </Humble>
          <Menus>BUNDLES</Menus>
          <Menus>CHOICE</Menus>
          <Menus>STORE</Menus>
          <Menus>ABOUT</Menus>
          <SearchBar>
            <input placeholder="Search"></input>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <button type="submit"><i className="fa fa-search"></i></button>
          </SearchBar>
          <Login><Menus>LOG IN</Menus></Login>
          <Login><Menus>SIGN UP</Menus></Login>
        </Nav>
        <Nav>
          <SubMenu>ON SALE</SubMenu>
          <SubMenu>NEW RELEASES</SubMenu>
          <SubMenu>BESTSELLING</SubMenu>
          <SubMenu>BROWSE</SubMenu>
          <SubMenu>CHARITY</SubMenu>
          <Checkout>
            <SubMenu>
              <i class="fa fa-credit-card"></i>
              $0.00
            </SubMenu>
            <SubMenu>
              <span class="fa fa-star"></span>
              0
            </SubMenu>
            <SubMenu>
              <i class="fa fa-shopping-cart"></i>
              0
            </SubMenu>
          </Checkout>
        </Nav>
      </NavBox>
    );
  }
}
