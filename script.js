function simular() {
  const local = document.getElementById("local").value;
  const fala = document.getElementById("fala").value;
  const resultado = document.getElementById("resultado");

  let mensagem = "";

  switch (local) {
    case "cinema":
      mensagem += "🎬 Estão sentados lado a lado no cinema, as luzes apagam-se...\n";
      break;
    case "restaurante":
      mensagem += "🍽️ Um jantar romântico à luz das velas...\n";
      break;
    case "praia":
      mensagem += "🌅 Estão a ver o pôr do sol juntos na praia...\n";
      break;
  }

  switch (fala) {
    case "gostei":
      mensagem += "Tu dizes: \"Gostei muito de estar contigo ❤️\"";
      break;
    case "linda":
      mensagem += "Tu dizes: \"Estás tão linda hoje 😍\"";
      break;
    case "abraço":
      mensagem += "Tu dizes: \"Posso-te dar um abraço? 🤗\"";
      break;
  }

  resultado.innerText = mensagem;

  const musica = document.getElementById("musica");
  musica.play();
}
