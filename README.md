# 송금 안내 페이지

부모님 가게 송금을 위한 모바일 최적화 웹페이지입니다. 토스, 카카오페이, 다양한 은행 송금을 지원합니다.

## 🎯 기능

- **계좌번호 표시**: 화면 중앙에 크게 표시
- **토스 송금**: 토스 앱이 있으면 자동으로 열림 (없으면 웹으로 폴백)
- **카카오페이 송금**: 카카오페이 앱 연동
- **계좌번호 복사**: 클립보드에 한 번에 복사
- **다양한 은행 지원**: 우리은행, 국민은행, 신한은행, 하나은행, 농협 등
- **모바일 최적화**: 375px 이상의 모든 기기에서 최적화
- **다크모드 지원**: 사용자 시스템 설정에 따라 자동 적용

## 🚀 빠른 시작

### 로컬에서 실행
```bash
cd payment-guide
# index.html을 브라우저에서 열기
open index.html  # macOS
# 또는 Windows/Linux에서 더블클릭
```

### 모바일 테스트
1. 같은 WiFi에 연결된 로컬 서버로 실행:
```bash
python3 -m http.server 8000
# 또는
npx http-server
```
2. 핸드폰에서 `http://[컴퓨터IP]:8000` 접속

## ⚙️ 설정 방법

### 1. 계좌번호 수정
`script.js`의 `CONFIG` 객체를 수정하세요:

```javascript
const CONFIG = {
    bank: '신한은행',           // 은행명
    account: '123-456-789012',   // 표시용 계좌번호 (하이픈 포함)
    accountNumber: '123456789012',  // 실제 계좌번호 (숫자만)
    accountHolder: '팬더 만두',  // 예금주명
    bankCode: '110'              // 은행 코드
};
```

### 2. 은행 코드
주요 은행 코드:
- 신한: `110`
- 우리: `101`
- 국민: `004`
- 하나: `081`
- 농협: `011`

### 3. 가게명 수정
`index.html`의 헤더를 수정하세요:

```html
<header class="header">
    <h1>팬더 만두</h1>  <!-- 여기 수정 -->
    <p class="subtitle">송금 안내</p>
</header>
```

## 🌐 GitHub Pages로 배포

### 1. GitHub 저장소 생성
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/username/payment-guide.git
git push -u origin main
```

### 2. GitHub Pages 설정
1. GitHub에서 저장소 접속
2. Settings → Pages
3. Branch를 `main`으로, 폴더를 `/ (root)`로 설정
4. Save

### 3. 접속 URL
약 1-2분 후 `https://username.github.io/payment-guide`에서 접속 가능

## 📱 앱링크 지원

### 작동 원리
1. 사용자가 버튼 클릭
2. 앱 URL 스킴 실행 (예: `supertoss://`)
3. 앱이 없으면 웹사이트로 자동 리다이렉트

### 지원 은행
- ✅ 토스 (Toss)
- ✅ 카카오페이 (KakaoPay)
- ✅ 우리은행 (Woori)
- ✅ 국민은행 (KB)
- ✅ 신한은행 (Shinhan)
- ✅ 하나은행 (Hana)
- ✅ 농협 (NH)

### 앱 미설치 시
- **토스**: toss.me 웹사이트로 이동
- **카카오페이**: kakaopay.com으로 이동
- **기타 은행**: 각 은행 웹사이트로 이동

## 🎨 커스터마이징

### 색상 변경
`style.css`의 그래디언트를 수정하세요:

```css
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### 폰트 크기 변경
계좌번호 크기를 수정하려면:

```css
.account-number {
    font-size: 28px;  /* 기본값 */
}
```

## 📋 A4 인쇄용 페이지 (준비 중)

향후 QR코드와 계좌 정보를 포함한 A4 인쇄용 페이지 추가 예정

## 🐛 문제 해결

### 토스 앱이 안 열려요
- 토스 앱이 설치되어 있는지 확인
- `supertoss://` URL 스킴이 지원되는 토스 버전인지 확인
- 웹사이트로 자동 리다이렉트되면 정상 작동

### 계좌번호 복사가 안 돼요
- 최신 브라우저 사용 (Chrome 63+, Safari 13.1+)
- HTTPS 연결 필요 (GitHub Pages는 자동 HTTPS)

### 모바일에서 버튼이 너무 작아요
- 브라우저 줌 설정 확인 (기본값 100%)
- 세로 모드에서 사용 권장

## 📧 연락처

문제가 있으면 이슈 등록: [GitHub Issues](https://github.com/username/payment-guide/issues)

## 📄 라이선스

MIT License - 자유롭게 수정하고 배포할 수 있습니다.

---

**Last Updated**: 2026년 5월
