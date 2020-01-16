const jsonData = require('../mondico.json');



export default function dico ()
{
    
   
    const regAccentA = new RegExp('[àâä]', 'gi');
    const regAccentE = new RegExp('[éèêë]', 'gi');
    const regAccentU = new RegExp('[ûùü]', 'gi');
    const regAccentO = new RegExp('[ôö]', 'gi');
    const regAccentI = new RegExp('[îï]', 'gi');

    let tabdico : string[];
    tabdico =[];

    for (let i=0; i<1455; i++) 
    {
        let mot  = jsonData[i];
        mot = mot.replace(regAccentA,'a' );
        mot = mot.replace(regAccentE,'e' );
        mot = mot.replace(regAccentI,'i' );
        mot = mot.replace(regAccentU,'u' );
        mot = mot.replace(regAccentO,'o' );
        mot = mot.toUpperCase();
        
        tabdico[i] = mot;
        
    }
    
   
    return tabdico;
}


