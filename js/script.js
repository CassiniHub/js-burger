var getBurgerName = document.getElementById('burger-name');
var getCalculate  = document.getElementById('calculate');


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

      var spanPrice = document.getElementById('price');
      spanPrice.innerHTML = finalPrice;

   } else {

      alert('Inserisci un nome');
   }
})