import React from 'react';
import ExploreCard from '../common/ExploreCard';
import styled, { keyframes, css } from "styled-components";

const ExploreSection = ({data}) => {
  const row1 = data.images;

  return (
    <div>
      <ExploreCard data={data}/>
      <div>
        {/* scroller */}
        <AppContainer>
          <Wrapper>
            <Marquee>
              <MarqueeGroup>
                {row1.map((el, ind) => (
                  <ImageGroup key={ind}>
                    <Image src={el} />
                  </ImageGroup>
                ))}
              </MarqueeGroup>
              <MarqueeGroup>
                {row1.map((el, ind) => (
                  <ImageGroup key={ind}>
                    <Image src={el} />
                  </ImageGroup>
                ))}
              </MarqueeGroup>
            </Marquee>

          </Wrapper>
        </AppContainer>
      </div>
    </div>
  )
};

const AppContainer = styled.div`
  width: 100vw;
  color: #000000;
  background-color:#FEB235;
  padding:10px 20px 10px 20px;
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


const ImageGroup = styled.div`
 height:400px;
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

export default ExploreSection;
