import React from 'react';
import styled from 'styled-components';
import { FaCaretDown, FaGlobe, FaFacebookF, FaTwitter, FaBlog } from 'react-icons/fa';
import {TiSocialInstagram} from 'react-icons/ti';
import { IconContext } from 'react-icons';

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
const SocialBox = styled.div`
  display: block;
  grid-column-end: 9;
  grid-column-start: 7;
  grid-row-end: 7;
  grid-row-start: 1;
  text-align: right;
`
const Language = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  color: white;
  .language-svg {
    display: inline-block;
    text-align: center;
    width: 2em;
    height: 1em;
  }
`
const SocialIconsContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;
`
const Social = styled.div`
  display: inline-block;
  background-color: #7c828d;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  text-align: center;
  font-size: 18px;
  height: 32px;
  width: 32px;
  line-height: 32px;
  margin-right: 10px;
  color: rgb(60,63,73);
  .social-icons {
    height: 1.50em;
  }
`
const CharityStatement=styled.p`
  text-align: right;
`
const Legal = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  color: rgb(196,199,207);
  justify-content: flex-end;
  margin-top: 25px;
  text-align: right;
  .first-legal {
    display:block;
    list-style-type: none;
    li {
      display: inline-block;
    }
    .after ::after {
      content: "•";
      padding: 7px;
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
                  <li>React Fun</li>
                  <li>Universal Variable</li>
                  <li>Pull and Push</li>
                  <li>Explore Curiosity</li>
                </ul>
                <ul>
                  <li>Try Again Simulator</li>
                  <li>Debugging Sim</li>
                  <li>21 Days to Deploy</li>
                  <li>Ask Questions?</li>
                </ul>
              </TrendingGames>
            </FooterNav>
            <SocialBox>
              <Language>
                <IconContext.Provider value={{className: 'language-svg'}}>
                  <FaGlobe/>
                </IconContext.Provider>
                  Language: English
                <IconContext.Provider value={{className: 'language-svg'}}>
                    <FaCaretDown/>
                </IconContext.Provider>
              </Language>
              <SocialIconsContainer>
                <IconContext.Provider value={{className: 'social-icons'}}>
                  <Social><FaFacebookF/></Social>
                  <Social><FaTwitter/></Social>
                  <Social><TiSocialInstagram/></Social>
                  <Social><FaBlog/></Social>
                </IconContext.Provider>
              </SocialIconsContainer>
              <CharityStatement>
                The Humble community has contributed over $183,000,000 to charity since 2010, making an amazing difference to causes all over the world.
              </CharityStatement>
              <Legal>
                <ul className='first-legal'>
                  <li className='after'>Terms of Service</li>
                  <li>Privacy Policy</li>
                </ul>
                <ul className='first-legal'>
                  <li className='after'>Cookie Policy</li>
                  <li>Legal Notices</li>
                </ul>
              </Legal>
            </SocialBox>
          </ColumnBox>
        </Wrapper>
      </FooterBox>
    )
  }
}