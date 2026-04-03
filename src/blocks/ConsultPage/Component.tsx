'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Phone, Mail, MessageSquare } from 'lucide-react'

function ConsultPageBlockClient() {
  const searchParams = useSearchParams()
  const activeTab = searchParams.get('tab') || 'consult'

  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero */}
      <section className="w-full bg-[#f5f5f5] py-10 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-[800px] mx-auto text-center">
          <h1 className="font-['Noto_Sans_KR',sans-serif] text-[28px] md:text-[48px] text-[#1e1e1e] leading-[1.2] tracking-tight">
            {activeTab === 'report' ? '피해사례 제보' : '노동상담'}
          </h1>
          <p className="font-['Noto_Sans_KR',sans-serif] text-[16px] md:text-[20px] text-[#757575] mt-4">
            {activeTab === 'report'
              ? '부당한 대우를 받으셨나요? 피해 사례를 제보해주세요.'
              : 'IT업계 노동 관련 문제로 고민이 있으시면 상담을 신청해주세요.'}
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="w-full bg-white py-6 sm:py-8 md:py-12 px-4 sm:px-6">
        <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: <Phone size={32} />, title: '전화 상담', info: '02-7186-9939', desc: '평일 09:00 ~ 18:00' },
            { icon: <Mail size={32} />, title: '이메일 상담', info: 'itlabor@itunion.or.kr', desc: '24시간 접수 가능' },
            { icon: <MessageSquare size={32} />, title: '온라인 상담', info: '아래 양식으로 접수', desc: '3일 이내 답변' },
          ].map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center p-6 bg-[#f9f9f9] rounded-lg border border-[#e6e6e6]"
            >
              <div className="text-[#c30d23] mb-3">{item.icon}</div>
              <h3 className="font-['Noto_Sans_KR',sans-serif] text-[18px] text-[#1e1e1e]">{item.title}</h3>
              <p className="font-['Noto_Sans_KR',sans-serif] text-[14px] text-[#1e1e1e] mt-1">{item.info}</p>
              <p className="font-['Noto_Sans_KR',sans-serif] text-[12px] text-[#757575] mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export function ConsultPageBlock() {
  return (
    <Suspense>
      <ConsultPageBlockClient />
    </Suspense>
  )
}
