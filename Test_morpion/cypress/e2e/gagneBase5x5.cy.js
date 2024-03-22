describe('Morpion 5x5 : test des cas gagnant complet', () => {
    beforeEach(() => {
        cy.visit('/morpion.html')
        const tabCases = [11,12,21,22,31];
        cy.wrap(tabCases).each((index) => {
        cy.get("#"+index).click()
        })
        cy.get("#complet").click()
        cy.get("#taille").clear().type("5")
        cy.get("#btn_reset").click()
    }),
    it('joueur 1 gagne ligne 1', () => {

        const tabCases = [12,22,13,23,14,32,11,33,15];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
          
        })
        cy.get('#messages').should('have.text', 'Le joueur 1 a gagné !')
        cy.get('#score').should('have.text', 'X : 2 - O : 0')
    })
    it('joueur 1 gagne ligne 5 (derniere)', () => {

        const tabCases = [52,22,53,23,54,32,51,33,55];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
          
        })
        cy.get('#messages').should('have.text', 'Le joueur 1 a gagné !')
        cy.get('#score').should('have.text', 'X : 2 - O : 0')
    })

    it('joueur 1 gagne ligne au centrale', () => {

        const tabCases = [32,22,33,43,34,12,31,23,35];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
          
        })
        cy.get('#messages').should('have.text', 'Le joueur 1 a gagné !')
        cy.get('#score').should('have.text', 'X : 2 - O : 0')
    })

    it('joueur 1 gagne colonne 1', () => {

        const tabCases = [11,42,21,22,31,32,41,23,51];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
          
        })
        cy.get('#messages').should('have.text', 'Le joueur 1 a gagné !')
        cy.get('#score').should('have.text', 'X : 2 - O : 0')
    })
    it('joueur 1 gagne colonne au milieu', () => {

        const tabCases = [12,44,22,23,32,33,42,21,52];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
          
        })
        cy.get('#messages').should('have.text', 'Le joueur 1 a gagné !')
        cy.get('#score').should('have.text', 'X : 2 - O : 0')
    })
    
    it('joueur 1 gagne colonne 5', () => {

        const tabCases = [15,42,25,22,35,32,45,23,55];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
          
        })
        cy.get('#messages').should('have.text', 'Le joueur 1 a gagné !')
        cy.get('#score').should('have.text', 'X : 2 - O : 0')
    })
    it('joueur 1 gagne diagonale', () => {

        const tabCases = [11,21,22,31,33,12,44,15,55];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
          
        })
        cy.get('#messages').should('have.text', 'Le joueur 1 a gagné !')
        cy.get('#score').should('have.text', 'X : 2 - O : 0')
    })
    it('joueur 1 gagne diagonale inverse', () => {

        const tabCases = [51,21,42,31,33,12,24,23,15];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
          
        })
        cy.get('#messages').should('have.text', 'Le joueur 1 a gagné !')
        cy.get('#score').should('have.text', 'X : 2 - O : 0')
    })
    

    it('Match nul', () => {
        const tabCases = [11,12,13,14,15,21,23,22,31,24,32,25,34,33,35,41,42,43,44,45,51,52,53,54,55];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
          
        })
        cy.get('#messages').should('have.text', 'Match nul !')
        cy.get('#score').should('have.text', 'X : 1 - O : 0')
    })
})

describe('Morpion 5x5 : test des cas gagnant simple', () => {
    beforeEach(() => {
        cy.visit('/morpion.html')
        const tabCases = [11,12,21,22,31];
        cy.wrap(tabCases).each((index) => {
        cy.get("#"+index).click()
        })
        cy.get("#simple").click()
        cy.get("#taille").clear().type("5")
        cy.get("#btn_reset").click()
    }),
    it('joueur 1 gagne ligne 1 sans partir du debut', () => {

        const tabCases = [12,22,13,23,14];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
          
        })
        cy.get('#messages').should('have.text', 'Le joueur 1 a gagné !')
        cy.get('#score').should('have.text', 'X : 2 - O : 0')
    })
    it('joueur 1 gagne ligne 1 partant du debut', () => {

        const tabCases = [11,21,12,22,13,23 ];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
          
        })
        cy.get('#messages').should('have.text', 'Le joueur 1 a gagné !')
        cy.get('#score').should('have.text', 'X : 2 - O : 0')
    })

    it('joueur 1 gagne ligne 1 partant de la fin', () => {

        const tabCases = [13,11,14,21,15];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
          
        })
        cy.get('#messages').should('have.text', 'Le joueur 1 a gagné !')
        cy.get('#score').should('have.text', 'X : 2 - O : 0')
    })

    it('joueur 1 gagne ligne du centre sans partir du debut', () => {

        const tabCases = [22,12,23,25,24];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
          
        })
        cy.get('#messages').should('have.text', 'Le joueur 1 a gagné !')
        cy.get('#score').should('have.text', 'X : 2 - O : 0')
    })
    it('joueur 1 gagne ligne du centre partant du debut', () => {

        const tabCases = [21,24,22,42,23,13 ];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
          
        })
        cy.get('#messages').should('have.text', 'Le joueur 1 a gagné !')
        cy.get('#score').should('have.text', 'X : 2 - O : 0')
    })
    it('joueur 1 gagne ligne du centre partant de la fin', () => {

        const tabCases = [23,12,24,21,25];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
          
        })
        cy.get('#messages').should('have.text', 'Le joueur 1 a gagné !')
        cy.get('#score').should('have.text', 'X : 2 - O : 0')
    })

    
    it('joueur 1 gagne ligne 5 sans partir du debut', () => {

        const tabCases = [52,12,53,25,54];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
          
        })
        cy.get('#messages').should('have.text', 'Le joueur 1 a gagné !')
        cy.get('#score').should('have.text', 'X : 2 - O : 0')
    })
    it('joueur 1 gagne ligne 5 partant du debut', () => {

        const tabCases = [51,24,52,42,53,13 ];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
          
        })
        cy.get('#messages').should('have.text', 'Le joueur 1 a gagné !')
        cy.get('#score').should('have.text', 'X : 2 - O : 0')
    })
    it('joueur 1 gagne ligne 5 partant de la fin', () => {

        const tabCases = [53,12,54,21,55];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
          
        })
        cy.get('#messages').should('have.text', 'Le joueur 1 a gagné !')
        cy.get('#score').should('have.text', 'X : 2 - O : 0')
    })


    it('joueur 1 gagne colonne 1 sans partir du debut', () => {

        const tabCases = [21,22,31,32,41];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
          
        })
        cy.get('#messages').should('have.text', 'Le joueur 1 a gagné !')
        cy.get('#score').should('have.text', 'X : 2 - O : 0')
    })

    it('joueur 1 gagne colonne 1 partant de la fin', () => {

        const tabCases = [31,22,41,32,51];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
          
        })
        cy.get('#messages').should('have.text', 'Le joueur 1 a gagné !')
        cy.get('#score').should('have.text', 'X : 2 - O : 0')
    })

    it('joueur 1 gagne colonne centrale sans partir du debut', () => {

        const tabCases = [22,12,32,52,42];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
          
        })
        cy.get('#messages').should('have.text', 'Le joueur 1 a gagné !')
        cy.get('#score').should('have.text', 'X : 2 - O : 0')
    })

    it('joueur 1 gagne colonne centrale partant de la fin', () => {

        const tabCases = [33,22,43,32,53];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
          
        })
        cy.get('#messages').should('have.text', 'Le joueur 1 a gagné !')
        cy.get('#score').should('have.text', 'X : 2 - O : 0')
    })

    it('joueur 1 gagne colonne 5 sans partir du debut', () => {

        const tabCases = [25,12,35,52,45];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
          
        })
        cy.get('#messages').should('have.text', 'Le joueur 1 a gagné !')
        cy.get('#score').should('have.text', 'X : 2 - O : 0')
    })

    it('joueur 1 gagne colonne 5 partant de la fin', () => {

        const tabCases = [35,22,45,32,55];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
          
        })
        cy.get('#messages').should('have.text', 'Le joueur 1 a gagné !')
        cy.get('#score').should('have.text', 'X : 2 - O : 0')
    })

    it('joueur 1 gagne diagonale', () => {

        const tabCases = [11,21,22,31,33];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
          
        })
        cy.get('#messages').should('have.text', 'Le joueur 1 a gagné !')
        cy.get('#score').should('have.text', 'X : 2 - O : 0')
    })
    it('joueur 1 gagne diagonale inverse', () => {

        const tabCases = [51,21,42,31,33];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
          
        })
        cy.get('#messages').should('have.text', 'Le joueur 1 a gagné !')
        cy.get('#score').should('have.text', 'X : 2 - O : 0')
    })
    

    it('Match nul', () => {
        const tabCases = [11,12,13,14,15,21,23,22,31,24,32,25,34,33,35,41,42,43,44,45,51,52,53,54,55];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
          
        })
        cy.get('#messages').should('have.text', 'Match nul !')
        cy.get('#score').should('have.text', 'X : 1 - O : 0')
    })


})

describe('Morpion 5x5 : test des cas gagnant simple non fonctionnel', () => {
    beforeEach(() => {
        cy.visit('/morpion.html')
        const tabCases = [11,12,21,22,31];
        cy.wrap(tabCases).each((index) => {
        cy.get("#"+index).click()
        })
        cy.get("#simple").click()
        cy.get("#taille").clear().type("5")
        cy.get("#btn_reset").click()
    }),

    it('joueur 1  gagne colonne 1 partant du debut (identique pour chaque colonne partant de la premiere ligne)', () => {

        const tabCases = [11,12,21,22,31];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
          
        })
        cy.get('#messages').should('have.text', 'Le joueur 1 a gagné !')
        cy.get('#score').should('have.text', 'X : 2 - O : 0')
    })
    it('joueur 1 gagne colonne 5 partant du debut (identique pour chaque colonne partant de la premiere ligne)', () => {

        const tabCases = [15,12,25,22,35];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
          
        })
        cy.get('#messages').should('have.text', 'Le joueur 1 a gagné !')
        cy.get('#score').should('have.text', 'X : 2 - O : 0')
    })
    it('joueur 1 gagne colonne centrale partant du debut (identique pour chaque colonne partant de la premiere ligne)', () => {

        const tabCases = [12,11,22,33,32];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
          
        })
        cy.get('#messages').should('have.text', 'Le joueur 1 a gagné !')
        cy.get('#score').should('have.text', 'X : 2 - O : 0')
    })
})




describe('Morpion 5x5 : test plusieurs partie a la suite', () => {
    beforeEach(() => {
        cy.visit('/morpion.html')
        const tabCases = [11,12,21,22,31];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
          
        })
        cy.get('#messages').should('have.text', 'Le joueur 1 a gagné !')
        cy.get('#score').should('have.text', 'X : 1 - O : 0')

    }),

    it('joueur 1 gagne ligne 1 au centre', () => {
        cy.get("#simple").click()
        cy.get("#taille").clear().type("5")
        cy.get("#btn_reset").click()
        const tabCases = [12,22,13,23,14];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
            })
        cy.get('#messages').should('have.text', 'Le joueur 1 a gagné !')
        cy.get('#score').should('have.text', 'X : 2 - O : 0')

    }),

    it('joueur 2 colonne 1 complet', () => {
        cy.get("#complet").click()
        cy.get("#taille").clear().type("5")
        cy.get("#btn_reset").click()
        const tabCases = [22,11,23,21,24,31,25,41,34,51];
        cy.wrap(tabCases).each((index) => {
                cy.get("#"+index).click()
            })
        cy.get('#messages').should('have.text', 'Le joueur 2 a gagné !')
        cy.get('#score').should('have.text', 'X : 1 - O : 1')

    }),
          
    it('match nul', () => {
        cy.get("#simple").click()
        cy.get("#taille").clear().type("5")
        cy.get("#btn_reset").click()
        const tabCases = [11,12,13,14,15,21,23,22,31,24,32,25,34,33,35,41,42,43,44,45,51,52,53,54,55];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
        })
        cy.get('#messages').should('have.text', 'Match nul !')
        cy.get('#score').should('have.text', 'X : 1 - O : 0')
    })
})