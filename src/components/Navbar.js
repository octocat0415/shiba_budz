import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import styled from 'styled-components';

const navigation = [
  { name: 'How to Buy', href: '#how-to-buy' },
  { name: 'Rolling Paper', href: '#exchange' },
  { name: 'Roadmap', href: '#roadmap' },
  { name: 'Tokenomics', href: '#tokenomic' },
  { name: 'Audits', href: '#video' },
  { name: 'Giveaways', href: '#team' },
]

const LogoTitle = styled.h2`
  font-family: OCR A Extended;
  font-size: 40px;
  color: white;
  margin: 0;
  text-align: left;
`;

const NavText = styled.div`
  font-family: Space Grotesk;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 1px;
  text-align: center;
`;

const BuyBtn = styled.button`
  border-radius: 10px;
  padding: 15px;
  background: #C6F70A;
`

const JoinBtn = styled.button`
  border-radius: 10px;
  padding: 15px;
  background: #FFFFFF;
`

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-9 lg:px-20 md:px-20 sm:px-1" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5 flex justify-center items-center no-underline" style={{fontFamily:"OCR A Extended"}}>
              <img
                className="w-auto"
                src="/assets/images/logo-small.png"
                alt=""
              />
              <LogoTitle>Shiba Budz</LogoTitle>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex xl:gap-x-6 xxl:gap-x-12 md:gap-x-2 items-center">
            {navigation.map((item, key) => (
              <NavText key={key}>
                <a key={item.name} href={item.href} className="font-semibold leading-6 text-white no-underline">
                  {item.name}
                </a>
              </NavText>
            ))}
            <BuyBtn className='font-bold'>Buy Shiba Budz</BuyBtn>
            <JoinBtn className='font-bold'>Join Community</JoinBtn>
          </div>
        </nav>
        <Dialog as="div" className="xl:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5 flex justify-center items-center" style={{fontFamily:"OCR A Extended"}}>
                <img
                  className="w-auto"
                  src="/assets/images/logo-small.png"
                  alt=""
                />
                <LogoTitle>Shiba Budz</LogoTitle>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className='flex justify-around pt-1'>
                  <BuyBtn>Buy Shiba Budz</BuyBtn>
                  <JoinBtn>Join Community</JoinBtn>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  )
}
