var plus = document.querySelectorAll('.btn_plus')
var moins = document.querySelectorAll('.btn_moins')
var remove = document.querySelectorAll('.btn_remove')
var like = document.querySelectorAll('.btn_like')


for(let i=0; i <plus.length;i++){
    plus[i].addEventListener('click', function(){
        plus[i].nextElementSibling.innerHTML++
        priceSum()
        
    })
}

for(let i = 0;i<moins.length;i++){
    moins[i].addEventListener('click',function(){
            if(moins[i].previousElementSibling.innerHTML>0){
                moins[i].previousElementSibling.innerHTML--
                priceSum()
            }    
        }
    )
}



for(let i=0;i<remove.length;i++){
    remove[i].addEventListener('click',function(){
        remove[i].parentElement.remove()
        priceSum()
    })
}

for(let i=0; i<like.length;i++){
    like[i].addEventListener('click',function(){
        like[i].classList.toggle('btn_like')
    })
      
}

function priceSum(){
    var item_box = document.querySelectorAll('.item')
    var total = 0
    for(let i=0;i<item_box.length;i++){
        var item_b = item_box[i]
        var priceElement = document.querySelectorAll('.price')[i]
        var quantityElement = document.querySelectorAll('.quantity')[i]
        var price = (priceElement.innerHTML)
        var quantity = quantityElement.innerHTML
        total=total+(price*quantity)
    }
    document.querySelectorAll('.priceSum')[0].innerText=total+'$'
    

}

