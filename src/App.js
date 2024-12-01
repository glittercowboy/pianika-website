import React from 'react';
import styled from 'styled-components';
import { FaSpotify, FaSoundcloud, FaInstagram, FaYoutube, FaMusic } from 'react-icons/fa';
import '@fontsource/eb-garamond';

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

const Title = styled.h1`
  font-family: 'EB Garamond', serif;
  font-size: 7.5rem;
  margin: 0;
  letter-spacing: 0.5rem;
  text-align: center;
  font-weight: 400;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.1);

  & > span {
    display: inline-block;
    opacity: 0;
    animation: typewriter 0.5s ease forwards;
  }

  ${[...Array(7)].map((_, i) => `
    & > span:nth-child(${i + 1}) {
      animation-delay: ${i * 0.15}s;
    }
  `).join('')}

  @keyframes typewriter {
    0% {
      opacity: 0;
      transform: translateY(-10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  animation: float 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  animation-delay: 2.5s;

  @keyframes float {
    0% { transform: translateY(0); }
    25% { transform: translateY(-2px); }
    50% { transform: translateY(-3px); }
    75% { transform: translateY(-2px); }
    100% { transform: translateY(0); }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 3rem;
  justify-content: center;
  align-items: center;
  animation: fadeIn 1.2s ease-out;
  animation-delay: 1.25s;
  opacity: 0;
  animation-fill-mode: forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const IconLink = styled.a`
  color: white;
  font-size: 1.8rem;
  transition: all 0.5s ease;
  position: relative;
  
  &:hover {
    opacity: 0.8;
    transform: scale(1.15) translateY(-5px);
    color: rgba(255, 255, 255, 0.9);
    text-shadow: 0 0 15px rgba(255, 255, 255, 0.7);
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: white;
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.3s ease;
    opacity: 0.5;
  }

  &:hover::after {
    transform: scaleX(1);
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
