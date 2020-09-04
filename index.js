const file = 'string'

// 린트가 정상 작동 된다면 위의 file에만 줄이 가 있어야 한다.
//
// 그 까다로운 airbnb로 eslint 설정을 했음에도 세미콜론에 줄이 가지 않는 이유는
// prettier 설정에서 semi 속성을 false로 명시했기 때문이다.
//
// 다음 모듈을 설치해서 그렇다.
// npm i -D eslint-config-prettier eslint-plugin-prettier
//
// 앞에 것은 prettier와 충돌이 생기는 eslint 설정을 끄고
// 뒤에 것은 prettier의 설정을 eslint 설정에 추가해주는 역할을 한다.
//
// 그밖에도 eslint와 prettier 모듈을 설치해야하고
// format on save 설정이 체크돼 있어야 하며
// vscode 같은 에디터의 익스텐션이 활성화 돼 있어야 정상적으로 작동한다.
//
// 예)
// vscode의 경우
// Prettier - Code formatter
// ESLint
//
// 추가적으로 이 프로젝트에서처럼 airbnb 설정을 하려면 다음을 입력한다.
// npx install-peerdeps --dev eslint-config-airbnb
//
// 참고 :
// https://www.robinwieruch.de/prettier-eslint
// https://github.com/prettier/eslint-config-prettier
