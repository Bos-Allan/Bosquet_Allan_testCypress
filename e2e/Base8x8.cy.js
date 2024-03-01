/*describe('Morpion 8x8 : test des cas gagnant complet', () => {
    beforeEach(() => {
        cy.visit('/morpion.html')
        const tabCases = [11,12,21,22,31];
        cy.wrap(tabCases).each((index) => {
        cy.get("#"+index).click()
        })
        cy.get("#complet").click()
        cy.get("#taille").clear().type("8")
        cy.get("#btn_reset").click()
    }),
    it('joueur 1 gagne ligne 1', () => {

        const tabCases = [12,22,13,23,14,32,11,33,15,34,16,55,17,56,18];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
          
        })
        cy.get('#messages').should('have.text', 'Le joueur 1 a gagné !')
        cy.get('#score').should('have.text', 'X : 2 - O : 0')
    })
    it('joueur 1 gagne ligne 8 (derniere)', () => {

        const tabCases = [81,22,82,23,83,32,84,33,85,34,86,55,87,56,88];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
          
        })
        cy.get('#messages').should('have.text', 'Le joueur 1 a gagné !')
        cy.get('#score').should('have.text', 'X : 2 - O : 0')
    })
    it('joueur 1 gagne ligne au centrale', () => {

        const tabCases = [31,12,32,13,33,22,34,23,35,11,36,14,37,17,38 ];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
          
        })
        cy.get('#messages').should('have.text', 'Le joueur 1 a gagné !')
        cy.get('#score').should('have.text', 'X : 2 - O : 0')
    })

    it('joueur 1 gagne colonne 1', () => {

        const tabCases = [11,42,21,22,31,32,41,23,51,52,61,54,71,55,81];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
          
        })
        cy.get('#messages').should('have.text', 'Le joueur 1 a gagné !')
        cy.get('#score').should('have.text', 'X : 2 - O : 0')
    })
    it('joueur 1 gagne colonne centrale', () => {

        const tabCases = [12,44,22,23,32,33,42,21,52,63,62,66,72,67,82];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
          
        })
        cy.get('#messages').should('have.text', 'Le joueur 1 a gagné !')
        cy.get('#score').should('have.text', 'X : 2 - O : 0')
    })

    it('joueur 1 gagne colonne 8', () => {

        const tabCases = [18,44,28,23,38,33,48,21,58,63,68,66,78,67,88];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
          
        })
        cy.get('#messages').should('have.text', 'Le joueur 1 a gagné !')
        cy.get('#score').should('have.text', 'X : 2 - O : 0')
    })
    it('joueur 1 gagne diagonale', () => {

        const tabCases = [11,21,22,31,33,12,44,15,55,67,66,78,77,64,88];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
          
        })
        cy.get('#messages').should('have.text', 'Le joueur 1 a gagné !')
        cy.get('#score').should('have.text', 'X : 2 - O : 0')
    })
    it('joueur 1 gagne diagonale inverse', () => {

        const tabCases = [81,82,72,73,63,64,54,21,45,31,36,12,27,23,18];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
          
        })
        cy.get('#messages').should('have.text', 'Le joueur 1 a gagné !')
        cy.get('#score').should('have.text', 'X : 2 - O : 0')
    })
    

    it('Match nul', () => {
        const tabCases = [
            11, 12, 14, 13, 15, 16, 18, 17,
            21, 22, 24, 23, 25, 26, 28, 27,
            32, 31, 33, 34, 36, 35, 37, 38,
            43, 41, 46, 42, 51, 44, 52, 45,
            54, 47, 55, 48, 57, 56, 58, 53,
            61, 62, 64, 63, 65, 66, 68, 67,
            72, 71, 73, 74, 76, 75, 77, 78,
            82, 81, 83, 84, 86, 85, 87, 88,
        ];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
          
        })
        cy.get('#messages').should('have.text', 'Match nul !')
        cy.get('#score').should('have.text', 'X : 1 - O : 0')
    })
})*/



describe('Morpion 8x8 : test des cas gagnant simple', () => {
    beforeEach(() => {
        cy.visit('/morpion.html')
        const tabCases = [11,12,21,22,31];
        cy.wrap(tabCases).each((index) => {
        cy.get("#"+index).click()
        })
        cy.get("#simple").click()
        cy.get("#taille").clear().type("8")
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

        const tabCases = [16,11,17,21,18];
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

        const tabCases = [26,12,27,21,28];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
          
        })
        cy.get('#messages').should('have.text', 'Le joueur 1 a gagné !')
        cy.get('#score').should('have.text', 'X : 2 - O : 0')
    })

    it('joueur 1 gagne ligne 8 sans partir du debut', () => {

        const tabCases = [82,12,83,25,84];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
          
        })
        cy.get('#messages').should('have.text', 'Le joueur 1 a gagné !')
        cy.get('#score').should('have.text', 'X : 2 - O : 0')
    })
    it('joueur 1 gagne ligne 8 partant du debut', () => {

        const tabCases = [81,24,82,42,83,13 ];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
          
        })
        cy.get('#messages').should('have.text', 'Le joueur 1 a gagné !')
        cy.get('#score').should('have.text', 'X : 2 - O : 0')
    })
    it('joueur 1 gagne ligne 8 partant de la fin', () => {

        const tabCases = [86,12,87,21,88];
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

        const tabCases = [61,22,71,32,81];
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

        const tabCases = [63,22,73,32,83];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
          
        })
        cy.get('#messages').should('have.text', 'Le joueur 1 a gagné !')
        cy.get('#score').should('have.text', 'X : 2 - O : 0')
    })


    it('joueur 1 gagne colonne 8 sans partir du debut', () => {

        const tabCases = [28,12,38,52,48];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
          
        })
        cy.get('#messages').should('have.text', 'Le joueur 1 a gagné !')
        cy.get('#score').should('have.text', 'X : 2 - O : 0')
    })

    it('joueur 1 gagne colonne 8 partant de la fin', () => {

        const tabCases = [68,22,78,32,88];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
          
        })
        cy.get('#messages').should('have.text', 'Le joueur 1 a gagné !')
        cy.get('#score').should('have.text', 'X : 2 - O : 0')
    })

    it('joueur 1 gagne diagonale partant du debut', () => {

        const tabCases = [11,21,22,31,33];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
          
        })
        cy.get('#messages').should('have.text', 'Le joueur 1 a gagné !')
        cy.get('#score').should('have.text', 'X : 2 - O : 0')
    })
    it('joueur 1 gagne diagonale inverse', () => {

        const tabCases = [81,21,72,31,63];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
          
        })
        cy.get('#messages').should('have.text', 'Le joueur 1 a gagné !')
        cy.get('#score').should('have.text', 'X : 2 - O : 0')
    })
    
 
    it('match nul', () => {
        cy.get("#simple").click()
        const tabCases = [
            11, 12, 14, 13, 15, 16, 18, 17,
            21, 22, 24, 23, 25, 26, 28, 27,
            32, 31, 33, 34, 36, 35, 37, 38,
            43, 41, 46, 42, 51, 44, 52, 45,
            54, 47, 55, 48, 57, 56, 58, 53,
            61, 62, 64, 63, 65, 66, 68, 67,
            72, 71, 73, 74, 76, 75, 77, 78,
            82, 81, 83, 84, 86, 85, 87, 88,
        ];


            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
        })
        cy.get('#messages').should('have.text', 'Match nul !')
        cy.get('#score').should('have.text', 'X : 1 - O : 0')
    })
})
describe('Morpion 8x8 : test des cas gagnant simple non fonctionnel', () => {
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

        const tabCases = [18,12,28,22,38];
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





describe('Morpion 8x8 : test plusieurs partie a la suite', () => {
    beforeEach(() => {
        cy.visit('/morpion.html')
        const tabCases = [11,12,21,22,31];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
          
        })
        cy.get('#messages').should('have.text', 'Le joueur 1 a gagné !')
        cy.get('#score').should('have.text', 'X : 1 - O : 0')

    }),

    it('joueur 1 gagne ligne autre que premiere simple', () => {
        const tabCases = [31,12,32,13,33 ];
        cy.get("#simple").click()
        cy.get("#taille").clear().type("8")
        cy.get("#btn_reset").click()
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
            })
        cy.get('#messages').should('have.text', 'Le joueur 1 a gagné !')
        cy.get('#score').should('have.text', 'X : 2 - O : 0')

    }),

    it('joueur 2 colonne 2 complet', () => {
        cy.get("#complet").click()
        cy.get("#taille").clear().type("8")
        cy.get("#btn_reset").click()
        const tabCases = [11,13,21,23,22,33,24,43,25,53,88,63,87,73,66,83];
        cy.wrap(tabCases).each((index) => {
                cy.get("#"+index).click()
            })
        cy.get('#messages').should('have.text', 'Le joueur 2 a gagné !')
        cy.get('#score').should('have.text', 'X : 1 - O : 1')

    }),
          
    it('match nul', () => {
        cy.get("#simple").click()
        cy.get("#taille").clear().type("8")
        cy.get("#btn_reset").click()
        const tabCases = [
            11, 12, 14, 13, 15, 16, 18, 17,
            21, 22, 24, 23, 25, 26, 28, 27,
            32, 31, 33, 34, 36, 35, 37, 38,
            43, 41, 46, 42, 51, 44, 52, 45,
            54, 47, 55, 48, 57, 56, 58, 53,
            61, 62, 64, 63, 65, 66, 68, 67,
            72, 71, 73, 74, 76, 75, 77, 78,
            82, 81, 83, 84, 86, 85, 87, 88,
        ];
            cy.wrap(tabCases).each((index) => {
            cy.get("#"+index).click()
        })
        cy.get('#messages').should('have.text', 'Match nul !')
        cy.get('#score').should('have.text', 'X : 1 - O : 0')
    })
})



