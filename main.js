const menuEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const menuHamIcon = document.querySelector(".menu")
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart")
const productDetailCloseIcon = document.querySelector(".product-detail-close")
const mobileMenu = document.querySelector(".mobile-menu")
const shoppingCarContainer = document.querySelector("#shoppingCarContainer")
const cardsContainer = document.querySelector(".cards-container")
const productDetailContainer = document.querySelector("#productDetail")

menuEmail.addEventListener("click", toggleDesktopMenu)
menuHamIcon.addEventListener("click", toggleMobileMenu)
menuCarritoIcon.addEventListener("click", toggleCarritoAside)
productDetailCloseIcon.addEventListener("click", closeProductDetailAside)


function toggleDesktopMenu(){

    const isAsideClosed = shoppingCarContainer.classList.contains("inactive")
    const isProductDetailClosed = productDetailContainer.classList.contains("inactive")

    if(!isAsideClosed){
        shoppingCarContainer.classList.add("inactive")
    }
    if(!isProductDetailClosed){
        productDetailContainer.classList.add("inactive")
    }
    
   desktopMenu.classList.toggle("inactive")
}

function toggleMobileMenu(){

    const isAsideClosed = shoppingCarContainer.classList.contains("inactive")

    if(!isAsideClosed){
        shoppingCarContainer.classList.add("inactive")
    }

    mobileMenu.classList.toggle("inactive")
    closeProductDetailAside()
}

function toggleCarritoAside(){

    const isMobileMenuClosed = mobileMenu.classList.contains("inactive")
    const isDeskTopMenuClosed = desktopMenu.classList.contains("inactive")
    const isProductDetailClosed = productDetailContainer.classList.contains("inactive")

    if(!isMobileMenuClosed){
        mobileMenu.classList.add("inactive")
    }
    if(!isDeskTopMenuClosed){
        desktopMenu.classList.add("inactive")
    }
    if(!isProductDetailClosed){
        productDetailContainer.classList.add("inactive")
    }

    shoppingCarContainer.classList.toggle("inactive")

}

function openProductDetailAside(){
    shoppingCarContainer.classList.add("inactive")
    productDetailContainer.classList.remove("inactive")
    desktopMenu.classList.add("inactive")
}

function closeProductDetailAside(){
    productDetailContainer.classList.add("inactive")
}

const productList = []
productList.push({
    name: "Bike1",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

productList.push({
    name: "Bike2",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

productList.push({
    name: "Bike3",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

productList.push({
    name: "Bike4",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

productList.push({
    name: "Bike5",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

productList.push({
    name: "Bike6",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener("click", openProductDetailAside)
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList)