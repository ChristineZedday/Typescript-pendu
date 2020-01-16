
import Touche from './Touche'
import Partie from './Partie'

const LETTRES =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

class App 
{
    partie: Partie;
  

   constructor()
   {
    this.partie = new Partie;
    
   }

   public static  handleLoad()
   {
   
   let app= new App;
   app.affiche();
   }
   
    affiche()

    {
        
        
        let div = document.createElement('div') ;
        div.id = "jeu";
       
          
            let divmot = document.createElement('div') ;
            let t = document.createTextNode(this.partie.motAffiche);
            divmot.appendChild(t);
            divmot.className="masque";
            divmot.id ="aff";
            div.appendChild(divmot);
        
            var clavier = document.createElement('div') ;
            clavier.className ="Clavier";
            clavier.id ="clavier";
            for (let lettre of LETTRES) 
                 {
                    let touche = new Touche(this.partie,lettre);
                    clavier.appendChild(touche.affiche());
                }
            div.appendChild(clavier);
            
       
            document.body.appendChild(div);
       
    }

    public static change(nb: number)
    {
        let ndiv = document.createElement('div');
        let p = document.createElement('p');
        let t = document.createTextNode('Partie gagnée en: '+nb+' coups');
        p.appendChild(t);
        ndiv.appendChild(p);
        let encore = document.createElement('input');
        encore.type = "button";
        encore.value= "rejouer";
        encore.id ="encore";
        encore.addEventListener('click', function(e) { window.location.reload()} );
        ndiv.appendChild(encore);
        let div = document.getElementById('jeu');
        let clav = document.getElementById('clavier');
        div.removeChild(clav);
        div.appendChild(ndiv);
    }

    
}


export default App;


