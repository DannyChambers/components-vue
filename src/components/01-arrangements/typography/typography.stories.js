
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
//import { action } from '@storybook/addon-actions'

import H1 from "./h1.vue";
import H2 from "./h2.vue";
import H3 from "./h3.vue";
import H4 from "./h4.vue";
import H5 from "./h5.vue";
import T1 from "./t1.vue";
import T2 from "./t2.vue";
import T3 from "./t3.vue";

storiesOf('Components/Arrangements/Typography', module)
  .add('Headings', () => ({
    components: { H1, H2, H3, H4, H5 },
    template: `
    <div>
        <H1>H1 The quick brown fox jumps over the lazy dog</H1>
        <H2>H2 The quick brown fox jumps over the lazy dog</H2>
        <H3>H3 The quick brown fox jumps over the lazy dog</H3>
        <H4>H4 The quick brown fox jumps over the lazy dog</H4>
        <H5>H5 The quick brown fox jumps over the lazy dog</H5>
    </div>
    `
  }))
  .add('Body copy', () => ({
    components: { T1, T2, T3 },
    template: `
    <div>
        <T1>T1 The quick brown fox jumps over the lazy dog</T1>
        <T2>T2 The quick brown fox jumps over the lazy dog</T2>
        <T3>T3 The quick brown fox jumps over the lazy dog</T3>
    </div>
    `
  }));


