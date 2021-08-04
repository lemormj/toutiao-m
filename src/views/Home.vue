<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <MyTable ms="this is a table"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import MyTable from '@/components/MyTable.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld/
    MyTable
  }
}
</script>
