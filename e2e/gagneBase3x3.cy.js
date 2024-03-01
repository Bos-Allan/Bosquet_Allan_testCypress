describe('Morpion 3x3 : test des cas complet', () => {
    beforeEach(() => {
        cy.visit('/morpion.html')
    }),
    it('joueur 1 gagne colonne 1', () => {
        cy.get("#complet").click()
        const tabCases = [11,12,21,22,31];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
          
        })
        cy.get('#messages').should('have.text', 'Le joueur 1 a gagné !')
        cy.get('#score').should('have.text', 'X : 1 - O : 0')
        
    }),

    it('joueur 1 gagne colonne 2', () => {
        cy.get("#complet").click()
        const tabCases = [12,13,22,21,32];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
          
        })
        cy.get('#messages').should('have.text', 'Le joueur 1 a gagné !')
        cy.get('#score').should('have.text', 'X : 1 - O : 0')
        
    }),

    it('joueur 1 gagne colonne 3', () => {
        cy.get("#complet").click()
        const tabCases = [13,12,23,22,33];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
          
        })
        cy.get('#messages').should('have.text', 'Le joueur 1 a gagné !')
        cy.get('#score').should('have.text', 'X : 1 - O : 0')
        
    }),


   it('joueur 2 gagne ligne 1', () => {
        cy.get("#complet").click()
        const tabCases = [21,11,22,12,31,13];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
        })
        cy.get('#messages').should('have.text', 'Le joueur 2 a gagné !')
        cy.get('#score').should('have.text', 'X : 0 - O : 1')
    }),


    it('joueur 2 gagne ligne 2', () => {
        cy.get("#complet").click()
        const tabCases = [11,21,13,22,31,23];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
        })
        cy.get('#messages').should('have.text', 'Le joueur 2 a gagné !')
        cy.get('#score').should('have.text', 'X : 0 - O : 1')
    }),

    it('joueur 2 gagne ligne 3', () => {
        cy.get("#complet").click()
        const tabCases = [21,31,22,32,11,33];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
        })
        cy.get('#messages').should('have.text', 'Le joueur 2 a gagné !')
        cy.get('#score').should('have.text', 'X : 0 - O : 1')
    }),
    it('joueur 1 gagne diagonale', () => {
        cy.get("#complet").click()
        const tabCases = [11,13,22,12,33];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
        })
        cy.get('#messages').should('have.text', 'Le joueur 1 a gagné !')
        cy.get('#score').should('have.text', 'X : 1 - O : 0')
    }),
    
    it('joueur 2 gagne diagonale inverse', () => {
        cy.get("#complet").click()
        const tabCases = [11,13,21,22,32,31];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
        })
        cy.get('#messages').should('have.text', 'Le joueur 2 a gagné !')
        cy.get('#score').should('have.text', 'X : 0 - O : 1')
    }),
                

    it('match nul', () => {
        cy.get("#complet").click()
        const tabCases = [11,12,13,31,21,22,23,33,32];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
        })
        cy.get('#messages').should('have.text', 'Match nul !')
        cy.get('#score').should('have.text', 'X : 0 - O : 0')
    })
})



describe('Morpion 3x3 : test des cas gagnant simple', () => {
    beforeEach(() => {
        cy.visit('/morpion.html')
        cy.get("#simple").click()
        const tabCases = [11,12,21,22,31];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
          
        })
        cy.get('#messages').should('have.text', 'Le joueur 1 a gagné !')
        cy.get('#score').should('have.text', 'X : 1 - O : 0')
        cy.get('#btn_reset').click()
    }),

   it('joueur 2 gagne ligne 1', () => {
        cy.get("#simple").click()
        const tabCases = [21,11,22,12,31,13];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
        })
        cy.get('#messages').should('have.text', 'Le joueur 2 a gagné !')
        cy.get('#score').should('have.text', 'X : 1 - O : 1')
    }),
    it('joueur 2 gagne ligne 2', () => {
        cy.get("#complet").click()
        const tabCases = [11,21,13,22,31,23];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
        })
        cy.get('#messages').should('have.text', 'Le joueur 2 a gagné !')
        cy.get('#score').should('have.text', 'X : 1 - O : 1')
    }),

    it('joueur 2 gagne ligne 3', () => {
        cy.get("#complet").click()
        const tabCases = [21,31,22,32,11,33];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
        })
        cy.get('#messages').should('have.text', 'Le joueur 2 a gagné !')
        cy.get('#score').should('have.text', 'X : 1 - O : 1')
    }),


   it('joueur 1 gagne diagonale', () => {
    cy.get("#simple").click()
    const tabCases = [11,13,22,12,33];
        cy.wrap(tabCases).each((index) => {
        cy.get("#"+index).click()
    })
    cy.get('#messages').should('have.text', 'Le joueur 1 a gagné !')
    cy.get('#score').should('have.text', 'X : 2 - O : 0')
    }),

        
    it('joueur 2 gagne diagonale inverse', () => {
        cy.get("#simple").click()
        const tabCases = [11,13,21,22,32,31];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
        })
        cy.get('#messages').should('have.text', 'Le joueur 2 a gagné !')
        cy.get('#score').should('have.text', 'X : 1 - O : 1')
    }),
          
    it('match nul', () => {
        cy.get("#simple").click()
        const tabCases = [11,12,13,31,21,22,23,33,32];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
        })
        cy.get('#messages').should('have.text', 'Match nul !')
        cy.get('#score').should('have.text', 'X : 1 - O : 0')
    })
})



describe('Morpion 3x3 : test non fonctionnels', () => {
    beforeEach(() => {
        cy.visit('/morpion.html')
        cy.get("#simple").click()
        const tabCases = [11,12,21,22,31];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
          
        })
        cy.get('#messages').should('have.text', 'Le joueur 1 a gagné !')
        cy.get('#score').should('have.text', 'X : 1 - O : 0')
        cy.get('#btn_reset').click()
    }),

    it('joueur 1 gagne colonne 1', () => {
        const tabCases = [11,12,21,22,31];
        cy.wrap(tabCases).each((index) => {
        cy.get("#"+index).click()
      
    })
    cy.get('#messages').should('have.text', 'Le joueur 1 a gagné !')
    
    cy.get('#score').should('have.text', 'X : 2 - O : 0')
    
    })

    it('joueur 1 gagne colonne 2', () => {
        const tabCases = [12,12,22,21,32];
        cy.get("#simple").click()
        cy.wrap(tabCases).each((index) => {
        cy.get("#"+index).click()
      
    })
    cy.get('#messages').should('have.text', 'Le joueur 1 a gagné !')
    cy.get('#score').should('have.text', 'X : 2 - O : 0')
    
    })
    
    it('joueur 1 gagne colonne 3', () => {
        const tabCases = [13,12,23,22,33];
        cy.get("#simple").click()
        cy.wrap(tabCases).each((index) => {
        cy.get("#"+index).click()
      
    })
    cy.get('#messages').should('have.text', 'Le joueur 1 a gagné !')
    cy.get('#score').should('have.text', 'X : 2 - O : 0')
    
    })
})


describe('Morpion 3x3 : test plusieurs partie a la suite', () => {
    beforeEach(() => {
        cy.visit('/morpion.html')
        cy.get("#simple").click()
        const tabCases = [11,12,21,22,31];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
          
        })
        cy.get('#messages').should('have.text', 'Le joueur 1 a gagné !')
        cy.get('#score').should('have.text', 'X : 1 - O : 0')
        cy.get("#btn_reset").click()
    }),


   it('joueur 1 gagne diagonale', () => {
    cy.get("#simple").click()
    const tabCases = [11,13,22,12,33];
        cy.wrap(tabCases).each((index) => {
        cy.get("#"+index).click()
    })
    cy.get('#messages').should('have.text', 'Le joueur 1 a gagné !')
    cy.get('#score').should('have.text', 'X : 2 - O : 0')

    }),

        
    it('joueur 2 gagne diagonale inverse', () => {
        cy.get("#complet").click()
        const tabCases = [11,13,21,22,32,31];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
        })
        cy.get('#messages').should('have.text', 'Le joueur 2 a gagné !')
        cy.get('#score').should('have.text', 'X : 1 - O : 1')

    }),
          
    it('match nul', () => {
        cy.get("#simple").click()
        const tabCases = [11,12,13,31,21,22,23,33,32];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
        })
        cy.get('#messages').should('have.text', 'Match nul !')
        cy.get('#score').should('have.text', 'X : 1 - O : 0')
    })
})