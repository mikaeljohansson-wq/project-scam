const swishBtn = document.getElementById("swishBtn");
const backBtn = document.getElementById("backBtn");
const paymentView = document.getElementById("paymentView");
const receiptView = document.getElementById("receiptView");

swishBtn.addEventListener("click", () => {
  const amount = document.getElementById("amount").value || "0";
  const message = document.getElementById("message").value || "";

  document.getElementById("receiptAmount").innerText = amount + " kr";
  document.getElementById("receiptMessage").innerText = message ? `Meddelande: ${message}` : "";

  paymentView.classList.add("hidden");
  receiptView.classList.remove("hidden");
});

backBtn.addEventListener("click", () => {
  receiptView.classList.add("hidden");
  paymentView.classList.remove("hidden");
});
