# CONTEXT.md — HR 셀프서비스 포털

## 도메인 용어 정의

**AXhub**
회사가 만들어 판매하는 사내 ERP 플랫폼. 여러 기본 서비스 모듈로 구성된다.

**HR 셀프서비스 포털**
이 서비스의 이름. 직원이 HR 담당자를 거치지 않고 인사 관련 문서를 직접 발급하고 인사 정보를 조회·관리할 수 있는 AXhub 기본 서비스 모듈.

**재직증명서 자동 발급**
PoC의 핵심 기능. 직원이 로그인 후 발급 목적을 선택하면 직인이 합성된 PDF를 즉시 다운로드할 수 있는 기능.

**관리자 (Admin)**
HR 담당자 역할. 직원 정보와 회사 정보(직인 이미지 포함)를 등록·관리하고 발급 이력을 조회한다.

**직원 (Employee)**
재직증명서를 셀프 발급하는 주체. Google OAuth로 로그인한다.

**발급 목적**
재직증명서 발급 시 직원이 선택하는 제출처 구분. 예: 은행 제출용, 관공서 제출용, 보험사 제출용. PDF에 자동 기재된다.

**직인 이미지**
관리자가 사전에 업로드하는 회사 직인 PNG. 발급된 PDF에 자동 합성된다.

**발급 이력**
재직증명서가 발급될 때마다 기록되는 메타데이터. 발급 일시, 발급자, 발급 목적을 포함한다. PDF 원본은 저장하지 않는다.

**둘러보기 모드 (Demo Mode)**
로그인 없이 서비스 흐름을 체험할 수 있는 PoC 검증용 기능.

## 기술 스택

- Framework: Next.js (App Router)
- Language: TypeScript (strict)
- Styling: Tailwind CSS
- Package Manager: pnpm
- 추가 라이브러리: 필요 시 도입
- 폴더 구조: FSD (Feature-Sliced Design), 엄격하지 않게 적용

```
src/
├── app/          # Next.js App Router (라우팅, 레이아웃, 프로바이더)
├── features/     # 기능 단위 슬라이스 (재직증명서 발급, 직원 관리 등)
├── entities/     # 도메인 모델 (Employee, Certificate 등)
└── shared/       # 공통 UI, 유틸, API 클라이언트, 타입
```

widgets 레이어는 생략. pages 레이어는 Next.js app/ 디렉토리로 대체.

## DB 스키마 (Supabase)

```sql
create table companies (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  ceo_name    text not null,
  reg_number  text not null,
  address     text not null,
  seal_url    text,
  created_at  timestamptz default now()
);

create table employees (
  id          uuid primary key default gen_random_uuid(),
  company_id  uuid references companies(id) not null,
  user_id     uuid references auth.users(id),
  email       text not null unique,
  name        text not null,
  department  text not null,
  position    text not null,
  joined_at   date not null,
  role        text not null default 'employee',
  created_at  timestamptz default now()
);

create table certificate_issuances (
  id          uuid primary key default gen_random_uuid(),
  employee_id uuid references employees(id) not null,
  purpose     text not null,
  issued_at   timestamptz default now()
);
```

**인증:** Supabase Auth (Google OAuth). 로그인 시 `auth.users.email = employees.email` 매칭으로 `employees.user_id` 채움.

**RLS:**
- `companies`: 직원 읽기 / 관리자 읽기+수정
- `employees`: 직원 본인 행만 읽기 / 관리자 전체 읽기+수정
- `certificate_issuances`: 직원 본인 행 읽기+삽입 / 관리자 전체 읽기

## 범위 (PoC)

**포함**
- 재직증명서 단독 발급 (한국어, 고정 표준 양식)
- 즉시 자동 발급 (승인 없음)
- 발급 목적 선택
- 직인 이미지 업로드 및 PDF 합성
- Google OAuth 로그인
- 둘러보기 모드
- 발급 이력 (메타데이터)
- PC 웹 (반응형 미적용, 추후 고려)

**제외 (추후 확장)**
- 경력증명서, 급여명세서
- 승인 후 발급 플로우
- 영문 발급
- 모바일 반응형
- AXhub 계정 통합
- PDF 원본 저장
- 외부 HR 시스템 연동
