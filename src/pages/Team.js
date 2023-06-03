import styled from "styled-components";

const YelloTitle = styled.h1`
  color: #FFA40B;
  font-weight: 900;
`;

const ShadowDiv = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 20px 108px rgba(0, 0, 0, 0.15);
  border-radius: 30px;
  min-height: 315px;
  transform: translateY(-35%);
`;

const Name = styled.h1`
  color: #FFA40B;
  font-weight: bold;
`;

const LinkeinDiv = styled.div`
  width: 45px;
  height: 45px;
  background-color: #D9D9D9;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function Team() {
  return (
    <div className="my-4">
      <YelloTitle>Meet the team</YelloTitle>
      <div className="flex justify-center flex-wrap mt-4">
        <div className="w-1/4 mx-4">
          <div className="flex justify-center">
            <img src="/assets/images/t-1.png" className="z-10" />
          </div>
          <ShadowDiv className="flex flex-col items-center relative w-full pt-36">
            <Name>Foxe</Name>
            <p>Founder</p>
            <LinkeinDiv>
              <img src="/assets/images/in.png" alt="" />
            </LinkeinDiv>
          </ShadowDiv>
        </div>

        <div className="w-1/4 mx-4">
          <div className="flex justify-center">
            <img src="/assets/images/t-2.png" className="z-10" />
          </div>
          <ShadowDiv className="flex flex-col items-center relative w-full pt-36">
            <Name>Foxe</Name>
            <p>Founder</p>
            <LinkeinDiv>
              <img src="/assets/images/in.png" alt="" />
            </LinkeinDiv>
          </ShadowDiv>
        </div>

        <div className="w-1/4 mx-4">
          <div className="flex justify-center">
            <img src="/assets/images/t-3.png" className="z-10" />
          </div>
          <ShadowDiv className="flex flex-col items-center relative w-full pt-36">
            <Name>Foxe</Name>
            <p>Founder</p>
            <LinkeinDiv>
              <img src="/assets/images/in.png" alt="" />
            </LinkeinDiv>
          </ShadowDiv>
        </div>
        
        <div className="w-1/4 mx-4">
          <div className="flex justify-center">
            <img src="/assets/images/t-4.png" className="z-10" />
          </div>
          <ShadowDiv className="flex flex-col items-center relative w-full pt-36">
            <Name>Foxe</Name>
            <p>Founder</p>
            <LinkeinDiv>
              <img src="/assets/images/in.png" alt="" />
            </LinkeinDiv>
          </ShadowDiv>
        </div>

        <div className="w-1/4 mx-4">
          <div className="flex justify-center">
            <img src="/assets/images/t-1.png" className="z-10" />
          </div>
          <ShadowDiv className="flex flex-col items-center relative w-full pt-36">
            <Name>Foxe</Name>
            <p>Founder</p>
            <LinkeinDiv>
              <img src="/assets/images/in.png" alt="" />
            </LinkeinDiv>
          </ShadowDiv>
        </div>
      </div>
    </div>
  )
}