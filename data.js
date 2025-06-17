js
window.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("districts-container");
  const nav = document.getElementById("district-nav");

  districtsData.forEach(district => {
    // Add to nav
    const navLink = document.createElement("a");
    navLink.href = `#${district.id}`;
    navLink.textContent = district.name;
    nav.appendChild(navLink);

    // Add to content section
    const section = document.createElement("section");
    section.id = district.id;
    section.className = "district-section";
    section.innerHTML = `
      <h2>${district.name}</h2>
      <p><strong>Type:</strong> ${district.type}</p>
      <p>${district.description || "Content coming soon..."}</p>
    `;
    container.appendChild(section);
  });
});
