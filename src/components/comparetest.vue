<template>
  <div class="col-md-12 col-12  m-0 p-0">
      <div class="text-left " style="box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset;">
          <p class="mb-0 p-3"><span><img src="https://www.flaticon.com/premium-icon/icons/svg/3007/3007810.svg" alt="" width="20px"></span> Compare</p> 
      </div>
      <div class="row col-md-12 mt-2 col-12 m-0 p-0">
        <div class="col-md-3 col-4 m-0 p-0 " v-for="(data,index) in allModels " :key="index" >
            <div class="border m-0 p-0">
                <img :src="data.hero_image" alt width="100%" />
                <p class="title mt-4">{{data.make}} {{data.model}}</p>
            </div>
            <div class="pl-3" style="border-right:0.1px solid #f6f6f6">
                <p class="mb-0  text-left" style="font-size:10px">Make</p>
                <p class="mb-0  text-left" style="font-size:10px">Honda</p>
            </div>
            <div class="pl-3" style="background:#f6f6f6">
                <p class="mb-0 text-left" style="font-size:10px">Make</p>
                <p class="mb-0 text-left" style="font-size:10px">Honda</p>
            </div>

            {{data}}
            
          </div>    
        
      </div>
  </div>

</template>

<script>

export default {
  data(){
      return{

      }
  },
  created(){
      this.apply()
  },
  methods:{
      apply() {
      this.$store.dispatch("getModels");
    },
   
  },

  computed: {
    allModels() {
      return this.$store.state.currentStateModel;
    }
  }
}
</script>

<style scoped>

</style>