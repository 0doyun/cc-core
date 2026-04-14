# CC CORE

**Claude Code 생태계의 모든 것을 한국어로 모아놓은 종합 자료 허브.**

[https://cc-core.vercel.app](https://cc-core.vercel.app)

공식 문서 요약 + 흩어진 커뮤니티 팁 + 실전 파이프라인 레시피 + 에코시스템 대안까지 — **하네스 엔지니어링** 관점으로 엮인 살아있는 한국어 레퍼런스.

## 누구를 위한 사이트인가

- Claude Code 를 **이미 쓰고 있지만** 채팅창처럼만 쓰는 중급자
- OMC, Hooks, Skills, DESIGN.md 같은 이름은 들어봤지만 써본 적 없는 입문 파워유저
- 흩어진 팁을 한국어로 한 곳에서 보고 싶은 사람

Claude Code 자체를 처음 설치하는 경우는 [공식 문서](https://code.claude.com/docs) 를 먼저 권합니다.

## 다루는 카테고리 (9개)

| 카테고리 | 다루는 것 |
|---|---|
| Start | 하네스 엔지니어링 개념 프레임 |
| Docs Summary | Claude Code · OMC · MCP 공식 문서 한국어 요약 |
| Slash Commands | CC + OMC 슬래시 커맨드 카탈로그, 커스텀 커맨드 |
| Session & Context | 컨텍스트 윈도우, `/compact`, 세션 이어가기 |
| Workflows | 바이브코딩 파이프라인, 디자인 자동화, 디버깅 루프 |
| Git & Versioning | AI 시대의 Git 전략, 커밋 컨벤션, main 보호 |
| Ecosystem | vibeProxy, CLI 비교, MCP 서버 모음 |
| Tips & Tricks | CLAUDE.md 패턴, Hook 레시피, 프롬프트 단축어 |
| What's New | 월간 업데이트 요약 |

## 차별점

- **한국어 우선** — 영어 자료를 단순 번역하지 않고 한국어 독자 맥락으로 재구성
- **하네스 엔지니어링 프레임** — 단순 링크 덤프가 아니라 "왜 이 도구들이 필요한지" 를 철학적으로 정리
- **공식 + 커뮤니티 팁 통합** — 공식 문서만 봐서는 모를 법한 실전 팁을 출처 명시해서 수록
- **살아있는 문서** — What's New 섹션이 매월 업데이트, 모든 챕터 하단에 `Last verified` 표시

## 기술 스택

- **Framework**: Next.js 16 (App Router, Server Components 기본)
- **Docs**: Fumadocs 16.x (MDX)
- **Styling**: Tailwind CSS
- **Deploy**: Vercel
- **Package Manager**: pnpm

## 로컬 실행

```bash
pnpm install
pnpm dev
```

`http://localhost:3000` 에서 확인.

## 빌드

```bash
pnpm build
```

## 콘텐츠 추가

새 챕터는 `content/docs/<카테고리>/<slug>.mdx` 에 Fumadocs 포맷으로 작성하고, 해당 카테고리의 `meta.json` 에 slug 를 추가하면 됩니다.

상세 가이드라인은 [`CLAUDE.md`](./CLAUDE.md) 참고 (커밋 컨벤션, 비주얼 규칙, MDX 작성 규칙 포함).

## 라이선스

콘텐츠: 별도 표기 전까지 All rights reserved. 코드(레이아웃·컴포넌트·설정): MIT 의도.

## 기여

오타 수정, 사실 정정, 새 챕터 제안 등 환영합니다. 챕터 추가 PR 은 [`CLAUDE.md`](./CLAUDE.md) 의 비주얼 규칙(특히 **이모지 금지**)과 커밋 컨벤션을 따라주세요.
