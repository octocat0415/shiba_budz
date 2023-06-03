import styled from "styled-components";

const YelloTitle = styled.h1`
  color: #FFA40B;
  font-weight: 900;
`;

const BackgroundDiv = styled.div`
  background-image: url(/assets/images/faq.jfif);
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 852px;
  position: relative;
  display: flex;
  background-color: #FFA40B;
`;

const CollapseDiv = styled.div`
  border: 2px #FBFF11 solid;
`;

const CollapseHeader = styled.a`
  color: #656565;
`

export default function FAQ() {
  return (
    <div className="mt-4">
      <BackgroundDiv className="justify-center items-center">
        <div className='absolute brightness-75 w-full h-full bg-black opacity-30'></div>
        <div className="w-9/12 p-10">
          <div id="accordion">

            <CollapseDiv className="card my-4">
              <div className="card-header border-0 flex justify-start pl-30">
                <CollapseHeader className="no-underline text-left text-3xl w-full" data-bs-toggle="collapse" href="#collapseOne">
                  Q What is a presale
                </CollapseHeader>
              </div>
              <div id="collapseOne" className="collapse show" data-bs-parent="#accordion">
                <div className="card-body">
                  Lorem ipsum..
                </div>
              </div>
            </CollapseDiv>
            <CollapseDiv className="card my-4">
              <div className="card-header border-0 flex justify-start pl-30">
                <CollapseHeader className="no-underline text-left text-3xl w-full" data-bs-toggle="collapse" href="#collapseTwo">
                  Q What is a presale
                </CollapseHeader>
              </div>
              <div id="collapseTwo" className="collapse show" data-bs-parent="#accordion">
                <div className="card-body">
                  Lorem ipsum..
                </div>
              </div>
            </CollapseDiv>
            <CollapseDiv className="card my-4">
              <div className="card-header border-0 flex justify-start pl-30">
                <CollapseHeader className="no-underline text-left text-3xl w-full" data-bs-toggle="collapse" href="#collapseThree">
                  Q What is a presale
                </CollapseHeader>
              </div>
              <div id="collapseThree" className="collapse show" data-bs-parent="#accordion">
                <div className="card-body">
                  Lorem ipsum..
                </div>
              </div>
            </CollapseDiv>
            <CollapseDiv className="card my-4">
              <div className="card-header border-0 flex justify-start pl-30">
                <CollapseHeader className="no-underline text-left text-3xl w-full" data-bs-toggle="collapse" href="#collapseFour">
                  Q What is a presale
                </CollapseHeader>
              </div>
              <div id="collapseFour" className="collapse show" data-bs-parent="#accordion">
                <div className="card-body">
                  Lorem ipsum..
                </div>
              </div>
            </CollapseDiv>
            <CollapseDiv className="card my-4">
              <div className="card-header border-0 flex justify-start pl-30">
                <CollapseHeader className="no-underline text-left text-3xl w-full" data-bs-toggle="collapse" href="#collapseFive">
                  Q What is a presale
                </CollapseHeader>
              </div>
              <div id="collapseFive" className="collapse show" data-bs-parent="#accordion">
                <div className="card-body">
                  Lorem ipsum..
                </div>
              </div>
            </CollapseDiv>
            <CollapseDiv className="card my-4">
              <div className="card-header border-0 flex justify-start pl-30">
                <CollapseHeader className="no-underline text-left text-3xl w-full" data-bs-toggle="collapse" href="#collapseSix">
                  Q What is a presale
                </CollapseHeader>
              </div>
              <div id="collapseSix" className="collapse show" data-bs-parent="#accordion">
                <div className="card-body">
                  Lorem ipsum..
                </div>
              </div>
            </CollapseDiv>

          </div>
        </div>
      </BackgroundDiv>
    </div>
  )
}
