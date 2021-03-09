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
navItems[0].textContent = siteContent["nav"]["nav-item-1"]
navItems[1].textContent = siteContent["nav"]["nav-item-2"]
navItems[2].textContent = siteContent["nav"]["nav-item-3"]
navItems[3].textContent = siteContent["nav"]["nav-item-4"]
navItems[4].textContent = siteContent["nav"]["nav-item-5"]
navItems[5].textContent = siteContent["nav"]["nav-item-6"]

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
mainText.innerHTML = "DOM <br> IS <br> AWESOME"

let startButton = document.querySelector("button");
startButton.textContent = siteContent["cta"]["button"]

let codeSnippet = document.getElementById("cta-img");
codeSnippet.setAttribute('src', siteContent["cta"]["img-src"])

let topContent = document.querySelector(".top-content");
let topContentText = topContent.querySelectorAll(".text-content");
let topContentText1 = topContentText[0];
let topContentText2 = topContentText[1];
let topContentText1H = topContentText1.querySelector("h4");
let topContentText1P = topContentText1.querySelector("p");
let topContentText2H = topContentText2.querySelector("h4");
let topContentText2P = topContentText2.querySelector("p");
topContentText1H.textContent = siteContent["main-content"]["features-h4"]
topContentText1P.textContent = siteContent["main-content"]["features-content"]
topContentText2H.textContent = siteContent["main-content"]["about-h4"]
topContentText2P.textContent = siteContent["main-content"]["about-content"]

let middleCode = document.getElementById("middle-img");
middleCode.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let botContent = document.querySelector(".bottom-content");
let botContentText = botContent.querySelectorAll(".text-content");
let botContentText1 = botContentText[0];
let botContentText2 = botContentText[1];
let botContentText3 = botContentText[2];
let botContentText1H = botContentText1.querySelector("h4");
let botContentText1P = botContentText1.querySelector("p");
let botContentText2H = botContentText2.querySelector("h4");
let botContentText2P = botContentText2.querySelector("p");
let botContentText3H = botContentText3.querySelector("h4");
let botContentText3P = botContentText3.querySelector("p");
botContentText1H.textContent = siteContent["main-content"]["services-h4"]
botContentText1P.textContent = siteContent["main-content"]["services-content"]
botContentText2H.textContent = siteContent["main-content"]["product-h4"]
botContentText2P.textContent = siteContent["main-content"]["product-content"]
botContentText3H.textContent = siteContent["main-content"]["vision-h4"]
botContentText3P.textContent = siteContent["main-content"]["vision-content"]

let contact = document.querySelector(".contact");
let contactH = contact.querySelector("h4");
contactH.textContent = siteContent["contact"]["contact-h4"]
let contactP = contact.querySelectorAll("p");
contactP[0].innerHTML = "123 Way 456 Street <br> Somewhere, USA"
contactP[1].textContent = siteContent["contact"]["phone"]
contactP[2].textContent = siteContent["contact"]["email"]

let footer = document.querySelector("footer");
let footerP = footer.querySelector("p");
footerP.textContent = siteContent["footer"]["copyright"]