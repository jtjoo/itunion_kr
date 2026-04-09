import Link from 'next/link'
import svgPaths from '../../imports/svg-q5dhknduiw'
import { Shield, Briefcase, Smile } from 'lucide-react'
import RichText from '@/components/RichText'
import type { HomePageBlock as HomePageBlockProps } from '@/payload-types'

const imgMainBanner = '/assets/img/main_hero.jpg'

const activityIcons = [
  <Shield key="shield" size={80} strokeWidth={1.5} className="text-[#374957]" />,
  <Briefcase key="briefcase" size={80} strokeWidth={1.5} className="text-[#374957]" />,
  <Smile key="smile" size={80} strokeWidth={1.5} className="text-[#374957]" />,
]

const defaultActivities = [
  { title: '노동권 보호', desc: '안전하게 노동할 권리를 보장하기 위한 방패가 되어드립니다.' },
  { title: '노동환경 개선', desc: '더 안전하고 건강한 근무 환경 조성을 위해 노력합니다.' },
  { title: '함께하는 공동체', desc: '서로 연대하고 기댈 수 있는 공동체를 만들어갑니다.' },
]

const defaultTimeline = [
  { year: '2004-2005', title: '노동조합의 초석을 다지다', desc: '정부의 부당한 설립 신고 반려에 맞서 싸워 대한민국 최초의 IT노조 지위를 확보하고, 노동조합으로서 조직을 키워 나갔습니다. 민주노총에 가입, 본격적인 노동상담 체계를 구축하고 IT노동자 실태조사 등을 통해 노동자 권리 쟁취 투쟁을 위한 기틀을 마련했습니다.', color: '#c30d23', side: 'right' as const },
  { year: '2008-2016', title: '본격적인 IT노동자를 위한 투쟁', desc: '서울시의회 개발자 폭행사건 대응, 출퇴근 기록을 증명하기 위한 "야근시계"앱 개발 및 배포, 다단계 하도급을 금지하는 SW산업진흥법 개정안 추진 등으로 IT산업의 노동자를 위한 본격적인 권리 쟁취를 위해 활동해왔습니다.', color: '#0083ff', side: 'left' as const },
  { year: '2017-2019', title: 'IT산업 내 다양한 산업 노동자 피해사례 공론화', desc: '2016년 게임산업계의 연이은 노동자 사망사건에 대응하여 장시간 노동 실태를 고발, 전수조사를 이끌어내는 변화를 도모하였고, 한국미래기술 양진호 회장 폭력행위 고발 및 산업 각지에서 일어나는 직장 갑질 피해 사례 보고대회를 통해 IT노동자들의 피해 사례들을 공론화하였습니다.', color: '#c30d23', side: 'right' as const },
  { year: '2020-2024', title: '게임산업 노동환경 개선', desc: '야근은 2급 발암물질이라는 슬로건과 함께 게임 업계의 장시간 노동 실태를 고발하고 전수 조사를 이끌어내는 등 실질적 변화를 도모했습니다.', color: '#0083ff', side: 'left' as const },
  { year: '2025', title: '노동운동의 국제화, AI 시대에 대응', desc: '해외 기업에 직접 고용된 노동자의 부당 해고 대응 및 AI 기술의 급격한 발전으로 인한 노동자 위기에 대한 문제의식을 공유하였습니다.', color: '#c30d23', side: 'right' as const },
  { year: '현재', title: '초심으로 돌아가 새로운 시작', desc: 'IT노조의 초기 멤버와 새로 합류한 동지들과 함께 새 집행부를 꾸렸습니다. 기존과 다른 새로운 투쟁 방식을 도모하고자 합니다.', color: '#0083ff', side: 'left' as const },
]

export function HomePageBlock(props: HomePageBlockProps) {
  const {
    heroTitle,
    heroButtons,
    whoHeading,
    whoBody,
    activitiesHeading,
    activitiesSubheading,
    activities,
    timelineHeading,
    timelineSubheading,
    timelineItems,
    ctaHeading,
    ctaSubheading,
  } = props

  const displayActivities = activities && activities.length > 0 ? activities : defaultActivities
  const displayTimeline = timelineItems && timelineItems.length > 0 ? timelineItems : defaultTimeline
  const displayHeroButtons =
    heroButtons && heroButtons.length > 0
      ? heroButtons
      : [
          { label: '후원하기', href: '/about', id: null },
          { label: '조합원 가입', href: '/community', id: null },
        ]

  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Banner */}
      <section className="relative w-full h-[320px] sm:h-[400px] md:h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={imgMainBanner}
            alt="메인 배너"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(-32deg, rgba(0,0,0,0.5) 38%, rgba(102,102,102,0.5) 65%)',
            }}
          />
        </div>
        <div className="relative h-full max-w-[1200px] mx-auto flex flex-col justify-end items-end p-4 sm:p-6 md:p-[30px]">
          <h1 className="font-display-promise text-[24px] sm:text-[32px] md:text-[63px] text-[#d9d9d9] text-right leading-none mb-4 sm:mb-6">
            {heroTitle ?? 'IT노동자의 내일을 함께 만듭니다'}
          </h1>
          <div className="flex gap-3 sm:gap-4 md:gap-5">
            {displayHeroButtons.map((btn, idx) => (
              <Link
                key={btn.id ?? idx}
                href={btn.href}
                className={
                  idx === 0
                    ? 'flex items-center gap-2 h-[42px] sm:h-[48px] md:h-[60px] px-4 sm:px-5 md:px-8 rounded-lg bg-[rgba(219,220,221,0.57)] border border-[rgba(219,220,221,0.57)] text-black text-[14px] sm:text-[16px] md:text-[22px] font-["Noto_Sans_KR",sans-serif] hover:bg-[rgba(219,220,221,0.8)] transition-colors'
                    : 'flex items-center gap-2 h-[42px] sm:h-[48px] md:h-[60px] px-4 sm:px-5 md:px-8 rounded-lg bg-[rgba(248,124,126,0.56)] border border-[rgba(124,130,248,0.56)] text-[#f5f5f5] text-[14px] sm:text-[16px] md:text-[22px] font-["Noto_Sans_KR",sans-serif] hover:bg-[rgba(248,124,126,0.7)] transition-colors'
                }
              >
                {idx === 0 ? (
                  <svg width="16" height="16" viewBox="0 0 14.93 14.28" fill="none">
                    <path d={svgPaths.p23eb1c00} stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d={svgPaths.p14cb6300} fill="#fff" />
                  </svg>
                )}
                {btn.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="w-full bg-white py-8 md:py-8 px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto px-0 md:px-8 py-6 sm:py-8">
          <div className="max-w-[1002px] mx-auto text-center">
            <h2 className="font-['Noto_Sans_KR',sans-serif] text-[22px] sm:text-[28px] md:text-[40px] text-[#1e1e1e] leading-[1.2] mb-6 sm:mb-8 md:mb-10">
              {whoHeading ?? '한국정보통신노동조합은 어떤 곳인가요?'}
            </h2>
            {whoBody ? (
              <div className="text-left font-['Noto_Sans_KR',sans-serif] text-[14px] sm:text-[16px] md:text-[24px] text-[#1e1e1e] leading-[1.4]">
                <RichText data={whoBody} />
              </div>
            ) : (
              <div className="text-left font-['Noto_Sans_KR',sans-serif] text-[14px] sm:text-[16px] md:text-[24px] text-[#1e1e1e] leading-[1.4] space-y-4">
                <p>
                  {`노동조합은 "임금노동자가 노동생활의 제 조건을 유지, 개선할 목적으로 하는 계속적인 단체" 입니다. 일터에서 부당한 대우를 당할 때, 노동자 개인이 문제를 해결하기 어렵거나 불가능한 경우가 많습니다. 이럴 때 노동조합에서 여러가지 형태로 도움을 받을 수 있습니다.`}
                </p>
                <p>
                  {`정규직인 경우에는 해당 기업 내 노조가 있어서 기업이나 자본에 맞서 단체교섭이 가능하지만, 비정규직은 그렇지 못한 경우가 많습니다.`}
                </p>
                <p>
                  {`IT노조는 프리랜서 등 비정규직이 대부분인 IT업계에 종사하는 노동자들을 대신하여 기업이나 자본에 대응이 가능하도록 든든한 동반자가 되어드립니다.`}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* What We Do - Activities */}
      <section className="w-full bg-[#d9d9d9]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8 md:px-16 pt-12 sm:pt-16 pb-10 sm:pb-[74px]">
          <div className="text-center mb-6">
            <h2 className="font-['Noto_Sans_KR',sans-serif] text-[22px] sm:text-[28px] md:text-[36px] text-[#1e1e1e] leading-[1.2] tracking-[-0.72px]">
              {activitiesHeading ?? '우리의 핵심 활동들'}
            </h2>
            <p className="font-['Noto_Sans_KR',sans-serif] text-[14px] sm:text-[18px] md:text-[24px] text-[#1e1e1e] leading-[1.2] mt-2">
              {activitiesSubheading ?? '더 나은 노동 환경을 만들기 위해 노력합니다.'}
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 py-2.5">
            {displayActivities.map((card, idx) => (
              <div
                key={('id' in card && card.id) ? (card.id as string) : idx}
                className="flex flex-col items-center text-center w-[280px] md:w-[300px] gap-2 p-5"
              >
                <div className="mb-2">{activityIcons[idx] ?? activityIcons[0]}</div>
                <h3 className="font-['Noto_Sans_KR',sans-serif] text-[20px] md:text-[24px] text-[#1e1e1e] tracking-[-0.48px] leading-[1.2]">
                  {card.title}
                </h3>
                <p className="font-['Noto_Sans_KR',sans-serif] text-[16px] md:text-[20px] text-[#1e1e1e] leading-[1.4]">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brief History - Timeline */}
      <section className="w-full bg-white py-10 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-6 sm:mb-8 py-4 sm:py-8">
            <h2 className="font-['Noto_Sans_KR',sans-serif] text-[24px] sm:text-[32px] md:text-[48px] text-[#1e1e1e] leading-[1.2] tracking-[-0.96px]">
              {timelineHeading ?? '우리가 걸어온 길'}
            </h2>
            <p className="font-['Noto_Sans_KR',sans-serif] text-[14px] sm:text-[20px] md:text-[32px] text-[#757575] leading-[1.2] mt-2">
              {timelineSubheading ?? '한국정보통신산업노동조합은 국내 최초로 설립된 IT산업에 종사하는 노동자를 대상으로 한 산별노조입니다.'}
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[3px] bg-black md:-translate-x-1/2" />
            {displayTimeline.map((item, idx) => (
              <div
                key={'id' in item && item.id ? item.id : idx}
                className={`relative flex ${item.side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} items-start mb-10 pl-10 md:pl-0`}
              >
                <div className="absolute left-[7px] md:left-1/2 top-5 w-[18px] h-[18px] md:-translate-x-1/2 z-10">
                  <div
                    className="w-full h-full rounded-full border-[4px] bg-white"
                    style={{ borderColor: item.color ?? '#c30d23' }}
                  />
                </div>
                <div
                  className={`w-full md:w-[calc(50%-40px)] ${item.side === 'left' ? 'md:mr-[calc(50%+40px)]' : 'md:ml-[calc(50%+40px)]'}`}
                >
                  <div className="bg-[#d9d9d9] rounded-xl p-5">
                    <p
                      className="font-display-promise text-[28px] md:text-[48px] leading-[1.2] tracking-[-0.96px]"
                      style={{ color: item.color ?? '#c30d23' }}
                    >
                      {item.year}
                    </p>
                    <p className="font-display-promise text-[16px] md:text-[24px] text-[rgba(0,0,0,0.5)] leading-[1.2] mt-3">
                      {item.title}
                    </p>
                    <div className="font-['Noto_Sans_KR',sans-serif] text-[14px] md:text-[16px] text-black mt-2 leading-[1.2] whitespace-pre-line">
                      {item.desc}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8 md:px-16 pb-10 sm:pb-12 md:pb-16 flex justify-center">
          <div className="bg-[#e4e8f6] rounded-[24px] sm:rounded-[47px] px-6 sm:px-8 md:px-[144px] py-10 sm:py-[72px] w-full max-w-[900px] flex flex-col items-center gap-5">
            <div className="text-center py-2 sm:py-[26px]">
              <h2 className="font-['Noto_Sans_KR',sans-serif] text-[24px] sm:text-[36px] md:text-[72px] text-[#1e1e1e] leading-[1.2] tracking-[-2.16px]">
                {ctaHeading ?? 'IT노조와 함께 해주십시오!'}
              </h2>
              <p className="font-['Noto_Sans_KR',sans-serif] text-[16px] sm:text-[20px] md:text-[32px] text-[#1e1e1e] leading-[1.2] mt-3 sm:mt-5">
                {ctaSubheading ?? '나를 지키는 가장 확실한 방법은 우리가 되는 것입니다.'}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-5 items-center justify-center">
              <Link
                href="/about"
                className="flex items-center justify-center gap-2 w-[210px] md:w-[230px] h-[60px] rounded-lg bg-[rgba(248,124,126,0.56)] text-black text-[22px] font-['Noto_Sans_KR',sans-serif] hover:bg-[rgba(248,124,126,0.7)] transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 14.93 14.28" fill="none">
                  <path d={svgPaths.p23eb1c00} stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
                </svg>
                후원하기
              </Link>
              <Link
                href="/community"
                className="flex items-center justify-center gap-2 w-[210px] md:w-[230px] h-[60px] rounded-lg bg-[#f87c7e] text-black text-[22px] font-['Noto_Sans_KR',sans-serif] hover:bg-[#f06062] transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d={svgPaths.p14cb6300} fill="#374957" />
                </svg>
                조합원 가입
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
