
read -r -p "Run full package release? [y/N] " response
if [[ "$response" =~ ^([yY][eE][sS]|[yY])+$ ]]; then

  echo "What type of update is this: major, minor, patch?"
  read version

  echo "Type your commit message:"
  read message

  V="$(npm --no-git-tag-version version $version -f)"

  echo "==== starting bundle ===="

  npm run prepublish

  echo "==== ending bundle ===="
  echo "********"
  echo "==== starting changelog addition ===="

  ex -sc "2i|{ "\"user\"": "\""$(git config user.name)"\"", "\"version\"": "\"$V\"", "\"commit\"": "\""$message"\"" }," -cx ./.storybook/documentation/changelog.json

  echo "==== ending changelog addition ===="
  echo "********"
  echo "==== starting git logic ===="

  git add -A
  git commit -m "$message"
  git tag -a $V -m "$message"
  git push origin master --tags
  git push

  echo "==== ending git logic ===="

  read -r -p "Publish package? [y/N] " response
  if [[ "$response" =~ ^([yY][eE][sS]|[yY])+$ ]]; then
    cp -rf .npmignore package.json ./dist
    echo "cd ./dist && npm publish --access public"
    cd ./dist && npm publish --access public
  fi

  read -r -p "Run storybook release? [y/N] " response
  if [[ "$response" =~ ^([yY][eE][sS]|[yY])+$ ]]; then
    npm run deploy-storybook
  fi
fi

if [[ "$response" =~ ^([nN][oO]|[nN])+$ ]]; then
  echo "What type of update is this: alpha or beta?"
  read version

  echo "Type your commit message:"
  read message

  echo "********"
  echo "==== starting bundle ===="
  echo "********"
    V="$(npm --no-git-tag-version version prerelease --preid=$version -f)"
    npm run prepublishOnly
  echo "********"
  echo "==== ending bundle ===="

  echo "********"
  echo "==== starting git logic ===="
  echo "********"
    git add -A
    git commit -m "$message"
    git tag -a $V -m "$message"
    git push origin master --tags
    git push
  echo "********"
  echo "==== starting git logic ===="
  echo "********"

  read -r -p "Publish package? [y/N] " response
  if [[ "$response" =~ ^([yY][eE][sS]|[yY])+$ ]]; then
    cp -rf .npmignore package.json ./dist
    echo "cd ./dist && npm publish --tag $version --access public"
    cd ./dist && npm publish --tag $version --access public
  fi
fi



