const menuItems = [
  { category: "Most Popular", name: "Sandwich", description: "", image: "images/bagel5.jpg" },
  { category: "Most Popular", name: "Sandwich", description: "", image: "images/bagel5.jpg" },
  { category: "Most Popular", name: "Sandwich", description: "", image: "images/bagel5.jpg" },
  { category: "Most Popular", name: "Sandwich", description: "", image: "images/bagel5.jpg" },
  { category: "Most Popular", name: "Sandwich", description: "", image: "images/bagel5.jpg" },
  { category: "Most Popular", name: "Sandwich", description: "", image: "images/bagel5.jpg" },
  { category: "Most Popular", name: "Sandwich", description: "", image: "images/bagel5.jpg" },
  { category: "Most Popular", name: "Sandwich", description: "", image: "images/bagel5.jpg" },
  { category: "Most Popular", name: "Sandwich", description: "", image: "images/bagel5.jpg" },
];

// DOM elements
const menuContainer = document.getElementById("menu");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const closeButton = document.querySelector(".close-button");


modal.style.display= none; 

// Group items by category
const groupedItems = menuItems.reduce((acc, item) => {
  if (!acc[item.category]) acc[item.category] = [];
  acc[item.category].push(item);
  return acc;
}, {});

// Clear any existing menu content
menuContainer.innerHTML = "";

// Create sections per category
Object.entries(groupedItems).forEach(([category, items]) => {
  // Group wrapper
  const group = document.createElement("div");
  group.classList.add("menu-group");

  // Category heading
  const heading = document.createElement("h2");
  heading.classList.add("menu-group-title");
  heading.textContent = category;
  group.appendChild(heading);

  // Container for this group's items
  const groupContainer = document.createElement("div");
  groupContainer.classList.add("menu-container");

  items.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("menu-item");

    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="item-info">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
      </div>
    `;

    div.addEventListener("click", () => {
      modalImage.src = item.image;
      modalTitle.textContent = item.name;
      modalDescription.textContent = item.description;
      modal.style.display = "block";
    });

    groupContainer.appendChild(div);
  });

  group.appendChild(groupContainer);
  menuContainer.appendChild(group);
});

// Close modal functionality
closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
