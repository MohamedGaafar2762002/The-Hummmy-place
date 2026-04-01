// ===== Sub Categories Data =====
const subData = {
  food: [
    { name: "Pizza", value: "pizza" },
    { name: "Burgers", value: "burger" },
    { name: "Sandwiches", value: "sandwiches" },
    { name: "Grills", value: "grills" },
    { name: "Pasta", value: "pasta" }
  ],
  drinks: [
    { name: "Hot drinks", value: "Hot drinks" },
    { name: "Cold Drinks", value: "cold" },
    { name: "Milkshakes", value: "milkshake" }
  ],
  desserts: [
    { name: "Cakes", value: "cakes" },
    { name: "Ice Cream", value: "icecream" },
    { name: "Waffles", value: "waffles" }
  ]
};

// ===== Main Category Click =====
function setMain(category, event) {
  const subContainer = document.getElementById("subCategories");
  const mainButtons = document.querySelectorAll(".main-categories button");

  // Remove active from main
  mainButtons.forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");

  // Clear sub categories
  subContainer.innerHTML = "";

  // لو All
  if (category === "all") {
    filterMenu("all");
    return;
  }

  // Create Sub Categories
  subData[category].forEach(sub => {
    const btn = document.createElement("button");
    btn.innerText = sub.name;

    btn.onclick = (e) => {
      document.querySelectorAll(".sub-categories button")
        .forEach(b => b.classList.remove("active"));

      e.target.classList.add("active");

      filterMenu(category, sub.value);
    };

    subContainer.appendChild(btn);
  });

  // Auto select أول sub
  if (subData[category].length > 0) {
    const firstSub = subContainer.querySelector("button");
    firstSub.classList.add("active");
    filterMenu(category, subData[category][0].value);
  }
}

// ===== Filter Function =====
function filterMenu(mainCategory, subCategory = null) {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const matchMain =
      mainCategory === "all" ||
      card.dataset.category === mainCategory;

    const matchSub =
      !subCategory ||
      card.dataset.sub === subCategory;

    if (matchMain && matchSub) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}