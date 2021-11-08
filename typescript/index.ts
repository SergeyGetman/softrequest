import {resolveNaptr} from "dns";


const myString: string = "Alex Boss"
const myBoolean: boolean = Boolean("test");


type IMyObject = {
    firstName: string,
    age: number
}
const myObj2: IMyObject = {
    firstName: "Brian",
    age: 33,
}

type newObj = {
    lastName: string,
    phoneNumber: string
}

const myObj3: newObj = {
    lastName: "Sorry",
    phoneNumber: "+3809218312"
}


const myArray3: Array<null | string | number> = [2, 1, 2, 3, 4, "names"]

const myArray: (null | string)[] = []

const myArray2: Array<string | number | boolean> = ["string", 55, false]

const myFunction = (a: number, b: number): void => {
    console.log( a + b);
}
myFunction(4, 5)

const myFetchFunction = (): Promise<{counter : number }> => new Promise(() => ({counter : 7 }))

//generik

const arr = ["1", "2", "3", "5"]

const result = arr.map(elem => elem + "33")








