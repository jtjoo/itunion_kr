import { useState, useRef, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router";
import imgLogo from "../../assets/img/ITu_logo.svg";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  {
    label: "소개",
    path: "/about",
    submenu: "about",
    links: [
      { label: "IT노조는", path: "/about" },
      { label: "약력", path: "/about?tab=history" },
      { label: "규약", path: "/promises" },
      { label: "규정", path: "/about?tab=rules" },
      { label: "오시는 길", path: "/about?tab=contact" },
    ],
  },
  {
    label: "소식",
    path: "/news",
    submenu: "news",
    links: [
      { label: "공지사항", path: "/news?tab=notice" },
      { label: "갤러리", path: "/news?tab=gallery" },
      { label: "성명/보도", path: "/news?tab=statement" },
    ],
  },
  {
    label: "노동상담",
    path: "/consult",
    submenu: "consult",
    links: [
      { label: "노동상담", path: "/consult" },
      { label: "피해사례 제보", path: "/consult?tab=report" },
    ],
  },
  {
    label: "소통공간",
    path: "/community",
    submenu: "community",
    links: [
      { label: "커뮤니티", path: "/community" },
      { label: "조합원 공간", path: "/community?tab=members" },
      { label: "회의자료", path: "/community?tab=meeting" },
      { label: "자료실", path: "/community?tab=download" },
    ],
  },
];

export function Layout() {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedItem, setMobileExpandedItem] = useState<string | null>(null);
  const location = useLocation();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setActiveSubmenu(null);
    setMobileMenuOpen(false);
    setMobileExpandedItem(null);
  }, [location]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveSubmenu(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      {/* Navigation */}
      <header className="bg-[#ececec] border-b border-[#d9d9d9] sticky top-0 z-50" ref={navRef}>
        <div className="max-w-[1200px] mx-auto flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
          {/* Logo */}
          <Link to="/" className="shrink-0">
            <img src={imgLogo} alt="한국정보통신산업노동조합" className="h-[36px] sm:h-[50px] w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => (
              <div key={item.path} className="relative">
                <button
                  className={`px-4 py-2 text-[16px] font-['Noto_Sans_KR',sans-serif] rounded-lg transition-colors ${
                    location.pathname.startsWith(item.path)
                      ? "text-[#c30d23] bg-white/60"
                      : "text-[#1e1e1e] hover:bg-white/40"
                  }`}
                  onMouseEnter={() => setActiveSubmenu(item.submenu)}
                  onClick={() => setActiveSubmenu(activeSubmenu === item.submenu ? null : item.submenu)}
                >
                  {item.label}
                </button>
                {activeSubmenu === item.submenu && (
                  <div className="absolute top-full left-0 bg-white border border-[#e6e6e6] rounded-lg shadow-lg py-2 min-w-[140px] z-50">
                    {item.links.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setActiveSubmenu(null)}
                        className="block px-4 py-2 text-[14px] font-['Noto_Sans_KR',sans-serif] text-[#1e1e1e] hover:bg-[#f5f5f5] transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Auth Buttons — Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="px-5 py-2 rounded-lg border border-[#767676] bg-[#e3e3e3] text-[#1e1e1e] text-[16px] font-['Noto_Sans_KR',sans-serif] hover:bg-[#d5d5d5] transition-colors">
              로그인
            </button>
            <button className="px-5 py-2 rounded-lg bg-[#2c2c2c] text-[#f5f5f5] text-[16px] font-['Noto_Sans_KR',sans-serif] hover:bg-[#1a1a1a] transition-colors">
              가입
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="메뉴"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu — Fullscreen overlay */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-[52px] sm:top-[66px] bg-white z-40 overflow-y-auto">
            <div className="px-4 py-4">
              {navItems.map((item) => (
                <div key={item.path} className="border-b border-[#f0f0f0]">
                  <button
                    className="flex items-center justify-between w-full py-4 text-[16px] font-['Noto_Sans_KR',sans-serif] text-[#1e1e1e]"
                    onClick={() =>
                      setMobileExpandedItem(mobileExpandedItem === item.submenu ? null : item.submenu)
                    }
                  >
                    {item.label}
                    <ChevronDown
                      size={18}
                      className={`text-[#999] transition-transform ${
                        mobileExpandedItem === item.submenu ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileExpandedItem === item.submenu && (
                    <div className="pb-3 pl-4 space-y-1">
                      {item.links.map((link) => (
                        <Link
                          key={link.path}
                          to={link.path}
                          className="block py-2 text-[14px] font-['Noto_Sans_KR',sans-serif] text-[#757575] hover:text-[#c30d23] transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Auth Buttons — Mobile */}
              <div className="flex gap-3 mt-6">
                <button className="flex-1 py-3 rounded-lg border border-[#767676] bg-[#e3e3e3] text-[#1e1e1e] text-[16px] font-['Noto_Sans_KR',sans-serif]">
                  로그인
                </button>
                <button className="flex-1 py-3 rounded-lg bg-[#2c2c2c] text-[#f5f5f5] text-[16px] font-['Noto_Sans_KR',sans-serif]">
                  가입
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer>
        {/* Sitemap */}
        <div className="bg-[#e3e3e3] border-t border-[#d9d9d9]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10">
            {/* Mobile/Tablet: top row with logo + social/contact */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 sm:gap-4 mb-8 lg:hidden">
              <Link to="/" className="shrink-0">
                <img src={imgLogo} alt="한국정보통신산업노동조합" className="h-[36px] sm:h-[43px] w-auto" />
              </Link>
              <div className="flex flex-col gap-3 items-start sm:items-end">
                <div className="flex gap-3 items-center">
                  <a href="#" aria-label="X (Twitter)" className="text-[#1e1e1e] hover:text-[#c30d23] transition-colors"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg></a>
                  <a href="#" aria-label="BlueSky" className="text-[#1e1e1e] hover:text-[#c30d23] transition-colors"><svg width="21" height="21" viewBox="0 0 600 530" fill="currentColor"><path d="m135.72 44.03c66.496 49.921 138.02 151.14 164.28 205.46 26.262-54.316 97.782-155.54 164.28-205.46 47.98-36.021 125.72-63.892 125.72 24.795 0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.3797-3.6904-10.832-3.7077-7.8964-0.0174-2.9357-1.1937 0.51669-3.7077 7.8964-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.4491-163.25-81.433-5.9562-21.282-16.111-152.36-16.111-170.07 0-88.687 77.742-60.816 125.72-24.795z" /></svg></a>
                  <a href="#" aria-label="Facebook" className="text-[#1e1e1e] hover:text-[#c30d23] transition-colors"><svg width="18" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></a>
                  <a href="#" aria-label="Instagram" className="text-[#1e1e1e] hover:text-[#c30d23] transition-colors"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg></a>
                  <a href="#" aria-label="YouTube" className="text-[#1e1e1e] hover:text-[#c30d23] transition-colors"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.488 3.45.029 5.804 0 12c.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0C23.512 20.55 23.971 18.196 24 12c-.029-6.185-.484-8.549-4.385-8.816zM9 16V8l8 3.993L9 16z" /></svg></a>
                </div>
                <div className="font-['NanumGothic',sans-serif] text-[10px] sm:text-[11px] text-black leading-[1.5] sm:text-right">
                  <p>(03395) 서울시 은평구 진흥로 143 연세빌딩 5층</p>
                  <p>TEL: 02-388-3998 &middot; MAIL: itlabor@itunion.or.kr</p>
                </div>
              </div>
            </div>

            {/* Divider — mobile/tablet only */}
            <div className="border-t border-[#ccc] mb-6 lg:hidden" />

            {/* Main row: logo (desktop) + sitemap + contact (desktop) */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
              {/* Logo — desktop only */}
              <div className="shrink-0 hidden lg:block">
                <Link to="/">
                  <img src={imgLogo} alt="한국정보통신산업노동조합" className="h-[43px] w-auto" />
                </Link>
              </div>

              {/* Sitemap grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 sm:gap-x-10 md:gap-x-12 gap-y-6 flex-1 w-full">
                {/* 소개 */}
                <div className="flex flex-col gap-1.5 items-start">
                  <p className="font-['Noto_Sans_KR',sans-serif] text-[13px] sm:text-[14px] md:text-[16px] text-[#1e1e1e] pb-1.5 border-b border-[#ccc] w-full mb-1">소개</p>
                  <Link to="/about" className="text-[12px] sm:text-[13px] md:text-[16px] font-['Noto_Sans_KR',sans-serif] text-[#555] hover:text-[#c30d23] transition-colors py-0.5">소개</Link>
                  <Link to="/about?tab=history" className="text-[12px] sm:text-[13px] md:text-[16px] font-['Noto_Sans_KR',sans-serif] text-[#555] hover:text-[#c30d23] transition-colors py-0.5">약력</Link>
                  <Link to="/promises" className="text-[12px] sm:text-[13px] md:text-[16px] font-['Noto_Sans_KR',sans-serif] text-[#555] hover:text-[#c30d23] transition-colors py-0.5">규약</Link>
                  <Link to="/about?tab=rules" className="text-[12px] sm:text-[13px] md:text-[16px] font-['Noto_Sans_KR',sans-serif] text-[#555] hover:text-[#c30d23] transition-colors py-0.5">규정</Link>
                  <Link to="/about?tab=contact" className="text-[12px] sm:text-[13px] md:text-[16px] font-['Noto_Sans_KR',sans-serif] text-[#555] hover:text-[#c30d23] transition-colors py-0.5">오시는 길</Link>
                </div>

                {/* 소식 */}
                <div className="flex flex-col gap-1.5 items-start">
                  <p className="font-['Noto_Sans_KR',sans-serif] text-[13px] sm:text-[14px] md:text-[16px] text-[#1e1e1e] pb-1.5 border-b border-[#ccc] w-full mb-1">소식</p>
                  <Link to="/news?tab=notice" className="text-[12px] sm:text-[13px] md:text-[16px] font-['Noto_Sans_KR',sans-serif] text-[#555] hover:text-[#c30d23] transition-colors py-0.5">공지사항</Link>
                  <Link to="/news?tab=gallery" className="text-[12px] sm:text-[13px] md:text-[16px] font-['Noto_Sans_KR',sans-serif] text-[#555] hover:text-[#c30d23] transition-colors py-0.5">갤러리</Link>
                  <Link to="/news?tab=statement" className="text-[12px] sm:text-[13px] md:text-[16px] font-['Noto_Sans_KR',sans-serif] text-[#555] hover:text-[#c30d23] transition-colors py-0.5">성명/보도자료</Link>
                </div>

                {/* 노동상담 */}
                <div className="flex flex-col gap-1.5 items-start">
                  <p className="font-['Noto_Sans_KR',sans-serif] text-[13px] sm:text-[14px] md:text-[16px] text-[#1e1e1e] pb-1.5 border-b border-[#ccc] w-full mb-1">노동상담</p>
                  <Link to="/consult" className="text-[12px] sm:text-[13px] md:text-[16px] font-['Noto_Sans_KR',sans-serif] text-[#555] hover:text-[#c30d23] transition-colors py-0.5">상담 신청</Link>
                  <Link to="/consult?tab=report" className="text-[12px] sm:text-[13px] md:text-[16px] font-['Noto_Sans_KR',sans-serif] text-[#555] hover:text-[#c30d23] transition-colors py-0.5">피해사례 제보</Link>
                </div>

                {/* 소통공간 */}
                <div className="flex flex-col gap-1.5 items-start">
                  <p className="font-['Noto_Sans_KR',sans-serif] text-[13px] sm:text-[14px] md:text-[16px] text-[#1e1e1e] pb-1.5 border-b border-[#ccc] w-full mb-1">소통공간</p>
                  <Link to="/community" className="text-[12px] sm:text-[13px] md:text-[16px] font-['Noto_Sans_KR',sans-serif] text-[#555] hover:text-[#c30d23] transition-colors py-0.5">커뮤니티</Link>
                  <Link to="/community?tab=members" className="text-[12px] sm:text-[13px] md:text-[16px] font-['Noto_Sans_KR',sans-serif] text-[#555] hover:text-[#c30d23] transition-colors py-0.5">조합원공간</Link>
                  <Link to="/community?tab=meeting" className="text-[12px] sm:text-[13px] md:text-[16px] font-['Noto_Sans_KR',sans-serif] text-[#555] hover:text-[#c30d23] transition-colors py-0.5">회의자료</Link>
                  <Link to="/community?tab=election" className="text-[12px] sm:text-[13px] md:text-[16px] font-['Noto_Sans_KR',sans-serif] text-[#555] hover:text-[#c30d23] transition-colors py-0.5">임원선거</Link>
                  <Link to="/community?tab=download" className="text-[12px] sm:text-[13px] md:text-[16px] font-['Noto_Sans_KR',sans-serif] text-[#555] hover:text-[#c30d23] transition-colors py-0.5">자료실</Link>
                </div>
              </div>

              {/* Contact — desktop only */}
              <div className="hidden lg:flex flex-col gap-5 items-center w-[240px] shrink-0">
                <div className="flex gap-4 items-center">
                  <a href="#" aria-label="X (Twitter)" className="text-[#1e1e1e] hover:text-[#c30d23] transition-colors"><svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg></a>
                  <a href="#" aria-label="BlueSky" className="text-[#1e1e1e] hover:text-[#c30d23] transition-colors"><svg width="23" height="23" viewBox="0 0 600 530" fill="currentColor"><path d="m135.72 44.03c66.496 49.921 138.02 151.14 164.28 205.46 26.262-54.316 97.782-155.54 164.28-205.46 47.98-36.021 125.72-63.892 125.72 24.795 0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.3797-3.6904-10.832-3.7077-7.8964-0.0174-2.9357-1.1937 0.51669-3.7077 7.8964-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.4491-163.25-81.433-5.9562-21.282-16.111-152.36-16.111-170.07 0-88.687 77.742-60.816 125.72-24.795z" /></svg></a>
                  <a href="#" aria-label="Facebook" className="text-[#1e1e1e] hover:text-[#c30d23] transition-colors"><svg width="20" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></a>
                  <a href="#" aria-label="Instagram" className="text-[#1e1e1e] hover:text-[#c30d23] transition-colors"><svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg></a>
                  <a href="#" aria-label="YouTube" className="text-[#1e1e1e] hover:text-[#c30d23] transition-colors"><svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.488 3.45.029 5.804 0 12c.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0C23.512 20.55 23.971 18.196 24 12c-.029-6.185-.484-8.549-4.385-8.816zM9 16V8l8 3.993L9 16z" /></svg></a>
                </div>
                <div className="font-['NanumGothic',sans-serif] text-[11px] text-black leading-[1.4] text-center">
                  <p>(03395) 서울시 은평구 진흥로 143 연세빌딩 5층</p>
                  <p>TEL: 02-388-3998</p>
                  <p>MAIL: itlabor@itunion.or.kr</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="bg-black border-t border-[#d9d9d9]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-8 py-4 sm:py-6 text-center">
            <p className="font-['Noto_Sans_KR',sans-serif] text-[11px] sm:text-[14px] md:text-[16px] text-white leading-[1.4]">
              © 2026 한국정보통신산업노동조합
              <span className="hidden sm:inline"> (Korean Information Technology Industry Labors Union)</span>.
              All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
