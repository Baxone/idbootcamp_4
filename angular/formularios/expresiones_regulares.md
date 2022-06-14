### regexlib.com
### https://ihateregex.io
### https://regex101.com/library
### https://es.linkedin.com/pulse/vitamina-tus-scripts-con-expresiones-regulares-mario-gir%C3%B3n-mart%C3%ADn?trk=articles_directory

las expresiones regulares no van entre comillas no son cadenas de caracteres.
  - emails

       `  /^\S+\@\S+\.\S+/ ` 
          juan@gmail.com
    ##    /			-	Indica inicio de expresión string
    ##   \S 			-	Indica que se espera un caracter diferente a un espacio en blanco
    ##   +			-	Indica que de ese caracter debe existir una ó más veces
    ##   \@			-	Indica el caracter en sí a buscar: una arroba
    ##   \S 			-	Indica que se espera un caracter diferente a un espacio en blanco
    ##   +			-	Indica que de ese caracter debe existir una ó más veces
    ##   \.			-	Indica un caracter: un punto
    ##   \S 			-	Indica que se espera un caracter diferente a un espacio en blanco
    ##   +			-	Indica que de ese caracter debe existir una ó más veces
    ##   /			-	Indica el final de la expresión regular

    - Solo espacios

     ` /^\s+/ `

    ##  /						-	Indica inicio de expresión string
    ##  ^						-	Indica que la expresión regular se aplica a la totalidad del string
    ## \s 						-	Indica que se espera cualquier caracter no visible (espacios, tabulaciones, saltos de línea...)
   ## +						-	Indica que de ese caracter debe existir una ó más veces
   ## /						-	Indica el final de la expresión regular


    - DNI

      ` /^d{8}\[A-Z]{1}/   `

      ## /						-	Indica inicio de expresión string
      ##  ^						-	Indica que la expresión regular se aplica a la totalidad del string
      ## \d 						-	Indica que se espera un caracter de dígito
      ## {10}					-	Indica que de ese caracter debe haber un patrón de repetición: diez caracteres
      ## [A-Z] [0-9]					- 	Indica que se espera un rango de caracteres en mayúscula, entre la A y la Z o indica que espera cualquier numero del 0 al 9
      ## {1,2}					-	Indica que de ese caracter debe haber un patrón de repetición: entre 1 y 2 caracteres
       ## /						-	Indica el final de la expresión regular  

  - TELEFONOS

        ` /^\d{9}/ `                 | 900802030
        ` /^\d{3}-\d{3}-\d{3}/ `     | 900-802-030 
        ` /^\(\d{3}\)\s\d{6}/ `      | (900) 900900
