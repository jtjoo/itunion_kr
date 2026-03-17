# ITu - IT노동자 연합 웹사이트

IT노동자의 새로운 내일을 함께 만들어가는 ITu(IT노조)의 공식 웹사이트입니다.

## 기술 스택

- **React 18** + **TypeScript**
- **Vite 6** (빌드 도구)
- **React Router 7** (라우팅)
- **Tailwind CSS 4** (스타일링)
- **Radix UI** + **shadcn/ui** (UI 컴포넌트)
- **Lucide React** (아이콘)

## 시작하기

### 의존성 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:5173` 으로 접속합니다.

### 프로덕션 빌드

```bash
npm run build
```

빌드 결과물은 `dist/` 폴더에 생성됩니다.

## 프로젝트 구조

```
src/
├── app/
│   ├── App.tsx               # 앱 루트 컴포넌트
│   ├── routes.tsx            # 라우터 설정
│   └── components/
│       ├── layout.tsx        # 공통 레이아웃 (헤더/푸터)
│       ├── home-page.tsx     # 홈
│       ├── about-page.tsx    # 소개
│       ├── news-page.tsx     # 소식
│       ├── consult-page.tsx  # 노동상담
│       ├── community-page.tsx# 소통공간
│       ├── promises-page.tsx # 공약
│       └── ui/               # 공통 UI 컴포넌트
├── assets/
│   └── img/                  # 이미지 파일
├── imports/                  # Figma Make 생성 컴포넌트
├── styles/                   # 전역 CSS
└── main.tsx                  # 앱 엔트리포인트
```

## 페이지

| 경로 | 페이지 |
|------|--------|
| `/` | 홈 |
| `/about` | 소개 |
| `/news` | 소식 |
| `/consult` | 노동상담 |
| `/community` | 소통공간 |
| `/promises` | 공약 |

## 디자인

Figma 디자인 기반으로 제작되었습니다.
원본 디자인: [ITu Website Design Prototype](https://www.figma.com/design/LoOKWuJNJ3lYfKGPjvZgRg/ITu-Website-Design-Prototype)
