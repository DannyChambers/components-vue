
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

import Icon from './index.vue'

storiesOf('Components/Tokens/Icons', module)
  .add('Default', () => ({
    components: { Icon },
    template: `
    <div>
        <Icon icon_placement="before" icon_graphic="github" />
        <Icon icon_placement="before" icon_graphic="facebook" />
        <Icon icon_placement="before" icon_graphic="twitter" />
        <Icon icon_placement="before" icon_graphic="linkedin" />
        <Icon icon_placement="before" icon_graphic="checkmark" />
        <Icon icon_placement="before" icon_graphic="cheveron" />
        <Icon icon_placement="before" icon_graphic="close" />
        <Icon icon_placement="before" icon_graphic="menu" />
        <Icon icon_placement="before" icon_graphic="envelope" />
        <Icon icon_placement="before" icon_graphic="mood-happy-outline" />
        <Icon icon_placement="before" icon_graphic="mood-neutral-outline" />
        <Icon icon_placement="before" icon_graphic="mood-sad-outline" />
        <Icon icon_placement="before" icon_graphic="search" />
    </div>
    `
  }));