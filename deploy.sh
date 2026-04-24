#!/usr/bin/env sh

set -e

set -a
. ./.env
set +a

: "${DEPLOY_PROJECT_NAME:?DEPLOY_PROJECT_NAME is required in .env}"
: "${DEPLOY_GITHUB_USER:?DEPLOY_GITHUB_USER is required in .env}"
: "${DEPLOY_REPO_NAME:?DEPLOY_REPO_NAME is required in .env}"
: "${DEPLOY_BRANCH:=gh-pages}"

DEPLOY_REPO_URL="https://github.com/${DEPLOY_GITHUB_USER}/${DEPLOY_REPO_NAME}.git"

echo "Deploy project: ${DEPLOY_PROJECT_NAME}"
echo "Deploy repo: ${DEPLOY_REPO_URL} -> ${DEPLOY_BRANCH}"

pnpm run build

cd dist

echo > .nojekyll

# 每次部署都重建 dist 的 Git 狀態，避免沿用舊 repo 導致分支/紀錄混亂。
rm -rf .git
git init
git checkout -B gh-pages-temp
git add -A
if git diff --cached --quiet; then
  echo "No changes in dist. Skip deploy."
  cd -
  exit 0
fi

git commit -m "deploy: $(date '+%Y-%m-%d %H:%M:%S')"

# 如果你要部署在 https://<DEPLOY_GITHUB_USER>.github.io/<DEPLOY_REPO_NAME>
git push -f "${DEPLOY_REPO_URL}" gh-pages-temp:"${DEPLOY_BRANCH}"

cd -
