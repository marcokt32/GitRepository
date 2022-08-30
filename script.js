function criptografa() {
	let texto = document.getElementById('mensagem').value.toLowerCase()

	let textoCriptografado = texto.replace(/e/igm, "enter")
	textoCriptografado = textoCriptografado.replace(/i/igm, "imes")
    textoCriptografado = textoCriptografado.replace(/a/igm, "ai")
    textoCriptografado = textoCriptografado.replace(/o/igm, "ober")
    textoCriptografado = textoCriptografado.replace(/u/igm, "ufat")

    document.querySelector(".desenho").style.display = "none"
	document.querySelector(".sem-mensagem-p").style.display = "none"
    document.querySelector(".sem-mensagem").innerHTML = textoCriptografado
    document.querySelector(".sem-mensagem").style.top = "100px"
    document.querySelector(".sem-mensagem").style.position = "static"
    document.querySelector(".sem-mensagem").style.margin = "auto"
    document.getElementById('copiar').style.display = "initial"
    document.getElementById('reiniciar').style.display = "initial"
}

function descriptografa() {
	let texto = document.getElementById('mensagem').value.toLowerCase()

	let textoCriptografado = texto.replace(/enter/igm, "e")
	textoCriptografado = textoCriptografado.replace(/imes/igm, "i")
    textoCriptografado = textoCriptografado.replace(/ai/igm, "a")
    textoCriptografado = textoCriptografado.replace(/ober/igm, "o")
    textoCriptografado = textoCriptografado.replace(/ufat/igm, "u")

    document.querySelector(".desenho").style.display = "none"
	document.querySelector(".sem-mensagem-p").style.display = "none"
    document.querySelector(".sem-mensagem").innerHTML = textoCriptografado
    document.querySelector(".sem-mensagem").style.top = "100px"
    document.getElementById('copiar').style.display = "initial"
    document.getElementById('reiniciar').style.display = "initial"
}

function copyToClickBoard() {
    let texto = document.getElementById('mensagem')
    let conteudo = document.querySelector(".sem-mensagem").innerHTML;

    navigator.clipboard.writeText(conteudo)
    alert("Texto criptografado copiado!")

    texto.value = ""
}

function recarregar() {
	return location.reload();
}