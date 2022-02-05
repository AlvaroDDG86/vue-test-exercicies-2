import { shallowMount } from '@vue/test-utils'
import PokemonOptions from '@/components/PokemonOptions'
import { pokemonsMock } from '../mocks/pokemons'
describe('PokemonOptions', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallowMount(PokemonOptions, {
            props: {
                pokemons: pokemonsMock
            }
        })
    })
    test('Should match snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })    

    test('should render 4 list, one for each pokemon', () => {
        const lies = wrapper.findAll('li')
        expect(lies.length).toBe(4)
        lies.forEach((li, index) => {
            expect(li.text()).toBe(pokemonsMock[index].name)
        })
    });

    test('should emmit on click element', () => {
        const lies = wrapper.findAll('li')
        lies.forEach((li) => {
            li.trigger('click')
        })

        // assert event count
        expect(wrapper.emitted('selectionPokemon').length).toBe(4)

        // assert event payload
        expect(wrapper.emitted('selectionPokemon')[0]).toEqual([1]) // deep
        expect(wrapper.emitted('selectionPokemon')[1]).toEqual([2]) // deep
        expect(wrapper.emitted('selectionPokemon')[2]).toEqual([3]) // deep
        expect(wrapper.emitted('selectionPokemon')[3]).toEqual([4]) // deep
    });
});