# EmailJS 설정 가이드

이 프로젝트는 EmailJS를 사용하여 데모 요청 양식을 `vmsholdings@vmsforsea.com` 이메일로 전송합니다.

## 1. EmailJS 계정 생성

1. [EmailJS 웹사이트](https://www.emailjs.com/)에 방문하여 계정을 생성하세요.
2. 무료 플랜으로 월 200개의 이메일을 무료로 보낼 수 있습니다.

## 2. 이메일 서비스 연결

1. EmailJS 대시보드에서 "Email Services"로 이동
2. "Add New Service" 클릭
3. Gmail, Outlook 등 원하는 이메일 서비스 선택
4. 계정 인증 완료
5. **Service ID**를 복사해 두세요

## 3. 이메일 템플릿 생성

1. "Email Templates"로 이동
2. "Create New Template" 클릭
3. 다음 템플릿을 사용하세요:

### 템플릿 내용:
```
Subject: VMS Holdings Demo Request - {{from_name}}

안녕하세요,

새로운 데모 요청이 접수되었습니다.

==========================================
신청자 정보:
- 이름: {{from_name}}
- 이메일: {{from_email}}
- 전화번호: {{phone}}
- 회사: {{company}}
- 국가: {{country}}
- 직책: {{job_title}}

프로젝트 설명:
{{project_description}}

첨부파일 정보:
{{files_info}}
==========================================

감사합니다.
VMS Holdings 웹사이트
```

### 템플릿 변수:
- `{{from_name}}` - 발신자 이름
- `{{from_email}}` - 발신자 이메일
- `{{message}}` - 전체 메시지 내용
- `{{to_email}}` - 수신 이메일 (vmsholdings@vmsforsea.com)

4. **Template ID**를 복사해 두세요

## 4. 환경 변수 설정

프로젝트 루트 디렉토리에 `.env` 파일을 생성하고 다음 내용을 추가하세요:

```env
# EmailJS Configuration
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here

# 이메일 수신 주소
REACT_APP_CONTACT_EMAIL=vmsholdings@vmsforsea.com
```

## 5. Public Key 확인

1. EmailJS 대시보드에서 "Account" → "General"로 이동
2. **Public Key**를 복사하여 환경 변수에 추가

## 6. 테스트

1. 개발 서버 재시작: `npm start`
2. 데모 요청 양식을 작성하고 제출
3. `vmsholdings@vmsforsea.com`에서 이메일 수신 확인

## 이메일 내용

전송되는 이메일에는 다음 정보가 포함됩니다:

- 연락처 정보 (이름, 이메일, 전화번호, 직책, 회사, 국가)
- 프로젝트 설명
- 업로드된 파일 목록 (파일명과 크기)
- 옵트인 설정 (제품 업데이트, 영업 연락, 이벤트 초대)
- 제출 시간

## 문제 해결

- **이메일이 전송되지 않는 경우**: 콘솔에서 에러 메시지 확인
- **스팸 폴더 확인**: 첫 이메일은 스팸 폴더로 갈 수 있습니다
- **할당량 초과**: EmailJS 대시보드에서 사용량 확인

## 보안 주의사항

- `.env` 파일을 `.gitignore`에 추가하여 버전 관리에서 제외
- Public Key는 클라이언트에 노출되어도 안전하지만, Private Key는 절대 노출하지 마세요
- 운영 환경에서는 환경 변수를 서버에서 설정하세요 