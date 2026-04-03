'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

const tabs = [
  { id: 'notice', label: '공지사항' },
  { id: 'gallery', label: '갤러리' },
  { id: 'statement', label: '성명/보도자료' },
]

function TabsInner() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const activeTab = searchParams.get('tab') || 'notice'

  return (
    <div className="w-full bg-white pt-5">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-16 flex items-end">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => router.push(`?tab=${tab.id}`)}
              className={`relative px-3 py-1 text-[16px] font-['Noto_Sans_KR',sans-serif] transition-colors ${
                isActive
                  ? 'bg-[#d2d2d2] text-[#303030] rounded-tl rounded-tr'
                  : 'bg-white text-[#767676] hover:text-[#303030]'
              }`}
            >
              {tab.label}
              {isActive && <span className="absolute bottom-0 left-0 right-0 h-px bg-[#303030]" />}
              {!isActive && (
                <span className="absolute inset-0 border-b border-t border-r border-[#d9d9d9] pointer-events-none rounded-tr" />
              )}
            </button>
          )
        })}
        <div className="flex-1 border-b border-[#d9d9d9]" />
      </div>
    </div>
  )
}

export function NewsTabs() {
  return (
    <Suspense>
      <TabsInner />
    </Suspense>
  )
}
