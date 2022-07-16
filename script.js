
const URL = 'http://localhost:8085/module2/gift_certificates/?pageSize=10&pageNumber=' + getRandomNumber()
const container = document.querySelector('.container')
const imageUrl = "./images/cat1.jpg";

fetch(URL)
.then((response) => response.json())
.then((data) => {
  loadCards(10,data);
})

  function createCard([img,couponName,description,expires,price]){
    let code = ` <div class="card">
                  <img class="cardImage" src = "${img}">
                  <div class="addToFavorite">
                      <h3>${couponName}</h3>
                      <button type="submit" class="addToFavorite">
                          <span class="material-icons">
                              favorite
                          </span>
                      </button>
                  </div>
                  <div class="descriptionExp">
                      <p><a href="">${getTagNames(description)}</a></p>
                      <p>expires in ${expires} days</p>
                  </div>
                  <hr>
                  <div class="price">
                      <h4>$${price}</h4>
                      <button type="submit" class="addToCart">Add to cart</button>
                  </div>
              </div>
    `;
    container.innerHTML += code;
  }

  function loadCards(numImages, data){
    let i = 0;
    for(let i = 0; i<numImages; i++){
      let name = data.content[i].giftCertificateName;
      let description = data.content[i].tags;
      let price = data.content[i].price;
      createCard([imageUrl,name,description,numImages,price])
    };
  } 

function getTagNames (description) {
    var result = new Array(description.length);
    for(let i = 0; i< description.length; i++){
      result[i] = ' '+ description[i].name;
    }
    return result;
  }

  function getRandomNumber() {
    return Math.floor(Math.random() * 1000);
  }

  window.addEventListener('scroll', () => {
    if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
      fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        loadCards(10,data);
      })
    }
  })




