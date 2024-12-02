import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background: #1a1a1a;
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/assets/images/sky-background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 5vh 0;
  overflow-y: auto;
  position: relative;
  font-family: 'Cochin', serif;
`;

const CoverImage = styled.img`
  width: 100%;
  max-width: 500px;
`;

const CoverImageLink = styled.a`
  display: block;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.01);
  }
`;

const DownloadButton = styled.a`
  display: inline-block;
  margin-top: 30px;
  padding: 15px 25px;
  background-color: #8faadc;
  color: white;
  text-decoration: none;
  font-size: 1rem;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #7a99c9;
    transform: scale(1.05);
  }
`;

const ContentWrapper = styled.div`
  width: 80%;
  max-width: 500px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const Header = styled.h1`
  margin-top: 20px;
  font-size: 2rem;
  color: white;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;

const SubHeader = styled.h3`
  margin-top: 10px;
  margin-bottom: 5px;
  font-size: 1.25rem;
  color: white;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;

const BodyText = styled.p`
  font-size: 1.2rem;
  color: white;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  margin-top: 5px;
  margin-bottom: 20px;
  line-height: 1.5;
`;

function SamplePack() {
  return (
    <PageContainer>
      <CoverImageLink href="https://www.dropbox.com/scl/fi/z1p845zfceiuizsc4em9t/PIANIKA-Tryphena-Sample-Pack.zip?rlkey=2xyxt003hpszsxng6efocgelz&st=2ucgzylv&dl=1" target="_blank" rel="noopener noreferrer">
        <CoverImage 
          src="/assets/images/sample-pack-cover.jpg" 
          alt="PIANIKA Sample Pack Cover"
        />
      </CoverImageLink>
      <DownloadButton href="https://www.dropbox.com/scl/fi/z1p845zfceiuizsc4em9t/PIANIKA-Tryphena-Sample-Pack.zip?rlkey=2xyxt003hpszsxng6efocgelz&st=2ucgzylv&dl=1" target="_blank" rel="noopener noreferrer">
        FREE DOWNLOAD
      </DownloadButton>
      <ContentWrapper>
        <BodyText>
          Here's a quick sojourn through my last 3 years producing and travelling to fascinating corners of the world with open ears and a microphone.
        </BodyText>
        <BodyText>In this sample pack you’ll find:</BodyText>
        <SubHeader>Melodic Elements</SubHeader>
        <BodyText>
          Acoustic and electronic phrases. Chop them up, stretch them out, pitch them up and down and blend them together to create call and response patterns.
        </BodyText>
        <SubHeader>Rhythmic Elements</SubHeader>
        <BodyText>
          Shaker loops made from field recordings, my favourite single shots, and foley percussion loops.
        </BodyText>
        <SubHeader>Spaces</SubHeader>
        <BodyText>
          Recordings from moments I’ve enjoyed around the world. Use these to add texture and paint a vivid story with sound 💫
        </BodyText>
        <SubHeader>Textures</SubHeader>
        <BodyText>
          Extracted from “spaces”, these are ideal for adding one-off moments that entertain the ears ✨
        </BodyText>
        <BodyText>
          Happy creating!!<br /><br />
          Pianika xx
        </BodyText>
      </ContentWrapper>
    </PageContainer>
  );
}

export default SamplePack;
