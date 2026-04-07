const searchBox = document.getElementById("searchBox");
const items = document.querySelectorAll("#itemList li");
const noResult = document.getElementById("noResult");

searchBox.addEventListener("input", function () {
  const value = searchBox.value.toLowerCase().trim();
  let found = false;

  items.forEach(item => {
    const text = item.textContent.toLowerCase();

    if (text.includes(value)) {
      item.style.display = "";
      found = true;
    } else {
      item.style.display = "none";
    }
  });

  noResult.style.display = found ? "none" : "block";
});