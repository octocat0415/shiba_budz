import styled from "styled-components";

const BackgroundDiv = styled.div`
  // background-image: url(/assets/images/roadmap.png);
  width: 100%;
  // background-size: cover;
  // background-repeat: no-repeat;
  // min-height: 852px;
  position: relative;
  display: flex;
`

const Title = styled.h1`
  color: #FBFF11;
`;

const RocketImg = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -40%);
`;

const RoadMapCard = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const TokenList = styled.ol`
  list-style-image: url('/assets/images/dot.png');
`

export default function RoadMap() {
  return (
    <div className="my-5 relative flex justify-center" id="roadmap">
      <BackgroundDiv className="justify-center">
        <img src="/assets/images/roadmap.png" style={{zIndex: -1}} alt="" width="100%" />
      </BackgroundDiv>
        <div className="absolute top-0 mt-5">
          <Title className="font-bold text-6xl">Roadmap</Title>
        </div>
        <div className="flex w-3/4 justify-around absolute top-1/4 flex-col">
          <div className="h-full flex justify-around">

            <div className=" top-p-20 left-1/4">
              <div className="flex relative">
                <img src="/assets/images/r-1.png" width="311px" height="335px" alt="" />
                <RocketImg src="/assets/images/roadmap/1.png" alt="" />
                <RoadMapCard className="absolute top-auto">
                  <h6 style={{color: "#FFA40B"}}>Stage 1</h6>
                  <TokenList >
                    <li className="text-slate-900">Create token</li>
                    <li className="text-slate-900">Create token</li>
                    <li className="text-slate-900">Create token</li>
                    <li className="text-slate-900">Create token</li>
                  </TokenList>
                </RoadMapCard>
              </div>
            </div>

            <div className=" top-p-30 right-p-20 pt-40">
              <div className="flex relative">
                <img src="/assets/images/r-2.png" width="311px" height="335px" alt="" />
                <RocketImg src="/assets/images/roadmap/2.png" alt="" />
                <RoadMapCard className="absolute top-auto">
                  <h6 style={{color: "#FFA40B"}}>Stage 2</h6>
                  <TokenList >
                    <li className="text-slate-900">Create token</li>
                    <li className="text-slate-900">Create token</li>
                    <li className="text-slate-900">Create token</li>
                    <li className="text-slate-900">Create token</li>
                  </TokenList>
                </RoadMapCard>
              </div>
            </div>

          </div>

          <div className="h-full flex justify-around">
            
            <div className=" top-2/4 left-1/4">
              <div className="flex relative">
                <img src="/assets/images/r-3.png" width="311px" height="335px" alt="" />
                  <RocketImg src="/assets/images/roadmap/3.png" alt="" />
                  <RoadMapCard className="absolute top-auto">
                    <h6 style={{color: "#FFA40B"}}>Stage 3</h6>
                    <TokenList>
                      <li className="text-slate-900">Create token</li>
                      <li className="text-slate-900">Create token</li>
                      <li className="text-slate-900">Create token</li>
                      <li className="text-slate-900">Create token</li>
                    </TokenList>
                  </RoadMapCard>
              </div>
            </div>
            
            <div className=" top-p-60 right-p-20 pt-40">
              <div className="flex relative">
                <img src="/assets/images/r-4.png" width="311px" height="335px" alt="" />
                <RocketImg src="/assets/images/roadmap/4.png" alt="" />
                <RoadMapCard className="absolute top-auto">
                  <h6 style={{color: "#FFA40B"}}>Stage 4</h6>
                  <TokenList >
                    <li className="text-slate-900">Create token</li>
                    <li className="text-slate-900">Create token</li>
                    <li className="text-slate-900">Create token</li>
                    <li className="text-slate-900">Create token</li>
                  </TokenList>
                </RoadMapCard>
              </div>
            </div>
          </div>
        </div>
      <div className="absolute 2xl:visible md:invisible sm:invisible " style={{top: "25%"}}>
        <img src="/assets/images/Frame 37232.png" alt="" />
      </div>
    </div>
  )
}