# 📦 NPM 배포 가이드

## 사전 준비

### 1. npm 계정 및 인증

```bash
# npm 로그인 상태 확인
npm whoami

# 로그인이 안되어 있다면
npm login
```

### 2. .npmrc 파일 설정 (이미 완료됨)

`.npmrc` 파일에 인증 토큰이 설정되어 있어야 합니다:

```
//registry.npmjs.org/:_authToken=npm_YOUR_TOKEN_HERE
```

⚠️ **중요**: `.npmrc` 파일은 `.gitignore`에 포함되어 있어 Git에 커밋되지 않습니다. 토큰을 안전하게 보관하세요!

## 배포 프로세스

### 방법 1: 수동 배포 (권장)

```bash
# 1. 모든 변경사항 커밋
git add .
git commit -m "feat: describe your changes"
git push

# 2. 버전 업데이트
npm version patch   # 0.0.18 → 0.0.19 (버그 수정)
npm version minor   # 0.0.18 → 0.1.0  (새 기능 추가)
npm version major   # 0.0.18 → 1.0.0  (Breaking changes)

# 3. 배포
npm publish
```

### 방법 2: 한 번에 실행

```bash
# 테스트와 빌드를 수동으로 확인 후
npm run build && npm test

# 버전 업데이트와 배포
npm version minor && npm publish
```

## 자동 체크리스트

`npm publish` 실행 시 `prepublishOnly` 스크립트가 자동으로 다음을 실행합니다:

1. ✅ **테스트 실행** (`npm test`)
2. ✅ **Lint 검사** (`npm run lint`)
3. ✅ **빌드** (`npm run build` - prepare 훅에서)

어느 하나라도 실패하면 배포가 중단됩니다.

## 버전 전략

### Semantic Versioning (SemVer)

- **MAJOR (1.0.0)**: Breaking changes - 기존 API가 변경되어 호환성이 깨짐
- **MINOR (0.1.0)**: 새 기능 추가 - 하위 호환성 유지
- **PATCH (0.0.1)**: 버그 수정 - 하위 호환성 유지

### 예시

```bash
# 새 기능 추가 (오늘처럼)
npm version minor
# 0.0.18 → 0.1.0

# 버그 수정
npm version patch
# 0.1.0 → 0.1.1

# Breaking changes
npm version major
# 0.1.1 → 1.0.0
```

## Git Push 문제 해결

만약 Git push 시 권한 오류가 발생한다면:

```bash
# 현재 Git 사용자 확인
git config user.name
git config user.email

# Git credential 재설정
git config --global credential.helper osxkeychain

# 또는 SSH 키 사용
git remote set-url origin git@github.com:jellive/jell-utils.js.git
```

## 배포 확인

```bash
# 패키지 페이지에서 확인
# https://www.npmjs.com/package/jell-utils

# 설치 테스트
npm install jell-utils

# 또는
npm view jell-utils version
```

## Semantic Release (자동 배포)

프로젝트에 semantic-release가 설정되어 있습니다. CI/CD에서 자동 배포하려면:

```bash
# Conventional Commits 형식으로 커밋
git commit -m "feat: add new utility function"
git commit -m "fix: resolve bug in parseTime"
git commit -m "docs: update README"

# Push하면 GitHub Actions가 자동으로 배포
git push
```

### Conventional Commits 규칙

- `feat:` - 새 기능 (MINOR 버전 증가)
- `fix:` - 버그 수정 (PATCH 버전 증가)
- `docs:` - 문서만 변경 (버전 증가 없음)
- `BREAKING CHANGE:` - Breaking changes (MAJOR 버전 증가)

## 문제 해결

### 에러: "You do not have permission to publish"

```bash
# npm 로그인 다시 확인
npm whoami
npm logout
npm login
```

### 에러: "Package version already exists"

```bash
# 버전을 올려야 합니다
npm version patch
npm publish
```

### 에러: "prepublishOnly script failed"

테스트나 Lint 에러를 먼저 수정해야 합니다:

```bash
# 에러 확인
npm test
npm run lint

# 수정 후 다시 시도
npm publish
```

## 배포 체크리스트

- [ ] 모든 테스트 통과 (`npm test`)
- [ ] Lint 검사 통과 (`npm run lint`)
- [ ] 빌드 성공 (`npm run build`)
- [ ] README.md 업데이트
- [ ] CHANGELOG.md 업데이트 (선택사항)
- [ ] Git 커밋 및 Push
- [ ] 버전 업데이트
- [ ] npm publish
- [ ] 배포 확인 (npmjs.com)

## 현재 버전

- **현재**: 0.1.0
- **마지막 배포**: 2025-10-11
- **포함된 기능**: 
  - Korean utilities (초성 검색, 사업자등록번호)
  - Object/Array utilities (getByPath, setByPath, groupBy, sortBy, deepMerge)
  - String utilities (extractNumbers, maskString, getFileExtension)
  - Date utilities (dateDiff)
  - Async utilities (retry with backoff)
  - 50개 테스트 케이스 (79.67% 커버리지)

## 다음 배포 시

1. 변경사항을 커밋
2. `npm version [patch|minor|major]` 선택
3. `npm publish` 실행
4. 완료! 🚀

---

**참고**: 배포 전 항상 로컬에서 `npm test && npm run build`를 실행하여 문제가 없는지 확인하세요.

