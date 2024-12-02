import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaSpotify, FaSoundcloud, FaInstagram, FaYoutube, FaMusic } from 'react-icons/fa';

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-6px); }
  100% { transform: translateY(0px); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background: #1a1a1a;
  background-image: url('/assets/images/sky-background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.3) 100%);
    pointer-events: none;
    z-index: 1;
  }
`;

const Title = styled.h1`
  font-family: "Cochin", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 7.5rem;
  letter-spacing: 0.25em;
  margin: 0;
  padding: 0;
  text-align: center;
  white-space: nowrap;
  animation: ${float} 8s ease-in-out infinite;
  
  @media (max-width: 768px) {
    font-size: 4rem;
    letter-spacing: 0.25em;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
    letter-spacing: 0.25em;
  }

  @media (max-width: 380px) {
    font-size: 1.8rem;
    letter-spacing: 0.25em;
  }

  span {
    display: inline-block;
    opacity: 0;
    animation: ${fadeIn} 0.15s ease-in-out forwards;
  }

  ${Array.from({ length: 7 }).map((_, i) => `
    span:nth-child(${i + 1}) {
      animation-delay: ${i * 0.15}s;
    }
  `).join('')}
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  padding: 20vh 0;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  z-index: 2;
`;

const IconLink = styled.a`
  color: white;
  font-size: 1.5rem;
  transition: all 0.2s ease-in-out;
  opacity: 0.7;
  
  &:hover {
    transform: scale(1.1);
    opacity: 1;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  }
`;

function App() {
  return (
    <AppContainer>
      <ContentContainer>
        <div style={{ flex: 1 }} />
        <Title>
          <span>P</span>
          <span>I</span>
          <span>A</span>
          <span>N</span>
          <span>I</span>
          <span>K</span>
          <span>A</span>
        </Title>
        <div style={{ flex: 1 }} />
        <SocialLinks>
          <IconLink href="https://open.spotify.com/artist/6ESkBVPwRTv9Tn9WyrNoQC?si=xTvUsq7fT3GXUi54-ILHlQ" target="_blank" rel="noopener noreferrer">
            <FaSpotify />
          </IconLink>
          <IconLink href="https://music.apple.com/us/artist/pianika/1619462850" target="_blank" rel="noopener noreferrer">
            <FaMusic />
          </IconLink>
          <IconLink href="https://soundcloud.com/pianika" target="_blank" rel="noopener noreferrer">
            <FaSoundcloud />
          </IconLink>
          <IconLink href="https://www.instagram.com/PIANIKAmusic" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </IconLink>
          <IconLink href="https://www.youtube.com/@pianikamusic" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </IconLink>
        </SocialLinks>
      </ContentContainer>
    </AppContainer>
  );
}

export default App;
