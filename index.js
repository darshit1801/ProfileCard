function toggleContact(){
    const contactinfo = document.getElementById("contact-info");
    contactinfo.style.display = contactinfo.style.display === 'none' ? 'block' : 'none';
}

function toggleTheme(){
    const card = document.querySelector(".profile-card");
    card.classList.toggle('dark');
    card.classList.toggle('light');
}