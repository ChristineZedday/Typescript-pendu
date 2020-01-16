
import Partie from './Partie';
import App from './App';

class Touche {
    testee:boolean;
    lettre: string;
    partie: Partie;
    

    constructor(partie: Partie, lettre:string)
    {
        
        this.lettre = lettre;
        this.partie = partie;
    }

    handleClick(e)
    {
       
        e.target.className ="Testee";
        this.partie.nbCoups +=1;
       
        
        if (this.partie.mot.includes(this.lettre))
       {  
        this.partie.trouvees = this.partie.trouvees.concat(this.lettre);
        this.partie.motAffiche = this.partie.computeDisplay(this.partie.mot, this.partie.trouvees);
        let div = document.getElementById('aff');
        div.firstChild.nodeValue = this.partie.motAffiche;
        if (! this.partie.motAffiche.includes('_'))
       { 
           
          
           App.change(this.partie.nbCoups);
           
        }
             
        }    
    }

    affiche()
    {
        let t = this;
    let button = document.createElement('input');
    button.type= "button";
    button.value= t.lettre;
    button.className ="Normale";
     button.addEventListener('click', function(e) {t.handleClick(e)} );
     return button;
    }
}
export default Touche;