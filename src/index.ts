import { Sorter } from './Sorter'
import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection  } from './CharactersCollection'

const numbersCollection = new NumbersCollection([5, 3, -1, 10, -888])
const sorter = new Sorter(numbersCollection)
sorter.sort()
console.log(numbersCollection.data)

const charactersCollection = new CharactersCollection('AnytHing')
const stringSorter = new Sorter(charactersCollection)
stringSorter.sort()
console.log(charactersCollection.data)