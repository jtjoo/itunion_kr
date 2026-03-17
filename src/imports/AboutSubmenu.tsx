function Introduction() {
  return (
    <div className="content-stretch flex h-[30px] items-center justify-center overflow-clip px-[12px] py-[4px] relative rounded-[8px] shrink-0" data-name="Introduction">
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#1e1e1e] text-[14px] whitespace-nowrap">IT노조는</p>
    </div>
  );
}

function History() {
  return (
    <div className="content-stretch flex h-[30px] items-center justify-center overflow-clip px-[12px] py-[4px] relative rounded-[8px] shrink-0" data-name="History">
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#1e1e1e] text-[14px] whitespace-nowrap">약력</p>
    </div>
  );
}

function Promise() {
  return (
    <div className="content-stretch flex h-[30px] items-center justify-center overflow-clip px-[12px] py-[4px] relative rounded-[8px] shrink-0" data-name="Promise">
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#1e1e1e] text-[14px] whitespace-nowrap">규약</p>
    </div>
  );
}

function Rules() {
  return (
    <div className="content-stretch flex h-[30px] items-center justify-center overflow-clip px-[12px] py-[4px] relative rounded-[8px] shrink-0" data-name="Rules">
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#1e1e1e] text-[14px] whitespace-nowrap">규정</p>
    </div>
  );
}

function Contact() {
  return (
    <div className="content-stretch flex h-[30px] items-center justify-center overflow-clip px-[12px] py-[4px] relative rounded-[8px] shrink-0" data-name="Contact">
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#1e1e1e] text-[14px] whitespace-nowrap">오시는 길</p>
    </div>
  );
}

export default function AboutSubmenu() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative size-full" data-name="About Submenu">
      <div aria-hidden="true" className="absolute border-[#e6e6e6] border-dashed border-t inset-[-0.5px_0_0_0] pointer-events-none" />
      <Introduction />
      <History />
      <Promise />
      <Rules />
      <Contact />
    </div>
  );
}