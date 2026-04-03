'use client'

import { Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { MessageSquare, Users, FileText, Download, Lock, ChevronRight } from "lucide-react";

const communityTabs = [
  { id: "community", label: "커뮤니티", icon: <MessageSquare size={18} /> },
  { id: "members", label: "조합원 공간", icon: <Users size={18} /> },
  { id: "meeting", label: "회의자료", icon: <FileText size={18} /> },
  { id: "download", label: "자료실", icon: <Download size={18} /> },
];

const mockPosts = [
  { id: 1, title: "신입 조합원 인사드립니다", author: "김노동", date: "2026-03-15", replies: 5, category: "community" },
  { id: 2, title: "IT업계 야근 문화에 대한 의견 나눠요", author: "이연대", date: "2026-03-14", replies: 12, category: "community" },
  { id: 3, title: "프리랜서 계약서 검토 경험 공유", author: "박자유", date: "2026-03-13", replies: 8, category: "community" },
  { id: 4, title: "2026년 3월 조합원 소식지", author: "사무국", date: "2026-03-10", replies: 3, category: "members" },
  { id: 5, title: "조합원 복지 프로그램 안내", author: "사무국", date: "2026-03-08", replies: 7, category: "members" },
  { id: 6, title: "제25차 정기 대의원대회 회의록", author: "사무국", date: "2026-03-01", replies: 2, category: "meeting" },
  { id: 7, title: "2026년도 사업계획서", author: "정책국", date: "2026-02-28", replies: 1, category: "meeting" },
  { id: 8, title: "노동법 가이드 (2026년 개정판)", author: "법규국", date: "2026-02-25", replies: 15, category: "download" },
  { id: 9, title: "조합원 가입 신청서 양식", author: "사무국", date: "2026-02-20", replies: 0, category: "download" },
  { id: 10, title: "AI 시대 노동자 권리 백서", author: "정책국", date: "2026-02-15", replies: 20, category: "download" },
];

function CommunityPageBlockClient() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const activeTab = searchParams.get("tab") || "community";

  const filteredPosts = mockPosts.filter((p) => p.category === activeTab);
  const isLocked = activeTab === "members" || activeTab === "meeting";

  return (
    <div className="flex flex-col items-center w-full min-h-[60vh]">
      {/* Header */}
      <section className="w-full bg-[#f5f5f5] py-6 sm:py-8 md:py-12 px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="font-['Noto_Sans_KR',sans-serif] text-[28px] md:text-[40px] text-[#1e1e1e] tracking-tight text-center">
            소통공간
          </h1>
          <p className="font-['Noto_Sans_KR',sans-serif] text-[16px] text-[#757575] text-center mt-2">
            조합원 간 소통과 정보 공유의 공간입니다.
          </p>
        </div>
      </section>

      {/* Tabs + Content */}
      <section className="w-full bg-white py-4 sm:py-6 md:py-10 px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-6">
          {/* Sidebar tabs */}
          <div className="w-full md:w-[200px] shrink-0">
            <div className="flex md:flex-col gap-2 overflow-x-auto">
              {communityTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => router.push(`?tab=${tab.id}`)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg text-[14px] font-['Noto_Sans_KR',sans-serif] transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? "bg-[#1e1e1e] text-white"
                      : "bg-[#f5f5f5] text-[#1e1e1e] hover:bg-[#e6e6e6]"
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            {isLocked ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <Lock size={48} className="text-[#d9d9d9] mb-4" />
                <h3 className="font-['Noto_Sans_KR',sans-serif] text-[20px] text-[#1e1e1e] mb-2">
                  조합원 전용 공간입니다
                </h3>
                <p className="font-['Noto_Sans_KR',sans-serif] text-[14px] text-[#757575] mb-6">
                  이 공간은 로그인한 조합원만 접근할 수 있습니다.
                </p>
                <button className="px-6 py-3 rounded-lg bg-[#c30d23] text-white text-[16px] font-['Noto_Sans_KR',sans-serif] hover:bg-[#a00b1d] transition-colors">
                  로그인하기
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {filteredPosts.map((post) => (
                  <div
                    key={post.id}
                    className="flex items-center justify-between p-4 border border-[#e6e6e6] rounded-lg hover:border-[#c30d23]/30 hover:bg-[#fef9f9] transition-colors cursor-pointer"
                  >
                    <div className="flex-1 min-w-0">
                      <h3 className="font-['Noto_Sans_KR',sans-serif] text-[15px] text-[#1e1e1e] truncate">
                        {post.title}
                      </h3>
                      <div className="flex gap-3 mt-1">
                        <span className="font-['Noto_Sans_KR',sans-serif] text-[12px] text-[#757575]">
                          {post.author}
                        </span>
                        <span className="font-['Noto_Sans_KR',sans-serif] text-[12px] text-[#999]">
                          {post.date}
                        </span>
                        <span className="font-['Noto_Sans_KR',sans-serif] text-[12px] text-[#999]">
                          답글 {post.replies}
                        </span>
                      </div>
                    </div>
                    <ChevronRight size={18} className="text-[#d9d9d9] shrink-0" />
                  </div>
                ))}

                {filteredPosts.length === 0 && (
                  <div className="text-center py-12">
                    <p className="font-['Noto_Sans_KR',sans-serif] text-[16px] text-[#757575]">
                      게시글이 없습니다.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export function CommunityPageBlock() {
  return (
    <Suspense>
      <CommunityPageBlockClient />
    </Suspense>
  )
}
