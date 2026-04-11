# junyeol-components — Agent Guidelines

이 파일은 에이전트가 프로젝트에서 작업할 때 참조하는 **목차**다.
새로운 실수·개선사항·리뷰사항이 발견되면 `.claude/docs/YYYY-MM-DD_제목.md`에 문서를 작성하고 [Pitfalls](#pitfalls) 섹션에 항목을 추가한다.
프로젝트 결정사항은 [Project Decisions](#project-decisions) 섹션에 직접 기록한다.

---

## 프로젝트 개요

React + TypeScript 컴포넌트 라이브러리. pnpm 모노레포.

- **언어**: TypeScript (strict)
- **스택**: React, Tailwind CSS, shadcn/ui, Radix Primitives
- **빌드/테스트**: `pnpm build` · `pnpm test` · `pnpm lint`

---

## 작업 하네스

컴포넌트 작성·수정·리뷰는 `.claude/skills/fe/` 문서를 기준으로 한다.
**코드를 작성하거나 리뷰하기 전에 반드시 해당 파일을 Read한다. 읽지 않으면 작성하지 않는다.**

### 태스크별 필수 Read 파일

| 태스크 | Read할 파일 |
|---|---|
| 컴포넌트 작성/수정 | `code-quality.md` + `component-patterns.md` + `design-system.md` |
| 코드 리뷰 | `code-review.md` + `code-quality.md` + 리뷰 대상에 따라 관련 파일 추가 |
| 디자인 시스템/UI | `design-system.md` + `component-patterns.md` |
| 리팩토링 | `code-quality.md` + `component-patterns.md` |
| 복합 태스크 | 해당하는 행의 파일을 합집합으로 Read |

> 파일 경로 기준: `.claude/skills/fe/<파일명>`
> 태스크 판단이 모호한 경우: `.claude/skills/fe/SKILL.md`의 태스크-지식 매핑 테이블 전체를 먼저 Read한다.

---

## Project Decisions

<!-- 프로젝트 결정사항을 아래에 추가한다. 형식: `- YYYY-MM-DD: 결정 내용 (배경/이유)` -->

_아직 기록된 결정사항이 없습니다._

---

## Pitfalls

<!-- 실수·개선사항·리뷰사항이 발견될 때마다 .claude/docs/YYYY-MM-DD_제목.md 파일을 만들고 아래에 링크를 추가한다. -->
<!-- 형식: `- [YYYY-MM-DD 제목](.claude/docs/YYYY-MM-DD_제목.md) — 한 줄 요약` -->

_아직 기록된 pitfall이 없습니다._
