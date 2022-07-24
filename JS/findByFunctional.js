const searchForm = document.querySelector(".searchForm");
let pageNumber = 2;

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();

  window.removeEventListener("scroll", processChange);

  const formData = new FormData(searchForm);
  const name = formData.get("name");
  const searchBy = formData.get("searchBy");
  let URL3;

  if (searchBy === "name") {
    URL3 =
      "http://localhost:8085/module2/gift_certificates/filter/?sortByCreationDate=desc&pageSize=10" +
      "&partName=" +
      name +
      "&pageNumber=";
  } else if (searchBy === "description") {
    URL3 =
      "http://localhost:8085/module2/gift_certificates/filter/?sortByCreationDate=desc&pageSize=10" +
      "&partDescription=" +
      name +
      "&pageNumber=";
  } else if (searchBy === "tag") {
    URL3 =
      "http://localhost:8085/module2/gift_certificates/filter/?sortByCreationDate=desc&pageSize=10" +
      "&tagName=" +
      name +
      "&pageNumber=";
  }
  deleteItems();
  localStorage.setItem("data", JSON.stringify([]));
  localStorage.setItem("count", 0);
  localStorage.setItem("scrollPosition", 0);
  getTotalPages(URL3+0)
  drawScreen1(getAllGiftCertificates(URL3));
});

function getTotalPages(URL3) {
  console.log(URL3)
  fetch(URL3)
    .then((response) => response.json())
    .then((data) => {
      pageNumber = data.totalPages;
    });
}

const getAllGiftCertificates = async function (URL1) {
  let temp1 = [];
  for (let i = 0; i < pageNumber; i++) {
    const response = await fetch(URL1 + i);
    const data = await response.json();
    temp1[i] = data;
  }
  return temp1;
};

function drawScreen1(func) {
  func.then((res) =>
    res.forEach((element) => {
      loadCards(element);
    })
  );
}
