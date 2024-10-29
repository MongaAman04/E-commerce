let bestSeller = document.querySelector(".best-seller")
let loadMore = document.querySelector(".load").querySelector("button")
const collection = [
  {
    item:"Punjbai Juttii",
    mainimg:"http://127.0.0.1:5500/images/IMG-20230723-WA0003.jpg",
    description:"",
    price:"100",

  },
  {
    item:"Punjbai Jutti 2",
    mainimg:"http://127.0.0.1:5500/images/IMG-20230723-WA0004.jpg",
    description:"",
    price:"200",

  },
  {
    item:"Punjbai Jutti 3",
    mainimg:"http://127.0.0.1:5500/images/IMG-20230723-WA0006.jpg",
    description:"",
    price:"300",

  },
  {
    item:"Punjbai Jutti 4",
    mainimg:"http://127.0.0.1:5500/images/IMG-20230723-WA0005.jpg",
    description:"",
    price:"400",

  },
]

async function main() {

  collection.forEach((Element)=>{
    bestSeller.innerHTML+= `<div class="best-p1">
            <img src="${Element.mainimg}" alt="img">
            <div class="best-p1-txt">
              <div class="name-of-p">
                <p>${Element.item}</p>
              </div>
              <div class="rating">
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bx-star'></i>
                <i class='bx bx-star'></i>
              </div>
              <div class="price">
                ${Element.price}
                <div class="colors">
                  <i class='bx bxs-circle red'></i>
                  <i class='bx bxs-circle blue'></i>
                  <i class='bx bxs-circle white'></i>
                </div>
              </div>
              <div class="buy-now">
                <button><a href="">Buy Now</a></button>
              </div>
              <!-- <div class="add-cart">
                                <button>Add To Cart</button>
                            </div> -->
            </div>`
    
  })

  loadMore.addEventListener("click",()=>{
    bestSeller.style.display = "grid";
    bestSeller.style.gridTemplateColumns= "repeat(4,1fr)";
    loadMore.style.display ="none";
  })

  
  
}


main()