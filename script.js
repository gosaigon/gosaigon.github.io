// Dynamically render district cards instead of using document.write
const districts = [
  "District 1", "District 3", "District 4", "District 5", "District 6", "District 7",
  "District 8", "District 10", "District 11", "District 12", "Bình Tân", "Tân Phú",
  "Tân Bình", "Phú Nhuận", "Gò Vấp", "Bình Thạnh", "Thủ Đức", "Hóc Môn",
  "Nhà Bè", "Bình Chánh", "Củ Chi", "Cần Giờ", "Vũng Tàu", "Bình Dương"
];

function slugify(d) {
  return d.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase().replace(/\s+/g, '-');
}

window.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("districts-container");
  if (!container) return;
  districts.forEach(d => {
    const card = document.createElement("div");
    card.className = "bg-white dark:bg-gray-700 p-4 rounded-lg shadow hover:shadow-lg transition-transform transform hover:-translate-y-1";
    card.innerHTML = `
      <h3 class='text-xl font-semibold mb-2'>${d}</h3>
      <p class='text-sm'>Your guide to ${d} — attractions, housing, culture, and local life.</p>
      <a href='/districts/${slugify(d)}.html' class='text-red-600 hover:underline mt-2 block'>Learn More →</a>
    `;
    container.appendChild(card);
  });
});
