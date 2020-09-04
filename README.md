eslint와 prettier를 충돌없이 사용하도록 설정한 예제<br />
<br />
린트가 정상 작동 된다면 위의 file에만 줄이 가 있어야 한다.<br />
<br />
그 까다로운 airbnb로 eslint 설정을 했음에도 세미콜론에 줄이 가지 않는 이유는<br />
prettier 설정에서 semi 속성을 false로 명시했기 때문이다.<br />
<br />
다음 모듈을 설치해서 그렇다.<br />
npm i -D eslint-config-prettier eslint-plugin-prettier<br />
<br />
앞에 것은 prettier와 충돌이 생기는 eslint 설정을 끄고<br />
뒤에 것은 prettier의 설정을 eslint 설정에 추가해주는 역할을 한다.<br />
<br />
그밖에도 eslint와 prettier 모듈을 설치해야하고<br />
format on save 설정이 체크돼 있어야 하며<br />
vscode 같은 에디터의 익스텐션이 활성화 돼 있어야 정상적으로 작동한다.<br />
<br />
예)<br />
vscode의 경우<br />
Prettier - Code formatter<br />
ESLint<br />
<br />
추가적으로 이 프로젝트에서처럼 airbnb 설정을 하려면 다음을 입력한다.<br />
npx install-peerdeps --dev eslint-config-airbnb<br />
<br />
참고 :<br />
[https://www.robinwieruch.de/prettier-eslint]<br />
[https://github.com/prettier/eslint-config-prettier]<br />
