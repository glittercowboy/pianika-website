import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: #1a1a1a;
  background-image: url('/assets/images/sample-pack-background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.45);
    pointer-events: none;
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.1) 100%);
    pointer-events: none;
    z-index: 2;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  padding: 2rem;
`;

const CoverImage = styled.img`
  max-width: 80%;
  max-height: 60vh;
  object-fit: contain;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const ButtonContainer = styled.div`
  position: relative;
  z-index: 3;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  width: 100%;
`;

function SamplePack() {
  return (
    <PageContainer>
      <ContentWrapper>
        <CoverImage 
          src="/assets/images/sample-pack-cover.jpg" 
          alt="PIANIKA Sample Pack Cover"
        />
        <ButtonContainer>
        </ButtonContainer>
      </ContentWrapper>
    </PageContainer>
  );
}

export default SamplePack;
