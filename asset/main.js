const buyBtns = document.querySelectorAll('.js-btn-tickets');
const model = document.querySelector('.js-model');
const modelClose = document.querySelector('.js-model-close');
const modelContainer = document.querySelector('.js-model-container');
function showBuyTickets(){
    model.classList.add('open');
}
function hideBuyTickets(){
    model.classList.remove('open');
}
for(const buyBtn of buyBtns){
    buyBtn.addEventListener('click',showBuyTickets)
}
modelClose.addEventListener('click',hideBuyTickets);
model.addEventListener('click',hideBuyTickets);
modelContainer.addEventListener('click',function(event){
    event.stopPropagation();
});

var headerElement = document.getElementById('header');
var menuEelement = document.querySelector('.mobile-menu-btn');
var heaerHeight = header.clientHeight;
menuEelement.onclick = function(){
    var isClosed = header.clientHeight === heaerHeight;
    if(isClosed){
        header.style.height = 'auto';
    }else{
        header.style.height = null;
    }
}
// tu dong dong mo hi chon menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for(var i = 0; i < menuItems.length; i++){
    var menuItem = menuItems[i];
    
    
    menuItem.onclick= function(e) {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if(isParentMenu){
           e.preventDefault();
        }else{
            header.style.height = null;
        }
       
   }
   
}