const input = document.querySelector('input');
const divPaises = document.querySelector('.paises');
 
fetch('https://restcountries.com/v3.1/all').then(response => {
    response.json().then((data) => {
        data.forEach(pais => {
            const nome = document.createElement('h2');
            const regiao = document.createElement('span');
            const capital = document.createElement('span');
            const populacao = document.createElement('p');
            const bandeira = document.createElement('img');
            const container = document.createElement('div');

            nome.textContent = `País: ${pais.name.common}`;
            regiao.textContent = `Região: ${pais.region}`;
            capital.textContent = `Capital: ${pais.capital}`;
            populacao.textContent = `População: ${pais.population} pessoas`;
            bandeira.src = pais.flags.png;
            container.classList.add('container');

            container.append(bandeira, nome, regiao, capital, populacao);
            divPaises.append(container);





        })
        const divs = document.querySelectorAll('.container');
        input.addEventListener('keydown', acharPais);



        function acharPais(event) {
            if (event.key !== 'Enter' || input.value === "") return;
            divs.forEach(card => {
                if (card.children[1].textContent !== `País: ${input.value}`) {
                    card.classList.add('escondido');
                }
            })
            input.value = "";

            input.removeEventListener('keydown', acharPais);
            input.addEventListener('keydown', mostrarPaises);
        }

        function mostrarPaises(event) {
            if (event.key !== 'Enter') return;
            divs.forEach(card => {
                card.classList.remove('escondido');
            })

            input.removeEventListener('keydown', mostrarPaises);
            input.addEventListener('keydown', acharPais);
        }

    })

})


