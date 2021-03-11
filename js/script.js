var getBurgerName = document.getElementById('burger-name');
var getCalculate  = document.getElementById('calculate');

// liCheck TOGGLE
var getLis = document.getElementsByTagName("li");
for (var i = 0; i < getLis.length; i++) {
   
   var li = getLis[i];
   
   li.addEventListener("click",
   function(){

      var clickedLi         = this;
      var clickedLiChildren = clickedLi.children;
      var clickedCheckbox   = clickedLiChildren[1];

      clickedCheckbox.checked = !clickedCheckbox.checked;
   });
   
}

//price calculation
getCalculate.addEventListener("click",
function(){

   var burgerName = getBurgerName.value;

   if (burgerName) {
      
      var finalPrice = 10;

      var checkboxes = document.getElementsByClassName('ingred');

      for (var i = 0; i < checkboxes.length; i++) {
         
         var checkbox   = checkboxes[i];
         var boxChecked = checkbox.checked;
         var price      = parseInt(checkbox.dataset.price);

         if (boxChecked) {
            
            finalPrice += price;
         }
      }

      var coupons = [
         "A7FH479DHD0",
         "DJ28RJ58F28",
         "K0L1937HF9J"
      ];

      var getBurgerCoupon = document.getElementById('burger-coupon');
      var burgerCoupon    = getBurgerCoupon.value;
      var sale            = finalPrice * 20 / 100;
      var couponFinded    = false;

      for (var i = 0; i < coupons.length && couponFinded == false; i++) {
         
         var coupon = coupons[i];

         if (coupon = burgerCoupon) {
            
            finalPrice -= sale;
            couponFinded = true;
         }
      }
      
      var spanPrice = document.getElementById('price');
      spanPrice.innerHTML = finalPrice;

   } else {

      alert('Inserisci un nome');
   }
});