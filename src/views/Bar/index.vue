<template>
  <div>
    <button @click="handleClick">bar page</button>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    handleClick() {
      console.log(this.$store.state.count,'ddd');
      this.$store.commit('increment');
    }
  }
}
</script>

<style scoped lang="scss">

</style>
