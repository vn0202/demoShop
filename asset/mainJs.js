const Register= document.getElementById('register');
const logIn = document.getElementById('log-in');
const modal= document.getElementById('modal');
const overlay = document.querySelector('.overlay');
const authenForm = document.querySelectorAll('.authen-form')
Register.onclick = function(){
modal.style.display='flex';
authenForm[0].classList.add('active')
}
logIn.onclick =function(){
    modal.style.display='flex';
authenForm[1].classList.add('active')

}
overlay.onclick  =function(){

modal.style.display='none';
authenForm.forEach(function(au){
    if(au.classList.contains('active'))
    au.classList.remove('active')

})
}
const inputSearch= document.querySelector('.header__shop-input')
const listHistory= document.querySelectorAll('.header__search-history');
listHistory.forEach(function(ele){
ele.onmousedown=function(e){
    console.log(e);
    e.preventDefault();
}
})
// đăng nhập
const inforUser =document.querySelector('.header__nav-list__item.user-infor')
const btnLogin = document.getElementById('btn-log-in');
btnLogin.addEventListener('click',function(){
    console.log(Math.random());
    Register.style.display='none';
    logIn.style.display='none';
    inforUser.style.display='flex';
modal.style.display='none';

})
//đăng xuất
const logOut = document.getElementById('log-out');
logOut.addEventListener('click',function(){
    Register.style.display='block';
    logIn.style.display='block';
    inforUser.style.display='none';
})
// Hover on the element catogory-nav
const catogoryNavSelects = document.querySelectorAll('.catogory__list-item-link');
catogoryNavSelects.forEach(function(ele){
    ele.onmouseover= function(e){
        
        if(!e.target.classList.contains('catogory__list-item-link--active'))
        {
            e.target.classList.add('catogory__list-item-link--active')
        }
 
    }
})
catogoryNavSelects.forEach(function(ele){
    ele.onmouseout= function(e){
        if(e.target.classList.contains('catogory__list-item-link--active'))
        {
            e.target.classList.remove('catogory__list-item-link--active')
        }
 
    }
})
//tạo màu lên trên khung lọc sản phẩm
const filterBtns = document.querySelectorAll('.product-filter-link');
filterBtns.forEach(function(ele){
    
    ele.onmouseover =function(e){

filterBtns.forEach(function(btn){
    if(btn.classList.contains('product-filter-link--active'))
    {
        btn.classList.remove('product-filter-link--active')

    }

                          })
        ele.classList.add('product-filter-link--active')
    }
        
    })
//like the product
const heartLiked= document.querySelectorAll('.product-item-like');
heartLiked.forEach(function(ele){
    ele.onclick = function(e){
        e.preventDefault();
        ele.classList.toggle('product-item-liked');
    }
})
console.log(typeof(heartLiked))
//rating the star
const Items= document.querySelectorAll('.product-item');



Items.forEach(function(e,index){
    e.onmouseover = function(event){
      
       event.target.classList.add('rated');
        var rateStar = document.querySelectorAll('.rated .product-item-rate-star');
       
        
    
     
rateStar.forEach(function(ele,index){
   
   
    ele.onclick = function(e){
       
       e.preventDefault();
        for(var i= 0; i<=index; i++)
        {
            rateStar[i].classList.add('product-item-rated');
        }
       

    }



})
    }
    e.onmouseout= function(ev)
    {
     ev.target.classList.remove('rated')
    }
    

})

//test some
const test= document.querySelector('.modal-mobie');
overlay.onclick =function(){
    test.style.display='none';
}
const check= document.querySelector('.header__bar-mobie-icon')
check.onclick =function(){
    test.style.display='block';
}

// const searchEle= document.querySelector('.header__search');
// const searchMobie = document.querySelector('.header__search-mobie-icon')
// searchMobie.onclick=function(){
//     searchEle.style.display='flex';

// }

