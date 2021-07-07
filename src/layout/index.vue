<template>
  <div class="app-wrapper">
    <Sidebar></Sidebar>
    <Navbar></Navbar>
    <AppMain></AppMain>
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
}
</style>
