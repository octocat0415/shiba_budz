import styled from "styled-components";

const BackgroundDiv = styled.div`
  background-image: url(/assets/images/footer.png);
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 852px;
  position: relative;
  display: flex;
  background-color: #FFA40B;
  
`;

const LogoTitle = styled.h2`
  font-family: OCR A Extended;
  color: white;
  margin: 0;
  font-size: 80px;
  letter-spacing: -0.15em;
  text-shadow: 0px 7px 11px rgba(0, 0, 0, 0.25);
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: #FFA611;
  margin-left: -60px;
`;

const SmallLogoTitle = styled.h2`
  ont-family: OCR A Extended;
  font-size: 40px;
  color: white;
  margin: 0;
  text-align: left;
`

const BuyTokenBtn = styled.button`
  display: flex;
  padding: 20px;
  background: #FBA60D;
  border: 3px solid #FFDA9C;
  border-radius: 10px;
  font-weight: 900
`;

const JoinBtn = styled.button`
  border: 3px solid #FBFF11;
  padding: 20px;
  color: #FBFF11;
  border-radius: 10px;
`;

export default function Footer () {
  return (
    <div>
      <BackgroundDiv>
        {/* <div className='absolute brightness-75 w-full h-full bg-black opacity-30'></div> */}
        <div className="flex justify-center w-full flex-col items-center">
          <a href="#" className="-m-1.5 p-1.5 flex justify-center items-center no-underline" style={{fontFamily:"OCR A Extended"}}>
            <img
              className="w-auto z-10"
              src="/assets/images/logo-large.png"
              alt=""
            />
            <LogoTitle>Shiba Budz</LogoTitle>
          </a>
          <div className='flex justify-around w-2/6 my-4'>
            <BuyTokenBtn>Buy Tokens</BuyTokenBtn>
            <JoinBtn>Join presale</JoinBtn>
          </div>
          <div className="flex justify-between mt-20">
            <div className="w-2/6">
              <a href="#" className="-m-1.5 p-1.5 flex justify-center items-center no-underline" style={{fontFamily:"OCR A Extended"}}>
                <img
                  className="w-auto z-10"
                  src="/assets/images/logo-small.png"
                  alt=""
                />
                <SmallLogoTitle>Shiba Budz</SmallLogoTitle>
              </a>
              <div className="text-white">
                Lorem ipsum dolor sit amet consectetur. In at nunc ultrices nam amet pulvinar enim. Metus.
              </div>
            </div>
            <div className="flex flex-col w-1/6">
              <h3 className="text-white font-semibold">Home</h3>
              <h3 className="text-white font-semibold">Team</h3>
              <h3 className="text-white font-semibold">Presale</h3>
            </div>
            <div className="flex flex-col w-1/6">
              <h3 className="text-white font-semibold">Buy tokens</h3>
              <h3 className="text-white font-semibold">Tokenomics</h3>
            </div>
            <div className="flex flex-col w-1/6">
              <h3 className="text-white font-semibold">FAQs</h3>
              <h3 className="text-white font-semibold">Sneak peeks</h3>
            </div>
            <div className="flex flex-col w-1/6">
              <h3 className="text-white font-semibold">Socials</h3>
              <div className="flex flex-col">
                <div className="flex justify-center">
                  <img src="/assets/images/twitter-color 1.png" alt="" />
                  <img src="/assets/images/linkedIn-color 1.png" alt="" />
                </div>
                <div className="flex justify-center">
                  <img src="/assets/images/facebook-color 1.png" alt="" />
                  <img src="/assets/images/instagram-color 1.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </BackgroundDiv>
    </div>
  )
}