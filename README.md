# question 1

## introduction
1. 使用 Cypress 完成

## Based on

 - Node: v16.##.#

### How to start

請先將帳號密碼填入 cypress.env.json
```
{
    "account": "<your 104 account>",
    "password": "<your 104 password>"
}
```

修改 cypress/e2e/login.cy.js 驗證名字
```
const userName = 'your name'
```

執行
```bash
npm install
npm run test
```