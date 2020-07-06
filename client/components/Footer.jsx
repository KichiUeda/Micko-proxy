import React from 'react';
import styled from 'styled-components';

const FooterBox = styled.div`
  display: flex;
  background-color: #2f333d;
`
const ColumnBox = styled.div`
  margin-left: 50px;
  margin-bottom: 50px;
  flex-direction: column;
  color: #c4c7cf;
`

const Humble = styled.div`
  margin-top: 25px;
  img {
    width: 99px;
    height: 29px;
  }
`
const FooterEntry = styled.div`
  margin-top: 25px;
  font-size: 12px;
  &:hover {
    color: white;
  }
`
const Invite = styled.p`
  color: #ef9841;
  font-weight: bold;
  font-size: 12px;
`
const SubTitle = styled.h2`
  color: white;
  font-size: 12px;
  margin-top: 25px;
`
const Language = styled.div`
  color:white;
  font-size: 12px;
  margin-top: 25px;
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
  color: #c4c7cf;
`
const ArrowDown = styled.span`
  border-left: 3px solid transparent;
  border-right: 3px solid transparent;
  border-top: 3px solid white;
  margin-top: 2px;
`
const Social = styled.div`

  .fa {
    padding: 20px;
    font-size: 14px;
    font-color: white;
    width: 50px;
    text-align: center;
    text-decoration: none;
    background: #3b3e48;
  };
  .fa:hover {
    opacity: 0.7;
  }
`
export default class Footer extends React.Component {
  render() {
    return (
      <FooterBox>
        <ColumnBox>
          <Humble>
            <img src="https://humblebundle-a.akamaihd.net/static/hashed/4814f84495cd679571cb94896978da3825562075.svg"></img>
          </Humble>
          <FooterEntry>Limited time offer—Get $8 Wallet Credit to spend on your next store purchase!</FooterEntry>
          <Invite>INVITE A FRIEND</Invite>
        </ColumnBox>
        <ColumnBox>
          <SubTitle>About</SubTitle>
          <FooterEntry>Blog</FooterEntry>
          <FooterEntry>Support</FooterEntry>
          <FooterEntry>Order Resender</FooterEntry>
          <FooterEntry>Blog</FooterEntry>
          <FooterEntry>Developer</FooterEntry>
        </ColumnBox>
        <ColumnBox>
          <SubTitle>Trending Games</SubTitle>
          <Row>
            <ColumnBox>
              <FooterEntry>Game</FooterEntry>
              <FooterEntry>Game</FooterEntry>
              <FooterEntry>Game</FooterEntry>
              <FooterEntry>Game</FooterEntry>
              <FooterEntry>Game</FooterEntry>
            </ColumnBox>
            <ColumnBox>
              <FooterEntry>Game</FooterEntry>
              <FooterEntry>Game</FooterEntry>
              <FooterEntry>Game</FooterEntry>
              <FooterEntry>Game</FooterEntry>
            </ColumnBox>
          </Row>
        </ColumnBox>
        <ColumnBox>
          <Language>
            <i class="fa fa-globe"></i>
            Language: English <ArrowDown></ArrowDown>
          </Language>
          <Social>
            <a href="#" class="fa fa-facebook"></a>
            <a href="#" class="fa fa-twitter"></a>
            <a href="#" class="fa fa-instagram"></a>
          </Social>
          <FooterEntry>The Humble community has contributed over $182,000,000 to charity since 2010, making an amazing difference to causes all over the world.</FooterEntry>
        </ColumnBox>
      </FooterBox>
    )
  }
}