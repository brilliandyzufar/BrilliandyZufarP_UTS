const frame = document.getElementById('your-frame-id');

context ('Saucedemo Login Test', () =>{
    it('Login Saucedemo', () =>{
        cy.visit('https://saucedemo.com')
        cy.get('[id="user-name"]').type('standard_user')
        cy.get('input[type="password"]').type('secret_sauce')
        cy.get('[id="login-button"]').click()
        //Navbar//
        cy.get('#react-burger-menu-btn').click() //burger button
        cy.get('#logout_sidebar_link').click() //Logout

    
    })
})