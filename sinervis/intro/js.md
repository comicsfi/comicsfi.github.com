---
author: Rocco De Patto
title: Javascript Base <br> Sinervis
date: Ottobre 29, 2017
---
# Javascript
## Caratteristiche
- Interpretato
- Debolmente tipato
- Orientato agli eventi
- Supporto oggetti
- ECMAScript standard
- Solitamente gira nel browser ma non necessariamente, però ha delle utili funzionalità per interagire con esso (accesso al [DOM](https://it.wikipedia.org/wiki/Document_Object_Model), eventi)

## Programmare
<style>
	div.sourceCode {
		font-size: 1.3em;
	}

	.reveal {
		font-size: 27px;
		color: #2d373a;
	}

	.reveal p {
		text-align: left;
	}

	.reveal blockquote {
		text-align: left;
		padding-left: 45px;
		font-size: 1.3em;
		border-left: 5px solid;
		background: #eee;
	}

	body {
		background: white;
	}

	.container {
		width: 100%;
		box-sizing: border-box;
	}

	.container textarea {
		width: 50%;
	}

	.container .output {
		width: 50%;
	}

	.reveal pre.sourceCode {
		width: 100%;
		box-shadow: none;
		border: 1px solid #bbb;
		border-left: 5px solid #bbb;
		background: #f5f5f5;
		padding: 5px;
		margin: 0px;
		box-sizing: border-box;
	}

	li > code,
	p  > code {
		border-radius: 6px;
		color: black;
		background: #f4f4f4;
		padding: 0px 4px !important;
	}
</style>
La programmazione è l'arte di far fare ad un computer quello che noi vogliamo.

## Come
Si danno sequenze di comandi da eseguire e l'interprete le esegue.  
Per ogni linguaggio di programmazione esiste una sintassi e delle regole grammaticali.  

Per il Javascript le impareremo in queste lezioni.

## Cosa
In quasi ogni linguaggio di programmazione esistono dei concetti astratti che ci aiutano a modellare la realtà delle problematiche che i programmi devono risolvere:

- Istruzioni
- Variabili
- Istruzioni condizionali
- Cicli
- Metodi / funzioni

# Istruzioni
## What?
Sono i comandi che possiamo impartire.


## Esempi
Aprire una finestra di avviso:

```javascript
alert("Avviso di errore!");
```

abbiamo appena chiamato una funzione di nome `alert`

## La console
Il primo interprete che useremo è la console dei DevTools.
In questa tab è possibile impartire comandi javascript validi
e quindi ci permette di sperimentare a nostro piacimento.

# Variabili
## I dati
Nei computer ci sono solo dati.

## Variabili
Le variabili sono i riferimenti verso dati immagazzinati nella memoria del computer.  
Hanno quindi un **nome** che ci permette di accedere al dato che contengono. Esistono tanti tipi di variabili, i numeri, le stringhe, le date, liste di variabili, oggetti, funzioni.  
In javascript le variabili si dichiarano con la keyword `var`, poi si specifica il nome.  
Per assegnare un valore lo si pone dopo l'uguale.

```javascript
var livello_pm10 = 110;
```

## Variabili

Alla variabile è possibile riassegnare un altro valore (senza specificare nuovamente `var`)

```javascript
livello_pm10 = 90;
```

## Operatori
Sulle variabili è possibile effettuare delle operazioni attraverso degli operatori (come in matematica). Ad esempio è possibile sommare un numero ad una variabile o una variabile ad un'altra:

```javascript
var livello_pm10        = 110;
var livello_pm10_ieri   = 130;
var media_pm10_ierioggi = (livello_pm10_ieri+livello_pm10)/2;
```

## Operatori numerici
Gli operatori numerici sono come nella matematica delle elementari:

```javascript
2+2; // 4
2*2  // 4
2-4  // -2
4/2  // 2
3/2  // 1.5 (numeri non interi)
2+2*3 // priorità a * e / come in matematica
```

## Operatori sulle stringhe
```javascript
var nomeUtente    = "Mario";
var cognomeUtente = "Rossi";

// concatenazione di stringhe
var nomeCompleto  = nomeUtente + cognomeUtente;
```

Gli altri operatori sulle stringhe non funzionano in javascript.  
Non è necessariamente vero in altri lunguaggi.


## Commenti
Nei linguaggi di programmazione è permesso (nonchè altamente consigliato), commentare il codice:

```javascript
// i commenti possono essere su una linea sola

/*
 oppure su
 più di una linea
*/
```

i commenti non vengono letti dall'interprete, ma servono a noi programmatori per appuntare per noi e per gli altri il significato dei nostri ragionamenti. usateli usateli usateli

# Condizioni
## Istruzioni condizionali
Ogni tanto abbiamo bisogno di eseguire delle operazioni solo quando alcune condizioni sono verificate.  

> Se piove, prendo l'ombrello.

> Se il livello di pm10 sale oltre il limite, i veicoli con targa pari stanno fermi.

## If
In javascript utilizziamo la keyword `if`:

```javascript
if (livello_pm10 > 100) {
	alert("Limite superato!");
}
```
la condizione da verificare si mette dentro le parentesi.  
il blocco viene delimitato da parentesi graffe `{` e `}`

## If
Le condizioni restituiscono un valore di verità (vero o falso).  
Gli operatori utilizzati nelle condizioni più comunemente sono:

- `==` (uguale, ma due volte!! importante. un uguale solo indica assegnazione!)
- `<` minore, `>` maggiore, `<=` minore uguale, `>=` maggiore uguale
- `!=` diverso

```javascript
if (livello_pm10 > 100) {
	alert("Blocco del traffico con livello_pm10 superiore a 100!!");
}

// esempio di controllo password
if (password != 'segreto') {
	alert("La password non è corretta!");
}
```

## else
Nel costrutto `if` è possibile specificare anche un'operazione da eseguire nel caso in cui la condizione non sia vera (se piove, prendi ombrello, **altrimenti**, gli occhiali da sole:  

```javascript
if (livello_pm10 > 100) {
	alert("Auto bloccata!");
} else {
	alert("Macchina accesa!");
}
```

## Operatori booleani
Nelle condizioni è possibile utilizzare gli operatori booleani come nei linguaggi naturali che parliamo quotidianamente:

### AND
`&&` (vero se entrambe le condizioni sono verificate, e, congiunzione, moltiplicazione)
```javascript

if (temperatura > 20 and umidita > 80) {
	alert("accendi ventilatore");
}
````

## Operatori booleani
### OR
`||` (vero se una delle condizioni è vera, o, disgiunzione, somma)
```javascript
if (livello_pm10 > 100 or tipologiaEuroAuto < 3) {
	alert("Non puoi circolare con pm10 sopra i 100 o con un auto EURO3");
}
```

## Esercizio:
Puoi prendere la macchina se il pm10 è < 100 o se
la tua macchina è almeno EURO5:

```javascript
var pm10      =  130;
var euroAuto  =  5;

var possoPrendereAuto = .......... // che ci metto?

if (possoPrendereAuto) {
	alert("Posso prendere la macchina!")
}
```

## Operatori booleani
### NOT
`!` (negazione)
```javascript
var etaUtente = 18;
var maggiorenne = etaUtente >= 18;
if (!maggiorenne) {
	alert("Non sei maggiorenne!");
}
```

## Altre istruzioni condizionali
```javascript
if (a) {
	...
} else if (b) {
	...
} else if (c) {
...
} else {
	...
}
```

## Altre istruzioni condizionali
### Switch
E' un altro modo per eseguire codice condizionale, utile quando la condizione da verificare
può assumere tanti valori diversi:

```javascript
var euroAuto = 5;
switch (euroAuto) {
	case 1:
		alert("La tua auto può percorrere 20km");
		break;
	case 2:
		alert("La tua auto può percorrere 40km");
		break;
	case 3:
		....
}
```

## Altre istruzioni condizionali
### if ternario
```javascript

var nomeVariabile = condizione ? valoreSeVera : valoreSeFalsa;

// esempio inutile
var sonoMaggiorenne = etaUtente >= 18 ? true : false;
var sonoMinorenne = sonoMaggiorenne ? false : true;

// si poteva anche fare:
var sonoMinorenne = !sonoMaggiorenne;

var msg = sonoMaggiorenne ? "Puoi entrare" : "Non puoi entrare";
alert(msg);
```


# Cicli
## Cicli
I cicli permettono di **ripetere** un'istruzione o un blocco di istruzioni.

```javascript

// while
var i = 0;
while (i<10) {
	console.log(i);
	i = i+1;
}

// for
for (var i=0; i<10; i++) {
	console.log(i);
}
```

## Array
I cicli sono molto utili con gli `array`. Gli array sono liste di variabili.  
In qualche modo anche le stringhe sono array (sono liste di caratteri).

Utenti, serie di numeri, serie di date, liste di post, liste di amici, liste di contatti, sono tutte cose che possiamo rappresentare con gli array.

```javascript
// lista dei primi 5 numeri pari
var primi5NumeriPari = [2, 4, 6, 8, 10];
```

## Array
Possiamo accedere ad un elemento di un array usando la sua posizione come indice:

```javascript
// creo un array senza elementi
var primi5NumeriDispari = []

// valorizzo
primi5NumeriDispari[0] = primi5NumeriDispari[0]-1;
primi5NumeriDispari[1] = primi5NumeriDispari[1]-1;
primi5NumeriDispari[2] = primi5NumeriDispari[2]-1;
primi5NumeriDispari[3] = primi5NumeriDispari[3]-1;
primi5NumeriDispari[4] = primi5NumeriDispari[4]-1;
```

## Ciclare
```javascript
for (var i=0; i<5; i++) {
	primi5NumeriDispari[i] = primi5NumeriPari[i]-1;
}
```

## Esempio
stampare il seguente triangolo

```
#
##
###
####
#####
######
#######
```

## Valori di ritorno
Mostrare dialoghi, o scrivere a schermo sono `side effect`.
Molte funzioni sono utili proprio per questo, ma le funzioni
possono produrre anche **valori**.  
Quando una funzione produce un valore, questo di chiama
__valore di ritorno__ e si dice che la funzione __ritorna__
quel dato valore.  
Ad esempio la funzione `Math.max` ritorna il numero massimo
tra quelli che gli __argomenti__ che gli vengono passati tra parentesi:

```javascript
var etaMassima = Math.max(20, 25, 26);
alert(etaMassima);
```

## Altri esempi

metodi su date, stringhe, numeri ...