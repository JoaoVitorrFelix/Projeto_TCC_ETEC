     // Essa função é para estilizar o Alert, utilizamos uma biblioteca chamada SweetAlert para isso, esta função chama o teste de conhecimento.
    function teste_de_conhecimento() {
      swal({
        title: "Você tem Certeza?",
        text: "Só clique no botão Fazer teste de Conhecimento após tirar as suas dúvidas nesta página, se não hover mais dúvidas clique em OK para ser redirecionado para o seu Teste!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
        className: "meu-titulo" // classe adicionada ao título
      })
        .then((willDelete) => {
          if (willDelete) {
            swal("Bom Trabalho", "Você será redirecinado para o Teste de Conhecimento!", "success");
            setTimeout(function () {
              // Aqui devemos colocar o caminho que leva até a pagina do teste de conhecimento
              window.location = href = "Quiz_teste_de_conhecimento.html";
            }, 3000);
          } else {
            swal("Recomendamos ler toda à página antes de iniciar o Teste de Conhecimento!");
          }
        });
    }

    // Essa função é para estilizar o Alert, utilizamos uma biblioteca chamada SweetAlert para isso esta função chama o Quiz apos a última tela de conteúdo.
    function acessar_quiz() {
      swal({
        title: "Você tem Certeza?",
        text: "Só clique no botão Concluído após ler todo o conteúdo, ou clique em OK para ser redirecionado para o Quiz!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
        className: "meu-titulo" // classe adicionada ao título
      })
        .then((willDelete) => {
          if (willDelete) {
            swal("Bom Trabalho", "Você será redirecinado para o Quiz!", "success");
            setTimeout(function () {
              // Aqui devemos colocar o caminho que leva até a pagina do Quiz
              window.location = href = "Quiz.html";
            }, 3000);
          } else {
            swal("Termine de ler o conteúdo e clique novamente em Confirmar para acessar o Quiz");
          }
        });
    }