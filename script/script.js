// "use strict"
let bestSeller = document.querySelector(".best-seller")
let loadMore = document.querySelector(".load button")
let body = document.querySelector("body")
const collection = [
  {
    item: "Punjbai Juttii",
    mainimg: "http://127.0.0.1:5500/images/IMG-20230723-WA0003.jpg",
    description: "",
    price: "100",

  },
  {
    item: "Punjbai Jutti 2",
    mainimg: "http://127.0.0.1:5500/images/IMG-20230723-WA0004.jpg",
    description: "",
    price: "200",

  },
  {
    item: "Punjbai Jutti 3",
    mainimg: "http://127.0.0.1:5500/images/IMG-20230723-WA0006.jpg",
    description: "",
    price: "300",

  },
  {
    item: "Punjbai Jutti 4",
    mainimg: "http://127.0.0.1:5500/images/IMG-20230723-WA0005.jpg",
    description: "",
    price: "400",

  },
]
async function topSales() {
  let bestP1 = bestSeller.querySelectorAll(".best-p1")
  bestP1.forEach(e => {
    e.addEventListener("click", function () {
    
      let mainImage = e.firstElementChild.src
      let price = e.querySelector(".price")
      let description = e.querySelector(".description")
      let name = e.querySelector(".name-of-p p")
      body.innerHTML += `<section class=" top-txt ">
        <div class="head container ">
            <div class="head-txt ">
                <p>Free shipping, 30-day return or refund guarantee.</p>
            </div>
            <div class="sing_in_up ">
                <a href="# ">SIGN IN</a>
                <a href="# ">SIGN UP</a>
            </div>
        </div>
    </section>
    <nav class="navbar">
        <div class="navbar-container">
            <input type="checkbox" name="" id="checkbox">
            <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
            </div>
            <ul class="menu-items">
                <li><a href="#home">Home</a></li>
                <li><a href="#sellers">Shop</a></li>
                <li><a href="#news">Blog</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div class="logo">
                <img src="https://i.postimg.cc/TP6JjSTt/logo.webp" alt="">
            </div>
        </div>
    </nav>
    <section class="product-details">
        <div class="product-images">
            <div class="other-images">
                <div class="s-img">
                    <img src="images/IMG-20230723-WA0003.jpg" alt="">
                </div>
                <div class="s-img">
                    <img src="images/IMG-20230723-WA0004.jpg" alt="">
                </div>
                <div class="s-img">
                    <img src="images/IMG-20230723-WA0005.jpg" alt="">
                </div>
                <div class="s-img">
                    <img src="images/IMG-20230723-WA0006.jpg" alt="">
                </div>
                <div class="s-img">
                    <img src="images/IMG-20230726-WA0007.jpg" alt="">
                </div>
                </div>
                <div class="big-image">
                    <img src='${mainImage}' alt="">
                </div>
            </div>
            <div class="details"> 
                <h1></h1>
                <p style="color: var(--grey);"></p>
                <h2>Special Price</h2>
                <h1 style="font-size: 15px; color: red;"><span style="font-size: 25px; color: rgb(73, 53, 250);">${price}</span> <del style="font-size: 18px; color: var(--grey); font-style: italic;">3000</del> 75%</h1>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <h2>Select your Size According to size Chart</h2>
                <div class="sizes">
                    <div class="size" id="three">3</div>
                    <div class="size" id="four">4</div>
                    <div class="size" id="five">5</div>
                    <div class="size" id="six">6</div>
                    <div class="size" id="seven">7</div>
            </div>
            <span class="buttons">
                <button class="buynow">Buy Now</button>
                <!-- <button class="addToCart">Add to Cart</button> -->
            </span>

        </div>
    </section>`

    })

  })
}

async function main() {

  collection.forEach((Element) => {
    bestSeller.innerHTML += `<div class="best-p1">
            <img src="${Element.mainimg}" alt="img">
            <div class="best-p1-txt">
              <div class="name-of-p">
                <p>${Element.item}</p>
                
              </div>
              <div class="description">
              ${Element.description}
              </div>
              <div class="price">
                ${Element.price}
              </div>
              <div class="buy-now">
                <button id=""><a href="">Buy Now</button>
              </div>
              <!-- <div class="add-cart">
                                <button>Add To Cart</button>
                            </div> -->
            </div>`

  })

  loadMore.addEventListener("click", () => {
    bestSeller.style.display = "grid";
    bestSeller.style.gridTemplateColumns = "repeat(4,1fr)";
    loadMore.style.display = "none";
  })

  const Sales = await topSales()


}


main()