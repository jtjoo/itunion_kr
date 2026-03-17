function Community() {
  return (
    <div className="h-[30px] relative rounded-[8px] shrink-0 w-full" data-name="Community">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[13px] py-[4px] relative size-full">
          <p className="flex-[1_0_0] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.4] min-h-px min-w-px relative text-[#1e1e1e] text-[14px] text-center">커뮤니티</p>
        </div>
      </div>
    </div>
  );
}

function MembersOnly() {
  return (
    <div className="h-[30px] relative rounded-[8px] shrink-0 w-full" data-name="Members Only">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[13px] py-[4px] relative size-full">
          <p className="flex-[1_0_0] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.4] min-h-px min-w-px relative text-[#1e1e1e] text-[14px] text-center">조합원 공간</p>
        </div>
      </div>
    </div>
  );
}

function Meeting() {
  return (
    <div className="h-[30px] relative rounded-[8px] shrink-0 w-full" data-name="Meeting">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[13px] py-[4px] relative size-full">
          <p className="flex-[1_0_0] font-['Noto_Sans_KR:Regular',sans-serif] font-normal h-[22px] leading-[1.4] min-h-px min-w-px relative text-[#1e1e1e] text-[14px] text-center">회의자료</p>
        </div>
      </div>
    </div>
  );
}

function Download() {
  return (
    <div className="h-[30px] relative rounded-[8px] shrink-0 w-full" data-name="Download">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[13px] py-[4px] relative size-full">
          <p className="flex-[1_0_0] font-['Noto_Sans_KR:Regular',sans-serif] font-normal h-[22px] leading-[1.4] min-h-px min-w-px relative text-[#1e1e1e] text-[14px] text-center">자료실</p>
        </div>
      </div>
    </div>
  );
}

export default function CommunitySubmenu() {
  return (
    <div className="bg-white relative size-full" data-name="Community Submenu">
      <div className="content-stretch flex flex-col items-start relative size-full">
        <Community />
        <MembersOnly />
        <Meeting />
        <Download />
      </div>
      <div aria-hidden="true" className="absolute border-[#e6e6e6] border-dashed border-t inset-[-0.5px_0_0_0] pointer-events-none" />
    </div>
  );
}