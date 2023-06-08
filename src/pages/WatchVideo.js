import styled from "styled-components";

const YelloTitle = styled.h1`
  color: #FFA40B;
  font-weight: 900;
`;

export default function WatchVideo() {
  return (
    <div className="my-4" id="video">
      <YelloTitle>WATCH VIDEO ON SHIBA BUDZ ECOSYSTEM</YelloTitle>
      <div className="flex justify-center">
        <img src="/assets/images/tv.png" alt="" width="40%" />
      </div>
    </div>
  )
}