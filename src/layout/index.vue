<template>
  <div class="app-wrapper">
    <Sidebar></Sidebar>
    <div class="right-wrapper">
      <Navbar></Navbar>
      <AppMain></AppMain>
    </div>
  </div>
</template>

<script>
import AppMain from './components/AppMain'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
export default {
  name: 'Layout',
  components: {
    AppMain,
    Navbar,
    Sidebar,
  },
  data() {
    return {

    }
  },
}
</script>

<style scoped lang="scss">
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  .right-wrapper {
    width: calc(100% - 210px);
  }
}
</style>
