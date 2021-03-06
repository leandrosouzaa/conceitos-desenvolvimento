# Conceitos de Desenvolvimento

## Node.js
 - Permite o uso de JS no backend;
   - Rotas e integrações (banco de dados, serviços externos...)
   - Não se lida com eventos do usuário final (só é possível disparar códigos node através das rotas);
 - Plataforma de desenvolvimento, não linguagem;
 - Construída em cima da V8 (Google Chrome);
 - Comparável a PHP/ Ruby / Python e Go;
 - Características do Node
   - Arquitetura Event-loop
   - Baseada em eventos (rotas na maioria das vezes);
   - Call Stack
   - Node Single-thread;
   - Non-blocking I/O (ao se fazer uma requisição ao Node não é necessário retornar todos os dados de uma vez (mandar em partes));
   

## NPM / Yarn
 - Gerenciados de Pacotes;
 - Instalar bibloteca de terceiros;
 - Fornecer biblotecas;
 - Comaráveis ao Composer do PHP, Gems do Ruby, entre outros...

## Frameworks do Node
 - ExpressJS
   - Sem opinião;
   - Ótimo para iniciar;
   - Microserviços;
- AdonisJS
- NextJS 

## API REST
 - Fluxo da requisição e resposta:
   - Requisição feita por um cliente;
   - Resposta retornada através de uma estrutura de dados;
   - Cliente recebe resposta e processa resultado;

 - Métodos HTTP:
   - GET;
   - POST;
   - PUT;
   - DELETE;

 - Benefícios
   - Múltiplo clientes (front-end), mesmo back-end
   - Protocolo de comunicação padronizado;
     - Mesma estrtura para web / mobile / api pública;
     - Serviços externos

 - Conteúdo da requisição
   - Req Body;
   - Route Params;
   - Query params;
   - Headers;

 - HTTP Codes;
   - 1xx: Informational;
   - 2xx: Success
     - 200: Success;
     - 201: Created;
   - 3xx: Redirection
     - 301: Moved Permanently;
     - 302: Moved;
   - 4xx: Client Error
     - 400: Bad request;
     - 401: Unauthorized;
     - 404: Not Found;
   - 5xx: Server Error
     - 400: Internal Server Error;

## React
 - Bibloteca para construção de interfaces;
 - Utilizado para construção de Single-Page Application;
 - Tudo fica dentro do Javascript;
 - Nomenclatura:
   - React: Bibloteca utilizada tanto no ReactJS quanto no ReactNative para construção de interfaces;
   - ReactJS: React + ReactDOM;
   - React Native: React + bibloteca para controlar elementos nativos;
- Vantages:
  - Organização do código
    - Componentização (dividir código em partes);
  - Divisão de responsabilidades: 
    - Back-end: Regra de negócios;
    - Front-end: Interface; 
  - Uma API, mútiplos clientes;
  - Programação declarativa;

## JSX
 - Escrever HTML dentro do Javascript;
 - Com React podemos criar nossos próprios elementos.

## Imperativos X Declarativo
 
## Babel/ Webpack
 - O browser não entende todo esse código;
 - O Babel converte o código JS de uma forma que o browser entenda;
 - O Webpack possui várias funções:
   - Criação do bundle, arquivo com todo código de aplicação;
   - Ensinar ao JavaScript como importar arquivos CSS, imagens e etc;
   - Live reload;
   
## React Native
 - Versão React para desenvolvimento mobile;
 - Multiplataforma;
 - É possível manipular cada plataforma de forma diferente;
 - Interface nativa;
 - Código não é transpilado;
 - Empresas utilizam (Microsoft...);
  - Arquitetura
   - JS -> Metro Bundler(Packager) -> Bundle -> Bridge -> Código da Plataforma;
 - Sintaxe
   - Mesma declaração de componentes;
   - Utilizamos componentes próprios do HTML (View, Text, Image...);
   
## Arquitetura e TDD
 - Atual estrutura de pastas
 ```
  --src
    --config
    --database
    --errors
    --middlewares
    --models
    --repositories
    --routes
    --services
 ```
 - Domínio
   - Área de conhecimento daquele módulo/arquivo;

 - DDD: Domain Driven Design (metodologia)
   - Se aplica somente no Backend;
   - Conceitos, principios, pattenrs e boas práticas que devem ser utilizadas;

 - TDD: Test Driven Development (metodologia)
   - Desenvolver o teste antes de desenvolver a feature;
   - Criar regras de como a aplicação deve funcionar;
 
 - Testes Automatizados
   - Garantir que a aplicação continue funcionando independente do número de funcinalidades e do número de devs no time.
   - Testes Unitários: Testam funcionalidades específicas de nossa aplicação (precisam ser funções puras)
     - Funções puras não dependem de serviços externos.
   - Testes de Integração: Testam uma funcionalidade completa, passando por X camadas da aplicação.
     - Route -> Controller - Serviço -> Repositório -> ...
   - Testes E2E
     - Testes que simulam a ação do usuário dentro da nossa aplicação. (Usuário entrando na aplicação, se cadastrando, logando e navegando para a tela certa.
 
