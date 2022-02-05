import { shallowMount } from '@vue/test-utils'
import PokemonPage from '@/pages/PokemonPage'
import { pokemonsMock } from '../mocks/pokemons'
describe('pokemonPage', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemonsMock,
                    pokemon: pokemonsMock[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })
    })
    
    test('should ', () => {
        expect(true).toBe(true)
    });
    
    test('should call mixPokemonArray on mounted', () => {
        // PokemonsPage.methods is the same as wrapper.vm, before mount
        const mixPokemonSpy = jest.spyOn(PokemonPage.methods, 'mixPokemonArray')
        shallowMount(PokemonPage)
        expect(mixPokemonSpy).toHaveBeenCalled()
    });

    test('should match with snapshot when pokemons have been loaded', () => {
        expect(wrapper.html()).toMatchSnapshot()
    });

    test('should render PokemonOptions and PokemonPicture components', () => {
        expect(wrapper.find('pokemon-picture-stub').exists()).toBeTruthy()
        expect(wrapper.find('pokemon-options-stub').exists()).toBeTruthy()
    });
    
    test('should fit the good attributes to children components', () => {
        // not neccesary to test this a lot, because they are been tested by themselves
        expect(wrapper.find('pokemon-picture-stub').attributes('pokemonid')).toBe('1')
        expect(wrapper.find('pokemon-options-stub').attributes('pokemons')).toBeTruthy()
    });

    test('should checkAnswer method when is correct', async () => {
        await wrapper.vm.checkAnswer(pokemonsMock[1].id)
        expect(wrapper.vm.showPokemon).toBe(true)
        expect(wrapper.vm.showAnswer).toBe(true)

        expect(wrapper.find('h2').exists()).toBe(true)
        expect(wrapper.vm.message).toBe(`Oops, era ${ pokemonsMock[0].name }`)
        
    });
    
    test('should checkAnswer method when is wrong', async () => {
        await wrapper.vm.checkAnswer(pokemonsMock[0].id)
        expect(wrapper.vm.showPokemon).toBe(true)
        expect(wrapper.vm.showAnswer).toBe(true)
        
        expect(wrapper.find('h2').exists()).toBe(true)
        expect(wrapper.vm.message).toBe(`Correcto, ${ pokemonsMock[0].name }`)
        
    });

    test('should call newGame when button is clicked', () => {
        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemonsMock,
                    pokemon: pokemonsMock[0],
                    showPokemon: true,
                    showAnswer: true,
                    message: ''
                }
            }
        })
        const newGameSpy = jest.spyOn(wrapper.vm, 'newGame')
        wrapper.find('button').trigger('click')
        expect(newGameSpy).toHaveBeenCalled()
    });
})