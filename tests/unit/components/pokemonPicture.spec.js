import { shallowMount } from '@vue/test-utils'
import PokemonPicture from '@/components/PokemonPicture'
describe('PokemonPicture', () => {
    const factory = (options) => {
        return shallowMount(PokemonPicture, {
            ...options
        })
    }

    test('should match with snapshot', () => {
        const wrapper = factory({
            props: {
                pokemonId: 100,
                showPokemon: false
            }
        })
        expect(wrapper).toMatchSnapshot()
    })
    
    test('should render the hidden image of pokemon 100', () => {
        const wrapper = factory({
            props: {
                pokemonId: 100,
                showPokemon: false
            }
        })
        const img = wrapper.find('[data-testid="img-hidden"]')
        // Option 1
        expect(img.attributes().src).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg')
        expect(img.classes().includes('hidden-pokemon')).toBeTruthy() 
    });
    test('should render the image of pokemon 100', () => {
        const wrapper = factory({
            props: {
                pokemonId: 100,
                showPokemon: true
            }
        })
        const img = wrapper.find('[data-testid="img"]')
        // Option 2
        expect(img.attributes('src')).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg')
        expect(img.classes('hidden-pokemon')).toBeFalsy() 
    });
});