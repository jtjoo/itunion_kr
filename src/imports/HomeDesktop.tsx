import svgPaths from "./svg-q5dhknduiw";
import imgLogo2X1 from "../assets/img/ITu_logo.svg";
import imgMainBanner from "../assets/img/main_hero.jpg";
import imgImage from "../assets/img/ITu_character.svg";

function Logo() {
  return (
    <div className="content-stretch flex h-[50px] items-center p-[8px] relative shrink-0 w-[263px]" data-name="logo">
      <div className="-translate-y-1/2 absolute h-[50px] left-0 top-1/2 w-[258px]" data-name="logo@2x 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogo2X1} />
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="content-center flex flex-wrap gap-y-[8px] items-center relative shrink-0 w-[263px]" data-name="Main">
      <Logo />
    </div>
  );
}

function About() {
  return (
    <div className="h-[30px] relative rounded-[8px] shrink-0 w-full" data-name="About">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center px-[16px] py-[4px] relative size-full">
          <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[1.4] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] text-center w-[30px]">소개</p>
        </div>
      </div>
    </div>
  );
}

function News() {
  return (
    <div className="h-[30px] relative rounded-[8px] shrink-0 w-full" data-name="News">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center px-[16px] py-[4px] relative size-full">
          <p className="font-['Noto_Sans_KR:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[#1e1e1e] text-[16px] text-center w-[30px]">소식</p>
        </div>
      </div>
    </div>
  );
}

function Consult() {
  return (
    <div className="h-[30px] relative rounded-[8px] shrink-0 w-full" data-name="Text">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center px-[16px] py-[4px] relative size-full">
          <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[1.4] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] text-center w-[62px]">노동상담</p>
        </div>
      </div>
    </div>
  );
}

function Community() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center px-[16px] py-[4px] relative size-full">
          <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[1.4] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] text-center w-[66px]">소통공간</p>
        </div>
      </div>
    </div>
  );
}

function Menu() {
  return (
    <div className="content-between flex flex-wrap gap-x-[8px] h-[50px] items-center justify-end relative shrink-0 w-[627px]" data-name="Menu">
      <div className="bg-[#ececec] content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[80px]" data-name="Menu_Item_About">
        <About />
      </div>
      <div className="bg-[#ececec] content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[80px]" data-name="News">
        <News />
      </div>
      <div className="bg-[#ececec] content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[108px]" data-name="Consult">
        <Consult />
      </div>
      <div className="bg-[#ececec] content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[100px]" data-name="Community">
        <Community />
      </div>
    </div>
  );
}

function HeaderAuthLogIn() {
  return (
    <div className="col-1 content-stretch flex gap-[12px] h-[50px] items-center ml-0 mt-0 relative row-1 w-[200px]" data-name="Header Auth (Log In)">
      <div className="bg-[#e3e3e3] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Log In">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center p-[8px] relative w-full">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">로그인</p>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#767676] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <div className="bg-[#2c2c2c] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Sign Up">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center p-[8px] relative w-full">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[#f5f5f5] text-[16px] whitespace-nowrap">가입</p>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#2c2c2c] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
    </div>
  );
}

function Auth() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Auth">
      <HeaderAuthLogIn />
    </div>
  );
}

function Navigation({ className }: { className?: string }) {
  return (
    <div className={className || "bg-[#ececec] h-[114px] relative shrink-0 w-full"} data-name="Navigation">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[24px] items-start justify-center p-[32px] relative size-full">
          <Main />
          <Menu />
          <Auth />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#d9d9d9] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Donation() {
  return (
    <div className="bg-[rgba(219,220,221,0.57)] h-[60px] relative rounded-[8px] shrink-0 w-[210px]" data-name="Donation">
      <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Donation Icon">
          <div className="absolute inset-[8.33%_8.33%_12.42%_8.33%]" data-name="Icon">
            <div className="absolute inset-[-6.31%_-6%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.9334 14.28">
                <path d={svgPaths.p23eb1c00} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
              </svg>
            </div>
          </div>
        </div>
        <p className="font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[44px] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          후원하기
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(219,220,221,0.57)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function SignUp() {
  return (
    <div className="bg-[rgba(248,124,126,0.56)] h-[60px] relative rounded-[8px] shrink-0 w-[210px]" data-name="Sign Up">
      <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Sign Up Icon">
          <div className="absolute inset-[0.37%_0.36%_0_0]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9126 23.9121">
              <path d={svgPaths.p14cb6300} fill="var(--fill-0, #374957)" id="Vector" />
            </svg>
          </div>
        </div>
        <p className="font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[44px] relative shrink-0 text-[#f5f5f5] text-[22px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          조합원 가입
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(124,130,248,0.56)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex gap-[20px] items-center justify-end relative shrink-0 w-full" data-name="Buttons">
      <Donation />
      <SignUp />
    </div>
  );
}

function HeroText() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-end justify-end p-[30px] right-0 w-[736px]" data-name="Hero Text">
      <div className="flex flex-col font-['April16th:Promise',sans-serif] h-[100px] justify-center leading-[0] not-italic relative shrink-0 text-[#d9d9d9] text-[63px] text-right w-full">
        <p className="leading-none">IT노동자의 내일을 함께 만듭니다</p>
      </div>
      <Buttons />
    </div>
  );
}

function MainBanner() {
  return (
    <div className="h-[600px] relative shrink-0 w-[1200px]" data-name="Main Banner">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgMainBanner} />
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(-32.1977deg, rgba(0, 0, 0, 0.5) 38.466%, rgba(102, 102, 102, 0.5) 65.248%)" }} />
      </div>
      <HeroText />
    </div>
  );
}

function TextContentTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center justify-center not-italic relative shrink-0 text-[#1e1e1e] w-full" data-name="Text Content Title">
      <p className="font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[1.2] min-w-full relative shrink-0 text-[40px] text-center w-[min-content]">한국정보통신노동조합은 어떤 곳인가요?</p>
      <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[1.4] relative shrink-0 text-[24px] w-[1002px] whitespace-pre-wrap">
        <p className="mb-[10px]">{`노동조합은 "임금노동자가 노동생활의 제 조건을 유지, 개선할 목적으로 하는 계속적인 단체" 입니다. 일터에서 부당한 대우를 당할 때, 노동자 개인이 문제를 해결하기 어렵거나 불가능한 경우가 많습니다. 이럴 때 노동조합에서 여러가지 형태로 도움을 받을 수 있습니다.`}</p>
        <p className="mb-[10px]">{`정규직인 경우에는 해당 기업 내 노조가 있어서 기업이나 자본에 맞서 단체교섭이 가능하지만, 비정규직은 그렇지 못한 경우가 많습니다. `}</p>
        <p>{`IT노조는  프리랜서 등 비정규직이 대부분인 IT업계에 종사하는 노동자들을 대신하여 기업이나 자본에 대응이 가능하도록 든든한 동반자가 되어드립니다.`}</p>
      </div>
    </div>
  );
}

function WhoWeAre() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center p-[32px] relative shrink-0 w-[1200px]" data-name="Who We Are">
      <TextContentTitle />
    </div>
  );
}

function WhatwedoTitle() {
  return (
    <div className="min-w-[1072px] relative shrink-0 w-full" data-name="whatwedo_title">
      <div className="flex flex-col items-center min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center leading-[1.2] min-w-[inherit] not-italic p-[10px] relative text-[#1e1e1e] w-full whitespace-nowrap">
          <p className="font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold relative shrink-0 text-[36px] tracking-[-0.72px]">우리의 핵심 활동들</p>
          <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal relative shrink-0 text-[24px]">더 나은 노동 환경을 만들기 위해 노력합니다.</p>
        </div>
      </div>
    </div>
  );
}

function FiRsShieldCheck() {
  return (
    <div className="overflow-clip relative shrink-0 size-[94px]" data-name="fi-rs-shield-check">
      <div className="absolute inset-0 overflow-clip" data-name="Card Icon">
        <div className="absolute inset-[0.04%_8.33%_-0.04%_8.33%]" data-name="01 align center">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 24">
            <g id="01 align center">
              <path d={svgPaths.p1b859000} fill="var(--fill-0, #374957)" id="Vector" />
              <path d={svgPaths.p21cb9c00} fill="var(--fill-0, #374957)" id="Vector_2" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center overflow-clip p-[20px] relative shrink-0 w-[300px]" data-name="Text">
      <FiRsShieldCheck />
      <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[1.2] min-w-full not-italic relative shrink-0 text-[#1e1e1e] text-[24px] text-center tracking-[-0.48px] w-[min-content]">노동권 보호</p>
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#1e1e1e] text-[20px] text-center w-[min-content]">
        <span className="leading-[1.4]">안전하게 노동할 권리를 보장하기 위한</span>
        <span className="leading-[1.4]">{` 방패가 되어드립니다. `}</span>
      </p>
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-[160px] relative" data-name="Body">
      <Text />
    </div>
  );
}

function Card() {
  return (
    <div className="content-start flex flex-wrap gap-y-[24px] h-[221px] items-start justify-center min-w-[240px] overflow-clip relative shrink-0 w-[302px]" data-name="Card">
      <Body />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center overflow-clip p-[20px] relative shrink-0 w-[300px]" data-name="Text">
      <div className="overflow-clip relative shrink-0 size-[90px]" data-name="Card Icon">
        <div className="absolute inset-[0_-0.01%_0_0]" data-name="01 align center">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.002 23.9998">
            <g id="01 align center">
              <path d={svgPaths.p2327c6c0} fill="var(--fill-0, #374957)" id="Vector" />
              <path d={svgPaths.p1c10a200} fill="var(--fill-0, #374957)" id="Vector_2" />
              <path d={svgPaths.p20f33b00} fill="var(--fill-0, #374957)" id="Vector_3" />
            </g>
          </svg>
        </div>
      </div>
      <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[1.2] min-w-full not-italic relative shrink-0 text-[#1e1e1e] text-[24px] text-center tracking-[-0.48px] w-[min-content]">노동환경 개선</p>
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.4] min-w-full not-italic relative shrink-0 text-[#1e1e1e] text-[20px] text-center w-[min-content]">더 안전하고 건강한 근무 환경 조성을 위해 노력합니다.</p>
    </div>
  );
}

function Body1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-[160px] relative" data-name="Body">
      <Text1 />
    </div>
  );
}

function Card1() {
  return (
    <div className="content-start flex flex-wrap gap-y-[24px] h-[221px] items-start justify-center min-w-[240px] overflow-clip relative shrink-0 w-[302px]" data-name="Card">
      <Body1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center overflow-clip p-[20px] relative shrink-0 w-[300px]" data-name="Text">
      <div className="overflow-clip relative shrink-0 size-[92px]" data-name="Card Icon">
        <div className="absolute inset-[0_0_-0.01%_-0.11%]" data-name="01 align center">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.0275 24.0013">
            <g id="01 align center">
              <path d={svgPaths.p1929f700} fill="var(--fill-0, #374957)" id="Vector" />
            </g>
          </svg>
        </div>
      </div>
      <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[1.2] min-w-full not-italic relative shrink-0 text-[#1e1e1e] text-[24px] text-center tracking-[-0.48px] w-[min-content]">함께하는 공동체</p>
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.4] min-w-full not-italic relative shrink-0 text-[#1e1e1e] text-[20px] text-center w-[min-content]">서로 연대하고 기댈 수 있는 공동체를 만들어갑니다.</p>
    </div>
  );
}

function Body2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-[160px] relative" data-name="Body">
      <Text2 />
    </div>
  );
}

function Card2() {
  return (
    <div className="content-start flex flex-wrap gap-y-[24px] h-[221px] items-start justify-center min-w-[240px] overflow-clip relative shrink-0 w-[301px]" data-name="Card">
      <Body2 />
    </div>
  );
}

function Cards1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[64px] items-center left-1/2 overflow-clip py-[10px] top-[calc(50%-1px)]" data-name="Cards">
      <Card />
      <Card1 />
      <Card2 />
    </div>
  );
}

function Cards() {
  return (
    <div className="h-[223px] relative shrink-0 w-full" data-name="Cards">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center p-[20px] relative size-full">
          <Cards1 />
        </div>
      </div>
    </div>
  );
}

function WhatWeDo() {
  return (
    <div className="bg-[#d9d9d9] content-stretch flex flex-col gap-[24px] items-center justify-center overflow-clip pb-[74px] pt-[64px] px-[64px] relative shrink-0 w-[1200px]" data-name="What We Do">
      <WhatwedoTitle />
      <Cards />
    </div>
  );
}

function Image() {
  return (
    <div className="col-1 h-[350px] ml-0 mt-0 relative row-1 w-[484px]" data-name="Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#e3e3e3] inset-0" />
        <img alt="" className="absolute max-w-none object-contain opacity-20 size-full" src={imgImage} />
      </div>
    </div>
  );
}

function TextContentFlow() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[24px] h-[351px] items-start min-w-[300px] ml-[532px] mt-0 relative row-1 w-[484px]" data-name="Text Content Flow">
      <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Text Content Heading">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#1e1e1e] text-[24px] tracking-[-0.48px] w-full">Heading</p>
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#757575] text-[20px] w-full">
          <p className="leading-[1.2]">Subheading</p>
        </div>
      </div>
      <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Text">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">Body text for your whole article or post. We’ll put in some lorem ipsum to show how a filled-out page might look:</p>
      </div>
      <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Text">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-pre">{`Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui  international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.`}</p>
      </div>
    </div>
  );
}

function Article() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Article 1">
      <Image />
      <TextContentFlow />
    </div>
  );
}

function TextContentFlow1() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[24px] h-[351px] items-start min-w-[300px] ml-0 mt-0 relative row-1 w-[484px]" data-name="Text Content Flow">
      <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Text Content Heading">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#1e1e1e] text-[24px] tracking-[-0.48px] w-full">Heading</p>
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#757575] text-[20px] w-full">
          <p className="leading-[1.2]">Subheading</p>
        </div>
      </div>
      <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Text">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">Body text for your whole article or post. We’ll put in some lorem ipsum to show how a filled-out page might look:</p>
      </div>
      <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Text">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-pre">{`Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui  international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.`}</p>
      </div>
    </div>
  );
}

function Image1() {
  return (
    <div className="col-1 h-[350px] ml-[532px] mt-0 relative row-1 w-[484px]" data-name="Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#e3e3e3] inset-0" />
        <img alt="" className="absolute max-w-none object-contain opacity-20 size-full" src={imgImage} />
      </div>
    </div>
  );
}

function Article1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Article 2">
      <TextContentFlow1 />
      <Image1 />
    </div>
  );
}

function RecentNews() {
  return (
    <div className="bg-white opacity-80 relative shrink-0 w-full" data-name="Recent News">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[48px] items-center leading-[0] p-[64px] relative w-full">
          <Article />
          <Article1 />
        </div>
      </div>
    </div>
  );
}

function Timeline2026Container() {
  return (
    <div className="absolute gap-x-[105px] gap-y-[21px] grid grid-cols-[repeat(1,fit-content(100%))] grid-rows-[repeat(3,fit-content(100%))] h-[247px] leading-[1.2] left-[-1px] not-italic p-[20px] top-0 w-[426px]" data-name="Timeline 2026 Container">
      <p className="col-1 font-['April16th:Promise',sans-serif] justify-self-start relative row-1 self-start shrink-0 text-[#0083ff] text-[48px] tracking-[-0.96px] w-[380px]">현재</p>
      <p className="col-1 font-['April16th:Safety',sans-serif] justify-self-start relative row-2 self-center shrink-0 text-[24px] text-[rgba(0,0,0,0.5)] w-[380px]">초심으로 돌아가 새로운 시작</p>
      <div className="col-1 font-['April16th:Promise',sans-serif] justify-self-start relative row-3 self-start shrink-0 text-[16px] text-black w-[380px] whitespace-pre-wrap">
        <p className="mb-[5px]">{`IT노조의 초기 멤버와 새로 합류한 동지들과 함께 새 집행부를 꾸렸습니다. `}</p>
        <p>
          IT산업의 급격한 변화의 바람에 빠르게 대응하기 위해
          <br aria-hidden="true" />
          기존과 다른 새로운 투쟁 방식을 도모하고자 합니다.
        </p>
      </div>
    </div>
  );
}

function Rectangle() {
  return (
    <div className="bg-[#d9d9d9] h-[247px] overflow-clip relative rounded-[12px] shrink-0 w-[426px]">
      <Timeline2026Container />
    </div>
  );
}

function Timeline5() {
  return (
    <div className="absolute content-stretch flex gap-[85px] items-center left-[60px] top-[1416px] w-[543px]" data-name="Timeline 2026">
      <div aria-hidden="true" className="absolute border-black border-r-3 border-solid inset-0 pointer-events-none" />
      <Rectangle />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+270.5px)] size-[18px] top-[calc(50%+0.5px)]">
        <div className="absolute inset-[-22.22%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
            <circle cx="13" cy="13" fill="var(--fill-0, white)" id="Ellipse 1" r="11" stroke="var(--stroke-0, #0083FF)" strokeWidth="4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Timeline2025Container() {
  return (
    <div className="h-[227px] relative shrink-0 w-full" data-name="Timeline 2025 Container">
      <div className="gap-x-[105px] gap-y-[21px] grid grid-cols-[__fit-content(100%)_minmax(0,1fr)] grid-rows-[repeat(3,fit-content(100%))] leading-[1.2] not-italic p-[20px] relative size-full">
        <p className="col-1 font-['April16th:Promise',sans-serif] justify-self-start relative row-1 self-start shrink-0 text-[#c30d23] text-[48px] tracking-[-0.96px] w-[386px]">2025</p>
        <p className="col-1 font-['April16th:Safety',sans-serif] justify-self-start relative row-2 self-center shrink-0 text-[24px] text-[rgba(0,0,0,0.5)] whitespace-nowrap">노동운동의 국제화, AI 시대에 대응</p>
        <div className="col-1 font-['April16th:Promise',sans-serif] justify-self-end relative row-3 self-start shrink-0 text-[16px] text-black w-[386px]">
          <p className="mb-[5px]">2025년 해외 기업에 직접 고용된 노동자의 부당 해고에 관련 노동상담을 통해 해외 노동조합 등과 연계를 통하여 해외 고용 노동자에 대한 대응 방안의 필요성을 실감하게 되었습니다.</p>
          <p>또한 AI 기술의 급격한 발전으로 인하여 산업 전반에 노동자에게 새로운 위기가 다가옴에 따라 이에 대한 문제의식을 공유하였습니다.</p>
        </div>
      </div>
    </div>
  );
}

function Rectangle1() {
  return (
    <div className="bg-[#d9d9d9] content-stretch flex flex-col h-[280px] items-start overflow-clip relative rounded-[12px] shrink-0 w-[426px]">
      <Timeline2025Container />
    </div>
  );
}

function Timeline4() {
  return (
    <div className="absolute content-stretch flex gap-[81px] h-[280px] items-center justify-end left-[600px] top-[1167px] w-[540px]" data-name="Timeline 2025">
      <div aria-hidden="true" className="absolute border-black border-l-3 border-solid inset-0 pointer-events-none" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-268px)] size-[18px] top-[calc(50%-0.5px)]">
        <div className="absolute inset-[-22.22%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
            <circle cx="13" cy="13" fill="var(--fill-0, white)" id="Ellipse 1" r="11" stroke="var(--stroke-0, #C30D23)" strokeWidth="4" />
          </svg>
        </div>
      </div>
      <Rectangle1 />
    </div>
  );
}

function Timeline2020Container() {
  return (
    <div className="absolute gap-x-[105px] gap-y-[21px] grid grid-cols-[repeat(1,fit-content(100%))] grid-rows-[repeat(3,fit-content(100%))] h-[247px] left-[-1px] not-italic p-[20px] top-0 w-[426px]" data-name="Timeline 2020 Container">
      <p className="col-1 font-['April16th:Promise',sans-serif] justify-self-start leading-[1.2] relative row-1 self-start shrink-0 text-[#0083ff] text-[48px] tracking-[-0.96px] w-[380px]">2020-2024</p>
      <p className="col-1 font-['April16th:Safety',sans-serif] justify-self-start leading-[1.2] relative row-2 self-center shrink-0 text-[24px] text-[rgba(0,0,0,0.5)] w-[380px]">게임산업 노동환경 개선</p>
      <p className="col-1 font-['April16th:Promise',sans-serif] justify-self-start leading-[0] relative row-3 self-start shrink-0 text-[16px] text-black w-[289px]">
        <span className="leading-[1.2]">{`2016년 게임산업계의 연이은 게임 노동자 사망사건에 따라 `}</span>
        <span className="leading-[1.2] text-[#0083ff]">야근은 2급 발암물질</span>
        <span className="leading-[1.2]">
          이라는 슬로건과 함께
          <br aria-hidden="true" />
          게임 업계의 장시간 노동 실태를 고발하고
          <br aria-hidden="true" />
          전수 조사를 이끌어내는 등 실질적 변화를 도모했습니다.
        </span>
      </p>
    </div>
  );
}

function Rectangle2() {
  return (
    <div className="bg-[#d9d9d9] h-[247px] overflow-clip relative rounded-[12px] shrink-0 w-[426px]">
      <Timeline2020Container />
    </div>
  );
}

function Timeline3() {
  return (
    <div className="absolute content-stretch flex gap-[85px] items-center left-[60px] top-[967px] w-[543px]" data-name="Timeline 2020">
      <div aria-hidden="true" className="absolute border-black border-r-3 border-solid inset-0 pointer-events-none" />
      <Rectangle2 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+270.5px)] size-[18px] top-[calc(50%+0.5px)]">
        <div className="absolute inset-[-22.22%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
            <circle cx="13" cy="13" fill="var(--fill-0, white)" id="Ellipse 1" r="11" stroke="var(--stroke-0, #0083FF)" strokeWidth="4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Timeline2017Container() {
  return (
    <div className="h-[227px] relative shrink-0 w-full" data-name="Timeline 2017 Container">
      <div className="gap-x-[105px] gap-y-[21px] grid grid-cols-[__fit-content(100%)_minmax(0,1fr)] grid-rows-[repeat(3,fit-content(100%))] leading-[1.2] not-italic p-[20px] relative size-full">
        <p className="col-1 font-['April16th:Promise',sans-serif] justify-self-start relative row-1 self-start shrink-0 text-[#c30d23] text-[48px] tracking-[-0.96px] w-[386px]">2017-2019</p>
        <p className="col-1 font-['April16th:Safety',sans-serif] justify-self-start relative row-2 self-center shrink-0 text-[24px] text-[rgba(0,0,0,0.5)] whitespace-nowrap">IT산업 내 다양한 산업 노동자 피해사례 공론화</p>
        <p className="col-1 font-['April16th:Promise',sans-serif] justify-self-end relative row-3 self-start shrink-0 text-[16px] text-black w-[386px]">{`2016년 게임산업계의 연이은 노동자 사망사건에 대응하여 장시간 노동 실태를 고발, 전수조사를 이끌어내는 변화를 도모하였고, 한국미래기술 양진호 회장 폭력행위 고발 및 산업 각지에서 일어나는 직장 갑질 피해 사례 보고대회를 통해 IT노동자들의 피해 사례들을 공론화하였습니다. `}</p>
      </div>
    </div>
  );
}

function Rectangle3() {
  return (
    <div className="bg-[#d9d9d9] content-stretch flex flex-col h-[245px] items-start overflow-clip relative rounded-[12px] shrink-0 w-[426px]">
      <Timeline2017Container />
    </div>
  );
}

function Timeline2() {
  return (
    <div className="absolute content-stretch flex gap-[81px] h-[245px] items-center justify-end left-[600px] top-[722px] w-[540px]" data-name="Timeline 2017">
      <div aria-hidden="true" className="absolute border-black border-l-3 border-solid inset-0 pointer-events-none" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-267px)] size-[18px] top-1/2">
        <div className="absolute inset-[-22.22%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
            <circle cx="13" cy="13" fill="var(--fill-0, white)" id="Ellipse 1" r="11" stroke="var(--stroke-0, #C30D23)" strokeWidth="4" />
          </svg>
        </div>
      </div>
      <Rectangle3 />
    </div>
  );
}

function Timeline2008Container() {
  return (
    <div className="absolute gap-x-[105px] gap-y-[21px] grid grid-cols-[repeat(1,fit-content(100%))] grid-rows-[___fit-content(100%)_fit-content(100%)_minmax(0,1fr)] h-[240px] leading-[1.2] left-0 not-italic p-[20px] top-0 w-[426px]" data-name="Timeline 2008 Container">
      <p className="col-1 font-['April16th:Promise',sans-serif] justify-self-start relative row-1 self-start shrink-0 text-[#0083ff] text-[48px] tracking-[-0.96px] w-[290px]">2008-2016</p>
      <p className="col-1 font-['April16th:Safety',sans-serif] justify-self-start relative row-2 self-center shrink-0 text-[24px] text-[rgba(0,0,0,0.5)] whitespace-nowrap">본격적인 IT노동자를 위한 투쟁</p>
      <p className="col-1 font-['April16th:Promise',sans-serif] justify-self-end relative row-3 self-start shrink-0 text-[16px] text-black w-[386px]">{`서울시의회 개발자 폭행사건 대응, 출퇴근 기록을 증명하기 위한 “야근시계"앱 개발 및 배포 -홈플러스 등 야근 관련 여러 소송에서 법적 증거로 채택되는 성과-, 다단계 하도급을 금지하는 SW산업진흥법 개정안 추진 등으로 IT산업의 노동자를 위한 본격적인 권리 쟁취를 위해 활동해왔습니다.`}</p>
    </div>
  );
}

function Rectangle4() {
  return (
    <div className="bg-[#d9d9d9] h-[240px] overflow-clip relative rounded-[12px] shrink-0 w-[426px]">
      <Timeline2008Container />
    </div>
  );
}

function Timeline1() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[60px] top-[502px] w-[543px]" data-name="Timeline 2008">
      <div aria-hidden="true" className="absolute border-black border-r-3 border-solid inset-0 pointer-events-none" />
      <Rectangle4 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+271.5px)] size-[18px] top-1/2">
        <div className="absolute inset-[-22.22%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
            <circle cx="13" cy="13" fill="var(--fill-0, white)" id="Ellipse 1" r="11" stroke="var(--stroke-0, #0083FF)" strokeWidth="4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Timeline2004Container() {
  return (
    <div className="absolute gap-x-[105px] gap-y-[21px] grid grid-cols-[repeat(1,fit-content(100%))] grid-rows-[___fit-content(100%)_fit-content(100%)_minmax(0,1fr)] h-[240px] leading-[1.2] left-0 not-italic p-[20px] top-0 w-[436px]" data-name="Timeline 2004 Container">
      <p className="col-1 font-['April16th:Promise',sans-serif] justify-self-start relative row-1 self-start shrink-0 text-[#c30d23] text-[48px] tracking-[-0.96px] w-[290px]">2004-2005</p>
      <p className="col-1 font-['April16th:Safety',sans-serif] justify-self-start relative row-2 self-center shrink-0 text-[24px] text-[rgba(0,0,0,0.5)] whitespace-nowrap">노동조합의 초석을 다지다</p>
      <p className="col-1 font-['April16th:Promise',sans-serif] justify-self-end relative row-3 self-start shrink-0 text-[16px] text-black w-[386px]">정부의 부당한 설립 신고 반려에 맞서 싸워 대한민국 최초의 IT노조 지위를 확보하고, 노동조합으로서 조직을 키워 나갔습니다. 민주노총에 가입, 본격적인 노동상담 체계를 구축하고 IT노동자 실태조사 등을 통해 노동자 권리 쟁취 투쟁을 위한 기틀을 마련했습니다.</p>
    </div>
  );
}

function Rectangle5() {
  return (
    <div className="absolute bg-[#d9d9d9] h-[240px] left-[96px] overflow-clip rounded-[12px] top-[0.43px] w-[436px]">
      <Timeline2004Container />
    </div>
  );
}

function Timeline() {
  return (
    <div className="absolute border-black border-l-3 border-solid h-[240px] left-[600px] top-[282px] w-[525px]" data-name="Timeline 2004">
      <Rectangle5 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-262px)] size-[18px] top-1/2">
        <div className="absolute inset-[-22.22%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
            <circle cx="13" cy="13" fill="var(--fill-0, white)" id="Ellipse 1" r="11" stroke="var(--stroke-0, #C30D23)" strokeWidth="4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TimelineTitle() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[206px] items-center justify-center left-[60px] not-italic py-[32px] rounded-[12px] text-center top-[60px] w-[1080px]" data-name="Timeline Title">
      <p className="font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#1e1e1e] text-[48px] tracking-[-0.96px] w-[1072px]">우리가 걸어온 길</p>
      <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#757575] text-[32px] w-[1072px]">
        <p className="leading-[1.2] whitespace-pre-wrap">
          한국정보통신산업노동조합은 국내 최초로 설립된
          <br aria-hidden="true" />
          {` IT산업에 종사하는 노동자를 대상으로 한 산별노조입니다.`}
        </p>
      </div>
    </div>
  );
}

function BriefHistory() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative w-[1200px]" data-name="Brief History">
      <Timeline5 />
      <Timeline4 />
      <Timeline3 />
      <Timeline2 />
      <Timeline1 />
      <Timeline />
      <TimelineTitle />
    </div>
  );
}

function TextContentTitle1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center not-italic py-[26px] relative shrink-0 text-[#1e1e1e] text-center w-full" data-name="Text Content Title">
      <p className="font-['April16th:Promise',sans-serif] leading-[1.2] relative shrink-0 text-[72px] tracking-[-2.16px] w-full">IT노조와 함께 해주십시오!</p>
      <div className="flex flex-col font-['KoPubBatang_Pro:Light',sans-serif] justify-center leading-[0] relative shrink-0 text-[32px] w-full">
        <p className="leading-[1.2] whitespace-pre-wrap">
          {`나를 지키는 가장 확실한 방법은 `}
          <br aria-hidden="true" />
          우리가 되는 것입니다.
        </p>
      </div>
    </div>
  );
}

function Donation1() {
  return (
    <div className="bg-[rgba(248,124,126,0.56)] content-stretch flex gap-[8px] h-[60px] items-center justify-center overflow-clip p-[12px] relative rounded-[8px] shrink-0 w-[230px]" data-name="Donation">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Final CTA Donation Icon">
        <div className="absolute inset-[8.33%_8.33%_12.42%_8.33%]" data-name="Icon">
          <div className="absolute inset-[-6.31%_-6%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.9334 14.28">
              <path d={svgPaths.p23eb1c00} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[44px] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        후원하기
      </p>
    </div>
  );
}

function SignUp1() {
  return (
    <div className="bg-[#f87c7e] content-stretch flex gap-[8px] h-[60px] items-center justify-center overflow-clip p-[12px] relative rounded-[8px] shrink-0 w-[230px]" data-name="Sign Up">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Final CTA Sign Up Icon">
        <div className="absolute inset-[0.37%_0.36%_0_0]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9126 23.9121">
            <path d={svgPaths.p14cb6300} fill="var(--fill-0, #374957)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[44px] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        조합원 가입
      </p>
    </div>
  );
}

function FinalCtaButtons() {
  return (
    <div className="content-stretch flex gap-[20px] items-center justify-center overflow-clip relative shrink-0" data-name="Final CTA Buttons">
      <Donation1 />
      <SignUp1 />
    </div>
  );
}

function FinalCtaContainer() {
  return (
    <div className="bg-[#e4e8f6] content-stretch flex flex-col gap-[20px] h-[460px] items-center px-[144px] py-[72px] relative rounded-[47px] shrink-0 w-[900px]" data-name="Final CTA Container">
      <TextContentTitle1 />
      <FinalCtaButtons />
    </div>
  );
}

function FinalCta() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center overflow-clip pb-[64px] px-[64px] relative shrink-0 w-[1200px]" data-name="FinalCTA">
      <FinalCtaContainer />
    </div>
  );
}

function E() {
  return (
    <div className="absolute inset-[2.6%_83.85%_16.41%_0.5%]" data-name="e">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34.4243 34.8241">
        <g id="e">
          <path d={svgPaths.p35bf6600} fill="url(#paint0_linear_1_774)" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_774" x1="11.5051" x2="22.8438" y1="2.00166" y2="31.9227">
            <stop stopColor="#003E79" />
            <stop offset="0.78" stopColor="white" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function D() {
  return (
    <div className="absolute contents inset-[2.6%_83.85%_16.41%_0.5%]" data-name="d">
      <E />
    </div>
  );
}

function C() {
  return (
    <div className="absolute contents inset-0" data-name="c">
      <div className="absolute inset-[0_83.35%_13.81%_0]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.6378 37.0633">
          <path d={svgPaths.p329a3100} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <D />
      <div className="absolute inset-[4.68%_74.39%_11.98%_10.86%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.4518 35.8369">
          <path d={svgPaths.p36cf6b00} fill="var(--fill-0, #C30D23)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[4.03%_74.26%_11.34%_10.74%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.006 36.3923">
          <path d={svgPaths.p985c680} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[11.88%_80.09%_67.58%_15.62%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.43578 8.83348">
          <path d={svgPaths.p2f7f6000} fill="var(--fill-0, #C30D23)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[11.2%_79.97%_66.93%_15.49%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.99387 9.40206">
          <path d={svgPaths.p1e5ca080} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[59.51%_89.47%_0.62%_4.42%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.4401 17.1416">
          <path d={svgPaths.p2ec79b80} fill="var(--fill-0, #C30D23)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[58.86%_89.34%_0_4.29%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9988 17.6912">
          <path d={svgPaths.p10360900} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[40.67%_89.5%_41.29%_6.75%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.24544 7.75801">
          <path d={svgPaths.pe15500} fill="var(--fill-0, #C30D23)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[40.01%_89.37%_40.64%_6.62%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.8041 8.3233">
          <path d={svgPaths.p28ce4f30} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[36.05%_68.32%_31.13%_25.88%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7616 14.1126">
          <path d={svgPaths.p1dbc6470} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[37.54%_62.16%_30.42%_32.02%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7968 13.777">
          <path d={svgPaths.p9af1980} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[36.34%_56.48%_29.83%_38.27%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5609 14.5491">
          <path d={svgPaths.p2468c980} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[38.59%_49.74%_34.95%_44.45%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7939 11.3744">
          <path d={svgPaths.pb6f4900} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[37.25%_43.53%_29.79%_50.66%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7939 14.172">
          <path d={svgPaths.p33c18480} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[36.33%_37.76%_31.17%_56.89%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.7693 13.976">
          <path d={svgPaths.p1f575b00} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[36.34%_31.05%_31.17%_62.98%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1227 13.973">
          <path d={svgPaths.p10481480} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[36.34%_25.44%_30.78%_69.42%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.3054 14.1363">
          <path d={svgPaths.p2ed1c00} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[38.81%_18.69%_34.95%_75.5%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7939 11.2853">
          <path d={svgPaths.p33b32b00} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[37.43%_12.48%_29.82%_81.71%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7939 14.0829">
          <path d={svgPaths.p3cc6bf00} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[38.98%_6.27%_34.95%_87.92%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7939 11.2111">
          <path d={svgPaths.p1c7a5300} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[35.88%_0_30.74%_94.2%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7616 14.3531">
          <path d={svgPaths.p38991f00} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[7.26%_70.49%_72.94%_26.48%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.67583 8.51447">
          <path d={svgPaths.pcc336c0} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[8.41%_66.41%_72.72%_30.04%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.81195 8.11651">
          <path d={svgPaths.pf844500} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[8.93%_62.59%_75.39%_33.86%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.81195 6.74446">
          <path d={svgPaths.p14435200} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[7%_58.77%_72.1%_37.68%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.81196 8.98667">
          <path d={svgPaths.p34229300} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[7.26%_54.14%_72.94%_42.63%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.11032 8.51447">
          <path d={svgPaths.p1352780} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[8.07%_50.09%_72.52%_46.36%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.80902 8.34816">
          <path d={svgPaths.p32e55e00} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[7.26%_46.57%_72.15%_50.26%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.9694 8.85303">
          <path d={svgPaths.pbbdc300} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[8.71%_42.45%_75.39%_54%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.80901 6.83652">
          <path d={svgPaths.p1428e300} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[7.27%_38.93%_72.15%_57.94%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.86665 8.84709">
          <path d={svgPaths.pe08900} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[7.26%_34.99%_72.71%_61.55%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.60058 8.61247">
          <path d={svgPaths.p39046f00} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[7.25%_31.31%_72.72%_65.43%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.17784 8.61247">
          <path d={svgPaths.p29403e80} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[7.26%_27.52%_72.71%_69.55%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.43511 8.61247">
          <path d={svgPaths.p1c9c7c00} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[8.67%_23.36%_75.39%_73.09%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.81197 6.85137">
          <path d={svgPaths.p2e944500} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[8.93%_19.54%_75.39%_76.91%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.80903 6.74446">
          <path d={svgPaths.p356d4c80} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[7.99%_15.72%_72.15%_80.73%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.81195 8.53823">
          <path d={svgPaths.p2fee8040} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[8.96%_11.91%_75.39%_84.54%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.81195 6.72961">
          <path d={svgPaths.p3a72e870} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[7%_8.03%_72.72%_88.41%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.82956 8.72236">
          <path d={svgPaths.p25778700} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[7.26%_4.5%_72.94%_92.26%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.14261 8.51447">
          <path d={svgPaths.pcca5cc0} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[7.26%_0.69%_72.15%_96.15%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.96352 8.856">
          <path d={svgPaths.p368eec00} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[77.96%_71.9%_9.66%_26.45%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.63149 5.32488">
          <path d={svgPaths.p9041580} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[80.78%_70.39%_9.52%_28.15%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.20581 4.17259">
          <path d={svgPaths.pb87ee80} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[80.78%_69.08%_9.66%_29.94%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.14601 4.1132">
          <path d={svgPaths.pc061d00} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[80.78%_67.56%_9.52%_31.06%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.04728 4.16963">
          <path d={svgPaths.p957ec00} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[80.79%_66.03%_9.52%_32.67%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.85059 4.16962">
          <path d={svgPaths.p34c24230} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[80.78%_64.27%_9.66%_34.38%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.96214 4.1132">
          <path d={svgPaths.p6237400} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[77.97%_62.87%_9.66%_36.84%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.648801 5.32191">
          <path d={svgPaths.p2f557880} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[80.78%_61.09%_9.66%_37.57%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.96214 4.1132">
          <path d={svgPaths.p25c89700} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[77.26%_59.82%_9.66%_39.14%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.27811 5.62187">
          <path d={svgPaths.p34a05d00} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[80.78%_58.27%_9.52%_40.28%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.2058 4.17259">
          <path d={svgPaths.p17316880} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[80.78%_56.95%_9.66%_42.07%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.14601 4.1132">
          <path d={svgPaths.pdfe8000} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[80.79%_54.49%_9.64%_43.27%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.93202 4.1132">
          <path d={svgPaths.p2088c3f2} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[80.79%_52.88%_9.52%_45.83%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.85058 4.16962">
          <path d={svgPaths.p8326300} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[78.58%_51.61%_9.52%_47.36%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.26051 5.117">
          <path d={svgPaths.p19a2f080} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[77.59%_51.05%_9.66%_48.65%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.675212 5.48525">
          <path d={svgPaths.p146bfd00} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[80.78%_49.25%_9.52%_49.29%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.2058 4.17259">
          <path d={svgPaths.p1ef03700} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[80.78%_47.57%_9.66%_51.09%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.96215 4.1132">
          <path d={svgPaths.p2423a300} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[77.97%_45.04%_9.66%_53.35%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.54048 5.32191">
          <path d={svgPaths.p177ddf80} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[80.78%_43.69%_9.52%_54.93%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.04728 4.16963">
          <path d={svgPaths.p3ac4e900} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[80.79%_42.15%_9.52%_56.54%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.88287 4.16666">
          <path d={svgPaths.p19874600} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[77.37%_40.55%_9.65%_58.1%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.96214 5.58326">
          <path d={svgPaths.p35d73500} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[80.78%_38.81%_9.66%_59.85%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.96214 4.1132">
          <path d={svgPaths.p25c89700} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[80.78%_37.04%_9.52%_61.51%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.2058 4.17259">
          <path d={svgPaths.p1ef03700} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[77.37%_36.41%_9.66%_63.3%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.637055 5.58029">
          <path d={svgPaths.p36fb8d80} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[80.78%_34.62%_9.52%_63.93%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.20581 4.17259">
          <path d={svgPaths.pd906b00} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[80.78%_32.96%_5.83%_65.64%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.06782 5.75848">
          <path d={svgPaths.p1dc2ca80} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[80.94%_31.25%_5.78%_67.25%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.28213 5.70799">
          <path d={svgPaths.pf286e30} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[77.97%_30.03%_9.66%_69.68%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.648801 5.32191">
          <path d={svgPaths.p2f557880} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[80.78%_28.25%_9.66%_70.41%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.96215 4.1132">
          <path d={svgPaths.pf95b000} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[77.37%_26.54%_9.52%_72.07%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.06489 5.63671">
          <path d={svgPaths.p1c974080} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[80.94%_24.81%_9.49%_73.86%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.93572 4.1132">
          <path d={svgPaths.p1c649ff0} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[80.77%_23.25%_9.54%_75.48%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.80949 4.16666">
          <path d={svgPaths.pc53c300} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[78.58%_22.08%_9.52%_76.89%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.26051 5.117">
          <path d={svgPaths.p13a05280} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[80.78%_20.85%_9.66%_78.17%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.14601 4.1132">
          <path d={svgPaths.p22159540} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[80.94%_19.34%_5.78%_79.17%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.28213 5.70799">
          <path d={svgPaths.pb3b5700} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[77.97%_17.08%_9.66%_81.6%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.91517 5.32191">
          <path d={svgPaths.p3a473c80} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[80.79%_15.62%_9.52%_83.09%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.85057 4.16962">
          <path d={svgPaths.p82ca00} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[77.37%_13.82%_9.52%_84.79%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.06195 5.63968">
          <path d={svgPaths.p10993500} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[80.78%_12.12%_9.52%_86.43%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.20582 4.17259">
          <path d={svgPaths.p4581680} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[80.78%_10.8%_9.66%_88.22%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.14601 4.1132">
          <path d={svgPaths.p116d1180} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[80.77%_9.44%_9.54%_89.28%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.80949 4.16666">
          <path d={svgPaths.p314f4700} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[77.97%_6.85%_9.46%_91.55%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.52287 5.40507">
          <path d={svgPaths.p271e5900} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[80.78%_5.09%_9.66%_93.56%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.96213 4.1132">
          <path d={svgPaths.p6690e00} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[77.59%_4.39%_9.66%_95.31%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.67523 5.48525">
          <path d={svgPaths.p23696ef0} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[80.78%_2.59%_9.52%_95.95%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.20582 4.17259">
          <path d={svgPaths.p4581680} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[80.78%_0.91%_9.66%_97.74%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.96215 4.1132">
          <path d={svgPaths.p3556f000} fill="var(--fill-0, #231815)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function ITuLogo() {
  return (
    <div className="h-[43px] overflow-clip relative shrink-0 w-[220px]" data-name="ITu_logo 1">
      <C />
    </div>
  );
}

function Logo1() {
  return (
    <div className="content-stretch flex h-[43px] items-center justify-center relative shrink-0 w-[220px]" data-name="Logo">
      <ITuLogo />
    </div>
  );
}

function MainLink({ className }: { className?: string }) {
  return (
    <div className={className || "content-stretch flex flex-col h-[43px] items-start relative shrink-0 w-[220px]"} data-name="Main Link">
      <Logo1 />
    </div>
  );
}

function AboutTitle() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="About Title">
      <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[1.4] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">소개</p>
    </div>
  );
}

function AboutMain() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="About Main">
      <AboutTitle />
    </div>
  );
}

function AboutIntroduction() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="About - Introduction">
      <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">
        <p className="leading-[1.4]">소개</p>
      </div>
    </div>
  );
}

function AboutHistory() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="About - History">
      <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">
        <p className="leading-[1.4]">약력</p>
      </div>
    </div>
  );
}

function AboutPromises() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="About - Promises">
      <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">
        <p className="leading-[1.4]">규약</p>
      </div>
    </div>
  );
}

function AboutRules() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="About - Rules">
      <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">
        <p className="leading-[1.4]">규정</p>
      </div>
    </div>
  );
}

function AboutContact() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="About - Contact">
      <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">
        <p className="leading-[1.4]">오시는 길</p>
      </div>
    </div>
  );
}

function About1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[76px]" data-name="About">
      <AboutMain />
      <AboutIntroduction />
      <AboutHistory />
      <AboutPromises />
      <AboutRules />
      <AboutContact />
    </div>
  );
}

function NewsTitle() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="News Title">
      <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[1.4] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">소식</p>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="Title">
      <NewsTitle />
    </div>
  );
}

function NewsNotice() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="News - Notice">
      <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">
        <p className="leading-[1.4]">공지사항</p>
      </div>
    </div>
  );
}

function NewsGallery() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="News - Gallery">
      <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">
        <p className="leading-[1.4]">갤러리</p>
      </div>
    </div>
  );
}

function StatementAndPress() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Statement and Press">
      <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">
        <p className="leading-[1.4]">성명/보도자료</p>
      </div>
    </div>
  );
}

function News1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[95px]" data-name="News">
      <Title />
      <NewsNotice />
      <NewsGallery />
      <StatementAndPress />
    </div>
  );
}

function ConsultTitle() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Consult Title">
      <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[1.4] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">노동상담</p>
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="Title">
      <ConsultTitle />
    </div>
  );
}

function ConsultApply() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Consult - Apply">
      <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">
        <p className="leading-[1.4]">상담 신청</p>
      </div>
    </div>
  );
}

function ReportCase() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Report Case">
      <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">
        <p className="leading-[1.4]">피해사례 제보</p>
      </div>
    </div>
  );
}

function Consult1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[96px]" data-name="Consult">
      <Title1 />
      <ConsultApply />
      <ReportCase />
    </div>
  );
}

function CommunityTitle() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Community Title">
      <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[1.4] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">소통공간</p>
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="Title">
      <CommunityTitle />
    </div>
  );
}

function Community2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Community">
      <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">
        <p className="leading-[1.4]">커뮤니티</p>
      </div>
    </div>
  );
}

function CommunityMembersLounge() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Community - Members Lounge">
      <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">
        <p className="leading-[1.4]">조합원공간</p>
      </div>
    </div>
  );
}

function CommunityMeeting() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Community - Meeting">
      <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">
        <p className="leading-[1.4]">회의자료</p>
      </div>
    </div>
  );
}

function CommunityElection() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Community - Election">
      <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">
        <p className="leading-[1.4]">임원선거</p>
      </div>
    </div>
  );
}

function CommunityDocuments() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Community - Documents">
      <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">
        <p className="leading-[1.4]">자료실</p>
      </div>
    </div>
  );
}

function Community1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[80px]" data-name="Community">
      <Title2 />
      <Community2 />
      <CommunityMembersLounge />
      <CommunityMeeting />
      <CommunityElection />
      <CommunityDocuments />
    </div>
  );
}

function Pages() {
  return (
    <div className="content-stretch flex gap-[23px] items-start justify-center relative shrink-0 w-[460px]" data-name="Pages">
      <About1 />
      <News1 />
      <Consult1 />
      <Community1 />
    </div>
  );
}

function TwitterX() {
  return (
    <div className="h-[24px] relative shrink-0 w-[23.98px]" data-name="Twitter X">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.98 24">
        <g id="Twitter X">
          <path d={svgPaths.p16d01100} fill="var(--fill-0, #1E1E1E)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BlueSky() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="BlueSky">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="BlueSky">
          <path d={svgPaths.p5607300} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FacebookIcon() {
  return (
    <div className="absolute left-[-2.98px] size-[27px] top-[-1px]" data-name="Facebook Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
        <g id="Facebook Icon">
          <path d={svgPaths.p11188d00} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Facebook() {
  return (
    <div className="h-[27px] overflow-clip relative shrink-0 w-[21px]" data-name="Facebook">
      <FacebookIcon />
    </div>
  );
}

function LogoInstagram() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Logo Instagram">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_595)" id="Logo Instagram">
          <path d={svgPaths.p3c382d72} fill="var(--fill-0, #1E1E1E)" id="Icon" />
        </g>
        <defs>
          <clipPath id="clip0_1_595">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LogoYouTube() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Logo YouTube">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24.0002">
        <g clipPath="url(#clip0_1_619)" id="Logo YouTube">
          <path d={svgPaths.p13f17d00} fill="var(--fill-0, #1E1E1E)" id="Icon" />
        </g>
        <defs>
          <clipPath id="clip0_1_619">
            <rect fill="white" height="24.0002" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="relative shrink-0 w-full" data-name="Social Links">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[15px] items-start px-[20px] relative w-full">
          <TwitterX />
          <BlueSky />
          <Facebook />
          <LogoInstagram />
          <LogoYouTube />
        </div>
      </div>
    </div>
  );
}

function Contact1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Contact">
      <div className="font-['NanumGothicOTF_Eco:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[10px] text-black whitespace-nowrap">
        <p className="mb-0">(03395) 서울시 은평구 진흥로 143 연세빌딩 5층</p>
        <p className="mb-0">TEL: 02-388-3998</p>
        <p>MAIL: itlabor@itunion.or.kr</p>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="content-stretch flex flex-col gap-[26px] items-center min-w-[240px] relative shrink-0 w-[240px]" data-name="Contact">
      <SocialLinks />
      <Contact1 />
    </div>
  );
}

function Sitemap() {
  return (
    <div className="bg-[#e3e3e3] h-[319px] relative shrink-0 w-[1200px]" data-name="Sitemap">
      <div className="content-start flex flex-wrap gap-[0px_76px] items-start justify-center overflow-clip p-[32px] relative rounded-[inherit] size-full">
        <MainLink />
        <Pages />
        <Contact />
      </div>
      <div aria-hidden="true" className="absolute border-[#d9d9d9] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function Copyright() {
  return (
    <div className="bg-black h-[75px] relative shrink-0 w-[1200px]" data-name="Copyright">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-center flex flex-wrap gap-y-[16px] items-center justify-center pb-[160px] pt-[32px] px-[32px] relative size-full">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] left-[579px] text-[16px] text-center text-white top-[36px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
            <p className="leading-none">© 2026 한국정보통신산업노동조합 (Korean Information Technology Industry Labors Union). All rights reserved.</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#d9d9d9] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function Wrapper() {
  return (
    <div className="content-stretch flex flex-col h-[5093px] items-center relative shrink-0 w-[1200px]" data-name="Wrapper">
      <Navigation />
      <MainBanner />
      <WhoWeAre />
      <WhatWeDo />
      <RecentNews />
      <BriefHistory />
      <FinalCta />
      <Sitemap />
      <Copyright />
    </div>
  );
}

export default function HomeDesktop() {
  return (
    <div className="bg-[#858585] content-stretch flex flex-col items-center px-[120px] relative size-full" data-name="Home - Desktop">
      <Wrapper />
    </div>
  );
}