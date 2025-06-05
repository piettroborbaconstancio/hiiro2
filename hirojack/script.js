const select = document.getElementById('opcaoSelect');
const resultado = document.getElementById('resultado');

select.addEventListener('change', () => {
  const opcao = select.value;
  let texto = '';
  let imagem = '';

  switch (opcao) {
    case 'hiiro':
      texto = 'Um possivel Jack procurado por inumeros crimes como p***f****';
      imagem = 'hirojack/hiro.jpg';
      break;
    case 'vt':
      texto = 'Esse mulek é um n4zista narcizista que com certeza quer te queimar';
      imagem = 'hirojack/vt.jpg';
      break;
    case 'cris':
      texto = 'Nada a dizer esse cara é de um cor meio errada n sei dizer o porque...';
      imagem = 'hirojack/cris.jpg';
      break;
    default:
      texto = '';
      imagem = '';
  }

  resultado.innerHTML = texto
    ? `<p>${texto}</p><img src="${imagem}" alt="${opcao}">`
    : '';
});
