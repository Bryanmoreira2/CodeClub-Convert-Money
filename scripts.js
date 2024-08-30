// Seleciona elementos HTML
const button = document.getElementById('buttonconvert');
const seltor = document.getElementById('seletordemoeda');
const converterDe = document.getElementById('Converterde');

// Função para converter valores
const convertValues = async () => {
    const inputReais = document.getElementById('inputvalor').value;
    const volrReal = document.getElementById('realvalar');
    const volorconvertido = document.getElementById('valarconvertido');

    // Obtém taxas de câmbio da API
    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL")
        .then(response => response.json());

    const dolar = data.USDBRL.high;
    const euro = data.EURBRL.high;
    const bitcoin = data.BTCBRL.high;

    // Exibe valor em reais
    volrReal.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
        .format(inputReais);

    // Converte para a moeda selecionada
    if (seltor.value === 'US$ Dólar americano') {
        volorconvertido.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
            .format(inputReais / dolar);
    } else if (seltor.value === '€ Euro') {
        volorconvertido.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' })
            .format(inputReais / euro);
    } else if (seltor.value === 'Bitcoin') {
        volorconvertido.innerHTML = (inputReais / bitcoin).toFixed(3);
    }
};

// Atualiza a moeda e a bandeira
const changerCurrency = () => {
    const nomeDaMoeda = document.getElementById("nomedamoeda");
    const imagemBandeira = document.getElementById('imagem');

    // Atualiza nome e imagem com base na moeda selecionada
    if (seltor.value === '€ Euro') {
        nomeDaMoeda.innerHTML = 'Euro';
        imagemBandeira.src = "ac/EURO.png";
    } else if (seltor.value === 'US$ Dólar americano') {
        nomeDaMoeda.innerHTML = 'Dólar americano';
        imagemBandeira.src = "ac/estados-unidos (1) 1.png";
    } else if (seltor.value === 'Bitcoin') {
        nomeDaMoeda.innerHTML = 'Bitcoin';
        imagemBandeira.src = "ac/BI.png";
    }

    convertValues();
};

// Adiciona eventos aos elementos
button.addEventListener("click", convertValues);
seltor.addEventListener("change", changerCurrency);
