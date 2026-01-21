export interface Person {
  firstName?: string;
  lastName?: string;
  age?: number;
}

interface ValidPerson {
  firstName: string;
  lastName: string;
  age: number;
}
export function sortPersons(persons: Person[]): Person[] {
  const nameFilter = persons.filter(person => person.firstName)
  const lastFilter = nameFilter.filter(person => person.lastName)
  const ageFilter = lastFilter.filter(person => person.age && (person.age >= 0 && person.age <= 100)) as ValidPerson[]
  const sorted = ageFilter.sort((a, b) => b.age - a.age && a.firstName?.localeCompare(b.firstName) && a.lastName?.localeCompare(b.lastName))
  return sorted as Person[]
}


const persons: Person[] = [
  { firstName: "Somchai", lastName: "Jaidee", age: 30 },
  { firstName: "", lastName: "Test", age: 20 },
  { firstName: "Anan", lastName: "Sukjai", age: 25 },
  { firstName: "Somchai", lastName: "Dee", age: 25 },
  { firstName: "John", lastName: "Doe", age: 150 },
  { firstName: "Jane", lastName: "Smith", age: -5 },
  { lastName: "NoName", age: 40 }
];