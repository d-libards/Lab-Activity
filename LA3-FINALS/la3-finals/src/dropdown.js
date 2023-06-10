export function Dropdown() {
  const dropdownButton = document.getElementById("dropdown-button");
  const dropdownIcon = document.getElementById("dropdown-icon");
  const dropdownMenu = document.getElementById("dropdown-menu");
    
  dropdownButton.addEventListener("click", () => {
      
    dropdownMenu.classList.toggle("hidden");
    if (dropdownMenu.classList.contains("hidden")) {
      dropdownIcon.classList.remove("transform", "rotate-180");
    } else {
      dropdownIcon.classList.add("transform", "rotate-180");
    }
  });
}

  