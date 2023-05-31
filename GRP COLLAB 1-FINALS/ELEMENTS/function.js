//1. CreateElement()

const one = document.createElement("h1");
one.textContent = "This website will be live until December 31 , 2026."
const two = document.createElement("p");
two.textContent = "The next career Virtual Career Fair information will be posted here in November 1, 2023."

//2. SetAttribute()

one.setAttribute("id", "id-one");
one.setAttribute("class", "class-one");
two.setAttribute("id","id-two")

//3. Element.append()

const parent1 = document.getElementsByClassName("footer")[0];
parent1.appendChild(one);

//4. insertBefore()

const refElement = document.getElementsByClassName("footer")[0];
const parElement = refElement.parentNode;

parElement.insertBefore(two,refElement);

//5 remove()

const remElement1 = document.getElementsByClassName("btn-register btn-first")[0];
const remElement2 = document.getElementsByClassName("details")[0];
const remElement3 = document.getElementsByClassName("details-2")[0];

remElement1.remove();
remElement2.remove();
remElement3.remove();
