import React, { useEffect } from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: #1a1a1a;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
      <ContentWrapper>
        <div style={{ width: '100%', maxWidth: '600px', height: '430px' }}>
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
        </div>
      </ContentWrapper>
    </PageContainer>
  );
}

export default SamplePack;
