const token = "8766962122:AAGoj-d3AaSYANM7PBGqjSNlPuqRhEXghWI";
const chat_id = "-1003888477334";

document.getElementById("sendBtn").addEventListener("click", function () {
  const name = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const hozir = new Date();
  const vaqt = hozir.toLocaleString("uz-UZ", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const fullText = `🚀 Yangi xabar:

👤 Ism: ${name}
👥 Familiya: ${surname}
📧 Email: ${email}
📝 Xabar: ${message}
👽 Web sayt egasi: "Mirshohid"
📅 Vaqt: ${vaqt}`;

  fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chat_id,
      text: fullText,
    }),
  })
    .then((response) => {
      if (response.ok) {
        alert("Xabar vaqti bilan birga muvaffaqiyatli yuborildi!");
        document.getElementById("name").value = "";
        document.getElementById("surname").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
      } else {
        alert("Xatolik yuz berdi. Token yoki Chat ID ni tekshiring.");
      }
    })
    .catch((error) => {
      console.error("Xatolik:", error);
      alert("Internet aloqasini tekshiring!");
    });
});
