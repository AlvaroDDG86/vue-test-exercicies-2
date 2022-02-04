import pokemonApi from '@/api/pokemonApi'

describe('pokemonApi', () => {
    test('should be configured with the correct api', () => {
        expect(pokemonApi.defaults.baseURL).toBe('https://pokeapi.co/api/v2/pokemon')
    });
})