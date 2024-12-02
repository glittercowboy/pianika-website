import React, { useEffect } from 'react';
import styled from 'styled-components';

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
  overflow: hidden;
  position: relative;
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
    </PageContainer>
  );
}

export default InTheStudio;
