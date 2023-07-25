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
*   Error
*   try{...} catch(e: Error){...}
*   try{throw new Error("error message")} catch(e: Error){...}
*
*
*   NICHT VERWENDEN / DO NOT USE:   *
*   Boolean                         *
*   Number                          *
*   String                          *
*   Object                          *
* */

    type Car = {
        id: string;
        brand: string;
        model: string;
    };

    let cars: Car[] = [];

    function addCar(car: Car) {
        cars.push(car);
    }

    function getCars() {
        return cars;
    }

    function getCarById(id: string) {
        for (let i = 0; i < cars.length; i++) {
            if (cars[i].id === id) {
                return cars[i];
            }
        }

        return null;
    }

    function updateCarByid(id: string, car: Car) {
        for (let i = 0; i < cars.length; i++) {
            if (cars[i].id === id) {
                cars[i] = car;
            }
        }
    }

    function deleteCarById(id: string) {
        let index: number|null = null;
        for (let i = 0; i < cars.length; i++) {
            if (cars[i].id === id) {
                index = i;
                break;
            }
        }

        if (index !== null) {
            cars.splice(index, 1);
        }
    }

    addCar({ id: "1", brand: "VW", model: "Golf" });
    console.log("Cars after add", cars);

    console.log("Cars with get cars", getCars());

    console.log("Get car by id", getCarById("1"));
    console.log("Get car by id", getCarById("5"));

    updateCarByid("1", { id: "1", brand: "BMW", model: "3er"});
    console.log("Cars after update", cars);

    deleteCarById("1");
    console.log("Cars after delete", cars);

    function getCarByIdFunctional(id: string) {
        return cars.find(x => x.id === id);
    }

    function updateCarByIdFunctional(id: string, car: Car) {
        cars = cars.map(x => x.id === id ? car : x);
    }

    function deleteCarByIdFunctional(id: string) {
        cars = cars.filter(x => x.id !== id);
    }

    // [1,2,3,4].reduce((sum, x) => sum + x, 0);

    addCar({ id: "1", brand: "VW", model: "Golf" });
    console.log("Cars after add", cars);

    console.log("Cars with get cars", getCars());

    console.log("Get car by id", getCarByIdFunctional("1"));
    console.log("Get car by id", getCarByIdFunctional("5"));

    updateCarByIdFunctional("1", { id: "1", brand: "BMW", model: "3er"});
    console.log("Cars after update", cars);

    deleteCarByIdFunctional("1");
    console.log("Cars after delete", cars);