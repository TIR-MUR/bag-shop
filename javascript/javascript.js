const openBasket=document.querySelector(".open-basket");
const basket=document.querySelector(".basket");
const closeBasket=document.querySelector(".close-basket");

openBasket.addEventListener('click', () => {
    basket.classList.add("active");
});

closeBasket.addEventListener('click', () => {
    basket.classList.remove("active");
});


const product = [
    {
        id: 0,
        image: "./images/product1.png",
        title: "Косметичка непромокаемая, 31/22/11 см",
        price: 120,
        discount:153,
    },
    {
        id: 1,
        image: "./images/product2.png",
        title: "Косметичка непромокаемая, 31/22/11 см",
        price: 140,
        discount:153,
    },
    {
        id: 2,
        image: "./images/product3.png",
        title: "Косметичка непромокаемая, 31/22/11 см",
        price: 170,
        discount:153,
    },
    {
        id: 3,
        image: "./images/product1.png",
        title: "Косметичка непромокаемая, 31/22/11 см",
        price: 45,
        discount:153,
    },
    {
        id: 4,
        image: "./images/product4.png",
        title: "Косметичка непромокаемая, 31/22/11 см",
        price: 170,
        discount:153,
    },
    {
        id: 5,
        image: "./images/product2.png",
        title: "Косметичка непромокаемая, 31/22/11 см",
        price: 45,
        discount:153,
    }
];
const categories = [...new Set(product.map((item) => 
    { return item }))]


    let i = 0;
    document.getElementById("root").innerHTML = categories.map((item) => 
    {
        var { image, title, price,discount } = item;
        return (
            `<div class="col-2">
            <div class="product">
                <div class="product-img">
                    <img src=${image} class="product-img img-fluid" alt="">
                    <i class="fa-regular fa-heart"></i>
                    <!-- <i class="fa-solid fa-heart border"></i> -->
                </div>
                <p class="product-title mt-2">${title}</p>
                <div class="product-colors" style="margin-top: -10px;">
                    <button class="color-btn blue"></button>
                    <button class="color-btn white"></button>
                    <button class="color-btn black"></button>
                    <button class="color-btn purple"></button>
                </div>
                <div class="product-details d-flex justify-content-between mt-1">
                    <div class="product-prices d-flex flex-column align-items-center">
                        <h5 class="product-price">${price} ₽</h5>
                        <span>цена</span>
                    </div>
                    <div class="product-discounts d-flex flex-column align-items-center">
                        <h4 class="product-discount">${discount} ₽</h4>
                        <span>опт от 5 000 ₽</span>
                    </div>
                    <div class="product-counter d-flex flex-column">
                        <div class="counter d-flex" style="gap: 3px;">
                            <span class="decrease"><i class="fa-solid fa-angle-left"></i></span>
                            <span class="counter-value">0</span>
                            <span class="increase"><i class="fa-solid fa-angle-right"></i></span>
                        </div>
                        <p>количество</p>
                    </div>
                </div>

                <div class="product-grade d-flex justify-content-between">`+
                    "<button onclick='addtocart("+(i++)+")' class='add-card'>В корзину</button>"+
                    `<div class="grades align-items-center">
                        <span class="grade-number">4.7</span>
                        <span>
                            <i class="fa-regular fa-star"></i>
                            <!-- <i class="fa-solid fa-star"></i> -->
                        </span>
                    </div>
                </div>
            </div>
        </div>` 
        )
    }).join('');

    document.getElementById("recommended").innerHTML = categories.map((item) => 
    {
        var { image, title, price,discount } = item;
        return (
            `<div class="col-2">
            <div class="product">
                <div class="product-img">
                    <img src=${image} class="product-img img-fluid" alt="">
                    <i class="fa-regular fa-heart"></i>
                    <!-- <i class="fa-solid fa-heart border"></i> -->
                </div>
                <p class="product-title mt-2">${title}</p>
                <div class="product-colors" style="margin-top: -10px;">
                    <button class="color-btn blue"></button>
                    <button class="color-btn white"></button>
                    <button class="color-btn black"></button>
                    <button class="color-btn purple"></button>
                </div>
                <div class="product-details d-flex justify-content-between mt-1">
                    <div class="product-prices d-flex flex-column align-items-center">
                        <h5 class="product-price">${price} ₽</h5>
                        <span>цена</span>
                    </div>
                    <div class="product-discounts d-flex flex-column align-items-center">
                        <h4 class="product-discount">${discount} ₽</h4>
                        <span>опт от 5 000 ₽</span>
                    </div>
                    <div class="product-counter d-flex flex-column">
                        <div class="counter d-flex" style="gap: 3px;">
                            <span class="decrease"><i class="fa-solid fa-angle-left"></i></span>
                            <span class="counter-value">0</span>
                            <span class="increase"><i class="fa-solid fa-angle-right"></i></span>
                        </div>
                        <p>количество</p>
                    </div>
                </div>

                <div class="product-grade d-flex justify-content-between">`+
                    "<button onclick='addtocart("+(i++)+")' class='add-card'>В корзину</button>"+
                    `<div class="grades align-items-center">
                        <span class="grade-number">4.7</span>
                        <span>
                            <i class="fa-regular fa-star"></i>
                            <!-- <i class="fa-solid fa-star"></i> -->
                        </span>
                    </div>
                </div>
            </div>
        </div>` 
        )
    }).join('');
    
    document.getElementById("recently-viewed").innerHTML = categories.map((item) => 
    {
        var { image, title, price,discount } = item;
        return (
            `<div class="col-2">
            <div class="product">
                <div class="product-img">
                    <img src=${image} class="product-img img-fluid" alt="">
                    <i class="fa-regular fa-heart"></i>
                    <!-- <i class="fa-solid fa-heart border"></i> -->
                </div>
                <p class="product-title mt-2">${title}</p>
                <div class="product-colors" style="margin-top: -10px;">
                    <button class="color-btn blue"></button>
                    <button class="color-btn white"></button>
                    <button class="color-btn black"></button>
                    <button class="color-btn purple"></button>
                </div>
                <div class="product-details d-flex justify-content-between mt-1">
                    <div class="product-prices d-flex flex-column align-items-center">
                        <h5 class="product-price">${price} ₽</h5>
                        <span>цена</span>
                    </div>
                    <div class="product-discounts d-flex flex-column align-items-center">
                        <h4 class="product-discount">${discount} ₽</h4>
                        <span>опт от 5 000 ₽</span>
                    </div>
                    <div class="product-counter d-flex flex-column">
                        <div class="counter d-flex" style="gap: 3px;">
                            <span class="decrease"><i class="fa-solid fa-angle-left"></i></span>
                            <span class="counter-value">0</span>
                            <span class="increase"><i class="fa-solid fa-angle-right"></i></span>
                        </div>
                        <p>количество</p>
                    </div>
                </div>

                <div class="product-grade d-flex justify-content-between">`+
                    "<button onclick='addtocart("+(i++)+")' class='add-card'>В корзину</button>"+
                    `<div class="grades align-items-center">
                        <span class="grade-number">4.7</span>
                        <span>
                            <i class="fa-regular fa-star"></i>
                            <!-- <i class="fa-solid fa-star"></i> -->
                        </span>
                    </div>
                </div>
            </div>
        </div>` 
        )
    }).join('');
    var cart=[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}


function delElement(a){
    cart.splice(a,1);
    displaycart();
}

function displaycart(a){
    let j=0;
    document.getElementById("basket").innerHTML=cart.map((items)=>{
        var {image,title,price} = items;
        return(
            `<div class="basket-product d-flex justify-content-between mt-4">
            <div class="product-image">
                <img src="./images/product1.png" class="img-fluid" alt="">
            </div>
            <div class="prod-details">
                <p class="product-title mt-2">Косметичка непромокаемая, 31/22/11 см</p>
                <div class="counter-price d-flex" style="gap: 20px;">
                    <div class="product-counter d-flex flex-column" style="margin-top: -10px;">
                        <p>количество</p>
                        <div class="counter d-flex" style="gap: 3px;margin-top: -12px;">
                            <span class="decrease"><i class="fa-solid fa-angle-left"></i></span>
                            <span class="counter-value">0</span>
                            <span class="increase"><i class="fa-solid fa-angle-right"></i></span>
                        </div>
                    </div>
                    <div class="product-prices d-flex flex-column align-items-center">
                        <span>цена</span>
                        <h5 class="product-price">123 ₽</h5>
                    </div>
                </div>
            </div>
            <div class="like-remove d-flex flex-column justify-content-between">
                <i class="fa-regular fa-heart"></i>`+
                "<i class='fa-regular fa-trash-can cart-remove' onclick='delElement("+(j++) +")'></i>"+
            `</div>
        </div>`
        )
    });
} 