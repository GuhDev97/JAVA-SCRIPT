function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'homem-10anos.jpg')
            } else if ( idade < 21) {
                // Jovem
                img.setAttribute('src', 'homem-20anos.jpg' )
            } else if (idade <50) {
                //Adulto
                img.setAttribute('src', 'homem-40anos.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'homem-60anos.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'mulher-10anos.jpg')
            } else if ( idade < 21) {
                // Jovem
                img.setAttribute('src', 'mulher-20anos.jpg')
            } else if (idade <50) {
                //Adulto
                img.setAttribute('src', 'mulher-40anos.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'mulher-60anos.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Dectectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

}

