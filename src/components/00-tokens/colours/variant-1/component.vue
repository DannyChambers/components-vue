<template>
  <div>

    <H2>Raw palette</H2>

    <Ul classList="token-list">
      <li class="list_item" v-for="colour in rawPalette" :key="colour.hexadecimal">
        <div :style="{'background': colour.hexadecimal}">
          <div><strong>Variable: </strong>{{colour.variable}}</div>
          <div><strong>Hex code: </strong>{{colour.hexadecimal}}</div>
        </div>
      </li>
    </Ul>
    
    <H2>Functional palette</H2>

    <Ul classList="token-list">
      <li class="list_item" v-for="colour2 in functionalPalette" :key="colour2.hexadecimal">
        <div :style="{'background': colour2.hexadecimal}">
          <div><strong>Variable: </strong>{{colour2.variable}}</div>
          <div><strong>Maps to: </strong>{{colour2.relation}}</div>
        </div>
      </li>
    </Ul>

  </div>
</template>

<script>

  import H2 from '@/components/01-arrangements/h2/variant-1/component.vue'
  import Ul from '@/components/01-arrangements/ul/variant-1/component.vue';

  export default {
    name: 'Colours',
    components: {
      H2, Ul
    },
    props: {
    },
    data() {
      return {
        palettes: {
          rawPalette: [
            {
            'variable': '$pattern-black',
            'hexadecimal': '#000000',
            },
            {
            'variable': '$pattern-offblack',
            'hexadecimal': '#222222',
            },
            {
            'variable': '$pattern-white',
            'hexadecimal': '#ffffff',
            },
            {
            'variable': '$pattern-offwhite',
            'hexadecimal': '#F0EDE9',
            },
            {
            'variable': '$pattern-grey-1',
            'hexadecimal': '#999999',
            },
            {
            'variable': '$pattern-grey-2',
            'hexadecimal': '#cccccc',
            },
            {
            'variable': '$pattern-grey-3',
            'hexadecimal': '#eeeeee',
            },
            {
            'variable': '$pattern-green-1',
            'hexadecimal': '#5d913f',
            },
            {
            'variable': '$pattern-blue-1',
            'hexadecimal': '#24cfe2',
            },
            {
            'variable': '$pattern-orange-1',
            'hexadecimal': '#CA5E40',
            },
            {
            'variable': '$pattern-red-1',
            'hexadecimal': '#b91438',
            }
          ],
          functionalPalette: [
            {
            'variable': '$brand-1',
            'relation': '$pattern-black',
            'hexadecimal': '#000000',
            },
            {
            'variable': '$brand-2',
            'relation': '$pattern-black-2',
            'hexadecimal': '#222222',
            },
            {
            'variable': '$brand-3',
            'relation': '$pattern-white-1',
            'hexadecimal': '#ffffff',
            },
            {
            'variable': '$brand-4',
            'relation': '$pattern-white-2',
            'hexadecimal': '#F0EDE9',
            },
            {
            'variable': '$brand-5',
            'relation': '$pattern-grey-1',
            'hexadecimal': '#999999',
            },
            {
            'variable': '$brand-6',
            'relation': '$pattern-grey-2',
            'hexadecimal': '#cccccc',
            },
            {
            'variable': '$brand-7',
            'relation': '$pattern-grey-3',
            'hexadecimal': '#eeeeee',
            },
            {
            'variable': '$brand-8',
            'relation': '$pattern-green-1',
            'hexadecimal': '#5d913f',
            },
            {
            'variable': '$brand-9',
            'relation': '$pattern-blue-1',
            'hexadecimal': '#24cfe2',
            },
            {
            'variable': '$brand-10',
            'relation': '$pattern-orange-1',
            'hexadecimal': '#CA5E40',
            },
            {
            'variable': '$brand-11',
            'relation': '$pattern-red-1',
            'hexadecimal': '#b91438',
            },
            {
            'variable': '$line-colour-1',
            'relation': '$pattern-grey-1',
            'hexadecimal': '#999999'            
            },
            {
            'variable': '$line-colour-2',
            'relation': '$pattern-grey-2',
            'hexadecimal': '#cccccc'            
            },
            {
            'variable': '$shadow-colour-1',
            'relation': '$pattern-black-1',
            'hexadecimal': '#000000'            
            },
            {
            'variable': '$action-colour',
            'relation': '$pattern-grey-1',
            'hexadecimal': '#999999'            
            },
            {
            'variable': '$active-colour',
            'relation': '$pattern-orange-2',
            'hexadecimal': '#cccccc'            
            },
            {
            'variable': '$background-colour-1',
            'relation': '$pattern-white-1',
            'hexadecimal': '#ffffff'            
            },
            {
            'variable': '$text-colour-1',
            'relation': '$pattern-black-2',
            'hexadecimal': '#222222'            
            },
            {
            'variable': '$text-colour-2',
            'relation': '$pattern-white-1',
            'hexadecimal': '#ffffff'            
            },
            {
            'variable': '$link-colour',
            'relation': '$pattern-grey-1',
            'hexadecimal': '#999999'
            },
            {
            'variable': '$message-success',
            'relation': '$pattern-green-1',
            'hexadecimal': '#5d913f'            
            },
            {
            'variable': '$message-warning',
            'relation': '$pattern-orange-1',
            'hexadecimal': '#CA5E40'            
            },
            {
            'variable': '$message-information',
            'relation': '$pattern-blue-1',
            'hexadecimal': '#24cfe2'            
            },
            {
            'variable': '$message-error',
            'relation': '$pattern-red-1',
            'hexadecimal': '#b91438'            
            },
          ]
        }
      }
    },
    computed: {
      rawPalette() {
        return this.palettes.rawPalette
      },
      functionalPalette() {
        return this.palettes.functionalPalette
      },
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>

  //Tokens --
  @import "@/components/00-tokens/fonts/variant-1/_style";
  @import "@/components/00-tokens/dimensions/variant-1/_style";
  @import "@/components/00-tokens/transitions/variant-1/_style";

  @import "./_style";

</style>
