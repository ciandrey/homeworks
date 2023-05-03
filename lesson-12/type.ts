// 1. Учитывая данные, определите интерфейс «Пользователь» и используйте его соответствующим образом.
interface DataInterface{
    name: string;
    age: number;
    occupation: string;
    car?: string;
    children?: number;
}

const users: DataInterface[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep',
        car: 'VW'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut',
        children: 2
    }
];

function infoPerson(user: DataInterface) {
    console.log(` - name: ${user.name}, age: ${user.age}, occupation: ${user.occupation}, car: ${user.car || '--'}, children: ${user.children || 0}`);
}
users.forEach(infoPerson);

// 2. Создайте интерфейсы для ролей User и Admin,после этого
// создайте интерфейc Person, который будет соответствовать массиву
interface UserInterface{
    name: string;
    age: number;
    occupation?: string;
}

interface AdminInterface {
    name: string;
    age: number;
    role: string;
}
type Person = UserInterface | AdminInterface;
const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];
console.log(persons)

// 3. Напишите анотации типов к этому классу.

interface InterfaceObjectManipulator {
    set(key: string, value: string | string[]): object;
    get(key: string): string | string[];
    delete(key: string): object;
}

export class ObjectManipulator implements InterfaceObjectManipulator {

    constructor(protected obj : { [key: string]: string | string[] }) {}

    public set(key: string, value: string | string[]): object {
        return new ObjectManipulator({...this.obj, [key]: value});
    }

    public get(key: string) {
        return this.obj[key];
    }

    public delete(key: string) {
        const newObj = {...this.obj};
        delete newObj[key];
        return new ObjectManipulator(newObj);
    }

    public getObject()  {
        return this.obj;
    }
}

// 4. Обеспечьте правильную типизацию для указанных функций.

/**
 * 2 arguments passed: returns a new array
 * which is a result of input being mapped using
 * the specified mapper.
 *
 * 1 argument passed: returns a function which accepts
 * an input and returns a new array which is a result
 * of input being mapped using original mapper.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Function} mapper
 * @param {Array} input
 * @return {Array | Function}
 */

export function map<T>(mapper: (element: T, index: number, arr: T[]) => void, input: T[]) {
    if (arguments.length === 0) {
        return map;
    }
    if (arguments.length === 1) {
        return function subFunction(subInput: T[]) {
            if (arguments.length === 0) {
                return subFunction;
            }
            return subInput.map(mapper);
        };
    }
    return input.map(mapper);
}


/**
 * 2 arguments passed: returns a new array
 * which is a result of input being filtered using
 * the specified filter function.
 *
 * 1 argument passed: returns a function which accepts
 * an input and returns a new array which is a result
 * of input being filtered using original filter
 * function.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Function} filterer
 * @param {Array} input
 * @return {Array | Function}
 */
export function filter<T>(filterer: (element: T, index: number, arr: T[]) => boolean, input: T[]) {
    if (arguments.length === 0) {
        return filter;
    }
    if (arguments.length === 1) {
        return function subFunction(subInput: T[]) {
            if (arguments.length === 0) {
                return subFunction;
            }
            return subInput.filter(filterer);
        };
    }
    return input.filter(filterer);
}


/**
 * 2 arguments passed: returns sum of a and b.
 *
 * 1 argument passed: returns a function which expects
 * b and returns sum of a and b.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Number} a
 * @param {Number} b
 * @return {Number | Function}
 */
export function add(a: number, b: number): number | Function {
    if (arguments.length === 0) {
        return add;
    }
    if (arguments.length === 1) {
        return function subFunction(subB: number) {
            if (arguments.length === 0) {
                return subFunction;
            }
            return a + subB;
        };
    }
    return a + b;
}