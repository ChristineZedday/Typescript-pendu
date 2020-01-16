
import Mot from './Mot'

class Partie
{
    mot: string;
    trouvees: string;
    nbCoups: number;
    motAffiche: string;
   

    constructor(){

        this.mot = Mot();
        this.trouvees = "";
        this.nbCoups = 0;
        this.motAffiche = this.computeDisplay(this.mot,this.trouvees);
       
    }

    computeDisplay(phrase: string, usedLetters: string) { 
        return phrase.replace(/\w/g,    (letter) => (usedLetters.includes(letter) ? letter : '_')  )
       }
}
export default Partie;