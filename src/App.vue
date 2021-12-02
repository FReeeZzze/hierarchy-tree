<template>
  <div id="app">
    <h1 class="message_error" v-if="messageError">{{ messageError }}</h1>
    <branch-group :groups="firstGroup">
      <template #branch="{ group }">
        <branch-tree v-if="!group.isHidden" :item="group" />
      </template>
    </branch-group>
  </div>
</template>

<script>
import { getCities, getCitizens } from "@/api";
import BranchTree from "@/components/BranchTree.vue";
import BranchGroup from "./components/BranchGroup.vue";
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    BranchTree,
    BranchGroup,
  },
  data() {
    return {
      firstGroup: [],
      messageError: "",
    };
  },
  async mounted() {
    try {
      const resultCities = await getCities();
      this.setCities(resultCities);
      const resultCitizens = await getCitizens();
      this.setCitizens(resultCitizens);
    } catch (e) {
      this.messageError = e.message;
    }
  },
  computed: {
    heap() {
      return this.$store.state.heap;
    },
    citizens() {
      return this.$store.state.citizens;
    },
  },
  methods: {
    ...mapActions(["setCities", "setHeap", "setCitizens"]),

    itemInCollection(item) {
      return this.$store.getters.itemInHeap(item);
    },
  },
  watch: {
    citizens() {
      if (this.citizens.length > 0) {
        for (const citizen of this.citizens) {
          const exists = this.firstGroup.filter(
            (g) => g.name === citizen.groups[0].name
          );
          if (!exists.length) {
            this.firstGroup.push({
              name: citizen.groups[0].name,
              isHidden: true,
            });
          }

          const beforeLastItem = citizen.groups.length - 1;
          const groups = citizen.groups;

          for (let i = 0; i < beforeLastItem; i++) {
            const nextStep = i + 1;

            let collection = this.itemInCollection(groups[i].name);

            const itemHeap = {
              name: citizen.groups[i].name,
              value: [
                ...collection.filter((c) => c.name !== groups[nextStep].name),
                { name: groups[nextStep].name, isHidden: true },
              ],
            };

            this.setHeap(itemHeap);

            if (beforeLastItem === nextStep) {
              collection = this.itemInCollection(groups[nextStep].name);

              const nextItem = {
                name: [groups[nextStep].name],
                value: [...collection, { ...citizen, isHidden: true }],
              };

              this.setHeap(nextItem);
            }
          }
        }
      }
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 100vh;
}

.message_error {
  color: rgb(219, 68, 68);
  text-decoration: underline;
}
</style>
