import React from 'react';
import P from '../styled-components/P$.jsx';
import RightCodeDiv from '../styled-components/RightCodeDiv.jsx';
import LeftText from '../styled-components/LeftText.jsx';
import StepsDiv from '../styled-components/StepsDiv$.jsx';

const FirstStep = () => {
  return (
    <StepsDiv id="firstStep" >
      <LeftText>
        <h2>Initialize two-auth.</h2>
        <P>Created a Twilio account? Check. <br></br>Now require two-auth into your application.</P>
      </LeftText>
      <RightCodeDiv>
        <p>const twoFactor = require('two-factor'); <br></br>const client = twoFactor(*ACC_SID*, *AUTH_TOKEN*);</p>
      </RightCodeDiv>
    </StepsDiv>
  )
}

export default FirstStep;
