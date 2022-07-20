const container = document.querySelector(".container");
const imageUrl = "./../images/cat1.jpg";
const URL =
  "http://localhost:8085/module2/gift_certificates/filter/?sortByCreationDate=desc&pageSize=10&pageNumber=";
let count = 0;

function drawScreen(URL) {
  var totalPages1;
  fetch(URL)
  .then(response => response.json())
  .then(data => {
    loadCards(data)
    totalPages1 = data.totalPages
    console.log(totalPages1)
  });
  count += 1;  
  if(count > totalPages1){
    count = 0;
  }
}

function createCard([img, couponName, description, expires, price]) {
  let code = ` <div class="card">
                  <img class="cardImage" src = "${img}">
                  <div class="addToFavorite">
                      <h3 class="couponName">${couponName}</h3>
                      <button type="submit" class="addToFavorite">
                          <span class="material-icons">
                              favorite
                          </span>
                      </button>
                  </div>
                  <div class="descriptionExp">
                      <p class="linkBox">${getTagNames(description)}</p>
                      <p class="expires">expires in ${expires} days</p>
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

function loadCards(data1) {
  for (let i = 0; i < 10; i++) {
    let name = data1.content[i].giftCertificateName;
    let description = data1.content[i].tags;
    let price = data1.content[i].price;
    createCard([imageUrl, name, description, 10, price]);
  }  
}

function getTagNames(description) {
  var result = new Array(3);
  for (let i = 0; i < 3; i++) {
    var link = description[i].name;
    result[i] = '<a class = "links" href="">' + link + "</a>";
  }
  return result;
}

window.addEventListener('scroll', () => {
    if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
      drawScreen(URL + count);
  }
})

drawScreen(URL + count);

  const searchForm = document.querySelector(".searchForm");
  searchForm.addEventListener("submit", (e) => {   

    e.preventDefault();
    const formData = new FormData(searchForm);
    const name = formData.get("name");
    const searchBy = formData.get("searchBy");

    console.log(name +' ' +searchBy)
   
    function deleteItems() {
      var deleteElement = container.querySelectorAll('div');
      for (let i = 0; i < deleteElement.length; i++) {
        deleteElement[i].remove();
      }
    }
    var URL1 = '';

    if(searchBy === 'name') {
      URL1 =  "http://localhost:8085/module2/gift_certificates/filter/?sortByCreationDate=desc&pageSize=10&pageNumber=0&partName=" + name
    } else if (searchBy === 'description'){
      URL1 =  "http://localhost:8085/module2/gift_certificates/filter/?sortByCreationDate=desc&pageSize=10&pageNumber=0&partDescription=" + name
    } else if (searchBy === 'tag'){
      URL1 =  "http://localhost:8085/module2/gift_certificates/filter/?sortByCreationDate=desc&pageSize=10&pageNumber=0&tagName=" + name
    }  
    deleteItems();
    drawScreen(URL1);
  });






