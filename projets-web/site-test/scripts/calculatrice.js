 //cr�ation de la fonction calculatrice qui comporte 3 param�tres variables: le nombre a, le nombre b ainsi que l'op�ration
 function calc (a , b , op) {
//on y ins�re un switch qui d�finira les diff�rents cas possibles suivant le param�tre d'op�ration et l'action a y faire
 switch (op) {
   //si l'op�ration est une addition:
   case '+' :
     return a + b ;
  // si l'op�ration est une soustraction:
   case '-' :
     return a - b ;
  // si l'op�ration est une multiplication :
   case '*' :
     return a * b ;
  // si l'op�ration est une soustraction :
   case '/' : {
     //on lui indique que le param�tre b doit �tre diff�rent de 0 car on ne peut diviser par 0 :
     if ( b !== 0) 
       return a / b ;
     else
       return Infinity ;
     }
  //si l'op�ration est un modulo (afficher le reste de la division) :
     default : 
     return ( a % b ) ;
   }
} 