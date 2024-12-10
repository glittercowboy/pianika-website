import React from 'react';
import styled from 'styled-components';
import { FaSpotify, FaSoundcloud, FaInstagram, FaYoutube } from 'react-icons/fa';

const SocialLinksContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin: 2rem 0;
  z-index: 2;
`;

const SocialLink = styled.a`
  color: white;
  font-size: 1.5rem;
  opacity: 0.7;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
`;

function SocialLinks() {
  return (
    <SocialLinksContainer>
      <SocialLink href="https://open.spotify.com/artist/5dfZ5uSmzR7VQK0udbAVpf" target="_blank" rel="noopener noreferrer">
        <FaSpotify />
      </SocialLink>
      <SocialLink href="https://soundcloud.com/pianikamusic" target="_blank" rel="noopener noreferrer">
        <FaSoundcloud />
      </SocialLink>
      <SocialLink href="https://www.instagram.com/pianika.wav" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </SocialLink>
      <SocialLink href="https://www.youtube.com/@pianikamusic" target="_blank" rel="noopener noreferrer">
        <FaYoutube />
      </SocialLink>
    </SocialLinksContainer>
  );
}

export default SocialLinks;
