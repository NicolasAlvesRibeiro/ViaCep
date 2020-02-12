const axios = require('axios');

axios.get("https://viacep.com.br/ws/01001000/json/")
    .then(function(res) {
    const viacep = res.data
    if(endereco.logradouro) {
        console.log(endereco.cep);
        console.log(endereco.logradouro);
        if(endereco.complemento)
            console.log(endereco.complemento)
        console.log(endereco.bairro);
        console.log(endereco.localidade);
        console.log(endereco.uf);
    } else {
        console.log(endereco.cep);
        console.log(endereco.localidade);
        console.log(endereco.uf);
    }
});