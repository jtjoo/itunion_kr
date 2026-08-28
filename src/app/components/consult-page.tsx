import { useState } from "react";
import { useSearchParams } from "react-router";
import { Phone, Mail, MessageSquare, AlertTriangle, Send } from "lucide-react";

export function ConsultPage() {
  const [searchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") || "consult";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "wage",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("상담 신청이 완료되었습니다. 담당자가 곧 연락드리겠습니다.");
    setFormData({ name: "", email: "", phone: "", category: "wage", message: "" });
  };

  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero */}
      <section className="w-full bg-surface-alt py-10 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-[800px] mx-auto text-center">
          <h1 className="font-['Noto_Sans_KR',sans-serif] text-[28px] md:text-[48px] text-foreground leading-[1.2] tracking-tight">
            {activeTab === "report" ? "피해사례 제보" : "노동상담"}
          </h1>
          <p className="font-['Noto_Sans_KR',sans-serif] text-[16px] md:text-[20px] text-text-secondary mt-4">
            {activeTab === "report"
              ? "부당한 대우를 받으셨나요? 피해 사례를 제보해주세요."
              : "IT업계 노동 관련 문제로 고민이 있으시면 상담을 신청해주세요."}
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="w-full bg-background py-6 sm:py-8 md:py-12 px-4 sm:px-6">
        <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[
            {
              icon: <Phone size={32} />,
              title: "전화 상담",
              info: "02-7186-9939",
              desc: "평일 09:00 ~ 18:00",
            },
            {
              icon: <Mail size={32} />,
              title: "이메일 상담",
              info: "itlaborunion@itunion.or.kr",
              desc: "24시간 접수 가능",
            },
            {
              icon: <MessageSquare size={32} />,
              title: "온라인 상담",
              info: "아래 양식으로 접수",
              desc: "3일 이내 답변",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center p-6 bg-surface-alt rounded-lg border border-border-strong"
            >
              <div className="text-brand mb-3">{item.icon}</div>
              <h3 className="font-['Noto_Sans_KR',sans-serif] text-[18px] text-foreground">
                {item.title}
              </h3>
              <p className="font-['Noto_Sans_KR',sans-serif] text-[14px] text-foreground mt-1">
                {item.info}
              </p>
              <p className="font-['Noto_Sans_KR',sans-serif] text-[12px] text-text-secondary mt-1">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Consultation Form */}
      <section className="w-full bg-surface-alt py-6 sm:py-8 md:py-12 px-4 sm:px-6">
        <div className="max-w-[700px] mx-auto">
          <h2 className="font-['Noto_Sans_KR',sans-serif] text-[24px] md:text-[32px] text-foreground text-center mb-8 tracking-tight">
            {activeTab === "report" ? "피해사례 제보 양식" : "온라인 상담 신청"}
          </h2>

          <form onSubmit={handleSubmit} className="bg-background rounded-xl p-6 md:p-8 shadow-sm border border-border-strong space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="font-['Noto_Sans_KR',sans-serif] text-[14px] text-foreground mb-1 block">
                  이름 (또는 닉네임)
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-border-muted rounded-lg text-[14px] font-['Noto_Sans_KR',sans-serif] focus:outline-none focus:border-brand"
                  placeholder="이름을 입력해주세요"
                />
              </div>
              <div>
                <label className="font-['Noto_Sans_KR',sans-serif] text-[14px] text-foreground mb-1 block">
                  연락처
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-border-muted rounded-lg text-[14px] font-['Noto_Sans_KR',sans-serif] focus:outline-none focus:border-brand"
                  placeholder="010-0000-0000"
                />
              </div>
            </div>

            <div>
              <label className="font-['Noto_Sans_KR',sans-serif] text-[14px] text-foreground mb-1 block">
                이메일
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-border-muted rounded-lg text-[14px] font-['Noto_Sans_KR',sans-serif] focus:outline-none focus:border-brand"
                placeholder="email@example.com"
              />
            </div>

            <div>
              <label className="font-['Noto_Sans_KR',sans-serif] text-[14px] text-foreground mb-1 block">
                상담 분류
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-3 border border-border-muted rounded-lg text-[14px] font-['Noto_Sans_KR',sans-serif] focus:outline-none focus:border-brand bg-background"
              >
                <option value="wage">임금 체불</option>
                <option value="unfair">부당 해고</option>
                <option value="harassment">직장 내 괴롭힘</option>
                <option value="contract">계약 관련</option>
                <option value="overtime">초과근무</option>
                <option value="other">기타</option>
              </select>
            </div>

            <div>
              <label className="font-['Noto_Sans_KR',sans-serif] text-[14px] text-foreground mb-1 block">
                상담 내용
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 border border-border-muted rounded-lg text-[14px] font-['Noto_Sans_KR',sans-serif] focus:outline-none focus:border-brand min-h-[150px] resize-y"
                placeholder="상담하고 싶은 내용을 자세히 적어주세요."
              />
            </div>

            <div className="flex items-center gap-2 p-3 bg-brand-light rounded-lg border border-brand-border">
              <AlertTriangle size={16} className="text-brand shrink-0" />
              <p className="font-['Noto_Sans_KR',sans-serif] text-[12px] text-text-secondary">
                개인정보는 상담 목적으로만 사용되며, 상담 완료 후 파기됩니다.
              </p>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-4 rounded-lg bg-brand text-white text-[16px] font-['Noto_Sans_KR',sans-serif] hover:bg-brand-hover transition-colors"
            >
              <Send size={18} />
              {activeTab === "report" ? "제보하기" : "상담 신청하기"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}