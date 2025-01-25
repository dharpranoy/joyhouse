import React from 'react'
import styled, { keyframes, css } from "styled-components";
import insider1 from './images/insider13.jpg'
import insider2 from './images/insider14.jpg'
import insider3 from './images/insider15.jpg'
import insider4 from './images/insider16.jpg'
import insider5 from './images/insider17.jpg'
import insider6 from './images/insider18.jpg'
import insider7 from './images/insider19.jpg'
import insider8 from './images/insider20.jpg'
import insider9 from './images/insider9.jpg'
import insider10 from './images/insider10.jpg'
import insider11 from './images/insider11.jpg'
import insider12 from './images/insider12.jpg'
import BorderText from '../common/BorderText'

const Insider = () => {
  const row1 = [
    insider1,insider2,insider3,insider4, insider5, insider6,
  ];

  const row2 = [
    insider7,insider8,insider9,insider10,insider11,insider12,
  ];

  return (
    <div className='mt-14' id='insider'>
      <div className='flex justify-center sm:justify-end px-4'>
        <BorderText text={"insiders"} />
      </div>

      {/* scroller */}
      <AppContainer>
      <Wrapper>
        <Marquee>
          <MarqueeGroup>
            {row1.map((el) => (
              <ImageGroup key={el}>
                <Image src={el}  />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el) => (
              <ImageGroup key={el}>
                <Image src={el}  />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
        <Marquee>
          <MarqueeGroup2>
            {row2.map((el) => (
              <ImageGroup key={el}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
          <MarqueeGroup2>
            {row2.map((el) => (
              <ImageGroup key={el}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
        </Marquee>
      </Wrapper>
    </AppContainer>


    </div>
  )
}

const AppContainer = styled.div`
  width: 100vw;
  color: #000000;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;



const Marquee = styled.div`
  display: flex;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
 height:300px;
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  border-radius: 0.5rem;
  
  padding: 5px 4px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export default Insider