function checaIdade(idade) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (idade > 18) {
        resolve();
      } else {
        reject();
      }
    }, 2000);
  });
}

checaIdade(23)
  .then(function(resolve) {
    console.log('Maior que 18');
  })
  .catch(function(error) {
    console.log('Menor que 18');
  });

const appContainer = document.querySelector('#app');
const ulContainer = document.createElement('ul');
const inputElement = document.querySelector('input[name="user"]');

function renderRepos(repositories) {
  ulContainer.innerHTML = '';
  for (repos of repositories) {
    let liElement = document.createElement('li');
    let liText = document.createTextNode(repos.name);
    liElement.appendChild(liText);
    ulContainer.appendChild(liElement);
    appContainer.appendChild(ulContainer);
  }
}

function addRepos() {
  if (!inputElement.value) return;
  renderLoading();
  axios
    .get(`https://api.github.com/users/${inputElement.value}/repos`)
    .then(function(response) {
      renderRepos(response.data);
    })
    .catch(function(error) {
      renderErro();
    });
}

function renderLoading() {
  ulContainer.innerHTML = '';
  let liLoading = document.createElement('li');
  let liTextLoading = document.createTextNode('Carregando...');
  liLoading.appendChild(liTextLoading);
  ulContainer.appendChild(liLoading);
  appContainer.appendChild(ulContainer);
}

function renderErro() {
  ulContainer.innerHTML = '';
  let liLoading = document.createElement('li');
  let liTextLoading = document.createTextNode('Erro! Usuário não encontrado!');
  liLoading.style.color = '#f00';
  liLoading.appendChild(liTextLoading);
  ulContainer.appendChild(liLoading);
  appContainer.appendChild(ulContainer);
}
