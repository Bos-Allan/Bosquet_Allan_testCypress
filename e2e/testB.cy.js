
describe("Le site est accessible", () => {
    it('visite site', () => {
        cy.visit('/morpion.html')
    })
})

describe("interaction de base", () => {
    beforeEach(() => {
        cy.visit('/morpion.html')
    }),
    it("score de depart de O - O", () => {
        cy.get('#score').should('have.text', 'X : 0 - O : 0')
    }),
    it("la grille est de 3x3", () => {
        cy.get('#taille').should('have.value', '3')
    })
    it("bouton rejouer non valide", () => {
        cy.get('#btn_reset').should('be.disabled')
    })
    it("le jeu invite au j1 de joueur", () => {
        cy.get('#messages').should('have.text', 'Joueur 1, à toi de jouer !')
    })
})

describe('Alternance OK et click ok', () => {
    beforeEach(() => {
        cy.visit('/morpion.html')
    }),
    it('clic bien géré', () => {
        cy.get('#23').click()
        cy.get('#23').should('have.value', 'X')
        }),
    it('alternance joueur ok', () => {
        cy.get('#messages').should('have.text', 'Joueur 1, à toi de jouer !')
        cy.get('#23').click()
        cy.get('#23').should('have.value', 'X')
        cy.get('#messages').should('have.text', 'Joueur 2, à toi de jouer !')
        cy.get('#11').click()
        cy.get('#11').should('have.value', 'O')
      
    })
})

describe('Chagement taille', () => {
    beforeEach(() => {
        cy.visit('/morpion.html')
    })
    it('test taille', () => {
        const tabCases = [11,12,21,22,31];
        cy.wrap(tabCases).each((index) => {
        cy.get("#"+index).click()
        })
        cy.get("#taille").clear().type("5")
        cy.get("#btn_reset").click()
    })
})

