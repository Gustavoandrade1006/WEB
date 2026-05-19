async function carregar() {
    const resposta = await axios.get("https://api.tvmaze.com/schedule/full");
    const filmes = resposta.data;
    console.log(filmes)
}

carregar();



