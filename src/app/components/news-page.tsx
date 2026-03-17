import { useState } from "react";
import { useSearchParams } from "react-router";
import imgPlaceholder from "../../assets/img/ITu_character.svg";

const tabs = [
  { id: "notice", label: "공지사항" },
  { id: "gallery", label: "갤러리" },
  { id: "statement", label: "성명/보도자료" },
];

const mockArticles = [
  {
    id: 1,
    title: "2026년 정기 총회 안내",
    body: "2026년 정기 총회가 4월 15일에 개최됩니다. 조합원 여러분의 적극적인 참여 부탁드립니다. 총회에서는 지난 한 해의 활동 보고 및 신년도 사업 계획이 논의됩니다.",
    date: "2026-03-10",
    category: "notice",
  },
  {
    id: 2,
    title: "AI 시대 노동자 권리 보호를 위한 성명서",
    body: "AI 기술의 급속한 발전에 따른 노동자 권리 보호를 위한 IT노조의 공식 성명서입니다. 기술 발전이 노동자의 일자리를 위협하는 상황에서 우리의 입장을 명확히 합니다.",
    date: "2026-03-05",
    category: "statement",
  },
  {
    id: 3,
    title: "해외 기업 부당 해고 대응 사례 보고",
    body: "해외 기업에 직접 고용된 노동자의 부당 해고 사례에 대한 대응 경과를 보고합니다. 국제 연대를 통해 성공적으로 해결된 사례를 공유합니다.",
    date: "2026-02-28",
    category: "notice",
  },
  {
    id: 4,
    title: "2026년 노동절 기념 행사",
    body: "5월 1일 노동절을 맞아 IT노조에서 기념 행사를 개최합니다. 모든 조합원과 IT업계 노동자 분들의 참여를 환영합니다.",
    date: "2026-02-20",
    category: "notice",
  },
  {
    id: 5,
    title: "조합원 워크숍 갤러리",
    body: "지난 2월 진행된 조합원 워크숍 현장 사진들을 공유합니다. 함께한 시간이 뜻깊었습니다.",
    date: "2026-02-15",
    category: "gallery",
  },
  {
    id: 6,
    title: "비정규직 보호법 개정 촉구 보도자료",
    body: "IT업계 비정규직 노동자 보호를 위한 법 개정을 촉구하는 보도자료입니다. 프리랜서와 파견 노동자의 권리 보장을 위한 구체적 방안을 제시합니다.",
    date: "2026-02-10",
    category: "statement",
  },
];

export function NewsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") || "notice";

  const filteredArticles = mockArticles.filter(
    (a) => a.category === activeTab
  );

  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);
  const featured =
    selectedArticle !== null
      ? mockArticles.find((a) => a.id === selectedArticle)
      : filteredArticles[0];

  return (
    <div className="flex flex-col items-center w-full">
      {/* Tabs */}
      <div className="w-full bg-white pt-5">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-16 flex items-end">
          {tabs.map((tab, idx) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setSearchParams({ tab: tab.id });
                  setSelectedArticle(null);
                }}
                className={`relative px-3 py-1 text-[16px] font-['Noto_Sans_KR',sans-serif] transition-colors ${
                  isActive
                    ? "bg-[#d2d2d2] text-[#303030] rounded-tl rounded-tr"
                    : "bg-white text-[#767676] hover:text-[#303030]"
                }`}
              >
                {tab.label}
                {/* Active tab bottom border */}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-px bg-[#303030]" />
                )}
                {/* Inactive tab borders (right, top, bottom) */}
                {!isActive && (
                  <span className="absolute inset-0 border-b border-t border-r border-[#d9d9d9] pointer-events-none rounded-tr" />
                )}
              </button>
            );
          })}
          {/* Extend bottom border to fill remaining width */}
          <div className="flex-1 border-b border-[#d9d9d9]" />
        </div>
      </div>

      {/* Featured Article — Panel Image Content */}
      {featured && (
        <section className="w-full bg-white opacity-80">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-8 md:px-16 py-10 sm:py-12 md:py-16 flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-12 items-start justify-center">
            <div className="w-full md:w-[484px] h-[250px] md:h-[350px] shrink-0 relative">
              <div className="absolute inset-0 bg-[#e3e3e3]" />
              <img
                src={imgPlaceholder}
                alt=""
                className="absolute inset-0 w-full h-full object-contain opacity-20"
              />
            </div>
            <div className="flex flex-col gap-6 flex-1 md:w-[484px] md:min-w-[300px] md:h-[351px]">
              <div className="flex flex-col gap-2">
                <h2 className="font-['Noto_Sans_KR',sans-serif] text-[20px] md:text-[24px] text-[#1e1e1e] leading-[1.2] tracking-[-0.48px]">
                  {featured.title}
                </h2>
                <p className="font-['Noto_Sans_KR',sans-serif] text-[16px] md:text-[20px] text-[#757575] leading-[1.2]">
                  {featured.date}
                </p>
              </div>
              <p className="font-['Noto_Sans_KR',sans-serif] text-[14px] md:text-[16px] text-[#1e1e1e] leading-[1.4]">
                {featured.body}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Card Grid Content List */}
      <section className="w-full bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8 md:px-16 py-10 sm:py-12 md:py-16 flex flex-col items-center gap-10 sm:gap-12">
          {/* Section heading */}
          <div className="text-center">
            <h2 className="font-['Noto_Sans_KR',sans-serif] text-[20px] md:text-[24px] text-[#1e1e1e] leading-[1.2] tracking-[-0.48px]">
              {activeTab === "notice"
                ? "공지사항"
                : activeTab === "gallery"
                  ? "갤러리"
                  : "성명/보도자료"}
            </h2>
            <p className="font-['Noto_Sans_KR',sans-serif] text-[16px] md:text-[20px] text-[#757575] leading-[1.2] mt-2">
              {activeTab === "notice"
                ? "IT노조의 주요 공지사항"
                : activeTab === "gallery"
                  ? "활동 사진 갤러리"
                  : "공식 성명 및 보도자료"}
            </p>
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-6 w-full">
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                className="relative bg-white rounded-lg min-w-[240px] w-full cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => setSelectedArticle(article.id)}
              >
                <div
                  aria-hidden="true"
                  className={`absolute border border-solid inset-0 pointer-events-none rounded-lg ${
                    selectedArticle === article.id
                      ? "border-[#c30d23]"
                      : "border-[#d9d9d9]"
                  }`}
                />
                <div className="flex flex-col sm:flex-row gap-6 p-6 items-start">
                  {/* Thumbnail */}
                  <div className="w-full sm:w-[160px] h-[120px] sm:h-[160px] shrink-0 relative">
                    <div className="absolute inset-0 bg-[#e3e3e3]" />
                    <img
                      src={imgPlaceholder}
                      alt=""
                      className="absolute inset-0 w-full h-full object-contain opacity-20"
                    />
                  </div>
                  {/* Body */}
                  <div className="flex flex-col gap-4 flex-1 min-w-[160px]">
                    <div className="flex flex-col gap-2">
                      <h3 className="font-['Noto_Sans_KR',sans-serif] text-[20px] md:text-[24px] text-[#1e1e1e] leading-[1.2] tracking-[-0.48px]">
                        {article.title}
                      </h3>
                      <p className="font-['Noto_Sans_KR',sans-serif] text-[14px] md:text-[16px] text-[#757575] leading-[1.4]">
                        {article.body}
                      </p>
                    </div>
                    <div className="flex gap-4 items-center">
                      <button className="bg-[#2c2c2c] text-[#f5f5f5] text-[16px] font-['Noto_Sans_KR',sans-serif] px-3 py-3 rounded-lg border border-[#2c2c2c] hover:bg-[#1a1a1a] transition-colors">
                        자세히 보기
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}