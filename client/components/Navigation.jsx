import React from 'react';
import styled from 'styled-components';
import { AiFillCaretDown, AiOutlineSearch, AiFillWallet, AiFillStar } from 'react-icons/ai';
import { FaUserCircle, FaShoppingCart } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const NavWrapper = styled.div`
  margin-left: 28px;
  margin-right: 28px;
`
const NavBox = styled.div`
  background-color: rgb(73, 79, 92);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const NavTop = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 15px;
  padding-top: 25px;
`
const Humble = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  .logo-humble {
    height:40px;
  }
`
const MenuBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  color: rgb(216,216,218);
  height: 65px;
  font-family: 'Sofia Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: normal;
  .menu-titles {
    cursor: pointer;
    padding-right: 10px;
    padding-left: 10px;
    padding-bottom: 25px;
  }
  .store {
    color: white;
  }
`
const InputContainer = styled.div`
  display: flex;
  background-color: #7d828a;
  margin-left: 200px;
  margin-bottom: 20px;
  width: 400px;
  height: 40px;
  box-sizing: border-box;
  border-width: 0px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  font-family: 'Sofia Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 15px;
  font-weight: 700;
  .search-icon {
    color: #4e555d;
    margin-left: 170px;
    margin-top: 8px;
    width: 30px;
    height: 25px;
  }
`
const InputBar = styled.input`
  background-color: #7d828a;
  font-family: 'Sofia Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 15px;
  font-weight: 700;
  box-sizing: border-box;
  border-width: 0px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  ::placeholder {
    color: #4e555d;
  }
`
const Login = styled.div`
  display: flex;
  border-color: rgb(117,120,128);
  border-style: solid;
  border-width: 2px;
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
  margin-left: 10px;
  margin-bottom: 15px;
  .user-icon {
    width: 35px;
    height: 35px;
    margin: 10px;
  }
  .login-text {
    margin-top: 20px;
    margin-right: 10px;
    margin-left: 5px;
  }
`
const SignUp = styled.div`
  display: flex;
  border-color: rgb(117,120,128);
  border-style: solid;
  border-width: 2px;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  border-left-width: 0px;
  margin-bottom: 15px;
  .sign-text {
    margin-top: 19px;
    margin-right: 10px;
    margin-left: 5px;
    margin-bottom: 19px;
  }
`
const NavBottom = styled.div`
  display: flex;
  flex-direction: row;
  font-family: 'Sofia Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 15px;
  list-style: none;
  border-top-style: solid;
  border-top-width: 1px;
  border-color: #282b33;
  margin-left: 28px;
  margin-right: 28px;
`
const NavBottomList = styled.ul`
  color: #d8d8da;
  display: flex;
  list-style: none;
  margin-left: 50px;
  .nav-bottom-list {
    font-weight: 500;
    margin-left: 15px;
  }
  .credit {
    color: #ef9841;
  }
`
const Shopping = styled.ul`
  margin-left: 25%;
  color: #d8d8da;
  display: flex;
  list-style: none;
  .shopping {
    width: 17px;
    height: 17px;
    margin-right: 10px;
    margin-left: 10px;
  }
`

export default class Navigation extends React.Component {
  render() {
    return (
      <NavBox>
        <NavWrapper>
          <NavTop>
            <Humble>
              <img className="logo-humble" src="https://humblebundle-a.akamaihd.net/static/hashed/4814f84495cd679571cb94896978da3825562075.svg"></img>
            </Humble>
            <MenuBox>
              <div className="menu-titles">13 BUNDLES <AiFillCaretDown/></div>
              <div className="menu-titles">CHOICE</div>
              <div className="menu-titles store">STORE</div>
              <div className="menu-titles">ABOUT <AiFillCaretDown/></div>
              <InputContainer>
                <InputBar placeholder="Search"></InputBar>
                <IconContext.Provider value={{className: 'search-icon'}}><AiOutlineSearch /></IconContext.Provider>
              </InputContainer>
              <Login>
                <IconContext.Provider value={{className: 'user-icon'}}><FaUserCircle/></IconContext.Provider>
                <p className="login-text">LOG IN</p>
              </Login>
              <SignUp>
                <p className="sign-text">SIGN UP</p>
              </SignUp>
            </MenuBox>
          </NavTop>
        </NavWrapper>
        <NavBottom>
          <NavBottomList>
            <li className='nav-bottom-list'>ON SALE</li>
            <li className='nav-bottom-list'>NEW RELEASES</li>
            <li className='nav-bottom-list'>BESTSELLING<AiFillCaretDown/></li>
            <li className='nav-bottom-list'>BROWSE<AiFillCaretDown/></li>
            <li className='nav-bottom-list'>CHARITY</li>
            <li className='nav-bottom-list credit'>GET $8 WALLET CREDIT</li>
          </NavBottomList>
          <Shopping>
            <IconContext.Provider value={{className: 'shopping'}}><AiFillWallet/></IconContext.Provider>
            <li>$0.00</li>
            <IconContext.Provider value={{className: 'shopping'}}><AiFillStar/></IconContext.Provider>
            <li>0</li>
            <IconContext.Provider value={{className: 'shopping'}}><FaShoppingCart/></IconContext.Provider>
            <li>0</li>
          </Shopping>
        </NavBottom>
      </NavBox>
    );
  }
}
