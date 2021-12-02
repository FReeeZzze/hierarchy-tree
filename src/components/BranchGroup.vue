<template>
  <div class="parent_branch">
    <div
      class="child_branch"
      :key="generateUniqKey(group)"
      v-for="group in localGroups"
    >
      <list-item :item="group" @click.native="changeSpoiler(group)" />
      <slot name="branch" :group="group"> </slot>
    </div>
  </div>
</template>

<script>
import ListItem from '@/components/ListItem.vue';
export default {
  name: 'BranchGroup',
  components: {
    ListItem,
  },
  props: {
    groups: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  computed: {
    localGroups() {
      return [...this.groups];
    },
  },
  methods: {
    changeSpoiler(item) {
      item.isHidden = !item.isHidden;
    },
    generateUniqKey(key) {
      return '_' + key + Math.random().toString(36).substr(2, 9);
    },
  },
};
</script>

<style lang="scss" scoped>
.parent_branch {
  display: grid;
}

.child_branch {
  display: flex;
  margin: 10px;
}
</style>
