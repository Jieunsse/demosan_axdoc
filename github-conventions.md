# GitHub 협업 규칙

AdFlow 프로젝트의 커밋·PR·이슈 생성 규칙 정리.

---

## 커밋 메시지

### 형식

```
type(scope): 한국어 설명
```

- **type** (필수): `feat` / `fix` / `refactor` / `style` / `test` / `docs` / `chore`
- **scope** (선택): 변경된 도메인/모듈 — `instagram`, `campaigns`, `launch-step`, `ui`, `billing` 등
- 여러 항목: `·` 구분
- 서브 설명: `—` 뒤에 이어서

### 예시

```
feat(campaigns): Edit Campaign 인라인 모달 4종 구현
fix(instagram): redirect_uri 환경변수 폴백 추가
refactor(launch-step): DetailKnobs 목표별 컴포넌트 분해
feat(ab-test): 헤드라인 후보 선택 · AI 생성 패널 — STEP 02 연동
```

### 금지

- `Co-Authored-By:` 트레일러 절대 포함 X

---

## Pull Request

### gh 커맨드

```bash
gh pr create \
  --title "type(scope): 설명" \
  --assignee @me \
  --label enhancement   # feat→enhancement / fix→bug / docs→documentation
  --body "$(cat <<'EOF'
...
EOF
)"
```

- `--assignee @me` 항상 포함
- 라벨은 type에서 자동 매핑 (레포 기본 라벨 9종 외 신규 생성 X)

### Body 구조

```markdown
## Summary

[ 주제1 ]

- 세부 항목 1
- 세부 항목 2

[ 주제2 ]

- 세부 항목 1
- 세부 항목 2

## Test plan
- [ ] 확인 항목
```

- `[ 주제 ]` = 변경 도메인/컴포넌트 단위로 묶기 (예: `[ 댓글 관리 페이지 ]`, `[ comments lib ]`)
- 항목은 간결하게, 완전한 문장 불필요

### PR 템플릿 (GitHub 기본 템플릿)

```markdown
## 무슨 변경인가요?

<!-- 1~3줄, 쉬운 말로 -->

## 왜 했나요?

<!-- 동기 — PRD/이슈 링크 또는 한 줄 설명 -->

## 확인 방법

<!-- 스크린샷, 경로, 또는 명령어 -->

## 체크리스트

- [ ] 타입 체크 통과
- [ ] 관련 PRD/ADR 있으면 링크 달았음
```

---

## 이슈

### 이슈 템플릿

```markdown
## 세 줄 요약

- 요약1
- 요약2
- 요약3

## 이슈 내용

[ 주제 ]

- 세부사항1
- 세부사항2

[ 주제2 ]

- 세부사항1
- 세부사항2
```

### Triage 라벨

| 라벨 | 의미 |
|---|---|
| `needs-triage` | 검토 전 |
| `needs-info` | 추가 정보 필요 |
| `ready-for-agent` | AI 에이전트 처리 가능 |
| `ready-for-human` | 사람 판단 필요 |
| `wontfix` | 대응 안 함 |

---

## type → 라벨 매핑

| 커밋 type | GitHub 라벨 |
|---|---|
| `feat` | `enhancement` |
| `fix` | `bug` |
| `docs` | `documentation` |
| 그 외 | 라벨 생략 |
