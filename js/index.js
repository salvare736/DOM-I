const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navItems = document.querySelectorAll('a');
navItems[0].textContent = "Services"
navItems[1].textContent = "Product"
navItems[2].textContent = "Vision"
navItems[3].textContent = "Features"
navItems[4].textContent = "About"
navItems[5].textContent = "Contact"

navItems[0].style.color = "green"
navItems[1].style.color = "green"
navItems[2].style.color = "green"
navItems[3].style.color = "green"
navItems[4].style.color = "green"
navItems[5].style.color = "green"

let prepNavItem = document.createElement("a");
prepNavItem.textContent = "Prepend"
prepNavItem.href = "#"
prepNavItem.style.color = "green"
document.querySelector("nav").prepend(prepNavItem)

let appendNavItem = document.createElement("a");
appendNavItem.textContent = "Append"
appendNavItem.href = "#"
appendNavItem.style.color = "green"
document.querySelector("nav").appendChild(appendNavItem)

let mainText = document.querySelector("h1");
mainText.textContent = "DOM IS AWESOME"

let startButton = document.querySelector("button");
startButton.textContent = "Get Started"

let codeSnippet = document.getElementById("cta-img");
codeSnippet.setAttribute('src', siteContent["cta"]["img-src"])

let middleCode = document.getElementById("middle-img");
middleCode.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let contact = document.querySelector(".contact");
let contactH = contact.querySelector("h4");
contactH.textContent = "CONTACT"
let contactP = contact.querySelectorAll("p");
contactP[0].innerHTML = "123 Way 456 Street <br> Somewhere, USA"
contactP[1].textContent = "1 (888) 888-8888"
contactP[2].textContent = "sales@greatidea.io"

let footer = document.querySelector("footer");
let footerP = footer.querySelector("p");
footerP.textContent = "Copyright Great Idea! 2018"