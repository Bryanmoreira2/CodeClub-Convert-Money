const button = document.getElementById('buttonconvert')
const seltor = document.getElementById('seletordemoeda')
const converterDe = document.getElementById('Converterde')





const convertValues = async () => {
    const inputReais = document.getElementById('inputvalor').value
    const volrReal = document.getElementById('realvalar')
    const volorconvertido = document.getElementById('valarconvertido')

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const bitcoin = data.BTCBRL.high

    volrReal.innerHTML = new Intl.NumberFormat
        ('pt-BR', { style: 'currency', currency: 'BRL' })
        .format(inputReais)

    if (seltor.value === 'US$ Dólar americano') {
        volorconvertido.innerHTML = new Intl.NumberFormat
            ('en-US', { style: 'currency', currency: 'USD' })
            .format(inputReais / dolar)
    }

    if (seltor.value === '€ Euro') {
        volorconvertido.innerHTML = new Intl.NumberFormat
            ('de-DE', { style: 'currency', currency: 'EUR' })
            .format(inputReais / euro)
    }
    if (seltor.value === 'Bitcoin') {
        volorconvertido.innerHTML = (inputReais / bitcoin).toFixed(3)
    }


};
changerCurrency = () => {
    const nomeDaMoeda = document.getElementById("nomedamoeda")
    const imagemBandeira = document.getElementById('imagem')

    if (seltor.value === '€ Euro') {
        nomeDaMoeda.innerHTML = 'Euro'
        imagemBandeira.src = "/img/EURO.png"

    }
    if (seltor.value === 'US$ Dólar americano') {
        nomeDaMoeda.innerHTML = 'Dólar americano'
        imagemBandeira.src = "/img/estados-unidos (1) 1.png"
    }
    if (seltor.value === 'Bitcoin') {
        nomeDaMoeda.innerHTML = 'Bitcoin'
        imagemBandeira.src = "/img/BI.png"
    }

    convertValues()


};

button.addEventListener("click", convertValues);
seltor.addEventListener("change", changerCurrency)