// Hjälpfunktioner
}


function randomRef() {
return "RP" + Math.random().toString(36).slice(2, 8).toUpperCase();
}


// Elemente
const paymentView = document.getElementById("paymentView");
const receiptView = document.getElementById("receiptView");
const phoneEl = document.getElementById("phone");
const amountEl = document.getElementById("amount");
const messageEl = document.getElementById("message");
const payBtn = document.getElementById("payBtn");
const doneBtn = document.getElementById("doneBtn");


const rAmount = document.getElementById("rAmount");
const rPhone = document.getElementById("rPhone");
const rMessage = document.getElementById("rMessage");
const rTime = document.getElementById("rTime");
const rRef = document.getElementById("rRef");


// Input UX
phoneEl.addEventListener("blur", () => {
const norm = normalizeSwedishPhone(phoneEl.value);
phoneEl.value = norm;
});


payBtn.addEventListener("click", () => {
const phone = normalizeSwedishPhone(phoneEl.value);
const amount = amountEl.value.replace(/,/g, '.');
const message = messageEl.value.trim();


// Enkel validering
const phoneValid = /^\+46\d{7,11}$/.test(phone);
const amountValid = Number(amount) > 0;


if (!phoneValid) {
phoneEl.focus();
phoneEl.classList.add("error");
setTimeout(() => phoneEl.classList.remove("error"), 800);
return;
}
if (!amountValid) {
amountEl.focus();
amountEl.classList.add("error");
setTimeout(() => amountEl.classList.remove("error"), 800);
return;
}


// Fyll kvitto
rAmount.textContent = prettyAmount(amount);
rPhone.textContent = phone;
rMessage.textContent = message || "—";
rTime.textContent = nowString();
rRef.textContent = randomRef();


// Visa kvitto
paymentView.classList.remove("view-active");
receiptView.classList.add("view-active");
receiptView.setAttribute("aria-hidden", "false");
});


// Tillbaka / klar
doneBtn.addEventListener("click", () => {
receiptView.classList.remove("view-active");
paymentView.classList.add("view-active");
receiptView.setAttribute("aria-hidden", "true");


// Nollställ bara belopp & meddelande, behåll telefon för snabb upprepning
amountEl.value = "";
messageEl.value = "";
amountEl.blur();
messageEl.blur();
});
