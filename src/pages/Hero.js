import styled from 'styled-components';

const BackgroundDiv = styled.div`
  background-image: url(/assets/images/Hero.png);
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 852px;
  position: relative;
  display: flex;
`

const YellowText = styled.h1`
  font-family: 'Signika';
  font-style: normal;
  font-weight: 700;
  font-size: 78px;
  line-height: 83px;
  text-align: left;
  color: #FFBC11;
`

const WhiteText = styled.p`
  font-family: 'Signika';
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 31px;
  text-align: left;
  color: #FFFFFF;
`

const BuyBtn = styled.button`
  border-radius: 10px;
  padding: 20px;
  border: 3px solid #FFDA9C;
  background: linear-gradient(0deg, #C6F70A, #C6F70A),
  linear-gradient(0deg, #FFDA9C, #FFDA9C);
  font-family: Space Grotesk;
  font-size: 25px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: center;
  float: left;
`

const CardDiv = styled.div`
  background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.12) 100%);
  width: 340px;
  border-radius: 8.690909385681152px;
`;

const PriceText = styled.div`
  color: #2DFF0B;
`

const ClockBoard = styled.div`
  background: #30291D;
  border-radius: 6px;
  width: 40px;
  height: 40px;
  color: white;
`

const DotDiv = styled.div`
  color: white;
  padding-top: 10px;
`

const SmallText = styled.p`
  color: #FBFF11;
`

const SoldBoard = styled.div`
  background: #FFFFFF;
  border-radius: 13px;
`

const SolidBuyBtn = styled.button`
  background: linear-gradient(0deg, #C2F509, #C2F509),
  linear-gradient(0deg, #FBFF11, #FBFF11);
  background: #C2F509;
  border: 0.869091px solid #FBFF11;
  border-radius: 17.3818px;
  font-size: 17px;
  line-height: 22px;
  padding: 10px;
`

export default function Hero() {
  return (
    <BackgroundDiv id='#'>
      <div className='absolute brightness-75 w-full h-full bg-black opacity-30'></div>
      <div className='absolute' style={{top: "15%", left: "30%"}}>
        <img src='/assets/images/rocket-dog.png' style={{width: 172, height: 170}} alt='' />
      </div>
      <div className='grid grid-cols-2 gap-4 relative h-full self-center'>
        <div className='p-20 flex'>
          <div className='self-center'>
            <YellowText>
              Presale Live Now!<br />
              Join The Big Dogz<br />
              Smoke Play Earn
            </YellowText>
            <WhiteText className='pb-8'>
              Shiba Budz ($BUDZ) is the World’s first ultilty meme token for cannabis lovers to participate in Play-To-Earn Gaming, Social Trading and Global Digital Payments.    
            </WhiteText>
            <BuyBtn>
              Buy Shiba Budz
            </BuyBtn>
          </div>
        </div>
        <div className='p-20 flex justify-center'>
          <CardDiv className='self-center justify-center py-2 items-start px-8'>
            <PriceText className='items-center flex justify-center'>
              Until Price Increase
              &nbsp;
              <div className='inline-block'>
                <img src='/assets/images/Vector.png' alt='vector' />
                <img src='/assets/images/Vector.png' alt='vector' />
              </div>
            </PriceText>
            <div className='flex justify-around pt-4'>
              <div>
                <ClockBoard className='flex justify-center items-center'>15</ClockBoard>
                <p className='text-white mt-2 text-xs'>Days</p>
              </div>
              <DotDiv className='flex justify-center items-start'>:</DotDiv>
              <div>
                <ClockBoard className='flex justify-center items-center'>09</ClockBoard>
                <p className='text-white mt-2 text-xs'>Hours</p>
              </div>
              <DotDiv className='flex justify-center items-start'>:</DotDiv>
              <div>
                <ClockBoard className='flex justify-center items-center'>34</ClockBoard>
                <p className='text-white mt-2 text-xs'>Minutes</p>
              </div>
              <DotDiv className='flex justify-center items-start'>:</DotDiv>
              <div>
                <ClockBoard className='flex justify-center items-center'>00</ClockBoard>
                <p className='text-white mt-2 text-xs'>Seconds</p>
              </div>
            </div>
            <SmallText className='text-xs my-4'>
              Use promo code shiba to get 13% bonus
            </SmallText>
            <div className='flex justify-between'>
              <div className='text-white'>Current Stage</div>
              <div className='text-white'>Total Rewards</div>
            </div>
            <div className='flex justify-between'>
              <div className='font-semibold' style={{color:"#FFA40B"}}>Shiba pad</div>
              <div className='font-semibold' style={{color:"#FBFF11"}}>$23,000,452</div>
            </div>
            <SoldBoard className='mt-2'>
              <div className='flex justify-between items-center px-4 pt-2 pb-0'>
                <div style={{color:"#029808"}}>28% Sold</div>
                <div>
                  <div>11.34</div>
                  <div style={{color:"#FF460B", fontSize: "10px"}}>Remaining</div>
                </div>
              </div>
              <div className='mt-2'>
                <div className="progress">
                  <div className="progress-bar progress-bar-striped bg-success" style={{width: `${30}%`, borderRadius: 0}}></div>
                </div>
              </div>
            </SoldBoard>
            <div className='flex justify-between my-1'>
              <div>
                <span className='text-xs' style={{color: "#45D34B"}}>1 USDT</span>
                <span className='text-xs' style={{color: "white"}}>= 1 $BUDZ</span>
              </div>
              <div>
                <span className='text-xs' style={{color: "white"}}>Next stage:</span>
                <span className='text-xs' style={{color: "#FF460B"}}>13:09:00</span>
              </div>
            </div>
            <div>
              <span className='font-semibold' style={{color: "#45D34B"}}>1,245 </span>
              <span className='font-semibold' style={{color: "#FFa40B"}}>Shiba Budz </span>
              <span className='font-semibold' style={{color: "white"}}>NFTs Sold</span>
            </div>
            <div className='flex justify-around my-2'>
              <img className='self-center' src='/assets/images/1.png' style={{width: 39,height: 39}} alt=''/>
              <img className='self-center' src='/assets/images/2.png' style={{width: 36,height: 33}} alt=''/>
              <img className='self-center' src='/assets/images/3.png' style={{width: 44,height: 46}} alt=''/>
              <img className='self-center' src='/assets/images/4.png' style={{width: 32,height: 34}} alt=''/>
              <img className='self-center' src='/assets/images/5.png' style={{width: 36,height: 34}} alt=''/>
            </div>
            <SolidBuyBtn className='w-full'>
              Buy Shiba Budz(Budz)
            </SolidBuyBtn>
            <p className='text-white my-1'>
              Join Shiba Budz Presale Now!
            </p>
          </CardDiv>
        </div>
      </div>
    </BackgroundDiv>
  )
}