
// TurismoEspana.js

// 2018-12 Escrito por Francisco Guijarro Castillo
// 2018-12-12 Modificado por Kari Laitinen

function principal()
{
   process.stdout.write("\n Este programa te informa de lugares de interés en españa."
      + "\n En esta lista puedes ver la población y su principal "
      + "\n punto de interés.\n "
      + "\n Escribe qué te tipo de lugar te interesa, ¿Playa, interior o montaña*? "
      + "\n (Debes escribir montana, porque tu teclado no tiene ñ) \n");
} 


//Usando clases para crear objetos, encapsulamos el codigo

// Los nombres de clases normalmente estan escribido con 
// la primera letra en mayúscula forma
// Otros nombres estan normalmente en minúscula


class Lugar //Clase indica las propiedades que tendran los objetos que creemos.
    
{
   constructor( poblacion,//parámetros o propiedades del objeto.
                habitantes,
                distancia_de_madrid, 
                lugar_de_interes)
   {
      this.nombre_poblacion = poblacion ; //con el operador this. asignamos valores a los objetos de la clase lugar.
      this.cantidad_habitantes = habitantes ;
    
      this.distancia=distancia_de_madrid;
      this.interes=lugar_de_interes;
   }

  // A continuacion especificamos las funciones o metodos de la clase lugar
  // Usamos el método información para mostrar la informacion en la pantalla.

  
 
   informacion()
   {
      return( "\n " + this.nombre_poblacion + " tiene una poblacion de "
                         +  this.cantidad_habitantes + "\n Esta a : " +this.distancia + "de Madrid. \n" +
                         " Su principal lugar de interés es: "
                         +  this.interes + "\n");
   }

   static clima_interior()
   {
      process.stdout.write (" Clima: Inviernos largos y fríos, veranos cortos y cálidos y además un fuerte contraste entre la temperatura durante el día y la noche.") ;
   }

   static clima_montana()
   {
      process.stdout.write (" El clima de montaña es propio de las zonas situadas a más de 2000 metros de altitud."
      + "\n Se caracteriza por unos inviernos fríos y largos con temperaturas negativas, y veranos frescos y cortos."
      +"\n Podría decirse que se parece a finlandia.") ;
   }

   static clima_playa()
   {
      process.stdout.write ("\n El clima mediterráneo se caracteriza por veranos secos y calurosos, e inviernos húmedos y lluviosos, con temperaturas suaves.") ;
   }
}

class LugarPlaya extends Lugar //Extends indica que la clase LugarPlaya hereda a la clase lugar
{
   constructor( poblacion,
      habitantes,
      distancia_de_madrid, 
      lugar_de_interes,
       consejos) //Añadimos el parametro consejo
   {
      super ( poblacion, //Con super copiamos los parametros de la clase superior
         habitantes,
         distancia_de_madrid, 
         lugar_de_interes);
         this.tips=consejos; //Añadimos el parametro nuevo
   }
   
   informacion() //El metodo informacion de LugarPlaya es algo diferente. El de la clase lugar quda sobreescrito por este.
   {
      return( "\n " + this.nombre_poblacion + " tiene una poblacion de "
                         +  this.cantidad_habitantes + "\n Esta a : " +this.distancia + "de Madrid. \n" +
                         " Su principal lugar de interés es:"
                         +  this.interes + "\n Consejo:" +this.tips ) ;

   }
   
}

class LugarMontaña extends Lugar

{
   

 }


class LugarInterior extends Lugar

{
  //No hay ningun metodo, asique usa el de la clase lugar
  //Simplemente los objetos lugar interior pertenecen a esta subclase.

   
   
}

//Array inicializado. Guardamos los objetos dentro del Array.
var  lista_lugares  =
[
    //Lugar hace referencia a la clase
    //Usamos el operador new + nombre de la clase o subclase para crear o "construir" objetos
   new LugarInterior ("Madrid", "3 207 247", "0kms", " plaza Mayor de Madrid"), //Estos parametros o argumentos son añadidos al constructor de la subclase LugarInterior
   new LugarInterior ( "Zaragoza", "664 938", "314 kms",  "Catedral-basílica de Nuestra Señora del Pilar" ),//Zaragoza se asocia a poblacion, medio millón a habitantes, etc.
   new LugarPlaya ("Valencia", "787 808", "355 kms", "Ciudad artes y ciencias", "Usar protector solar, sobre todo de 10 de la mañana a las 4 de la tarde"), //Los parametros que damos se guardan en las variables d einstancia this.
   new LugarMontaña ("Jaca", "12 889", "452 kms", "Ciudadela de Jaca") ,                  //por ejemplo, huesca se guarda en this.nombre_poblacion
   new LugarMontaña ("Pradollano", "231", "454 kms", " Estación de Esquí de Sierra Nevada"),
   new LugarPlaya ("Níjar", "28 996", "582 kms", " Playa de los Genoveses", "Visitar también Sevilla")
   ] ;

//var Clima =    new Lugar ()





principal();

process.stdin.on( 'data', function( input_from_user )
{
   var eleccion = String( input_from_user ).toLowerCase().trim() ;

   if ( eleccion == "interior" )
  
   {
      for ( let lugar of lista_lugares )
      {
        if ( lugar instanceof LugarInterior  )
        {
           process.stdout.write( "\n" + lugar.informacion() ) ;//Asi llamamos al metodo informacion dentro de la subclase
        }
      }

      Lugar.clima_interior();
      process.stdout.write( "\n ¿Quieres haces otra consulta? (S/N) ? " ) ;
   }
   else if ( eleccion == "playa" )
   {
      for ( let lugar of lista_lugares )
      {
         if ( lugar instanceof LugarPlaya )
         {
            process.stdout.write( "\n" + lugar.informacion() ) ;
         }
      }

      Lugar.clima_playa();
      process.stdout.write( "\n\n" ) ;
      process.stdout.write( "\n ¿Quieres haces otra consulta? (S/N) ? " ) ;
   }


   else if ( eleccion == "montana"  )
   {
      for ( let lugar of lista_lugares )
      {
         if ( lugar instanceof LugarMontaña )
         {
            process.stdout.write( "\n" + lugar.informacion() ) ;
         }
      }

      Lugar.clima_montana();
      process.stdout.write( "\n\n" ) ;
      process.stdout.write( "\n ¿Quieres haces otra consulta? (S/N) ? " ) ;

      
   }

   else
   {
      var eleccion = String( input_from_user ).toLowerCase().trim()[ 0 ] ; // Comprobamos sólo el primer caracter.
   
      if ( eleccion == "s" ) //Aunque escribamos S mayúscula, lo convierte en minúscula
      {
   
         principal();
      }
      else //Si escribimos cualquier cosa que no sea S o s, el progrma termina.
      {
   
         process.stdout.write( "\n Espero que la información haya sido útil. ¡Nos vemos! \n" ) ;
         process.exit() ;
      }
   }
} ) ;


