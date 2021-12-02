<template>
  <div
    v-if="item.city_id"
    class="tooltip"
    @mouseover="viewToolTip(item.city_id)"
  >
    {{ item.name }}
    <span class="tooltiptext">{{ currentToolTip }}</span>
  </div>
  <div class="list" :class="{ active_list: !item.isHidden }" v-else>
    {{ item.name }}
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  data() {
    return {
      currentToolTip: '',
    };
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    filterCityById(id) {
      return this.$store.getters.filterCityById(id);
    },
    formatTextCity(cityName, cityCount) {
      return cityName + ', ' + cityCount + ' жителей';
    },
    viewToolTip(city_id) {
      if (!city_id) return;

      const city = this.filterCityById(city_id);

      if (city.length) {
        const currentCity = city.pop();
        this.currentToolTip = this.formatTextCity(
          currentCity.name,
          currentCity.data
        );
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.list {
  background-color: rgba(32, 27, 27, 0.74);
  color: #fff;
  cursor: pointer;
  padding: 5px;
  border: 1px solid black;
  display: flex;
  height: 30px;
  width: 150px;
  text-align: center;
  justify-content: center;
  align-items: center;
}

.active_list {
  position: relative;
  &:after {
    content: '';
    position: absolute;
    bottom: 50%;
    right: -0.8rem;
    width: 0.7rem;
    border: 1px solid rgb(51, 49, 49);
  }
}

.tooltip {
  margin: 0 10px;
  position: relative;
  display: inline-block;

  .tooltiptext {
    visibility: hidden;
    width: 140px;
    background-color: rgb(36, 36, 36);
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 30%;
    margin-left: -60px;
    opacity: 0;
    transition: opacity 0.3s;
    &::after {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: rgb(36, 36, 36) transparent transparent transparent;
    }
  }

  &:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }
}
</style>
