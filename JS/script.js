const container = document.querySelector('.container')
const imageUrl = "./../images/cat1.jpg";
const URL = 'http://localhost:8085/module2/gift_certificates/filter/?sortByCreationDate=desc'
let count = 0;

// const getAllGiftCertificates = function(){  
//   let temp1 = [];
//   for(let i = 0; i < 10; i++){
//    const gs = fetch(URL+'&pageNumber='+ i + '&pageSize=10')
//       .then((response) => response.json())
//       .then((data) => {data});

//       const temp = async () => {
//         const a = await gs;
//         console.log(a);
//       };

//       temp();
//   }
//   return temp1;
// }

const content = fetch(URL+'&pageNumber='+ 0 + '&pageSize=10')
  .then((response) => response.json())
  .then((data) => {
    return data.content;
  });

function drawScreen() { 
  loadCards(10, content.then((data1) => {
    console.log(data1[0].giftCertificateName)
      return data1;
  }))
}

  function createCard([img,couponName,description,expires,price]){
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

  function loadCards(numImages, data1){
    console.log(data1.then((g) => {
      for(let i = 0; i<numImages; i++){
        let name = g[i].giftCertificateName;
        let description = g[i].tags;
        let price = g[i].price;
        createCard([imageUrl,name,description,numImages,price])
      };    
    }))
  } 

function getTagNames (description) {  
    var result = new Array(3);
      for(let i = 0; i< 3; i++){
      var link = description[i].name;
      result[i] = '<a class ="links" href="">' +  link + '</a>';
   }
   return result
}

  window.addEventListener('scroll', () => {
      if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
        drawScreen();
    }
  })

drawScreen();  


  // linkBox.addEventListener('click', () => {
  //       const URL1 = 'http://localhost:8085/module2/gift_certificates/filter/?tagName=' + link
  //       console.log(link)
  //       fetch(URL1)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         loadCards(10,data);
  //       })   
  // })

