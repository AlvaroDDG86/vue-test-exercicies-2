import { shallowMount } from '@vue/test-utils'
import PokemonPicture from '@/components/PokemonPicture'
describe('PokemonPicture', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId: 100,
                showPokemon: false
            }
        })
    })

    test('should match with snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })
    
    test('should render the hidden image of pokemon 100', () => {
        const img = wrapper.find('img')
        // Option 1
        expect(img.attributes().src).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg')
        expect(img.classes().includes('hidden-pokemon')).toBeTruthy() 
    });
    test('should render the image of pokemon 100', async () => {
        await wrapper.setProps({
            'showPokemon': true
        })
        const img = wrapper.find('img')
        // Option 2
        expect(img.attributes('src')).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg')
        expect(img.classes('hidden-pokemon')).toBeFalsy() 
    });
});