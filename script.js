document.getElementById("payBtn").addEventListener("click", () => {
  const amount = document.getElementById("amount").value;
  const message = document.getElementById("message").value || "Köp i spelet";

  document.getElementById("status").innerText = "Status: Betalning skapad";

  // Skapa en Swish-deeplink (OBS! Denna är bara demo – kräver Swish API för riktig betalning)
  const deeplink = `swish://paymentrequest?amount=${amount}&message=${encodeURIComponent(message)}`;

  // Generera QR med gratis API
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(deeplink)}`;

  const qrBox = document.getElementById("qr");
  const qrImage = document.getElementById("qrImage");

  qrImage.src = qrUrl;
  qrBox.classList.remove("hidden");
});
