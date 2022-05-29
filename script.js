function verificar() {
  const data = new Date();
  const ano = data.getFullYear();
  const fano = document.getElementById("txtano");
  const res = document.getElementById("res");

  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente");
  } else {
    const fsex = document.getElementsByName("radsex");
    const idade = ano - Number(fano.value);
    res.innerHTML = `Idade Calculada: ${idade}`;
    const gênero = "";
    if (fsex[0].checked) {
      gênero = "Homem";
    } else if (fsex[1].checked) {
      gênero = "Mulher";
    }
    res.innerHTML = `Detectamos ${gênero} com ${idade}anos.`;
  }
}
