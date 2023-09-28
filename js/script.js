const hamburgerEl = document.querySelector('.hamburger');
const navMenuEl = document.querySelector('.nav-menu');
const navLinksEl = document.querySelectorAll('.nav-link');

hamburgerEl.addEventListener('click', () => {
	hamburgerEl.classList.toggle('active');
	navMenuEl.classList.toggle('active');
});

navLinksEl.forEach((link) =>
	link.addEventListener('click', () => {
		hamburgerEl.classList.remove('active');
		navMenuEl.classList.remove('active');
	})
);

// Vad händer här?

// 1. Med document.querySelector hämtar jag ett HTML-element med klassnamnet hamburger och nav-menu.
// hamburger och nav-menu sparas i en variabel(hamburgerEl & navMenuEl).
// Med document.querySelectorAll hämtar jag alla HTML-element med klassnamnet nav-link.
// nav-link sparas som en lista som heter navLinksEl.

// Med hjälp av deras klassnamn så kan jag manipulera dom och använda dom på min webbsida.

// 2. Här lägger jag till ett click event till hamburgerEl elementet.
// toggle("active") lägger till eller tar bort klassen "active" varje gång du klickar
// på hamburgar ikonen.

// toggle("active") läggs även till eller tas bort från navMenuEl.
// Detta gör jag för att menyn ska visas och döljas.

//3. Här lägger jag till en Event listener på varje länk som finns i listan navLinksEl.
// För att menyn ska stängas använder jag remove("active") vilket gör att om klassen "active"
// finns så kommer den tas bort. När den tas bort så stänger menyn sig för den inte längre är "active".
