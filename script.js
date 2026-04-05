const carousel = document.querySelector(".services-carousel");
const cards = document.querySelectorAll(".service-card");

let index = 0;
const totalCards = cards.length;
const visibleCards = 3;
const cardWidth = cards[0].offsetWidth + 30; // width + gap

function autoScroll() {
  index++;
  if (index > totalCards - visibleCards) index = 0;
  carousel.style.transform = `translateX(-${index * cardWidth}px)`;
}

// scroll every 3 seconds
let scrollInterval = setInterval(autoScroll, 3000);

// pause on hover
carousel.addEventListener("mouseover", () => clearInterval(scrollInterval));
carousel.addEventListener(
  "mouseout",
  () => (scrollInterval = setInterval(autoScroll, 3000)),
);




const form = document.getElementById("orderForm");

// ضع هنا رقم WhatsApp اللي بدك توصّل عليه الطلب
const whatsappNumber = "201119284562"; // مثال: مصر 20 + رقمك

form.addEventListener("submit", function(e){
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const orderDetails = document.getElementById("orderDetails").value;
  const storeLocation = document.getElementById("storeLocation").value;
  const productImage = document.getElementById("productImage").files[0];

  let message = `*New Order*%0A`;
  message += `*Name:* ${name}%0A`;
  message += `*Phone:* ${phone}%0A`;
  message += `*Order Details:* ${orderDetails}%0A`;
  if(storeLocation) message += `*Store Location:* ${storeLocation}%0A`;

  // إذا فيه صورة، يخبر المستخدم برابط الصورة بعد رفعها (هنا مجرد تنبيه)
  if(productImage) message += `*Product Image:* Attached by user%0A`;

  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
  window.open(whatsappURL, "_blank");
});