import React, { useRef } from "react";
import "./booking.css"; // Import your CSS file
import star from "./images/Burst-star.png";
import cake from "./images/cake.png";
import cele from "./images/cele.png";
import styled, { keyframes, css } from "styled-components";
import card from "./images/Frame 1116606587.svg";
import arrow from "./images/Arrow-Up-Right--Streamline-Feather.png";
import babyShower from "./images/babyShower.png";
import excite from "./images/excite.png";
import circleArrow from "./images/Circle-Arrow-Up-Right--Streamline-Tabler.png";
import rect1 from "./images/Rectangle 235.png";
import rect2 from "./images/Rectangle 236.png";
import phone from "./images/phone-call-svgrepo-com 1.png";
import partyImg from "./images/partyImg.svg";
import burstStarBlack from "./images/burststarblack.png";
import sideStars from "./images/sideStars.png";
import { motion, useInView } from "framer-motion";
import scanCard from "./images/scanCard.svg";
import image1 from "../../assets/booking images/Screenshot (1)~2.png";
import image2 from "../../assets/booking images/Screenshot (8)~2.png";
import image3 from "../../assets/booking images/Screenshot (9)~2.png";
import image4 from "../../assets/booking images/Screenshot (10)~2.png";
import image5 from "../../assets/booking images/Screenshot (11)~2.png";
import image6 from "../../assets/booking images/Screenshot (12)~2.png";
import image7 from "../../assets/booking images/Screenshot (13)~2.png";
import image8 from "../../assets/booking images/Screenshot (14)~2.png";
import image9 from "../../assets/booking images/Screenshot (16)~2.png";
import image10 from "../../assets/booking images/Screenshot (17)~2.png";

const Booking = () => {
  const imgs = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
  ];
  const imgRow1 = [image1, image2, image3, image4, image9];
  const imgRow2 = [image5, image6, image7, image8, image10];

  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div className="w-full h-auto relative bg mt-12">
      <div className="w-full bg1 py-4">
        <Wrapper>
          <Marquee>
            <MarqueeGroup>
              <div className="flex justify-start items-baseline gap-2 opacity-50">
                <span className="flex justify-start items-baseline gap-2">
                  <img src={star} alt="star" className="h-[3rem]" />
                  <img src={cake} alt="cake" className="h-[3rem]" />
                  <MarqueeText>
                    <span className="text-transparent text-5xl md:text-5xl lg:text-7xl xl:text-7xl font-extrabold">
                      Birthday Parties
                    </span>
                  </MarqueeText>
                  <img src={star} alt="star" className="h-[3rem]" />
                </span>
                <span className="flex justify-start items-baseline gap-2 opacity-50">
                  <img src={cele} alt="cele" className="h-[3rem]" />
                  <MarqueeText>
                    <span className="text-5xl md:text-5xl lg:text-7xl xl:text-7xl font-extrabold">
                      Kitty Parties
                    </span>
                  </MarqueeText>
                </span>
                <span className="flex justify-start items-baseline gap-2">
                  <img src={star} alt="star" className="h-[3rem]" />
                  <img src={excite} alt="cele" className="h-[3rem]" />
                  <MarqueeText>
                    <span className="text-5xl md:text-5xl lg:text-7xl xl:text-7xl font-extrabold">
                      Corporate Events
                    </span>
                  </MarqueeText>
                </span>
                <span className="flex justify-start items-baseline gap-2">
                  <img src={star} alt="star" className="h-[3rem]" />
                  <img src={babyShower} alt="cele" className="h-[3rem]" />
                  <MarqueeText>
                    <span className="text-5xl md:text-5xl lg:text-7xl xl:text-7xl font-extrabold">
                      Baby Shower
                    </span>
                  </MarqueeText>
                </span>
              </div>
            </MarqueeGroup>
            <MarqueeGroup>
              <div className="flex justify-start items-baseline gap-2 opacity-50">
                <span className="flex justify-start items-baseline gap-2">
                  <img src={star} alt="star" className="h-[3rem]" />
                  <img src={cake} alt="cake" className="h-[3rem]" />
                  <MarqueeText>
                    <span className="text-5xl md:text-5xl lg:text-7xl xl:text-7xl font-extrabold">
                      Birthday Parties
                    </span>
                  </MarqueeText>
                  <img src={star} alt="star" className="h-[3rem]" />
                </span>
                <span className="flex justify-start items-baseline gap-2">
                  <img src={cele} alt="cele" className="h-[3rem]" />
                  <MarqueeText>
                    <span className="text-5xl md:text-5xl lg:text-7xl xl:text-7xl font-extrabold">
                      Kitty Parties
                    </span>
                  </MarqueeText>
                </span>
                <span className="flex justify-start items-baseline gap-2">
                  <img src={star} alt="star" className="h-[3rem]" />
                  <img src={excite} alt="cele" className="h-[3rem]" />
                  <MarqueeText>
                    <span className="text-5xl md:text-5xl lg:text-7xl xl:text-7xl font-extrabold">
                      Corporate Events
                    </span>
                  </MarqueeText>
                </span>
                <span className="flex justify-start items-baseline gap-2">
                  <img src={star} alt="star" className="h-[3rem]" />
                  <img src={babyShower} alt="cele" className="h-[3rem]" />
                  <MarqueeText>
                    <span className="text-5xl md:text-5xl lg:text-7xl xl:text-7xl font-extrabold">
                      Baby Shower
                    </span>
                  </MarqueeText>
                </span>
              </div>
            </MarqueeGroup>
          </Marquee>
        </Wrapper>
        <div className="flex flex-col md:flex-col lg:flex-row xl:flex-row w-[90%] mx-auto justify-center items-center gap-16 md:gap-16 lg:gap-6 xl:gap-6 pt-10 pb-16">
          <p className=" text-[3.4vh] md:text-[32px] lg:text-[48px] xl:text-[48px] font-bold text-white w-[100%] md:w-[100%] lg:w-[50%] xl:w-[50%] leading-[2.5rem] md:leading-[2.5rem] lg:leading-[3.4rem] xl:leading-[3.4rem] ">
            <span className="text-[#FFB136] whitespace-nowrap">
              Joy Junction Gamezone
            </span>{" "}
            <br className="block md:block lg:hidden xl:hidden" />
            <span className="">
              {" "}
              offers spaces for birthdays, anniversaries, and more.
            </span>
            <div className=" rounded-lg whitespace-nowrap inline-block">
              <div className="relative flex justify-start items-center rounded-xl">
                <span className="z-10">&nbsp;Book now&nbsp;</span>{" "}
                <motion.span
                  ref={ref}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "100%" } : { width: 0 }}
                  transition={{ duration: 1 }}
                  className="bg-gradient-to-r from-violet-500 to-fuchsia-500 w-full h-full absolute z-0 rounded-xl"
                ></motion.span>
              </div>
            </div>
            &nbsp;and make your occasion unforgettable!
          </p>
          <div className="transform relative -rotate-3 w-[100%] md:w-[100%] lg:w-[50%] xl:w-[50%] flex justify-center md:justify-center lg:justify-end xl:justify-end items-center">
            <img
              src={scanCard}
              alt="card"
              className="w-[100%] md:w-[80%] lg:w-[90%] xl:w-[90%] h-auto z-10"
            />
            <img
              src={sideStars}
              alt="sidestar"
              className="absolute -top-5 w-[100%] md:w-[80%] lg:w-[90%] xl:w-[90%] z-0"
            />
          </div>
        </div>
      </div>
      <div className="absolute bg-[#BBED46] w-full text-3xl md:text-3xl lg:text-5xl xl:text-5xl py-1 font-extrabold transform rotate-3 gap-3">
        <Wrapper>
          <Marquee>
            <MarqueeGroup>
              <div className="flex justify-center items-center gap-3">
                <span>JOY JUNCTION</span>{" "}
                <img src={burstStarBlack} alt="burset" />
              </div>
              <div className="flex justify-center items-center gap-3">
                <span>JOY JUNCTION</span>{" "}
                <img src={burstStarBlack} alt="burset" />
              </div>
              <div className="flex justify-center items-center gap-3">
                <span>JOY JUNCTION</span>{" "}
                <img src={burstStarBlack} alt="burset" />
              </div>
              <div className="flex justify-center items-center gap-3">
                <span>JOY JUNCTION</span>{" "}
                <img src={burstStarBlack} alt="burset" />
              </div>
            </MarqueeGroup>
            <MarqueeGroup>
              <div className="flex justify-center items-center gap-3">
                <span>JOY JUNCTION</span>{" "}
                <img src={burstStarBlack} alt="burset" />
              </div>
              <div className="flex justify-center items-center gap-3">
                <span>JOY JUNCTION</span>{" "}
                <img src={burstStarBlack} alt="burset" />
              </div>
              <div className="flex justify-center items-center gap-3">
                <span>JOY JUNCTION</span>{" "}
                <img src={burstStarBlack} alt="burset" />
              </div>
              <div className="flex justify-center items-center gap-3">
                <span>JOY JUNCTION</span>{" "}
                <img src={burstStarBlack} alt="burset" />
              </div>
            </MarqueeGroup>
          </Marquee>
        </Wrapper>
      </div>
      <div className="w-[100%] bg2 pb-10">
        <div className="w-full md:w-full lg:w-[90%] xl:w-[90%] mx-auto pt-32 flex flex-col md:flex-col lg:flex-row xl:flex-row justify-between items-start md:items-start gap-6 md:gap-6 lg:gap-0 xl:gap-0 lg:items-center xl:items-center">
          <div className="flex flex-col gap-6 md:gap-6 lg:gap-12 xl:gap-12 pl-[5vw] md:pl-[5vw] lg:pl-0 xl:pl-0 w-full md:w-full lg:w-auto xl:w-auto">
            <h2 className="text-white text-[20px] md:text-[20px] lg:text-[28px] xl:text-[28px] font-semibold">
              Host Your Next Event at{" "}
              <span className="text-[#FFB136] whitespace-nowrap">
                Joy Junction -
              </span>
              <br />
              We have space available for:
            </h2>
            <div className="flex flex-col justify-start items-start gap-4 md:gap-4 lg:gap-7 xl:gap-7 ">
              <div className="flex justify-start items-baseline gap-5">
                <img
                  src={arrow}
                  alt="arrow"
                  className="h-[25px] md:h-[35px] lg:h-auto xl:h-auto "
                />
                <div className="flex justify-start items-baseline gap-2">
                  <h2 className="text-white text-[28px] md:text-[32px] lg:text-[50px] xl:text-[50px] font-bold whitespace-nowrap">
                    Birthday Parties
                  </h2>
                  <img
                    src={cake}
                    alt="cake"
                    className="h-[35px] md:h-[30px] lg:h-[50px] xl:h-[50px] "
                  />
                </div>
              </div>
              <div className="flex justify-start items-baseline gap-5">
                <img
                  src={arrow}
                  alt="arrow"
                  className="h-[25px] md:h-[35px] lg:h-auto xl:h-auto "
                />
                <div className="flex justify-start items-baseline gap-2">
                  <h2 className="text-white text-[28px] md:text-[32px] lg:text-[50px] xl:text-[50px] font-bold whitespace-nowrap">
                    Kitty Parties
                  </h2>
                  <img
                    src={cele}
                    alt="cele"
                    className="h-[35px] md:h-[30px] lg:h-[50px] xl:h-[50px] "
                  />
                </div>
              </div>
              <div className="flex justify-start items-baseline gap-5">
                <img
                  src={arrow}
                  alt="arrow"
                  className="h-[25px] md:h-[35px] lg:h-auto xl:h-auto "
                />
                <div className="flex justify-start items-baseline gap-2">
                  <h2 className="text-white text-[28px] md:text-[32px] lg:text-[50px] xl:text-[50px] font-bold whitespace-nowrap">
                    Baby Shower
                  </h2>
                  <img
                    src={babyShower}
                    alt="babyShower"
                    className="h-[30px] md:h-[35px] lg:h-[50px] xl:h-[50px] "
                  />
                </div>
              </div>
              <div className="flex justify-start items-baseline gap-5">
                <img
                  src={arrow}
                  alt="arrow"
                  className="h-[25px] md:h-[35px] lg:h-auto xl:h-auto "
                />
                <div className="flex justify-start items-baseline gap-2">
                  <h2 className="text-white text-[28px] md:text-[32px] lg:text-[50px] xl:text-[50px] font-bold whitespace-nowrap">
                    Corporate Events
                  </h2>
                  <img
                    src={excite}
                    alt="excite"
                    className="h-[30px] md:h-[35px] lg:h-[50px] xl:h-[50px] "
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-col lg:flex-row xl:flex-row justify-start items-start sm:items-center gap-6 md:gap-2 lg:gap-12 xl:gap-12">
              <a
                href="https://forms.gle/CugqgWji9ia7b4ys9"
                target="_blank"
                className="w-auto"
              >
                <button className="relative flex justify-center items-center w-auto gap-1 bg-[#FFB136] rounded-2xl px-12 py-4 font-semibold overflow-hidden">
                  <motion.div
                    initial={{ x: "0%" }}
                    animate={{ x: "350%" }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      ease: "linear",
                    }}
                    className="absolute top-0 left-0 flex"
                  >
                    <img src={rect2} alt="rect1" className="h-[80px]" />
                    <img
                      src={rect2}
                      alt="rect2"
                      className="h-[100px] -ml-[77px]"
                    />
                  </motion.div>
                  <span className="text-xl font-bold">Enquire Now</span>
                  <img src={circleArrow} alt="circleArrow" className="h-full" />
                </button>
              </a>
              <div className="flex text-white justify-start items-center gap-2">
                <img src={phone} alt="phone" />
                <div className=" flex justify-start items-baseline gap-2">
                  <span className="text-lg">Call us at </span>
                  <span className="text-xl font-bold underline">
                    +91-9234669911
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[100%] md:w-full lg:w-[50%] xl:w-[50%] flex justify-start items-start pl-0 md:pl-0 lg:pl-24 xl:pl-24">
            <div className="hidden md:hidden lg:block xl:block">
              <div className="flex gap-4 justify-start items-center">
                <div className="vertical-marquee">
                  <div className="marquee-content">
                    {imgRow1.map((ele, index) => (
                      <img src={ele} alt="Image 1" key={index} />
                    ))}
                    {imgRow1.map((ele, index) => (
                      <img src={ele} alt="Image 1" key={index} />
                    ))}
                  </div>
                </div>
                <div className="vertical-marquee1 mt-[15vh]">
                  <div className="marquee-content1">
                    {imgRow2.map((ele, index) => (
                      <img src={ele} alt="Image 1" key={index} />
                    ))}
                    {imgRow2.map((ele, index) => (
                      <img src={ele} alt="Image 1" key={index} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[100vw] block md:block lg:hidden xl:hidden h-auto ">
              <Wrapper>
                <Marquee>
                  <MarqueeGroup>
                    {imgs.map((ele) => (
                      <ImageGroup key={ele}>
                        <Image src={ele} />
                      </ImageGroup>
                    ))}
                  </MarqueeGroup>
                  <MarqueeGroup>
                    {imgs.map((ele) => (
                      <ImageGroup key={ele}>
                        <Image src={ele} />
                      </ImageGroup>
                    ))}
                  </MarqueeGroup>
                </Marquee>
              </Wrapper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
const scrollX = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

// Common styles for the MarqueeGroup
const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  animation: ${scrollX} 30s linear infinite;
`;

// Styled components
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

const MarqueeGroup = styled.div`
  ${common}
`;

// Styled MarqueeText component with text-shadow for outline effect
const MarqueeText = styled.div`
  color: #0b021c; /* Make the text itself transparent */
  display: inline-block;
  overflow: hidden;
  line-height: 1.2; /* Adjust line-height to prevent cutting off text */
  padding: 0.2rem 0; /* Add padding to prevent text from being cut off */
  font-weight: bold;
  text-shadow: -2px -2px 0 #b8b4b4, 2px -2px 0 #b8b4b4, -2px 2px 0 #b8b4b4,
    2px 2px 0 #b8b4b4;
`;
const ImageGroup = styled.div`
  height: 300px;
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
