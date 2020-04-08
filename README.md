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



