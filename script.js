document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name && email && message) {
    alert(
      "※これはデモです。\nお問い合わせありがとうございます！\n折り返しご連絡いたします。"
    );
    this.reset();
  } else {
    alert("全ての項目を入力してください。");
  }
});
