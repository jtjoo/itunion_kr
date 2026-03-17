function LaborConsultation() {
  return (
    <div className="h-[30px] relative rounded-[8px] shrink-0 w-full" data-name="Labor Consultation">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[10px] py-[4px] relative size-full">
          <p className="flex-[1_0_0] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.4] min-h-px min-w-px relative text-[#1e1e1e] text-[14px] text-center">노동상담</p>
        </div>
      </div>
    </div>
  );
}

function ReportCase() {
  return (
    <div className="h-[30px] relative rounded-[8px] shrink-0 w-full" data-name="Report Case">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[10px] py-[4px] relative size-full">
          <p className="flex-[1_0_0] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.4] min-h-px min-w-px relative text-[#1e1e1e] text-[14px] text-center">피해사례 제보</p>
        </div>
      </div>
    </div>
  );
}

export default function ConsultSubmenu() {
  return (
    <div className="bg-white relative size-full" data-name="Consult Submenu">
      <div className="content-stretch flex flex-col items-start relative size-full">
        <LaborConsultation />
        <ReportCase />
      </div>
      <div aria-hidden="true" className="absolute border-[#e6e6e6] border-dashed border-t inset-[-0.5px_0_0_0] pointer-events-none" />
    </div>
  );
}