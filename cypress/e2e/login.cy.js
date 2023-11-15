describe('Проверка авторизации', function () {
    
    it('Верный логин, верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // захожу на сайт
        cy.get('#loginButton').should('be.disabled'); // кнопка задизейблена
        cy.get('#mail').type('german@dolnikov.ru'); // ввожу логин
        cy.get('#loginButton').should('be.disabled'); // кнопка задизейблена
        cy.get('#pass').type('iLoveqastudio1'); // ввожу пароль 
        cy.get('#loginButton').should('be.enabled'); // кнопка доступна
        cy.get('#loginButton').click(); // клик кнопка войти 
        cy.get('#messageHeader').should('be.visible'); // видим слово
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видим крестик
        })

    	 it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // захожу на сайт
        cy.get('#forgotEmailButton').click(); // клик кнопка забыли пароль 
        cy.get('#mailForgot').type('german@dolnikov.ru'); // ввожу email
        cy.get('#restoreEmailButton').click(); // клик кнопка отправить код
        cy.get('#messageHeader').should('be.visible'); // видим слово
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видим крестик
        })

        it('Верный логин, не верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // захожу на сайт
        cy.get('#loginButton').should('be.disabled'); // кнопка задизейблена
        cy.get('#mail').type('german@dolnikov.ru'); // ввожу логин
        cy.get('#loginButton').should('be.disabled'); // кнопка задизейблена
        cy.get('#pass').type('iLoveqastudio123'); // ввожу не верный пароль 
        cy.get('#loginButton').should('be.enabled'); // кнопка активна
        cy.get('#loginButton').click(); // клик кнопка войти 
        cy.get('#messageHeader').should('be.visible'); // видим слово
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видим крестик
        })

        it('Не верный логин, верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // захожу на сайт
        cy.get('#loginButton').should('be.disabled'); // кнопка задизейблена
        cy.get('#mail').type('geraman@dolnikov.ru'); // ввожу не верный логин
        cy.get('#loginButton').should('be.disabled'); // кнопка задизейблена
        cy.get('#pass').type('iLoveqastudio1'); // ввожу пароль 
        cy.get('#loginButton').should('be.enabled'); // кнопка доступна
        cy.get('#loginButton').click(); // клик кнопка войти 
        cy.get('#messageHeader').should('be.visible'); // видим слово
        cy.get('#message').contains('Такого логина или пароля нет'); // текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видим крестик
        })

        it('Проверка валидации', function () {
        cy.visit('https://login.qa.studio/'); // захожу на сайт
        cy.get('#loginButton').should('be.disabled'); // кнопка задизейблена
        cy.get('#mail').type('germandolnikov.ru'); // ввожу логин без собачки
        cy.get('#loginButton').should('be.disabled'); // кнопка задизейблена
        cy.get('#pass').type('iLoveqastudio1'); // ввожу верный пароль 
        cy.get('#loginButton').should('be.enabled'); // кнопка активна
        cy.get('#loginButton').click(); // клик кнопка войти 
        cy.get('#messageHeader').should('be.visible'); // видим слово
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видим крестик
        })

       it('Проверка приведения к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); // захожу на сайт
        cy.get('#loginButton').should('be.disabled'); // кнопка задизейблена
        cy.get('#mail').type('GerMan@dolnikov.ru'); // ввожу верный логин с разным регистром
        cy.get('#loginButton').should('be.disabled'); // кнопка задизейблена
        cy.get('#pass').type('iLoveqastudio1'); // ввожу пароль 
        cy.get('#loginButton').should('be.enabled'); // кнопка доступна
        cy.get('#loginButton').click(); // клик кнопка войти 
        cy.get('#messageHeader').should('be.visible'); // видим слово
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видим крестик
        })
})
