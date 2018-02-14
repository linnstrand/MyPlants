import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Plant } from './models/plant';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const plants = [
            {
                id: 1,
                name: 'Monstera',
                light: 4,
                water: 3,
                care: 'Placera ljus men inte i direkt solljus.Låt översta lagret jord torka mellan vattningarna. Fukta gärna bladen med blomspruta'
            },
            {
                id: 2,
                name: 'Saintpaula',
                light: 4,
                water: 3,
                care: 'Saintpaulian ska vattnas så att den blir ordentligt genomvattnad. Därefter är det viktigt att jorden får torka ut innan växten får nytt vatten, detta är speciellt viktigt vintertid. Om blomman vattnas underifrån ska vatten som blir kvar på fatet efter 10 minuter hällas av. Saintpaulian klarar ett visst mått av torka tack vare sina saftiga och tjocka blad. Saintpaulians rötter är känsliga och därför är det viktigt att endast vattna med rumstempererat vatten och inte låta saintpaulian stå i kalla och dragiga fönster.'
            },
            {
                id: 3,
                name: 'Spjutbräken',
                alias: 'Ormbunke',
                light: 2,
                water: 4,
                care: 'Håll jorden jämt fuktig.'
            },
            {
                id: 4,
                name: 'Fiolfikus',
                light: 4,
                water: 3,
                care: 'Placeras ljust, men undvik eftermiddagssolen. Vattna när översta lagret jord är torrt, övervattning är värre än undervatten. För låga fuktighetsnivåer kan orsaka bruna löv.'
            },
        ];
        return { plants }
    };
}

