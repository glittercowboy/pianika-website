import React, { useEffect } from 'react';
import styled from 'styled-components';
import SocialLinks from './SocialLinks';

const PageContainer = styled.div`
  min-height: 100vh;
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
  padding: 5vh 0;
  overflow: hidden;
  position: relative;
  font-family: 'Cochin', serif;

  @media (max-width: 768px) {
    padding: 25px;
    overflow: hidden;
  }
`;

const Header = styled.h1`
  margin-top: 10px;
  font-size: 2rem;
  color: white;
  text-align: center;
  font-family: 'Cochin', serif;

  @media (max-width: 768px) {
    margin-top: 5px;
  }
`;

const SubHeader = styled.h3`
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 1.25rem;
  color: white;
  text-align: center;
  font-family: 'Cochin', serif;
`;

const BodyText = styled.p`
  font-size: 1.2em;
  line-height: 1.6;
  margin: 20px 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 0 25px;
  }
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 600px;
  height: 430px;
  margin: 20px 0;
`;

function InTheStudio() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://link.glittercowboy.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <PageContainer>
      <Header>In The Studio With: PIANIKA</Header>
      <SubHeader>4 December 2024 4 - 5:30PM EST</SubHeader>
      <ContentBlock>
        <BodyText>
          Let's go behind the scenes of two unreleased tracks, looking at shaker loops, Granulator pads, call and response patterns, and carving out space ✨
          <br /><br />
          I want you to leave this session feeling like you won't have to sift through samples for the right shaker again, and the confidence to turn a few good ingredients into a delectable dish.
        </BodyText>
        <FormContainer>
          <iframe
            src="https://link.glittercowboy.com/widget/form/x4tXspKfOaqNOMLEzit5"
            style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
            id="inline-x4tXspKfOaqNOMLEzit5"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="In The Studio With: PIANIKA"
            data-height="430"
            data-layout-iframe-id="inline-x4tXspKfOaqNOMLEzit5"
            data-form-id="x4tXspKfOaqNOMLEzit5"
            title="In The Studio With: PIANIKA"
          ></iframe>
        </FormContainer>
        <SocialLinks />
      </ContentBlock>
    </PageContainer>
  );
}

export default InTheStudio;
