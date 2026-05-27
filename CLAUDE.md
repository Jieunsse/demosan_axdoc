## Agent skills

### Issue tracker

Issues are tracked in GitHub Issues. See `docs/agents/issue-tracker.md`.

### Triage labels

Uses default label vocabulary (needs-triage, needs-info, ready-for-agent, ready-for-human, wontfix). See `docs/agents/triage-labels.md`.

### Domain docs

Single-context layout — one `CONTEXT.md` + `docs/adr/` at the repo root. See `docs/agents/domain.md`.

---

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
---

# GitHub 협업 규칙

## PR 생성

`gh pr create` 시 아래를 반드시 지킨다.

- `--assignee @me` 항상 포함
- 라벨은 type에서 매핑, 그 외 type은 라벨 생략

| 커밋 type | 라벨 |
|-----------|------|
| `feat` | `enhancement` |
| `fix` | `bug` |
| `docs` | `documentation` |

body는 `[ 주제 ]` 단위로 변경 내역을 묶는다.

```
## Summary

[ 주제1 ]

- 세부 항목 1
- 세부 항목 2

## Test plan
- [ ] 확인 항목
```

## 이슈 생성

```
## 세 줄 요약

- 
- 
- 

## 이슈 내용

[ 주제 ]

- 
```
