'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

const navItems = [
  {
    label: '소개',
    path: '/about',
    submenu: 'about',
    links: [
      { label: 'IT노조는', path: '/about' },
      { label: '약력', path: '/about?tab=history' },
      { label: '규약', path: '/promises' },
      { label: '규정', path: '/about?tab=rules' },
      { label: '오시는 길', path: '/about?tab=contact' },
    ],
  },
  {
    label: '소식',
    path: '/news',
    submenu: 'news',
    links: [
      { label: '공지사항', path: '/news?tab=notice' },
      { label: '갤러리', path: '/news?tab=gallery' },
      { label: '성명/보도', path: '/news?tab=statement' },
    ],
  },
  {
    label: '노동상담',
    path: '/consult',
    submenu: 'consult',
    links: [
      { label: '노동상담', path: '/consult' },
      { label: '피해사례 제보', path: '/consult?tab=report' },
    ],
  },
  {
    label: '소통공간',
    path: '/community',
    submenu: 'community',
    links: [
      { label: '커뮤니티', path: '/community' },
      { label: '조합원 공간', path: '/community?tab=members' },
      { label: '회의자료', path: '/community?tab=meeting' },
      { label: '자료실', path: '/community?tab=download' },
    ],
  },
]

export const HeaderClient: React.FC = () => {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileExpandedItem, setMobileExpandedItem] = useState<string | null>(null)
  const pathname = usePathname()
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setActiveSubmenu(null)
    setMobileMenuOpen(false)
    setMobileExpandedItem(null)
  }, [pathname])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveSubmenu(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  return (
    <header
      className="bg-[#ececec] border-b border-[#d9d9d9] sticky top-0 z-50"
      ref={navRef}
    >
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <img
            src="/assets/img/ITu_logo.svg"
            alt="한국정보통신산업노동조합"
            className="h-[36px] sm:h-[50px] w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-2">
          {navItems.map((item) => (
            <div key={item.path} className="relative">
              <button
                className={`px-4 py-2 text-[16px] font-['Noto_Sans_KR',sans-serif] rounded-lg transition-colors ${
                  pathname.startsWith(item.path)
                    ? 'text-[#c30d23] bg-white/60'
                    : 'text-[#1e1e1e] hover:bg-white/40'
                }`}
                onMouseEnter={() => setActiveSubmenu(item.submenu)}
                onClick={() =>
                  setActiveSubmenu(activeSubmenu === item.submenu ? null : item.submenu)
                }
              >
                {item.label}
              </button>
              {activeSubmenu === item.submenu && (
                <div className="absolute top-full left-0 bg-white border border-[#e6e6e6] rounded-lg shadow-lg py-2 min-w-[140px] z-50">
                  {item.links.map((link) => (
                    <Link
                      key={link.path}
                      href={link.path}
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
                    setMobileExpandedItem(
                      mobileExpandedItem === item.submenu ? null : item.submenu,
                    )
                  }
                >
                  {item.label}
                  <ChevronDown
                    size={18}
                    className={`text-[#999] transition-transform ${
                      mobileExpandedItem === item.submenu ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {mobileExpandedItem === item.submenu && (
                  <div className="pb-3 pl-4 space-y-1">
                    {item.links.map((link) => (
                      <Link
                        key={link.path}
                        href={link.path}
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
  )
}
