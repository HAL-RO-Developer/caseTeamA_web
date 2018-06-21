<template>
    <button @click="createButton"></button>
</template>

<script>
import SideBar from '../modules/sidebar.vue'

export default {
  name: "index",
  components: {
    SideBar
  },
  methods:{
    createButton(){
      console.log("on push!!")
    }
  }
}
</script>
