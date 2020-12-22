<template>
  <div class="col-md-12 col-12 m-0 p-0 mb-5">
      <div class="col-md-9 row" style="margin:0 auto">
        <div class="col-md-4 m-0 p-0 text-left col-4 mt-4">
          <p class="font1 "  @click="$router.push('/')"  style="cursor:pointer"><img class="iconq" src="../assets/house.png" alt="" ></p>
        </div>
        <div class="col-md-4 m-0 p-0 col-4 text-center" >
          <div class="col-md-8 px-1 pt-4 pb-4  bord" @click="$router.push('/')" style="background:#4E44D8; margin:0 auto;cursor:pointer">
         <a href="https://on-track.in/"><img src="https://on-track.in/wp-content/uploads/2020/10/logo-white.svg" alt="" width="70%"></a>
          </div>
        </div>
        <div class="col-md-4 m-0 p-0 text-right col-4 mt-4">
            
            <!-- <div v-if="login">
              <b-dropdown id="dropdown-1" text="Dropdown Button" class="m-md-2">
                <b-dropdown-item>Purchase history</b-dropdown-item>
                <b-dropdown-item>Logout</b-dropdown-item>
              
              </b-dropdown>
            </div>  -->
            <h4  class="font1" style="cursor:pointer" @click="goto" >
              <img class="imag" src="https://cdn3.iconfinder.com/data/icons/mixed-communication-and-ui-pack-1/48/general_pack_NEW_glyph_profile-512.png" alt="" width="10%" height="auto">
            </h4>    
          <!-- <b-dropdown id="dropdown-1" text="Login" class="m-md-2">
              <b-dropdown-item>
                  
              </b-dropdown-item>
          </b-dropdown> -->
        </div>
      </div>
  </div>
</template>

<script>

export default {
  data(){
    return{
      login:true,
    }
  },
 methods:{
   goto(){
     this.$router.push('/purchase')
   }
 }
}
</script>

<style scoped>

/* @font-face {
  font-family: 'gilroy'; 
  src: url('../assets/font/Gilroy-Light.off'); 
} */
.iconq{
  width:10%;
  height:auto;
}
.font1{
    color: #333333;
    font-family: 'Gilroy';
    font-size: 20px;
    font-weight: normal;
}
.bord{
    margin: 0% 0% 0% 0%;
    padding: 30px 10px 30px 10px;
    background-color: #4E44D8;
    border-radius: 0px 0px 36px 36px;
}
router-link{
    text-decoration: none !important;

}
::placeholder {
  letter-spacing: 1px;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
}
.css {
  letter-spacing: 1px;
  font-size: 15px;
  font-weight: 600;
}
.buton {
  border: none;
  outline: none;
  padding: 10px;
  background: rgb(78, 68, 216);
  background: linear-gradient(
    90deg,
    rgba(78, 68, 216, 1) 18%,
    rgba(142, 68, 216, 1) 68%
  );
  color: white;
  border: none;
  font-size: 12px;
  letter-spacing: 2px;
  border-radius: 3px;
}
@font-face {
  font-family: Gilroy;
  src: url(../assets/font/Gilroy-Light.otf);
 
}
@font-face {
  font-family: Gilroyf;
  src: url(../assets/font/Gilroy-ExtraBold.otf);
 
}
@media only screen and (max-width: 600px) {
  .bord{
    padding: 10px 12px 12px 12px;
    border-radius: 0px 0px 20px 20px;
  }
  .imag{
    width:25%;
  }
  .font1{
    color: #333333;
    font-family: 'Gilroy';
    font-size: 14px !important;
    font-weight: normal;
}
  .iconq{
    width:20%;
    height:auto;
  }
}
</style>