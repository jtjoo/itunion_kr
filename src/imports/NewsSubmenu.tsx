function Notice() {
  return (
    <div className="content-stretch flex h-[30px] items-center justify-center max-w-[80px] overflow-clip py-[6px] relative rounded-[8px] shrink-0 w-full" data-name="Notice">
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal h-full leading-[normal] relative shrink-0 text-[#1e1e1e] text-[14px] w-[52px]">공지사항</p>
    </div>
  );
}

function Gallery() {
  return (
    <div className="content-stretch flex h-[30px] items-center justify-center max-w-[80px] overflow-clip py-[6px] relative rounded-[8px] shrink-0" data-name="Gallery">
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal h-full leading-[normal] relative shrink-0 text-[#1e1e1e] text-[14px] w-[39px]">갤러리</p>
    </div>
  );
}

function StatementAndPress() {
  return (
    <div className="content-stretch flex h-[30px] items-center justify-center max-w-[80px] overflow-clip py-[6px] relative rounded-[8px] shrink-0" data-name="Statement and Press">
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal h-full leading-[normal] relative shrink-0 text-[#1e1e1e] text-[14px] w-[57px]">성명/보도</p>
    </div>
  );
}

export default function NewsSubmenu() {
  return (
    <div className="bg-white relative size-full" data-name="News Submenu">
      <div className="content-stretch flex flex-col items-center relative size-full">
        <Notice />
        <Gallery />
        <StatementAndPress />
      </div>
      <div aria-hidden="true" className="absolute border-[#e6e6e6] border-dashed border-t inset-[-0.5px_0_0_0] pointer-events-none" />
    </div>
  );
}