const products = [
  {
    id: 1,
    name: "Laundry",
    desc: "Experience the convenience of professional laundry services. We handle your clothes with care, ensuring they come back fresh and clean, so you can focus on what matters most.",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
  },
  {
    id: 2,
    name: "Dry Clean",
    desc: "Elevate your wardrobe with our expert dry cleaning solutions. We use the latest technology and eco-friendly products to remove stains and keep your garments looking pristine.",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
  },
  {
    id: 3,
    name: "Upholstery",
    desc: "Transform your furniture with quality upholstery services. Our skilled craftsmen restore and revitalize your favorite pieces, so you can enjoy the comfort and beauty of your home.",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
  },
  {
    id: 4,
    name: "Steam Ironing",
    desc: "Effortlessly remove wrinkles and creases with our efficient steam ironing services. We deliver wrinkle-free clothes, giving you a polished and confident look for any occasion.",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
  },
  {
    id: 5,
    name: "Home Cleaning",
    desc: "Experience the joy of a clean and organized home with our thorough cleaning solutions. Our trained professionals leave no corner untouched, creating a healthy and inviting living space.",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
  },
  {
    id: 6,
    name: "Products Store",
    desc: "Explore our online store for laundry products that enhance your laundry experience. From detergents to fabric softeners, we offer top-quality products to care for your clothes.",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
  },
];

const searchInput = document.getElementById("searchInput");
const productCards = document.getElementById("productCards");

function generateProductCards(searchText) {
  const filteredProducts = products.filter((product) => {
    console.log(product);
    return product.name.toLowerCase().includes(searchText.toLowerCase());
  });

  const html = filteredProducts
    .map(
      (product) => `
        <div class="product-card" id="${product.id}">
            <img src="${product.image}" alt="${product.name}">
            <p>${product.name}</p>
        </div>
    `
    )
    .join("");

  productCards.innerHTML = html;

  const cardElements = productCards.querySelectorAll(".product-card");
  cardElements.forEach((card) => {
    card.addEventListener("click", () => {
      const productId = card.getAttribute("id");
      window.location.href = `product.html?id=${productId}`;
    });
  });
}

generateProductCards("");

searchInput.addEventListener("input", () => {
  generateProductCards(searchInput.value);
});
