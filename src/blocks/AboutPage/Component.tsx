import Link from 'next/link'
import svgPaths from '@/imports/svg-hrx1zcn2mg'
import RichText from '@/components/RichText'
import type { AboutPageBlock as AboutPageBlockProps } from '@/payload-types'

const imgImage = '/assets/img/ITu_picture.jpg'

/* ─── Figma SVG Icon Components (Goals — ~80-96px) ─── */

function IconClock() {
  return (
    <svg width="80" height="80" viewBox="0 0 44 44" fill="none">
      <path d={svgPaths.p73f0e80} stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
    </svg>
  )
}

function IconMoon() {
  return (
    <svg width="80" height="80" viewBox="0 0 39.9237 39.9237" fill="none">
      <path d={svgPaths.p244f6a00} stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
    </svg>
  )
}

function IconLayers() {
  return (
    <svg width="92" height="92" viewBox="0 0 92 92" fill="none">
      <path d={svgPaths.p19861a70} stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" />
    </svg>
  )
}

function IconSmile() {
  return (
    <svg width="80" height="80" viewBox="0 0 44 44" fill="none">
      <path d={svgPaths.p2965c200} stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
    </svg>
  )
}

function IconBriefcase() {
  return (
    <svg width="92" height="92" viewBox="0 0 92 92" fill="none">
      <path d={svgPaths.p3e628100} stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" />
    </svg>
  )
}

function IconGrid() {
  return (
    <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
      <path d={svgPaths.p9c4d900} stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" />
      <path d={svgPaths.p2a6b9b00} stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" />
      <path d={svgPaths.p2833c7f0} stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" />
      <path d={svgPaths.p9fa83f2} stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" />
    </svg>
  )
}

/* ─── Figma SVG Icon Components (Org Chart Branches — 48px) ─── */

function IconFolder() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <path d={svgPaths.p20e98880} stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
    </svg>
  )
}

function IconEdit() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <path d={svgPaths.p3b6bf400} stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
    </svg>
  )
}

function IconMessageCircle() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <path d={svgPaths.p329cd680} stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
    </svg>
  )
}

function IconPenTool() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <path d={svgPaths.p27d7aa80} stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
    </svg>
  )
}

/* ─── Branch card data ─── */
const branches = [
  { icon: <IconFolder />, title: '사무국', desc: '실무/행정 지원' },
  { icon: <IconEdit />, title: '정책국', desc: '정책 수립 및 정보 교환' },
  { icon: <IconMessageCircle />, title: '교육선전국', desc: '노동 관련 교육 및 대내외 홍보' },
  { icon: <IconPenTool />, title: '법규국', desc: '노동법 및 법률 지원' },
]

/* ─── Page Component ─── */

export function AboutPageBlock(props: AboutPageBlockProps) {
  const {
    heroTitle,
    heroSubtitle,
    panelHeading,
    panelSubheading,
    panelBody,
    goalsHeading,
    goalsSubheading,
    ctaHeading,
    ctaSubheading,
  } = props

  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Basic */}
      <section className="w-full bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8 md:px-16 py-20 sm:py-[120px] md:py-[160px] text-center flex flex-col items-center">
          <h1 className="font-['Inter','Noto_Sans_KR',sans-serif] text-[32px] sm:text-[40px] md:text-[72px] text-[#1e1e1e] leading-[1.2] tracking-[-2.16px]">
            {heroTitle ?? '소개'}
          </h1>
          <p className="font-['Inter','Noto_Sans_KR',sans-serif] text-[16px] sm:text-[20px] md:text-[32px] text-[#757575] leading-[1.2] mt-2">
            {heroSubtitle ?? '한국정보통신산업노동조합을 소개합니다.'}
          </p>
        </div>
      </section>

      {/* Panel Image Content */}
      <section className="w-full bg-white">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-6 sm:gap-[48px] items-start justify-center p-4 sm:p-8 md:p-16">
          <div className="w-full md:w-[484px] h-[250px] md:h-[350px] shrink-0 overflow-hidden">
            <img
              src={imgImage}
              alt="IT노조"
              className="w-full h-full object-contain pointer-events-none"
            />
          </div>
          <div className="flex flex-col gap-6 flex-1 md:w-[484px] md:min-w-[300px] md:h-[351px]">
            <div className="flex flex-col gap-2">
              <h3 className="font-['Inter','Noto_Sans_KR',sans-serif] text-[20px] md:text-[24px] text-[#1e1e1e] leading-[1.2] tracking-[-0.48px]">
                {panelHeading ?? 'IT 노동자의 새로운 내일을 함께 만들어갑니다.'}
              </h3>
              <p className="font-['Inter','Noto_Sans_KR',sans-serif] text-[16px] md:text-[20px] text-[#757575] leading-[1.2]">
                {panelSubheading ?? '차기 집행부의 인사말'}
              </p>
            </div>
            <div className="font-['Inter','Noto_Sans_KR',sans-serif] text-[14px] md:text-[16px] text-[#1e1e1e] leading-[1.4]">
              {panelBody ? (
                <RichText data={panelBody} />
              ) : (
                <div className="space-y-4">
                  <p>
                    노동조합이란 노동자들이 함께 모여 더 나은 노동 조건을 위해
                    연대하는 조직입니다. IT업계의 특수한 환경에서 프리랜서와 비정규직
                    노동자들의 권리를 보호하고, 공정한 보상과 안전한 근무 환경을 위해
                    함께 싸우겠습니다.
                  </p>
                  <p>
                    IT노조는 초기 멤버와 새로 합류한 동지들과 함께 새 집행부를
                    꾸렸습니다. IT산업의 급격한 변화의 바람에 빠르게 대응하기 위해
                    기존과 다른 새로운 투쟁 방식을 도모하고자 합니다.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* What We Do — IT노조의 목표 */}
      <section className="w-full bg-[#d9d9d9]">
        <div className="max-w-[1200px] mx-auto overflow-clip">
          <div className="flex flex-col gap-6 items-center px-4 sm:px-8 md:px-16 py-10 sm:py-[54px]">
            <div className="text-center w-full leading-[1.2] text-[#1e1e1e] p-[10px]">
              <p className="font-['Inter','Noto_Sans_KR',sans-serif] text-[22px] sm:text-[28px] md:text-[36px] tracking-[-0.72px]">
                {goalsHeading ?? 'IT노조의 목표'}
              </p>
              <p className="font-['Inter','Noto_Sans_KR',sans-serif] text-[14px] sm:text-[18px] md:text-[24px] mt-2">
                {goalsSubheading ?? '더 나은 노동 환경을 만들기 위해 노력합니다.'}
              </p>
            </div>

            {/* Row 1 */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-16 h-auto md:h-[190px]">
              {[
                { icon: <IconClock />, title: '법정 근로시간 준수' },
                { icon: <IconMoon />, title: '시간 외 수당 지급' },
                { icon: <IconLayers />, title: '다단계 하도급 구조 개선' },
              ].map((goal) => (
                <div
                  key={goal.title}
                  className="flex flex-col items-center justify-start w-[200px] sm:w-[240px] md:w-[302px] h-auto sm:h-[170px] overflow-clip min-w-0 sm:min-w-[240px]"
                >
                  <div className="flex flex-col items-center gap-4 flex-1 min-w-[160px]">
                    {goal.icon}
                    <p className="font-['Inter','Noto_Sans_KR',sans-serif] text-[20px] md:text-[24px] text-[#1e1e1e] leading-[1.2] tracking-[-0.48px] text-center">
                      {goal.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 2 */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-16 h-auto md:h-[190px]">
              {[
                { icon: <IconSmile />, title: '고용 불안 해소' },
                { icon: <IconBriefcase />, title: '비정규직 철폐' },
                { icon: <IconGrid />, title: '공정한 임금 지급' },
              ].map((goal) => (
                <div
                  key={goal.title}
                  className="flex flex-col items-center justify-start w-[200px] sm:w-[240px] md:w-[302px] h-auto sm:h-[170px] overflow-clip min-w-0 sm:min-w-[240px]"
                >
                  <div className="flex flex-col items-center gap-4 flex-1 min-w-[160px]">
                    {goal.icon}
                    <p className="font-['Inter','Noto_Sans_KR',sans-serif] text-[20px] md:text-[24px] text-[#1e1e1e] leading-[1.2] tracking-[-0.48px] text-center">
                      {goal.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Work — 조직 체계 */}
      <section className="w-full bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8 md:px-16 py-10 sm:py-16">
          <div className="flex flex-col gap-2 items-center text-center">
            <p className="font-['Inter','Noto_Sans_KR',sans-serif] text-[24px] sm:text-[32px] md:text-[48px] text-[#1e1e1e] leading-[1.2] tracking-[-0.96px]">
              조직 체계
            </p>
            <p className="font-['Inter','Noto_Sans_KR',sans-serif] text-[16px] sm:text-[20px] md:text-[32px] text-[#757575] leading-[1.2]">
              조합원 모두가 참여할 수 있는 민주적 조직입니다.
            </p>
          </div>

          {/* Org Chart — Desktop */}
          <div className="hidden md:block relative w-full" style={{ height: 920 }}>
            <div className="absolute left-1/2 -translate-x-1/2 top-[53px] bg-[#323232] flex flex-col items-center justify-center overflow-clip px-5 py-2.5 rounded-full shadow-[2px_2px_8px_0px_rgba(0,0,0,0.96)] w-[300px] h-[80px]">
              <p className="font-['Inter','Noto_Sans_KR',sans-serif] text-[24px] leading-[1.2] tracking-[-0.48px] text-center text-white">총회</p>
              <p className="font-['Inter','Noto_Sans_KR',sans-serif] text-[16px] leading-[1.4] text-center text-white">최고 의사 결정 기구</p>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 top-[133px] w-px h-[66px] bg-black" />
            <div className="absolute left-[calc(50%-5.5px)] -translate-x-1/2 top-[199px] bg-[#c8c8c8] rounded-lg w-[300px] h-[80px]">
              <div className="flex flex-col items-center justify-center overflow-clip px-5 py-2.5 size-full rounded-[inherit]">
                <p className="font-['Inter','Noto_Sans_KR',sans-serif] text-[24px] text-[#1b1b1b] leading-[1.2] tracking-[-0.48px] text-center">위원장 / 부위원장</p>
              </div>
              <div aria-hidden="true" className="absolute border border-[#7f7f7f] border-solid inset-0 pointer-events-none rounded-lg" />
            </div>
            <div className="absolute left-[calc(50%+144px)] top-[239px] w-[41px] h-px bg-black" />
            <div className="absolute left-[calc(50%+185px)] top-[197px] bg-[#c8c8c8] rounded-lg w-[259px] h-[84px]">
              <div className="flex flex-col items-center justify-center overflow-clip px-5 py-2.5 size-full rounded-[inherit]">
                <p className="font-['Inter','Noto_Sans_KR',sans-serif] text-[24px] text-[#1b1b1b] leading-[1.2] tracking-[-0.48px] text-center">선거관리위원회</p>
                <p className="font-['Inter','Noto_Sans_KR',sans-serif] text-[16px] text-[#1b1b1b] leading-[1.4] text-center">임원 선거 진행 담당</p>
              </div>
              <div aria-hidden="true" className="absolute border border-[#7f7f7f] border-solid inset-0 pointer-events-none rounded-lg" />
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 top-[279px] w-px h-[83px] bg-black" />
            <div className="absolute left-1/2 -translate-x-1/2 top-[362px] bg-[#c8c8c8] rounded-lg">
              <div className="flex flex-col items-center justify-center overflow-clip p-5 rounded-[inherit]">
                <p className="font-['Inter','Noto_Sans_KR',sans-serif] text-[24px] text-[#1b1b1b] leading-[1.2] tracking-[-0.48px] text-center">대의원 대회</p>
                <p className="font-['Inter','Noto_Sans_KR',sans-serif] text-[16px] text-[#1b1b1b] leading-[1.4] text-center">집행부의 사업 계획 및 조직 내부 의사 결정 기구</p>
              </div>
              <div aria-hidden="true" className="absolute border border-[#7f7f7f] border-solid inset-0 pointer-events-none rounded-lg" />
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 top-[474px] w-px h-[83px] bg-black" />
            <div className="absolute left-1/2 -translate-x-1/2 top-[557px] flex gap-5 items-center justify-center">
              {branches.map((branch) => (
                <div
                  key={branch.title}
                  className="relative bg-white flex flex-col gap-6 h-[212px] items-center justify-center min-w-[240px] p-6 rounded-lg shrink-0"
                >
                  <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-lg" />
                  {branch.icon}
                  <div className="flex flex-col gap-1 items-center text-center w-full">
                    <p className="font-['Inter','Noto_Sans_KR',sans-serif] text-[24px] text-[#1e1e1e] leading-[1.2] tracking-[-0.48px]">{branch.title}</p>
                    <p className="font-['Inter','Noto_Sans_KR',sans-serif] text-[16px] text-[#1e1e1e] leading-[1.4]">{branch.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Org Chart — Mobile */}
          <div className="md:hidden flex flex-col items-center gap-0 mt-8">
            <div className="bg-[#323232] text-white rounded-full px-8 py-4 text-center shadow-[2px_2px_8px_0px_rgba(0,0,0,0.96)] w-[260px]">
              <p className="font-['Noto_Sans_KR',sans-serif] text-[20px] tracking-[-0.48px] leading-[1.2]">총회</p>
              <p className="font-['Noto_Sans_KR',sans-serif] text-[14px] leading-[1.4]">최고 의사 결정 기구</p>
            </div>
            <div className="w-px h-[40px] bg-black" />
            <div className="relative bg-[#c8c8c8] rounded-lg px-5 py-3 text-center w-[260px]">
              <p className="font-['Noto_Sans_KR',sans-serif] text-[20px] text-[#1b1b1b] tracking-[-0.48px] leading-[1.2]">위원장 / 부위원장</p>
              <div aria-hidden="true" className="absolute border border-[#7f7f7f] border-solid inset-0 pointer-events-none rounded-lg" />
            </div>
            <div className="w-px h-[20px] bg-black" />
            <div className="relative bg-[#c8c8c8] rounded-lg px-5 py-2.5 text-center w-[240px]">
              <p className="font-['Noto_Sans_KR',sans-serif] text-[20px] text-[#1b1b1b] tracking-[-0.48px] leading-[1.2]">선거관리위원회</p>
              <p className="font-['Noto_Sans_KR',sans-serif] text-[14px] text-[#1b1b1b] leading-[1.4]">임원 선거 진행 담당</p>
              <div aria-hidden="true" className="absolute border border-[#7f7f7f] border-solid inset-0 pointer-events-none rounded-lg" />
            </div>
            <div className="w-px h-[40px] bg-black" />
            <div className="relative bg-[#c8c8c8] rounded-lg px-6 py-5 text-center">
              <p className="font-['Noto_Sans_KR',sans-serif] text-[20px] text-[#1b1b1b] tracking-[-0.48px] leading-[1.2]">대의원 대회</p>
              <p className="font-['Noto_Sans_KR',sans-serif] text-[14px] text-[#1b1b1b] leading-[1.4]">집행부의 사업 계획 및 조직 내부 의사 결정 기구</p>
              <div aria-hidden="true" className="absolute border border-[#7f7f7f] border-solid inset-0 pointer-events-none rounded-lg" />
            </div>
            <div className="w-px h-[40px] bg-black" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
              {branches.map((branch) => (
                <div
                  key={branch.title}
                  className="relative bg-white flex flex-col gap-6 h-[212px] items-center justify-center min-w-[240px] p-6 rounded-lg"
                >
                  <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-lg" />
                  {branch.icon}
                  <div className="flex flex-col gap-1 items-center text-center w-full">
                    <p className="font-['Noto_Sans_KR',sans-serif] text-[18px] text-[#1e1e1e] tracking-[-0.48px] leading-[1.2]">{branch.title}</p>
                    <p className="font-['Noto_Sans_KR',sans-serif] text-[14px] text-[#1e1e1e] leading-[1.4]">{branch.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full bg-white">
        <div className="max-w-[1200px] mx-auto overflow-clip">
          <div className="flex flex-col items-center p-4 sm:p-8 md:p-16">
            <div className="bg-[#e4e8f6] flex flex-col gap-5 items-center px-6 sm:px-8 md:px-[144px] py-10 sm:py-[72px] rounded-[24px] sm:rounded-[47px] w-full max-w-[900px] md:h-[460px] justify-center">
              <div className="flex flex-col gap-5 items-center text-center text-[#1e1e1e] py-[26px] w-full">
                <p className="font-['April16th_Promise','Noto_Sans_KR',sans-serif] text-[24px] sm:text-[36px] md:text-[72px] leading-[1.2] tracking-[-2.16px]">
                  {ctaHeading ?? 'IT노조와 함께 해주십시오!'}
                </p>
                <p className="font-['KoPubBatang_Pro','Noto_Sans_KR',sans-serif] text-[16px] sm:text-[20px] md:text-[32px] leading-[1.2]">
                  {ctaSubheading ?? '나를 지키는 가장 확실한 방법은 우리가 되는 것입니다.'}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-5 items-center justify-center overflow-clip">
                <Link
                  href="/consult"
                  className="flex items-center justify-center gap-2 w-[230px] h-[60px] rounded-lg bg-[rgba(248,124,126,0.56)] text-black text-[22px] font-['Noto_Sans_KR',sans-serif] hover:bg-[rgba(248,124,126,0.7)] transition-colors overflow-clip p-3"
                >
                  <svg width="16" height="16" viewBox="0 0 14.9334 14.28" fill="none">
                    <path d={svgPaths.p23eb1c00} stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
                  </svg>
                  후원하기
                </Link>
                <Link
                  href="/community"
                  className="flex items-center justify-center gap-2 w-[230px] h-[60px] rounded-lg bg-[#f87c7e] text-black text-[22px] font-['Noto_Sans_KR',sans-serif] hover:bg-[#f06062] transition-colors overflow-clip p-3"
                >
                  <svg width="16" height="16" viewBox="0 0 23.9126 23.9121" fill="none">
                    <path d={svgPaths.p14cb6300} fill="#374957" />
                  </svg>
                  조합원 가입
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
