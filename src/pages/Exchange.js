import styled from "styled-components";

const BackgroundDiv = styled.div`
  background-image: url(/assets/images/exchange_background.png);
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 852px;
  position: relative;
  display: flex;
`

const ExchangeDiv = styled.div`
  box-sizing: border-box;
  font-family: "Montserrat";
  left: calc(50% - 742.13px/2);
  top: 0px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.29) 0%, rgba(255, 255, 255, 0) 100%);
  backdrop-filter: blur(14px);
  border: 2px solid;
  border-image-source: linear-gradient(180deg, rgba(255, 255, 255, 0.4) 100%, rgba(255, 255, 255, 0) 0%);
  border-radius: 48px;
`;

const BuyBtn = styled.button`
  background: #C2F509;
  border-radius: 28px;
  font-family: Rubik;
`

export default function Exchange() {
  return (
    <div id="exchange">

    <BackgroundDiv>
      {/* <img src="/assets/images/exchange_background.png" style={{zIndex: -1}} alt="" width="100%" /> */}
      <div className='absolute w-full h-full bg-black opacity-30'></div>
      <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center">
        <ExchangeDiv className="xl:p-20 md:p-10 sm:p-2 xs:p-5 flex flex-col items-center xl:w-2/4 md:w-10/12 sm:w-11/12">
          <h1 className="text-white text-center font-bold">
            Cryptocurrency exchange<br /> fast & safe
          </h1>
          <p className="text-white my-4">No extra fee. Account replenishment no longer thatn 15 minutes</p>
          <div className=" my-4 xs:w-2/3 lg:w-2/3 md:w-2/3 sm:w-3/3">
            <div className='grid grid-cols-2 gap-4'>
              <div className="flex flex-col items-start">
                <div className="text-left text-white">You give</div>
                <input type="text" className="h-10 px-2 rounded-xl w-full" />
              </div>
              <div className="flex flex-col items-start">
                <div className="text-left text-white">You receive</div>
                <input type="text" className="h-10 px-2 rounded-xl w-full" />
              </div>
            </div>
            <div className="flex justify-center">
              <img src="/assets/images/exchange_icon.png" alt="" />
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <div className="flex flex-col items-start">
                <select className="h-10 px-2 rounded-xl w-full">
                  <option>currency 1</option>
                  <option>currency 2</option>
                  <option>currency 3</option>
                  <option>currency 4</option>
                </select>
              </div>
              <div className="flex flex-col items-start">
                <input type="text" className="h-10 px-2 rounded-xl w-full" />
              </div>
            </div>
            <div className='grid grid-cols-2 gap-4 mt-4'>
              <div className="flex flex-col items-start">
                <div className="text-left text-white text-xs">Exchange rate</div>
                <p className="text-white">3 011 406.09 <span style={{color: "#8B8B8B"}}>RUB</span> = 1 <span style={{color: "#8B8B8B"}}>BTC</span></p>
              </div>
              <div className="flex flex-col items-start">
                <div className="text-left text-white text-xs">Reserves</div>
                <p className="text-white">21.27498619 <span style={{color: "#8B8B8B"}}>BCH</span></p>
              </div>
            </div>
            <BuyBtn className="w-8/12 lg:p-3 sm:p-2 lg:">Buy $BUDZ NOW</BuyBtn>
            <div className="flex my-4 justify-center">
              <input type="checkbox" className="inline-block self-center w-5 h-5" />&nbsp;
              <p className="inline-block m-0">I agree with <a href="#">Rules and statements</a></p>
            </div>
          </div>
        </ExchangeDiv>
      </div>
    </BackgroundDiv>
    <div>
      <img src="/assets/images/Transparent.png" alt="" width="100%" />
    </div>
    </div>
  )
}
