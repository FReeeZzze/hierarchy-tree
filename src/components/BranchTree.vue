<template>
  <branch-group :groups="groups">
    <template #branch="{ group }">
      <branch-tree v-if="!group.isHidden" :item="group" />
    </template>
  </branch-group>
</template>

<script>
import BranchGroup from '@/components/BranchGroup.vue';
export default {
  name: 'BranchTree',
  components: {
    BranchGroup,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return { groups: [] };
  },
  mounted() {
    const currentGroup = this.heap[this.item.name];
    if (currentGroup) {
      this.groups = currentGroup;
    }
  },
  computed: {
    heap() {
      return this.$store.state.heap;
    },
  },
};
</script>
