import {IterableUsingGenerator} from './IterableUsingGeneraotr'

for(let item of new IterableUsingGenerator([1, 2, 3])) console.log(item)
for(let item of new IterableUsingGenerator(['hello', 'world', '!'])) console.log(item)