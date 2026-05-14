// 설정
const CONFIG = {
    bank: '국민은행',
    account: '034501-04-073572',
    accountNumber: '03450104073572',
    accountHolder: '원재인',
    bankCode: '004' // 국민은행 코드
};

// DOM 요소
const tossBtn = document.getElementById('tossBtn');
const kakaoBtn = document.getElementById('kakaoBtn');
const copyBtn = document.getElementById('copyBtn');
const toast = document.getElementById('toast');

// 토스트 알림 함수
function showToast(message, duration = 2000) {
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, duration);
}

// 계좌번호 복사 함수
async function copyAccount() {
    try {
        await navigator.clipboard.writeText(CONFIG.account);
        showToast('✓ 계좌번호가 복사되었습니다');
    } catch (err) {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = CONFIG.account;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showToast('✓ 계좌번호가 복사되었습니다');
    }
}

// 모바일 기기 감지
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// 토스 송금
function sendViaToss() {
    if (isMobile()) {
        // 모바일: 앱 스킴 사용
        const bankMap = {
            '국민': '국민',
            '신한': '신한',
            '우리': '우리',
            '하나': '하나',
            '농협': '농협'
        };
        const bank = bankMap[CONFIG.bank.split('은행')[0]] || '국민';
        const tossAppUrl = `supertoss://send?bank=${bank}&accountNo=${CONFIG.accountNumber}`;

        const startTime = Date.now();
        window.location.href = tossAppUrl;

        // 앱이 없으면 웹으로 폴백
        setTimeout(() => {
            if (Date.now() - startTime < 1500) {
                window.location.href = 'https://toss.me';
            }
        }, 1000);
    } else {
        // PC: 웹사이트로 바로 이동
        window.location.href = 'https://toss.me';
    }
}

// 카카오페이 송금
function sendViaKakaopay() {
    if (isMobile()) {
        // 모바일: 카카오톡/카카오페이 앱 링크 시도
        const kakaoAppUrl = 'kakaotalk://send';

        const startTime = Date.now();
        window.location.href = kakaoAppUrl;

        // 앱이 없으면 웹으로 폴백
        setTimeout(() => {
            if (Date.now() - startTime < 1500) {
                window.location.href = 'https://www.kakaopay.com';
            }
        }, 1000);
    } else {
        // PC: 웹사이트로 바로 이동
        window.location.href = 'https://www.kakaopay.com';
    }
}


// 이벤트 리스너
copyBtn.addEventListener('click', copyAccount);
tossBtn.addEventListener('click', sendViaToss);
kakaoBtn.addEventListener('click', sendViaKakaopay);

// 페이지 로드 시 계좌번호 자동 포커스 (모바일)
window.addEventListener('load', () => {
    // 선택 사항: 로드 완료 표시
    console.log('Payment guide page loaded');
});

// 모바일 주소창 숨기기
window.addEventListener('scroll', () => {
    window.scrollTo(0, 0);
});
