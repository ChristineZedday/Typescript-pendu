import dico from './Dico';

const DICO = ['CHERCHER','TROUVER', 'SAPIN', 'ORDINATEUR','CHEVAL', 'CHAT', 'CHIEN', 'VACHE', 'JAVASCRIPT', 'INTERNET', 'ANTICONSTITUTIONNEL', 'ROSE', 'LISERON', 'PLATANE']



   
   
   
    function Mot(): string
    {
      
        let mondico = dico();
        let taille = mondico.length;
        let rand = Math.floor((Math.random() * taille) + 1);
        let motCherche = mondico[rand];

        return motCherche;
    
    }



   export default Mot;