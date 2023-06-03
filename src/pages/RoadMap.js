import styled from "styled-components";

const BackgroundDiv = styled.div`
  width: 100%;
  position: relative;
  display: flex;
`;

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
    <div className="my-5 relative flex justify-center">
      <BackgroundDiv>
        <img src="/assets/images/roadmap.png" style={{zIndex: -1}} alt="" width="100%" />
      </BackgroundDiv>
      <div className="absolute top-0 mt-5">
        <Title className="font-bold text-6xl">Roadmap</Title>
      </div>
      <div className="absolute flex" style={{top: "20%", left: "25%"}}>
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
      <div className="absolute flex" style={{top: "30%", right: "20%"}}>
        <img src="/assets/images/r-2.png" width="311px" height="335px" alt="" />
        <RocketImg src="/assets/images/roadmap/2.png" alt="" />
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
      <div className="absolute flex" style={{top: "50%", left: "25%"}}>
        <img src="/assets/images/r-3.png" width="311px" height="335px" alt="" />
        <RocketImg src="/assets/images/roadmap/3.png" alt="" />
        <RoadMapCard className="absolute top-auto">
          <h6 style={{color: "#FFA40B"}}>Stage 1</h6>
          <TokenList>
            <li className="text-slate-900">Create token</li>
            <li className="text-slate-900">Create token</li>
            <li className="text-slate-900">Create token</li>
            <li className="text-slate-900">Create token</li>
          </TokenList>
        </RoadMapCard>
      </div>
      <div className="absolute flex" style={{top: "60%", right: "20%"}}>
        <img src="/assets/images/r-4.png" width="311px" height="335px" alt="" />
        <RocketImg src="/assets/images/roadmap/4.png" alt="" />
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
      <div className="absolute" style={{top: "25%"}}>
        <img src="/assets/images/Frame 37232.png" alt="" />
      </div>
    </div>
  )
}