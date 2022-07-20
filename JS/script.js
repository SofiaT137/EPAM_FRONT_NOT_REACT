const container = document.querySelector(".container");
const imageUrl = "./../images/cat1.jpg";
const URL =
  "http://localhost:8085/module2/gift_certificates/filter/?sortByCreationDate=desc";
let count = 0;

const getAllGiftCertificates = async function () {
  let temp1 = [];
  for (let i = 0; i < 10; i++) {
    const response = await fetch(URL + "&pageNumber=" + i + "&pageSize=10");
    const data = await response.json();
    temp1[i] = data.content;
  }
  return temp1;
};

function drawScreen(func) {
  console.log(count += 1)
  func.then((res) =>
    res.forEach((element) => {
      loadCards(element);
    })
  );
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
  for (let i = 0; i < data1.length; i++) {
    let name = data1[i].giftCertificateName;
    let description = data1[i].tags;
    let price = data1[i].price;
    createCard([imageUrl, name, description, data1.length, price]);
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

// window.addEventListener('scroll', () => {
//     if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
//       drawScreen();
//   }
// })

drawScreen(getAllGiftCertificates());

  const searchForm = document.querySelector(".searchForm");
  searchForm.addEventListener("submit", (e) => {   

    const formData = new FormData(searchForm);
    const name = formData.get("name");
   
    e.preventDefault();
    function deleteItems() {
      var deleteElement = container.querySelectorAll('div');
      for (let i = 0; i < deleteElement.length; i++) {
        deleteElement[i].remove();
      }
    }

    const getAllGiftCertificatesSearchedByTag = async function () {
        let temp2 = [];
        const response = await fetch(
          URL + "&pageNumber=" + 0 + "&pageSize=10" + "&tagName=" + name
        );
        const data = await response.json();
        temp2[0] = data.content
        console.log(data.content)
        return temp2;
    };
    deleteItems();      
    drawScreen(getAllGiftCertificatesSearchedByTag())
  });





