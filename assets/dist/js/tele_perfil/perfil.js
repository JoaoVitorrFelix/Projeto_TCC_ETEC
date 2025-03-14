 // script de seleção de paises e estados

 var paises = {
  AFG: 'Afeganistão',
  ALB: 'Albânia',
  DZA: 'Argélia',
  AND: 'Andorra',
  AGO: 'Angola',
  ARG: 'Argentina',
  ARM: 'Armênia',
  AUS: 'Austrália',
  AUT: 'Áustria',
  AZE: 'Azerbaijão',
  BHS: 'Bahamas',
  BHR: 'Bahrein',
  BGD: 'Bangladesh',
  BRB: 'Barbados',
  BLR: 'Belarus',
  BEL: 'Bélgica',
  BLZ: 'Belize',
  BEN: 'Benin',
  BTN: 'Butão',
  BOL: 'Bolívia',
  BIH: 'Bósnia e Herzegovina',
  BWA: 'Botsuana',
  BRA: 'Brasil',
  BRN: 'Brunei',
  BGR: 'Bulgária',
  BFA: 'Burkina Faso',
  BDI: 'Burundi',
  CPV: 'Cabo Verde',
  KHM: 'Camboja',
  CMR: 'Camarões',
  CAN: 'Canadá',
  CAF: 'República Centro-Africana',
  TCD: 'Chade',
  CHL: 'Chile',
  CHN: 'China',
  COL: 'Colômbia',
  COM: 'Comores',
  COG: 'Congo',
  COD: 'República Democrática do Congo',
  CRI: 'Costa Rica',
  HRV: 'Croácia',
  CUB: 'Cuba',
  CYP: 'Chipre',
  CZE: 'República Tcheca',
  DNK: 'Dinamarca',
  DJI: 'Djibuti',
  DMA: 'Dominica',
  DOM: 'República Dominicana',
  TLS: 'Timor-Leste',
  ECU: 'Equador',
  EGY: 'Egito',
  SLV: 'El Salvador',
  GNQ: 'Guiné Equatorial',
  ERI: 'Eritreia',
  EST: 'Estônia',
  SWZ: 'Suazilândia',
  ETH: 'Etiópia',
  FJI: 'Fiji',
  FIN: 'Finlândia',
  FRA: 'França',
  GAB: 'Gabão',
  GMB: 'Gâmbia',
  GEO: 'Geórgia',
  DEU: 'Alemanha',
  GHA: 'Gana',
  GRC: 'Grécia',
  GRD: 'Granada',
  GTM: 'Guatemala',
  GIN: 'Guiné',
  GNB: 'Guiné-Bissau',
  GUY: 'Guiana',
  HTI: 'Haiti',
  HND: 'Honduras',
  HUN: 'Hungria',
  ISL: 'Islândia',
  IND: 'Índia',
  IDN: 'Indonésia',
  IRN: 'Irã',
  IRQ: 'Iraque',
  IRL: 'Irlanda',
  ISR: 'Israel',
  ITA: 'Itália',
  JAM: 'Jamaica',
  JPN: 'Japão',
  JOR: 'Jordânia',
  KAZ: 'Cazaquistão',
  KEN: 'Quênia',
  KIR: 'Kiribati',
  KWT: 'Kuwait',
  KGZ: 'Quirguistão',
  LAO: 'Laos',
  LVA: 'Letônia',
  LBN: 'Líbano',
  LSO: 'Lesoto',
  LBR: 'Libéria',
  LBY: 'Líbia',
  LIE: 'Liechtenstein',
  LTU: 'Lituânia',
  LUX: 'Luxemburgo',
  MKD: 'Macedônia do Norte',
  MDG: 'Madagascar',
  MWI: 'Malawi',
  MYS: 'Malásia',
  MDV: 'Maldivas',
  MLI: 'Mali',
  MLT: 'Malta',
  MHL: 'Ilhas Marshall',
  MRT: 'Mauritânia',
  MUS: 'Maurício',
  MEX: 'México',
  FSM: 'Micronésia',
  MDA: 'Moldávia',
  MCO: 'Mônaco',
  MNG: 'Mongólia',
  MNE: 'Montenegro',
  MAR: 'Marrocos',
  MOZ: 'Moçambique',
  MMR: 'Mianmar',
  NAM: 'Namíbia',
  NRU: 'Nauru',
  NPL: 'Nepal',
  NLD: 'Países Baixos',
  NZL: 'Nova Zelândia',
  NIC: 'Nicarágua',
  NER: 'Níger',
  NGA: 'Nigéria',
  PRK: 'Coreia do Norte',
  NOR: 'Noruega',
  OMN: 'Omã',
  PAK: 'Paquistão',
  PLW: 'Palau',
  PAN: 'Panamá',
  PNG: 'Papua Nova Guiné',
  PRY: 'Paraguai',
  PER: 'Peru',
  PHL: 'Filipinas',
  POL: 'Polônia',
  PRT: 'Portugal',
  QAT: 'Catar',
  ROU: 'Romênia',
  RUS: 'Rússia',
  RWA: 'Ruanda',
  KNA: 'Saint Kitts e Nevis',
  LCA: 'Santa Lúcia',
  VCT: 'São Vicente e Granadinas',
  WSM: 'Samoa',
  SMR: 'San Marino',
  STP: 'São Tomé e Príncipe',
  SAU: 'Arábia Saudita',
  SEN: 'Senegal',
  SRB: 'Sérvia',
  SYC: 'Seychelles',
  SLE: 'Serra Leoa',
  SGP: 'Singapura',
  SVK: 'Eslováquia',
  SVN: 'Eslovênia',
  SLB: 'Ilhas Salomão',
  SOM: 'Somália',
  ZAF: 'África do Sul',
  KOR: 'Coreia do Sul',
  SSD: 'Sudão do Sul',
  ESP: 'Espanha',
  LKA: 'Sri Lanka',
  SDN: 'Sudão',
  SUR: 'Suriname',
  SWE: 'Suécia',
  CHE: 'Suíça',
  SYR: 'Síria',
  TWN: 'Taiwan',
  TJK: 'Tajiquistão',
  TZA: 'Tanzânia',
  THA: 'Tailândia',
  TGO: 'Togo',
  TON: 'Tonga',
  TTO: 'Trinidad e Tobago',
  TUN: 'Tunísia',
  TUR: 'Turquia',
  TKM: 'Turcomenistão',
  TUV: 'Tuvalu',
  UGA: 'Uganda',
  UKR: 'Ucrânia',
  ARE: 'Emirados Árabes Unidos',
  GBR: 'Reino Unido',
  USA: 'Estados Unidos',
  URY: 'Uruguai',
  UZB: 'Uzbequistão',
  VUT: 'Vanuatu',
  VAT: 'Cidade do Vaticano',
  VEN: 'Venezuela',
  VNM: 'Vietnã',
  YEM: 'Iêmen',
  ZMB: 'Zâmbia',
  ZWE: 'Zimbábue'
};


    var estados = {
      AFG: ['Balkh', 'Cabul', 'Herat'], // Estados para o Afeganistão
      ALB: ['Durrës', 'Tirana', 'Vlorë'], // Estados para a Albânia
      DZA: ['Argel', 'Orã', 'Tlemcen'], // Estados para a Argélia
      BRA: ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba',
       'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe','Tocantins'], // Estados do Brasil
      // Lista completa de estados...

      ZWE: ['Bulawayo', 'Harare', 'Manicaland'] // Estados para o Zimbábue
    };

    var paisDropdown = document.getElementById('pais');
    var estadoDropdown = document.getElementById('estado');

    // Preencher o menu suspenso de países
    for (var codigoPais in paises) {
      var option = document.createElement('option');
      option.value = codigoPais;
      option.text = paises[codigoPais];
      paisDropdown.appendChild(option);
    }

    paisDropdown.addEventListener('change', function() {
      var codigoPais = this.value;
      var estadosPais = estados[codigoPais];

      // Limpar o menu suspenso de estados
      estadoDropdown.innerHTML = '';

      if (estadosPais) {
        // Adicionar os estados correspondentes ao menu suspenso de estados
        for (var i = 0; i < estadosPais.length; i++) {
          var option = document.createElement('option');
          option.value = estadosPais[i];
          option.text = estadosPais[i];
          estadoDropdown.appendChild(option);
        }
      } else {
        // Se não houver estados correspondentes, exibir uma opção padrão
        var option = document.createElement('option');
        option.text = 'Selecione um estado';
        option.disabled = true;
        option.selected = true;
        estadoDropdown.appendChild(option);
      }
    });


    // Funções dos botões de Salvar e deletar da tela de Perfil

    function salver_alteracoes() {
      swal({
        title: "Você tem Certeza?",
        text: "Ao clicar em OK suas alterações sarão salvas!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
        className: "meu-titulo" // classe adicionada ao título
      })
        .then((willDelete) => {
          if (willDelete) {
            swal("Salvar Alterações", "As alterações feitas no seu perfil foram salvas!", "success");
            setTimeout(function () {
              // Aqui devemos colocar o caminho que leva até a pagina do teste de conhecimento
              window.location = href = "";
            }, 3000);
          } else {
            swal("As alterações feitas no seu perfil não foram salvas!");
          }
        });
    }

    function deletar_perfil() {
      swal({
        title: "Você tem Certeza?",
        text: "Só clique no botão Deletar Perfil quando quiser apagar completamente o seu perfil!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
        className: "meu-titulo" // classe adicionada ao título
      })
        .then((willDelete) => {
          if (willDelete) {
            swal("Sucesso", "Seu perfil foi deletado com sucesso", "success");
            setTimeout(function () {
              // Aqui devemos colocar o caminho que leva até a pagina do teste de conhecimento
              window.location = href = "";
            }, 3000);
          } else {
            swal("O perfil não foi Deletado!");
          }
        });
    }