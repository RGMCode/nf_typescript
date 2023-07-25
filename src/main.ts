import './style.css'

/*
*   boolean = true or false
*   number = 1, 2.33, ...
*       infinity
*       NaN
*       bigint
*   string = "Hello darkness my old friend" or 'Hello darkness my old friend'
*   Date - new Date()
*   object
*       undefindes
*       unkown
*       void
*       never
*       null
*       any
*   const x = [1, 2, 3, "Hello"]
*       x.push(10)
*       x.pop()
*       x[3]
*   const user = {name: "john", age: 20}
*       user.name = "john"
*       user.name
*       user.age
*       user.email = "email@email.com";
*       user["name"]
*
*   function hello(name: string): string{
*       return "Hellp " + name;
*   }
*
*   const hello = (name: string) => {
*       return "Hello " + name;
*   }
*
*   Operatoren
*       boolean - && || !
*       number - +, -, *, /
*       Comparison - < > <= >= === !==
*
*   Falsy / truthy
*       false
*       0
*       NaN
*       ""
*       null
*
*
*
*   Control flow:
*       if(condition){...} else if (condition){...} else{...}
*       for(let i = 0; i < list.length; i++){...}
*       *for (let x of list){...} - keine wirkliche verwendung
*       *for (let x in list){...} - keine wirkliche verwendung
*
*
*
*
*   NICHT VERWENDEN / DO NOT USE:   *
*   Boolean                         *
*   Number                          *
*   String                          *
*   Object                          *
* */

let helloDark = "Hello darkness my old friend"
console.log(helloDark)

function helloD() {
    console.log(helloDark)
}

helloD();