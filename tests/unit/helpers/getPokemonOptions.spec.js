import getPokemosOptions, { getPokemons, getPokemonNames } from '@/helpers/getPokemonOptions'

describe('getPokemonOptions', () => {
    test('should return number array oj 650 items', () => {
        const pokemons = getPokemons()
        expect(pokemons.length).toBe(650)
        expect(pokemons[0]).toBe(1)
        expect(pokemons[250]).toBe(251)
        expect(pokemons[649]).toBe(650)
    });
    test('should return an array of 4 elements with pokemos names', async () => {
        const pokeMocks =  [
            { name: 'bulbasaur', id: 1 },
            { name: 'ivysaur', id: 2 },
            { name: 'charmander', id: 3 },
            { name: 'venusaur', id: 4 }
          ]
        const pokemons = await getPokemonNames([1, 2, 3, 4])
    
        pokemons.forEach((poke, index) => {
            expect(poke.name).toBe(pokeMocks[index].name)
        })
    });
    test('should return the mixed array with pokemons', async () => {
        const pokemons = await getPokemosOptions()
        expect(pokemons.length).toBe(4)
        expect(pokemons).toEqual([
            {
                name: expect.any(Boolean),
                id: expect.any(Number)
            },
            {
                name: expect.any(String),
                id: expect.any(Number)
            },
            {
                name: expect.any(String),
                id: expect.any(Number)
            },
            {
                name: expect.any(String),
                id: expect.any(Number)
            }
        ])
    });
});