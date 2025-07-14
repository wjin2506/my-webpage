# VMS Holdings - 지속가능한 해양산업의 미래

VMS Holdings의 공식 웹사이트입니다. Vessel Maritimus-welfare Service를 통해 지속가능한 해양산업을 위한 혁신적인 솔루션을 제공합니다.

## 🚀 주요 기능

- **모던한 반응형 디자인** - 모든 디바이스에서 최적화된 경험
- **부드러운 애니메이션** - Framer Motion을 활용한 인터랙티브한 UI
- **타이핑 효과** - 동적인 텍스트 애니메이션
- **APK 다운로드** - 모바일 앱 다운로드 기능
- **PWA 지원** - Progressive Web App 기능
- **SEO 최적화** - 검색엔진 최적화

## 🛠 기술 스택

- **Frontend**: React 19.1.0
- **Styling**: CSS3 with modern features
- **Animation**: Framer Motion
- **Typography**: IBM Plex Sans
- **Build Tool**: Create React App

## 📦 설치 및 실행

### 필수 요구사항
- Node.js 16.0.0 이상
- npm 8.0.0 이상

### 설치
```bash
# 의존성 설치
npm install
```

### 개발 서버 실행
```bash
# 개발 모드로 실행
npm start
```

### 프로덕션 빌드
```bash
# 프로덕션용 빌드
npm run build
```

## 🏗 프로젝트 구조

```
src/
├── components/          # 재사용 가능한 컴포넌트
│   ├── Header.js       # 네비게이션 헤더
│   ├── HeroSection.js  # 메인 히어로 섹션
│   ├── Section.js      # 재사용 가능한 섹션 컴포넌트
│   ├── Footer.js       # 푸터
│   └── *.css           # 컴포넌트별 스타일
├── assets/             # 이미지, 폰트 등 정적 자산
├── styles/             # 전역 스타일
├── hooks/              # 커스텀 React 훅
├── utils/              # 유틸리티 함수
├── App.js              # 메인 앱 컴포넌트
└── App.css             # 전역 스타일
```

## 🎨 디자인 시스템

### 색상 팔레트
- **Primary**: #00b4d8 (해양 블루)
- **Secondary**: #0077b6 (딥 블루)
- **Background**: #ffffff (화이트)
- **Text**: #1a1a1a (다크 그레이)

### 타이포그래피
- **Font Family**: IBM Plex Sans
- **Weights**: 300, 400, 500, 600, 700

## 📱 반응형 디자인

- **Desktop**: 1200px 이상
- **Tablet**: 768px - 1199px
- **Mobile**: 767px 이하

## 🚀 성능 최적화

- React.memo를 활용한 컴포넌트 최적화
- 이미지 최적화 및 lazy loading
- CSS 최적화 및 미니피케이션
- 번들 크기 최적화

## 🔧 커스터마이징

### 새로운 섹션 추가
```javascript
<Section
  id="new-section"
  background="/new-image.jpg"
  typingWords={["새로운 제목"]}
  desc="새로운 설명"
  slideDirection="left"
>
  {/* 추가 콘텐츠 */}
</Section>
```

### 색상 변경
`src/App.css`에서 CSS 변수를 수정하여 전체 색상 테마를 변경할 수 있습니다.

## 📄 라이선스

© (주)VMS Holdings 2024. All rights reserved.

## 📞 연락처

- **주소**: 부산 영도구 태종로 727, 한국해양대학교 해양벤처진흥센터 704호
- **전화**: +82) 02-2699-0790
- **이메일**: cs@vmsforsea.com
- **사업자등록번호**: 152-88-03359

---

**VMS Holdings** - 벤처인증, 25년 부산대표기업, 소셜벤처기업
