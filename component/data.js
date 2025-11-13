"use server"


// components/ProductList.jsx
export async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });
  const data = await res.json();

  // Optional: Filter sirf electronics ya headphones
  const filtered = data.filter(
    (item) =>
      item.category.toLowerCase().includes("electronics") ||
      item.title.toLowerCase().includes("headphone") ||
      item.title.toLowerCase().includes("earphone")
  );

  return filtered;
}
