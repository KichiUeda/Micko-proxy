import React from 'react';
import styled from 'styled-components';

const FooterBox = styled.div`
  display: block;
  background-color: #2f333d;
`
const ColumnBox = styled.div`
  display: grid;
  grid-template-columns: repeat(8, minmax(10px,auto));
  grid-template-rows: repeat(6, minmax(10px,auto));
  color: #c4c7cf;
  font-size: 14px;
`
const Wrapper = styled.div`
  margin-left: 45px;
  margin-right: 45px;
  padding-left: 100px;
  padding-right: 100px;
  text-size-adjust: 100%;
`
const Humble = styled.div`
  display: block;
  grid-column-end: 3;
  grid-column-start: 1;
  grid-row-end: 2;
  grid-row-start: 1;
  margin-top: 25px;
  img {
    width: 99px;
    height: 29px;
  }
`
const Referral = styled.div`
  display: block;
  grid-column-end: 3;
  grid-column-start: 1;
  grid-row-end: 7;
  grid-row-start: 2;
  margin-top: 10px;
  .referral-link {
    color: #ef9841;
  }
`
const FooterNav = styled.section`
  display: flex;
  color: #c4c7cf;
  flex-direction: flex;
  grid-column-end: 7;
  grid-column-start: 3;
  grid-row-end: 7;
  grid-row-start: 1;
`
const FooterAbout = styled.div`
  display:block;
  h2 {
    color: #ecf1fe;
  };
  .about-links {
    display: flex;
    flex-wrap: wrap;
    li {
      display: list-item;
      flex-basis: 44%;
      overflow-x: hidden;
      overflow-y: hidden;
      text-align: left;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding-bottom: 10px;
      padding-right: 25px;
      padding-top: 20px;
    }
  };
`
const TrendingGames = styled.div`
  display: block;
  h2 {
    color: #ecf1fe;
  };
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      display: list-item;
      flex-basis: 43%;
      overflow-x: hidden;
      overflow-y: hidden;
      padding-bottom: 10px;
      padding-right: 20px;
      padding-top: 25px;
      text-align: left;
      text-overflow ellipsis;
      white-space: nowrap;
    }
  }
`

export default class Footer extends React.Component {
  render() {
    return (
      <FooterBox>
        <Wrapper>
          <ColumnBox>
            <Humble>
              <img src="https://humblebundle-a.akamaihd.net/static/hashed/4814f84495cd679571cb94896978da3825562075.svg"></img>
            </Humble>
            <Referral>
              <p>Limited time offer—Get $8 Wallet Credit to spend on your next store purchase!</p>
              <p className='referral-link'>INVITE A FRIEND</p>
            </Referral>
            <FooterNav>
              <FooterAbout>
                <h2>About</h2>
                <ul className='about-links'>
                  <li>Blog</li>
                  <li>Support</li>
                  <li>Order Resender</li>
                  <li>Developer</li>
                </ul>
              </FooterAbout>
              <TrendingGames>
                <h2>Trending Games</h2>
                <ul>
                  <li>Drug Dealer Simulator</li>
                  <li>420 Simulator</li>
                  <li>Hacker Man Link</li>
                  <li>Start Up Dev Ops</li>
                </ul>
                <ul>
                  <li>Hyper Focused Coder</li>
                  <li>Debugging Sim</li>
                  <li>ReACTIVE One Sheet</li>
                  <li>CSS WHAT?</li>
                </ul>
              </TrendingGames>
            </FooterNav>
          </ColumnBox>
        </Wrapper>
      </FooterBox>
    )
  }
}