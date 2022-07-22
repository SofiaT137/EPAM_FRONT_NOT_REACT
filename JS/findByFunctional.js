const searchForm = document.querySelector(".searchForm");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(searchForm);
  const name = formData.get("name");
  const searchBy = formData.get("searchBy");

  if (searchBy === "name") {
    URL1 =
      "http://localhost:8085/module2/gift_certificates/filter/?sortByCreationDate=desc&pageSize=10" +
      "&partName=" +
      name +
      "&pageNumber=";
  } else if (searchBy === "description") {
    URL1 =
      "http://localhost:8085/module2/gift_certificates/filter/?sortByCreationDate=desc&pageSize=10" +
      "&partDescription=" +
      name +
      "&pageNumber=";
  } else if (searchBy === "tag") {
    URL1 =
      "http://localhost:8085/module2/gift_certificates/filter/?sortByCreationDate=desc&pageSize=10" +
      "&tagName=" +
      name +
      "&pageNumber=";
  }
  deleteItems();
});
