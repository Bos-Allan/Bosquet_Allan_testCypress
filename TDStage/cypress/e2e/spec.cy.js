function ajout (tab){
  cy.get('#result > div > div > table > tbody > tr').each(($ligne,index) => { 
    if (index % 2 === 0){


        let test = true;
        cy.wrap($ligne).within(() => {
          cy.get('td:not(:last-child)').each(($cell) => {
            const texteCellule = ($cell).text();
            tab.push(texteCellule);
          });

          cy.on('fail', (err, runnable) => {
            cy.log("Cette recherche ne retourne pas de resultats");
            tab.push("Cette recherche ne retourne pas de resultats");
          })

       
      });
    }
  });

  return tab;
}

describe('Test', () => {
  beforeEach(() => {
    cy.visit('https://dptinfo.iutmetz.univ-lorraine.fr/applis/stages/stages_historique.php')
    cy.get("#login").clear().type("abosquet12")
    cy.get("#psw").clear().type("UYui!vk7")
    cy.get(".btn").click()

    cy.visit("https://dptinfo.iutmetz.univ-lorraine.fr/applis/stages/stages_historique.php");

  })



  it('recherche stage', () => {    

    //Recherche par motcle
    let tabSearchMot = [];
    // cy.get("#MotCleValue").select("ANGULAR");
    // cy.get("#MotCle1Value").select("ACTIVE DIRECTORY");
    cy.get("#MotCleValue").select("ANGULAR");
    cy.get("#MotCle1Value").select("JS");
    cy.get(".btn").click();
    ajout(tabSearchMot);  
    cy.get("#Btn_NlleRecherche1").click();

    //recherche par ville
    let tabSearchVille = [];
    cy.get("#VilleValue").select("Nancy");
    cy.get(".btn").click();
    ajout(tabSearchVille);
    cy.get("#Btn_NlleRecherche1").click();

    //recherche par entreprise
    let tabSearchEntreprise = [];
    cy.get("#EntrepriseValue").select("Acta");
    cy.get(".btn").click();
    ajout(tabSearchEntreprise);
    cy.get("#Btn_NlleRecherche1").click();
    
    //recherche par pays  
    let tabSearchPays = [];
    cy.get("#PaysValue").select("Belgique");
    cy.get(".btn").click();
    ajout(tabSearchPays);
    cy.get("#Btn_NlleRecherche1").click();

    //recherche par departement section et annee  
    let tabSearchDepSectionAnnee = [];
    cy.get("#SectionValue").select("DUT2A");
    cy.get("#AnneeValue").select("2020");
    cy.get("#CPValue").select("57");
    cy.get(".btn").click();
    ajout(tabSearchDepSectionAnnee)
    cy.get("#Btn_NlleRecherche1").click();

    cy.visit({
      url: 'https://devweb.iutmetz.univ-lorraine.fr/~bosquet9u/Cypress/resultat.php',
      method: 'POST',
      body: {
        'motCle' : tabSearchMot,
        'ville' : tabSearchVille,
        'entreprise': tabSearchEntreprise,
        'pays': tabSearchPays,
        'depSectionAnnee': tabSearchDepSectionAnnee,
      }
  })


  })



})
