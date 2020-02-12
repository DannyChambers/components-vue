<template>
  <div :class="classes">

    <div v-if="this.variant == 'bar'">
        <BarChart v-if="loaded" :chartdata="chartdata" :options="options" />
    </div>

    <div v-if="this.variant == 'line'">
        <LineChart v-if="loaded" :chartdata="chartdata" :options="options" />
    </div>

    <div v-if="this.variant == 'area'">
        <AreaChart v-if="loaded" :chartdata="chartdata" :options="options" />
    </div>

    <div v-if="this.variant == 'radar'">
        <RadarChart v-if="loaded" :chartdata="chartdata" :options="options" />
    </div>

    <div v-if="this.variant == 'pie'">
        <PieChart v-if="loaded" :chartdata="chartdata" :options="options" />
    </div>

  </div>


</template>

<script>
  
import BarChart     from './bar-chart.vue'
import LineChart    from './line-chart.vue'
import AreaChart    from './area-chart.vue'
import RadarChart   from './radar-chart.vue'
import PieChart     from './pie-chart.vue'

export default {
  name: 'Chart',
  components: { BarChart, LineChart, AreaChart, RadarChart, PieChart },
  data: () => ({
    loaded: false,
    chartdata: {//Different data formats will be required to fuel some charts (Area, Radar, Pie etc.)
      labels: ['January', 'February', 'March'],
      datasets: [
        {
          label: 'Data One',
          backgroundColor: '#f87979',
          data: [60, 40, 100]
        },
        {
          label: 'Data Two',
          backgroundColor: '#B448C9',
          data: [80, 20, 120]
        },
        {
          label: 'Data Three',
          backgroundColor: '#1EFDED',
          data: [40, 100, 20]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  }),
  props: {
    classList: {
      type: String,
      default: "",
    },
    variant: String,
    endpoint: String,
  },
  computed: {
    classes() {
      return `chart chart--${this.variant} ${this.classList}`; 
    }
  },
  async mounted () {
    this.$store.dispatch('loadData', this.endpoint);
    this.loaded = true
  }
}
</script>

<style lang="scss" scoped>

  //Tokens --
  @import "@/components/00-tokens/colours/variant-1/_style";
  @import "@/components/00-tokens/fonts/variant-1/_style";
  @import "@/components/00-tokens/dimensions/variant-1/_style";
  @import "@/components/00-tokens/transitions/variant-1/_style";

  @import "./_style";

</style>


