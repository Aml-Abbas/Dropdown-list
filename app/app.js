
$(function(){
    var products = [


        { name: 'TV', price: 1500, id: 7, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/300/?image=0', category: 'Elektronik' },
        { name: 'Camera', price: 755, id: 8, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/300/?image=30', category: 'Elektronik' },
        { name: 'Shampoo', price: 25, id: 9, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/300/?image=100', category: 'Hemmet' },
        { name: 'Tandborste', price: 20, id: 10, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/300/?image=20', category: 'Hemmet' },
        { name: 'Kontor Stol', price: 800, id: 11, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/300/?image=10', category: 'Kontor' },
        { name: 'Skrivbord', price: 2000, id: 12, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/300/?image=400', category: 'Kontor' }
    ];
    var cart=[];
// funktion som ligger till producter
var appendlist  = function(array, location){
    var template=array.map(function(item,id){
return `
<li class="product col-4">
<div class="product-content">
<img src="${item.picture}" alt="product image">
<h4>${item.name} - <span class="category">${item.category}</span><small>${item.price}</small></h4>
<p>${item.description}</p>
</div>
<button type="button" id="${item.id}">Buy now</button>
</li>
`;
    });
    $(location).html(template);
};


appendlist(products,$('.product-list'));
var addtocart= function (array, id , location) {
    var a=array.find(function(i){
    return i.id===id;
    });
    cart.push(a);
    var item=`
    <li class="item" id="${a.id}">
    <p>${a.name}</p>
    <button class="btn1" type="button">X</button>
    </li>
    `;
    $(location).append(item);
    };
    var removefromcart= function(array, removeditem){
     array.splice(removeditem,1);
    
    };
    var populatecart= function(list, location){
    var item=`
    <li class="item" id="${list.id}" >
    <h4>${list.name}</h4>
    <button type="button">X</button>
    </li>
    `;
    $('span.amount').text(list.lenght);
    };
    $('.product').on('click','button',function(event){
        var id =$(this).attr('id');
        addtocart(products,+id, $('.cart-list'));
        $('.amount').text(cart.length);
    });
    $('.cart-list').on('click','button',function (e) {
        var item=$(e.currentTarget).closest('li').remove();
  
        //remove item from cart
       removefromcart(cart, item);
       $('.amount').text(cart.length);
        //populate item in cart
    populatecart(cart,$('.cart-list'));
    
    });
    


});
