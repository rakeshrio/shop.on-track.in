<template>
    <div class="col-md-12 mt-5 pb-5 m-0 p-0 " style="background:#f7f7f7">
        <div class="col-md-12 m-0 p-0" style="background: white">
            <div class="col-md-9 text-left mt-5  m-auto "  >
                <p class="pl-3 mb-0 " style="font-size:17px; font-family:gilroy">Enabling Independent Affordable Transportation</p>
                <h4 class="pl-3 " style="font-size:30px; font-family:gilroyf">One Bike At A Time</h4>
                <div class="col-md-12 py-5 mb-5 row m-0 p-0" style="min-height:300px ">
                    <div class="col-md-4 " @click="$router.push('/buyback')" style="cursor:pointer;    ">
                        <img src="../assets/buy1.png" alt="" width="100%" height="auto" >
                    </div>
                    <div class="col-md-4" @click="$router.push('/loan-against-vehicle')"  style="cursor:pointer; ">   
                        <img src="../assets/buy3.png" alt="" width="100%" height="auto">
                    </div>
                    <div class="col-md-4" @click="$router.push('/new-2-wheelers-loan')"  style="cursor:pointer; ">
                        <img src="../assets/buy2.png" alt="" width="100%" height="auto">
                    </div>   
                </div>
            </div>   
        </div>
            
            <div class="col-md-9 mb-5 m-auto pb-5" style="background:white;font-size:17px; font-family:gilroy; font-weight:600;    box-shadow: 0 5px 10px 0 rgba(0, 89, 163, 0.1); border-radius:25px" >
                <p class="text-left ml-5 mb-5" style="font-size:35px; font-family:gilroyf; width:200px; background:#4e44e8; border-radius: 0px 0px 10px 10px;color:white" ><span class="m-0 ml-4 p-0 text-center">Features</span></p>
                <div class="col-md-9 text-center row m-auto">
                        <div class="col-md-4 col-6 m-0 p-0">
                            <img src="https://wheelsemi.com/resources/frontend_v2/images/online-repayment.png" alt="">
                            <p>Online Repayment</p>
                        </div>
                        <div class="col-md-4 col-6 m-0 p-0">
                            <img src="https://wheelsemi.com/resources/frontend_v2/images/quick-approval.png" alt="">
                            <p >Quick Approval</p>
                        </div>
                        <div class="col-md-4 m-0 col-12 p-0">
                            <img src="https://wheelsemi.com/resources/frontend_v2/images/affortable-emis.png" alt="">
                            <p>Affordable EMIs</p>
                        </div>  
                </div>
                <div class="col-md-12  text-center m-auto row  p-0">
                    <div class="col-md-3 col-6 m-0 p-0">
                            <img src="https://wheelsemi.com/resources/frontend_v2/images/vehicle-evaluted-by-our-experts.png" alt="">
                            <p class="m-0 p-0">Vehicle Inspection</p>
                            <p>By Our Experts</p>
                    </div>
                    <div class="col-md-3 col-6 m-0 p-0" >
                            <img src="https://wheelsemi.com/resources/frontend_v2/images/dcc.png" alt="">
                            <p class="m-0 p-0">Direct Collection</p>
                            <p>Model</p>
                    </div>
                    <div class="col-md-3 m-0 col-6 p-0">
                        <img src="https://wheelsemi.com/resources/frontend_v2/images/easy-documentation.png" alt="">
                        <p class="m-0 p-0">Easy</p>
                        <p>Documentation</p>
                    </div>
                    <div class="col-md-3 m-0 col-6 p-0">
                        <img src="https://wheelsemi.com/resources/frontend_v2/images/minimum-loan-tenor.png" alt="">
                        <p class="m-0 p-0">Flexible Loan</p>
                        <p>Tenure</p>
                    </div>
                </div> 
            </div>    
        </div>
        
   
</template>

<script>
export default {

}
</script>

<style scoped>
@font-face {
  font-family: Gilroyf;
  src: url(../assets/font/Gilroy-ExtraBold.otf);
}
@font-face {
  font-family: Gilroy;
  src: url(../assets/font/Gilroy-Light.otf);
}
</style>