axio = require('axios')
cep = '50930090'
url = `https://viacep.com.br/ws/${cep}/json/`
resultado = ''
async function getCep() {
    await axio.get(url)
    .then(response => {
       console.log(response.data)
        resultado = response.data
    })
    .catch(error => {
        console.log(error)
    })
}
    getCep();
