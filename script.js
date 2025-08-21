const sendBtn = document.getElementById('sendBtn');
const receipt = document.getElementById('receipt');
const phoneInput = document.getElementById('phone');
const amountInput = document.getElementById('amount');
const messageInput = document.getElementById('message');
const sendSound = document.getElementById('sendSound');

sendBtn.addEventListener('click', () => {
    const phone = phoneInput.value;
    const amount = amountInput.value;
    const message = messageInput.value || "Inget meddelande";
    const ref = Math.floor(Math.random() * 1000000);

    if (!phone || !amount) {
        alert("Fyll i telefonnummer och belopp!");
        return;
    }

    const now = new Date();
    const timeStr = now.toLocaleDateString('sv-SE') + " " + now.toLocaleTimeString('sv-SE');

    document.getElementById('receiptPhone').textContent = `Till: ${phone}`;
    document.getElementById('receiptAmount').textContent = `Belopp: ${amount} kr`;
    document.getElementById('receiptMessage').textContent = `Meddelande: ${message}`;
    document.getElementById('receiptTime').textContent = `Tid: ${timeStr}`;
    document.getElementById('receiptRef').textContent = `Referens: ${ref}`;

    receipt.style.display = "block";
    sendSound.play();

    phoneInput.value = "";
    amountInput.value = "";
    messageInput.value = "";
});
