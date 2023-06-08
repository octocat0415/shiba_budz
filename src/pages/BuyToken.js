import styled from 'styled-components';

const YelloTitle = styled.h1`
  color: #FFA40B;
  font-weight: 900;
`;

const BuyTokenBtn = styled.button`
  display: flex;
  padding: 20px;
  background: #FBA60D;
  border: 3px solid #FFDA9C;
  border-radius: 10px;
  font-weight: 900
`;

const JoinBtn = styled.button`
  border: 3px solid #FFA40B;
  padding: 20px;
  background: white;
  color: #FFA40B;
  border-radius: 10px;
`;

export default function BuyToken() {
  return (
    <div className='mt-5' id='how-to-buy'>
      <YelloTitle>SHIBA BUDZ PRESALE LIVE NOW </YelloTitle>
      <div className='flex justify-around items-center'>
        <img src='/assets/images/b-1.png' alt='' />
        <img src='/assets/images/b-2.png' alt='' />
        <img src='/assets/images/b-3.png' alt='' />
        <img src='/assets/images/b-4.png' alt='' />
        <img src='/assets/images/b-5.png' alt='' />
        <img src='/assets/images/b-6.png' alt='' />
      </div>
      <div className='flex justify-center'>
        <div className='lg:w-3/5 sm:w-10/12 flex items-center flex-col'>
          <div className='my-4 sm:text-xl'>
            Welcome! meme-lovers and humor-hunters, to Lorem Ipsum – the meme factory where wit meets AI! Forget about mundane meme-making; our snazzy AI technology is here to turbocharge your sense of humor and help you craft gut-busting, ROFL-worthy memes in a snap.
          </div>
          <div className='flex justify-around w-2/6 my-4'>
            <BuyTokenBtn>Buy Tokens</BuyTokenBtn>
            <JoinBtn>Join presale</JoinBtn>
          </div>
          <div className='grid grid-cols-3 gap-4 my-4'>
            <div>
              <img src='/assets/images/c-1.png' alt='' />
            </div>
            <div>
              <img src='/assets/images/c-2.png' alt='' />
            </div>
            <div>
              <img src='/assets/images/c-3.png' alt='' />
            </div>
            <div>
              <img src='/assets/images/c-4.png' alt='' />
            </div>
            <div>
              <img src='/assets/images/c-5.png' alt='' />
            </div>
            <div>
              <img src='/assets/images/c-6.png' alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}