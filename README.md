
# Guia de customizações utilizando o SDK de desevolvimento do Senior X Platform <!-- omit in toc -->

O SDK da Plataforma Senior X, é um Kit de desenvolvimento que fornece um ambiente de customização de regras de
negócios da Plataforma através da interceptação de primitivas (Endpoints) , possibilitando a implementações de regras
de negócios customizadas.

O SDK utiliza como base a criação de funções Lambdas no provedor de Cloud AWS e edição do código fonte através
da IDE Cloud9.(https://aws.amazon.com/pt/cloud9/)

A linguagem adotada como padrão de desenvolvimento utilizando o SDK é Javascript, rodando na plataforma Nodejs.

## Conceitos

Abaixo estão alguns conceitos importantes para a compreensão do funcionamento do SDK e das customizações na Plataforma Senior X. 
 
- `AWS lambda:` O AWS Lambda permite que você execute códigos sem provisionar ou gerenciar servidores. Ou seja, seu código é implantado em um formato de função que é executada através de gatilho de outros serviços da própria AWS. Isso garante que o desenvolvedor foca apenas na regra de negócio do software, sem se preocupar com a infraestrutura de servidores. 
 
- `Cloud9:` É um ambiente de desenvolvimento integrador totalmente na nuvem, com suporte a várias plataformas e linguagens de programação. Esse é o editor padrão para o desenvolvimento de funções lambda na AWS. 
 
- `NodeJs:` É um interpretador de Javascript que roda do server-side (servidor). 

## Vantagens

- Possibilita o desenvolvimento de customizações sem a necessidade de instalações locais. 

- As customizações são feitas em uma linguagem de marcado altamente poderosa e com uma grande comunidade global. 

- Criação de customizações “Endpoints” de forma rápida. 

- Cliente gerencia o acesso de quem pode editar suas customizações. 

- Possibilidade de utilizar bibliotecas de terceiros para ganhar produtividade no desenvolvimento

## Utilização

- Possuir um tenant para acesso a plataforma Senior X, com um usuário com permissões de Administrador. 
  
- Validar se o tenant do cliente está devidamente configurado para realizar o envio de e-mails: 
   Através do menu: Tecnologia / Configuração / Por Tenant / Aba Sistema: Validar se as configurações de envio de email estão preenchidas: 

![Configuração de envio de e-mail](/img/emailconfig.png "Configuração de envio de e-mail")

Obs.: Certificar-se que as configurações estão corretas é primordial para seguir com os exemplos desse documento. 
 
Através do menu: Tecnologia / Configurações / Validação de envio de E-mail: Realizar um teste de envio para um determinado e-mail e verificar se o mesmo é recebido: 

![Validação de envio de e-mail](/img/validacaoemail.png "Validação de envio de e-mail")

Caso o e-mail for executado com sucesso e recebido pelo destinatário, as configurações estão corretas. 

## Configurando o ambiente de customização 

Para configurar um ambiente de customização, será necessário navegar até a tela de gerenciamento de acesso, que fica em Tecnologia>Customizações>Configurar Ambiente>Gerenciar Acesso: 

![Configuração do ambiente](/img/amb1.png "Configuração do ambiente")

Nesta tela você pode visualizar o status de configuração do ambiente e informar chaves do provedor cloud. (Atualmente apenas a AWS é suportada). 

**Configurando chaves de acesso** 

Para que seja possível configurar o ambiente é necessário garantir que as chaves de acesso ao provedor cloud já estejam devidamente configuradas, por padrão o serviço utiliza as chaves já informadas nas configurações globais, no entanto, existe a possibilidade de sobrescrever as chaves de acesso de duas maneiras diferentes: 

**Através do gerenciamento de acesso** 

Basta clicar no botão Informar chaves de acesso, e será exibido o formulário contendo o identificador da conta e a região já preenchidos.

![Configuração do ambiente](/img/amb2.png "Configuração do ambiente")

Após preencher as informações basta clicar em salvar e aguardar a notificação de sucesso. 

**Através das Configurações do tenant** 

Navegar para Tecnologia>Configuração>Por tenant, e procurar os campos destinados as chaves de configuração do provedor cloud: 

![Configuração do ambiente](/img/amb3.png "Configuração do ambiente")

Após preencher as informações basta clicar em salvar e aguardar a notificação de sucesso. 
 
Obs.: As informações de chave de acesso nos ambientes de Produção e Homologx da Plataforma já estão configuradas por padrão em uma conta da Senior destinada a customizações de clientes. As chaves só devem ser alteradas caso o cliente possua uma conta AWS própria e gostaria de utilizá-la. Entretanto é necessário ficar ciente de possíveis cobranças na utilização de uma conta própria. Nesse caso é necessário validar a política de cobranças da AWS. 
 

**Configurando o ambiente**

Com as chaves de acesso devidamente configuradas clicar no botão “Criar Ambiente”. 
 
O processo iniciará e é possível acompanhar as etapas da criação utilizando o botão “Atualizar Status”. Esse procedimento pode demorar alguns minutos. 
 
Em caso de falha em alguma das etapas, o botão tentar novamente será habilitado bastando clicar no mesmo para que o serviço tente configurar o ambiente novamente. 
 
Uma vez que o processo foi finalizado com sucesso a tela ficará da seguinte forma: 

![Configuração do ambiente](/img/amb4.png "Configuração do ambiente")

Note que o botão abrir ambiente foi habilitado. 
 
Nesse momento um e-mail com as credenciais de acesso ao ambiente do Cloud9 foi enviado para o e-mail do usuário da plataforma que realizou a criação do ambiente.  
 
Obs.: Esses dados devem ser guardados, pois são os dados do Administrador do ambiente de customização do Tenant. 
 
Clicar no botão “Abrir Ambiente” e na tela que se abrirá informar os dados de acesso recebidos: 

![Configuração do ambiente](/img/aws.png "Configuração do ambiente")

Se o ambiente foi criado com as chaves do provedor Cloud padrão da Senior a Conta a ser preenchida é “seniorxcustom”, caso for uma conta privada do cliente, deve-se verificar essa informação. 
 
O Nome de usuário e senha, devem ser os recebidos por e-mail. Note que no primeiro acesso a senha precisa ser redefinida. 
 
Ao clicar em fazer login, você será redirecionado para a página inicial do Cloud9. 

![Cloud9](/img/cloud9.png "Cloud9")

Com isso o ambiente de customização está devidamente configurado. 

## Permissões de Acesso ao ambiente

 Após a criação do ambiente, apenas o usuário que realizou a criação do mesmo possui o acesso. Essas credenciais recebidas **Não** devem ser compartilhadas com terceiros, consultores e usuários internos.  Para conceder o acesso a outros desenvolvedores existem as seguintes opções: 

 `Consultores:` Estes são mantidos pela Senior e disponibilizados para todos os tenants.

 Para convidar um consultor Basta navegar até o menu Customização > Configurar Ambiente > Convidar consultores em seguida será exibida a listagem de consultores que já foram convidados para o tenant em questão e para convidar um novo consultor basta clicar em Adicionar. 

- Selecione o usuário da plataforma que será associado ao consultor que será convidado, permitindo que o mesmo tenha acesso ao tenant do cliente. 
- Selecione o consultor e clique em salvar. 

![Cadastro consultor](/img/consultores.png "Cadastro consultor")

Por padrão os consultores são convidados sem acesso ao ambiente por tanto estarão com o status desativado, e por tanto ainda não poderá acessar o ambiente do tenant, para ativa-lo basta clicar no toggle contido na coluna de status. 

- Após habilitado o consultor estará apito a realizar customizações nas primitivas da plataforma. 

`Desenvolvedores:` Estes são criados pelo tenant e existem apenas no tenant que os criou, para que sejam criados será necessário ter acesso ao recurso de cadastro de desenvolvedores. 
 
Para cadastrar um desenvolvedor basta navegar para o menu Customização > Configurar Ambiente > Desenvolvedores em seguida você será direcionado para a listagem de desenvolvedores já cadastrados, para adicionar um novo desenvolvedor basta clicar na opção Adicionar, em seguida você será direcionado para o formulário de cadastro, basta selecionar o usuário do tenant e automaticamente as informações necessárias para a criação da conta de acesso a AWS serão preenchidas e enviadas para o email. 

![Cadastro desenvolvedor](/img/desenvolvedores.png "Cadastro desenvolvedor")

Por padrão os desenvolvedores são criados sem acesso ao ambiente por tanto estarão com o status desativado, e não poderá acessar o ambiente do tenant, para ativa-lo basta clicar no toggle contido na coluna de status.

Tento em mente a forma de acesso ao ambiente de customização já é possível realizar as customizações.

## Criando uma nova customização 

Para exemplificar a criação de uma customização, vamos descrever um cenário que não depende de nenhum produto específico, utilizando apenas uma primitiva do core da plataforma responsável pela criação de novos usuários, visto que as primitivas dos produtos ex: HCM, ERP, ERPX, dependem que os mesmos estejam implantados no tenant do cliente. 

###  Cenário   

Considerando um cenário hipotético, um determinado cliente deseja que o campo “Descrição” da tela de criação de usuário seja obrigatório.   Por padrão, esse campo na tela não é obrigatório, e não é possível via configuração definir essa obrigatoriedade. A alternativa para esse caso seria interceptar a primitiva de criação de usuários e criar uma customização que valide se essa propriedade foi preenchida, caso não estiver devolver uma mensagem informando a obrigatoriedade e bloquear a operação.

Tela de cadastro de novo Usuário, menu: Tecnologia / Administração / Gestão de Usuários, botão “Adicionar”.

![Novo usuário](/img/adduser.png "Novo usuário")

## Identificando a primitiva 

Após possuirmos a definição do problema a ser resolvido, o próximo passo é encontrar qual a primitiva que deve ser customizada.   

Existem várias formas para obter essa informação. O mais comum é consultar a documentação das API’s através do Portal Senior DEV: (https://dev.senior.com.br/
apis/) 

Porém também é possível encontrar a primitiva através do “developer tools” do navegador, bastante realizar a operação na tela, nesse caso o cadastro de um novo usuário e através da aba “network”.      

Após criar um novo usuário podemos ver que a primitiva chamada é a: **/platform/user/actions/createUser**

![Configuração do ambiente](/img/primitiva.png "Configuração do ambiente")


Todas as chamadas da plataforma possuem o mesmo padrão no caso do recurso **/platform/user/actions/createUser**,  os valores correspondem as seguintes informações: 
 
**Domínio:** Platform 
**Serviço:** User 
**Primitiva:** CreateUser

Agora que sabemos qual o endpoint e primitiva que a tela executa ao se cadastrar um novo usuário, já podemos criar a customização. 

## Criando a customização 

Para criar a customização acesso o seguinte menu: Tecnologia / Customização / Regras / Nova customização   Através da busca digitar o nome da primitiva no caso “CreateUser”.      

Localizar no resultado a primitiva de acordo com Domínio/Serviço/Primitiva a ser customizada através do botão “Selecionar”. 

![Cadastro extensão](/img/extensao.png "Cadastro extensão")

Na próxima tela devemos selecionar algumas opções: 

![Cadastro funcionalidade](/img/funcionalidade.png "Cadastro funcionalidade")


**Primitiva:** Preenchido automaticamente 
 
**Protocolo:** REST ou SOAP: Por padrão as customizações utilizando o SDK utilizando o protocolo REST. 
 
**Método:** Nesse caso selecionar a opção **“Antes”**, visto que vamos realizar uma validação para bloquear a operação e não permitir que o usuário seja salvo caso uma determinada informação não for preenchida. Além desse método existem o método **“Depois”** que realiza a chamada da customização depois da execução da primitiva nativa e o método **“Interceptar”**, onde quem está customizando assume o total controle da execução. 
 
**Histórico:** Selecionar a opção “Todas as Chamadas” para que a plataforma guarde o log das execuções, para futuras consultas.  
 
**URL:** Informar a URL onde o nosso serviço customizado está hospedado. No caso da utilização do SDK o mesmo provê a criação de uma função lambda no provedor cloud e acesso automaticamente o endpoint customizado nesse campo.

Basta clicar no botão ![botão](/img/botao.png ).

Será apresentada uma mensagem questionando o nome da função a ser criada. Por padrão o nome é carregado automaticamente: 

![Gerar Url](/img/geraurl.png "Gerar Url")

Clicar em “Sim.” Obs.: Esse processo pode demorar alguns segundos. 
 
Após a criação da função podemos ver o resultado no campo URL:

![Cadastro funcionalidade](/img/func2.png "Cadastro funcionalidade")

Clicando em avançar vamos explorar mais algumas opções: 

![Cadastro funcionalidade](/img/func3.png "Cadastro funcionalidade")

**Cabeçalho Padrão:** Define as informações que a customização vai receber no “Header” da requisição HTTP. Por padrão as opções (Tenant, User e Timeout) são enviadas. Porém também é possível enviar o Token da plataforma, nos casos em que a customização a ser desenvolvida precise realizar requisições a outras primitivas da plataforma ou APIS de terceiros para realização de busca de informações ou integração de dados. Vamos ver isso mais a frente. 
 
**Cabeçalho Customizado:** Define valores customizados que podem enviar no “Header” da requisição e que a customização pode ter acesso. 
 
**Tags:** São identificadores que podem ser usados para realizar agrupamento de customizações por assuntos.

**Usuário:** Podemos informar usuários nesse campo para restringir que determinada customização só seja executada para um usuário específico. Esse recurso é muito útil quando estamos desenvolvendo uma customização e não queremos impactar no processo do usuário final. 
 
Clicar no botão “Salvar” da tela para concluir o cadastro da customização. 
 
A seguinte mensagem aparecerá na tela informando sucesso na operação. Clicar “Copiar para clipboard ” e abrir ambiente. 


![Operação](/img/operation.png "Operação")
 

## Codificando a customização

Após copiar para a área de transferência e abrir o ambiente de acordo com o último passo.  No terminar do Cloud9 colar o comando copiado e dar um “Enter”.

![Cloud9](/img/cloud92.png "Cloud9")

O comando em questão baixa no cloud9 um arquivo .zip contendo o código fonte inicial da função lambda e descompacta o mesmo dentro da pasta do environment. 
 
Dentro da pasta da função criado existe o arquivo index.js que define o corpo da nossa função customizada: 

Agora que entendemos o corpo padrão de uma função customizada, podemos implementar nossa validação.      Através do developerTools do navegador conseguimos buscar o payload que a tela envia para a nossa customização: 
Perceba que a função é criada com comentário padrões para auxiliar o desenvolvedor. 


A função lambda é composta de um método principal **handler**  que é uma função assíncrona por padrão. Recebe como parâmetro um **event**  que é o corpo em JSON da requisição http recebida pela customização através da chamada da plataforma. Ou seja, através desse atributo temos acesso ao payload que a primitiva nativa produto irá receber.    

No nosso caso teremos o payload contendo os dados necessário que a primitiva **createUser** necessita para criar um novo usuário na plataforma.  

Como retorno possuímos uma variável chamada **response**, que devolve para a primitiva nativa um corpo de uma requisição HTTP, contendo o **statusCode** HTTP, o Content-Type no **header** e o corpo no atributo **body**. 

Agora que entendemos o corpo padrão de uma função customizada, podemos implementar nossa validação.     
 
Através do developerTools do navegador conseguimos buscar o payload que a tela envia para a nossa customização: 

Agora que entendemos o corpo padrão de uma função customizada, podemos implementar nossa validação. Através do developerTools do navegador conseguimos buscar o payload que a tela envia para a nossa customização: 

![Cloud9](/img/payload.png "Cloud9")

Clicando me “View source” podemos ver no formato JSON:

```json
{   
   "username":"testecustom",
   "fullName":"testecustom",        
   "email":"testecustom@senior.com.br",        
   "password":"123456",      
   "blocked":false,       
   "changePassword":false,       
   "properties":[] 
}
```

Perceba que nesse payload não existe o atributo **“description”** que seria a descrição do nosso usuário. Dessa forma podemos usar o mesmo para realizar a nossa validação. Ou seja, quando o atributo description não existir no corpo enviaremos uma mensagem de erro para o usuário, caso existir o fluxo padrão será seguido e o usuário será cadastrado.  A customização ficará da seguinte forma: 


```js
/**
 * Nome da primitiva : createUser
 * Nome do dominio : platform
 * Nome do serviço : user
 * Nome do tenant : fabcustom
 **/

exports.handler = async (event) => {
  
    //Define variável para recebermos o corpo da requisição
    let body;
    
    
    //Atribui na variável o corpo da requisição fazendo o Parse para JSON caso o event possuir a propriedade body. Isso é necessário para os testes que veremos a seguir.
    if(event.body === undefined) {
        body = event;
    } else {
        body = JSON.parse(event.body);
    }
    
    
    //Valida se no corpo existe a propriedade description, caso positivo devolve com status 200 OK o prórpio corpo,
    //Caso negativo devolve o status 400 - bad Request com a mensagem para o usuário
    if(body.hasOwnProperty('description')){
       return sendRes(200, body);
    } else {
      return sendRes(400, 'Preencher o campo descrição!');
    }
  
    
};

const sendRes = (status, body) => {

  var response = {
    statusCode: status,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  };
  return response;
};
```

Para testar acessar no canto direito do cloud9 a opção AWS Resources, localizar nossa função e clicar no botão deploy: 

![Cloud9](/img/deploy.png "Cloud9")

No canto superior da tela a seguinte mensagem deve ser apresentada: **Function deployment complete**

Agora já podemos testar nossa customização, porém antes devemos nos certificar que a mesma está ativa, através do caminho: Tecnologia / customização / Regras / Funcionalidades API 

![Cloud9](/img/habilita.png "Cloud9")

Essa tela mostra todas as customizações cadastras, com a informações de quais estão ativas e Inativas. 
 
Ativar a customização e acessar a tela de criação de usuário para testar a customização.  
 
Menu: Tecnologia / Administração / Gestão de Usuários, botão “Adicionar”. 
 
Cadastrando um usuário sem informar o campo descrição teremos o seguinte resultado: 

![Cloud9](/img/teste.png "Cloud9")

Preenchendo o campo descrição o usuário é cadastrado normalmente: 

![Cloud9](/img/sucesso.png "Cloud9")

Ao acessar o cadastro de regra no botão detalhes da nossa função podemos ver várias informações sobre as chamadas que essa customização já recebeu. 

![Cloud9](/img/detalhes.png "Cloud9")

Inclusive podemos visualizar por chamada qual foi o input e o output: 

![Cloud9](/img/teste2.png "Cloud9")

Com isso finalizamos o desenvolvimento da customização. 
 
O código fonte dessa customização pode ser encontrado no seguinte endereço:  

(https://github.com/diegocassandri/tutorial-customizacoes-sdk/blob/master/2oRcurVwM6Wk-platform-usercreateUser/index1.js)

## Tópicos Gerais

### Depurando uma função customizada 

Muitas vezes no processo de desenvolvimento precisamos depurar nosso código para encontrar possíveis problemas e validar a solução antes de libera-la de fato.  Para isso o Cloud9 oferece um recurso de debug bem simples de ser usada.   Basta incluirmos um “Break Point” na linha que desejamos iniciar a depuração.

![Cloud9](/img/break.png "Cloud9")

Após adicionar o Break Point, no canto direito da tela em AWS Resources, clicar com o botão direito em cima da função e  ir Run / Run Local. 

![Cloud9](/img/break2.png "Cloud9")

Na Próxima tela no editor incluir o payload que a função lambda deve receber para realizarmos a depuração.


![Cloud9](/img/debug.png "Cloud9")

Clicar no ícone do “Bug” para habilitar a depuração e após isso clicar em RUN ao lado do ícone do BUG. 

![Cloud9](/img/debug2.png "Cloud9")

Com isso a depuração será iniciada e podemos utilizar os controles do lado direito da tela para navegar pelas linhas do código e visualizar os valores das variáveis. 
 
Também é possível visualizar valores posicionando o cursor do mouse acima das variáveis que deseja monitorar. 

![Cloud9](/img/break3.png "Cloud9")

Após a conclusão podemos ver o resultado da execução no console: 

![Cloud9](/img/debug3.png "Cloud9")

### Utilizando bibliotecas de terceiros 

 Atualmente o SDK de customizações ainda não dispõe de facilitadores de código que nos permite por exemplo realizar chamadas a outras primitivas da plataforma nativamente, para isso precisamos realizar essas chamas HTTP utilizando bibliotecas de mercado que nos auxiliam no desenvolvimento dessas chamadas.  Como as funções lambdas criadas pelo SDK utilizam o Nodejs, podemos utilizar qualquer biblioteca de mercado para nos ajudar no desenvolvimento das nossas customizações, tais como: 

`Axios:` Biblioteca que nos ajuda a fazer requisições HTTP para qualquer endpoint.  
  
`MomentJS:` Biblioteca que nos ajuda a trabalhar com manipulações de datas de uma maneira mais fácil. 

Porém qualquer biblioteca que tenha suporte a versão do Node que a lambda foi criada pode ser adicionada ao projeto.    Abaixo procedimento de como utilizar bibliotecas de terceiros. 
 
Através do terminal do Cloud9 navegar até a pasta raiz da nossa função criada no exemplo anterior. E digitar o comando “npm init -y”. 


![Cloud9](/img/result.png "Cloud9")

Esse comando vai criar um arquivo chamado “package.json” na raiz da nossa função. Isso transforma o mesmo em um projeto gerenciado pelo NPM (Node Package Manager) onde podemos instalar e gerenciar as dependências do nosso projeto. 

![Cloud9](/img/libs.png "Cloud9")

Após instalação podemos ver no arquivo package.json que nossa dependência foi instalada. 

![Cloud9](/img/libs2.png "Cloud9")

Perceba que a pasta node-modules também foi criada na raiz do projeto, e contém o código fonte da nossa biblioteca. 

![Cloud9](/img/libs3.png "Cloud9")

Com a biblioteca instalada já podemos utiliza-la em nosso exemplo. Vamos utilizar o caso do exemplo anterior, alterando o comportamento da seguinte forma: 
 
Caso o usuário não preencher o campo descrição, vamos incluir automaticamente nesse campo uma mensagem “Usuário criado por: ” + o nome do usuário que está logado na plataforma. 
 
Para pegar o nome do usuário logado pelo Token da plataforma precisamos fazer uma requisição na primitiva /user/queries/getUser, passando no header da requisição o token da plataforma. O retorno dessa requisição é o seguinte:


![Cloud9](/img/json.png "Cloud9")

Vamos pegar o atributo fullName e inserir no atributo **description**  da primitiva do body da requisição **createUser**. 
 
A implementação final ficaria da seguinte forma: 

```js
/**
 * Nome da primitiva : createUser
 * Nome do dominio : platform
 * Nome do serviço : user
 * Nome do tenant : fabcustom
 **/


const axios = require('axios'); //Aqui importamos a biblioteca instalada

exports.handler = async (event) => {
  
    //Define variável para recebermos o corpo da requisição
    let body;
    let tokenSeniorX = 'Bearer 69e341d8f3caf06596b884ea8a7f7888'; // Token utilizado para testes 
    
    
    //Atribui na variável o corpo da requisição fazendo o Parse para JSON caso o event possuir a propriedade body. Isso é necessário para os testes que veremos a seguir.
    if(event.body === undefined) {
        body = event;
    } else {
        body = JSON.parse(event.body);
        tokenSeniorX = event.headers['X-Senior-Token']; //Caso for uma chamada da plaforma busca o token do Header da requisição 
    }
    
    
    //Exemplo de chamada HTTP para primitiva da plataforma

    if(body.hasOwnProperty('description')){
       return sendRes(200, body);
    } else {
      
      let user = await obterDadosUser(tokenSeniorX);
      
      body.description = `Usuário criado por:  ${user.fullName}`;
      
      return sendRes(200, body);
    }
  
    
};

const obterDadosUser = async (tokenSeniorX) => {
  
    //Variável que receberá o retorno da chamada
    let vResponse;
    
    //Configura o cabeçalho da requisição
    let headersConfig = {
      headers: { 
        "Authorization" : tokenSeniorX
      }
    };
    
    //Realiza a chamada, passando a URL e o cabeçalho
    try {
      vResponse = await axios.get('https://platform-homologx.senior.com.br/t/senior.com.br/bridge/1.0/rest/platform/user/queries/getUser', headersConfig);
      
      //Caso sucesso retorna o corpo da requisição
      return vResponse.data;
    } catch (e) {
        //Caso erro retorna erro para o usuário
        return sendRes(400,'Erro ao realizar chamada HTTP!');
    }
    
};

const sendRes = (status, body) => {

  var response = {
    statusCode: status,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  };
  return response;
};
```
Linha 10 importamos a biblioteca Axios. 
Linha 16: Declaramos uma variável com token para ser usada apenas no modo debug. 
Linha 24: Pegamos o token vindo da plataforma, quando a requisição é feita via Plataforma. 
Linha 34: Declaramos uma variável user e atribuímos a ela o valor da chamada HTTP. 
Linha 36: Incluímos o atributo description no body, com uma string e o valor fullName vindo da chamada http. 
 
Agora podemos salvar, fazer o deploy da função e realizar o teste cadastrando um novo usuário. 
 
Ao criar um novo usuário já podemos ver o resultado: 

![Cloud9](/img/teste3.png "Cloud9")

Obs.: Lembrar de ativar a passagem do token da plataforma na chamada da customização em: Tecnologia / Customização / Regras / Funcionalidades (API), editando a customização criada e marcar a opção Token como abaixo: 


![Cloud9](/img/det.png "Cloud9")

O código fonte dessa função pode ser encontrado no seguinte endereço:  

(https://github.com/diegocassandri/tutorial-customizacoes-sdk/blob/master/2oRcurVwM6Wk-platform-usercreateUser/index.js)

## Tópicos Adicionais

### Utilizando a biblioteca FSW-AWS-LAMBDA

Como forma de facilitar o desenvolvimento de customizações utilizando o SDK, foi desenvolvido uma biblioteca que abstrai as principais funcionalidades que uma customização precisa realizar, tais como: 
 
- Padronização no retorno de mensagens de erro, validação e sucesso para a plataforma. 
- Abstração nas chamadas HTTP para as primitivas da plataforma, provendo a passagem do token de forma implícita. 
- Possibilidade de trabalhar com múltiplos ambientes “environments” sem a necessidade de alterações no código. 
- Execução assíncronas de múltiplas validações em paralelo. 
 
 Todas as funcionalidades dessa lib podem ser consultadas através da documentação oficial: 

 (https://www.npmjs.com/package/@seniorsistemas/fsw-aws-lambda)


Para demostrar as funcionalidades dessa Lib vamos criar uma nova customização que realize o seguinte procedimento:  

Caso o usuário tente bloquear um determinado um outro através da tela de manutenção de usuários e esse pertencer ao grupo “Admin” a ação deve ser bloqueada com a mensagem “Você não pode bloquear um usuário Administrador.” 
 
 A primitiva que vamos customizar será a: /user/actions/updateUser , no método **Antes**.

Nesse caso quando o combobox de **Usuário bloqueado** for marcado o payload a requisição ficará com a propriedade blocked com o valor “true”.

```json
{     
   "username":"testecustom",    
   "fullName":"testecustom",    
   "email":"testecustom@senior.com.br",    
   "description":"Descrição Testes",    
   "locale":"pt-BR",   
   "blocked":true,    
   "changePassword":false,    
   "properties":[  
 
   ] 
}
```

Para validar se um determinado usuário está em um determinado grupo vamos realizar uma chamada HTTP na primitiva **/authorization/queries/getUserDetailRoles**, através do método POST passando como parâmetro o nome do nosso usuário:

```json
{    
   "user":"admin"   
}
```
```json
{     
   "roles":[        
      {           
         "id":"00000000-d3a8-470c-a022-e5ed282f3ec9",          
         "name":"admin",          
         "description":"Administrador do sistema"      
       },       
       {           
          "id":"f3fb1555-797e-4657-b2e6-d46583ab1328",          
          "name":"HCM - Analista de RH (Modelo)"      
       }    
   ]
} 
```

Após criar a customização e iniciar dentro da pasta da mesma um projeto npm com o comando “npm init -i”. 
 
Instalar as dependências necessárias: @seniorsistemas/fsw-aws-lambda, moment e axios, da seguinte forma: 
 
npm install –-save @seniorsistemas/fsw-aws-lambda moment axios 


![Cloud9](/img/libs4.png "Cloud9")

Essa função pode ser implementada da seguinte forma: 

Estrutura do Projeto: 

![Cloud9](/img/dir.png "Cloud9")

O arquivo principal continua sendo o **index.js**. A regra de validação de negócios ficou na pasta src/rules e as chamadas para outros serviços na pasta **src/services**. 

`index.js`

```js
/**
 * Nome da primitiva : updateUser
 * Nome do dominio : platform
 * Nome do serviço : user
 * Nome do tenant : fabcustom
 **/
//Importação dos utilitários da biblioteca
const {
    lambdaEvent,
    lambdaResponse,
    AsyncRuleValidator 
} = require('@seniorsistemas/fsw-aws-lambda');
//Recebe o evento e o contexto da requisição feita pela plataforma
exports.handler = async (event,context) => {
  
  //parseia o corpo da requisição de acordo com o tipo de chamada (testes ou chamda http)
  const body = lambdaEvent.parseBody(event);
  //cria objeto contendo o evento e informções do ambiente de execução (dev, homologação ou proução)
  const eventInfo = lambdaEvent.createEventInfo(event);
  
  //Importa o arquivo que contém as validações de negócio

  const blockUser =  require('./src/rules/blockUser');

  //Realizar a chamada do método que executa as validações de negócios da função
  //No método validate passamos o nome dos arquivos possuem as implementações das regras de negócio a serem validadas
  //Aqui podemos ser passadas quantas validações forem necessárias, as mesmas vão rodar em paralelo assincronamente

  
  return new AsyncRuleValidator(body,eventInfo)
      .validate([
          blockUser
        ])
        .then(validationResult => {
          
          //Trata erros de execução
        if (validationResult.hasErrors()) {
            return lambdaResponse.validationError(validationResult.getErrorsAsString());
        }
        // Retorna o corpo recebedido se as validaçoes passaram
        return lambdaResponse.success(body);
      })
      .catch(lambdaResponse.internalError);
};
```

`Arquivo src/rules/blockUsers.js`

```js
// Realiza importação do serviço
const userRolesService = require('./../services/userRolesService');


//recebe o body do serviço e todas as informações da execução
module.exports = async (body,event) => {
    
    //Armazena o nome do usuário que está sendo alterado
    const username = body.username;
    
    //Realiza a chamada do serviço 
    //Se o retorno do serviço for verdadeiro e se o atributo blocked existir no corpo então retorna a mensagem de validação
    if((await userRolesService.validateRoles(event,username)) && body.blocked) {
       return 'Você não pode bloquear um usuário Administrador!';  
    } 
    
    return null;
};
```

`Arquivo src/services/userRolesService.js`

```js
//Importa as blibliotecas momonent,axios e o utilizario http da biblioteca fab-lambda-lib
const { axiosW } = require('@seniorsistemas/fsw-aws-lambda/utils');

//recebdo o event e o nome do usuário que está sendo alterado
async function validateRoles(event, user) {
    
    //armazena o resutado do métdo que busca os perfis do usuário
    let userRoles = await findRoles(event,user);
    
    //percorre e filtra os perfis retornando apenas os que possuem nome como admin
    userRoles = userRoles.roles.filter(role => {
        return role.name === 'admin';
    }); 
    
    //se o array possuir valores quer dizer que o usuário está no grupo admin
    if(userRoles.length !== 0){
       return true;
    }
    
    //caso contrário devolde false
    return false;
}

function findRoles (event, user) {
   //realiza a chamada http para a plataforma, passando como parâmetro a utl, event e o nome do usuário no corpo da requisição
    return axiosW.platformPost('/platform/authorization/queries/getUserDetailRoles',event, {user});
}

module.exports = {
    validateRoles
};
```

Após realizar o deploy da função e habilitar a customização criado, já podemos testar. 
 
Agora ao tentar bloquear um usuário que seja administrador, veremos a seguinte mensagem: 


![Cloud9](/img/teste4.png "Cloud9")

O código fonte desse exemplo pode ser encontrado no seguinte repositório: 

(https://github.com/diegocassandri/tutorial-customizacoes-sdk/tree/master/2oRcurVwM6Wk-platform-userupdateUser)

### Desenvolver ou executar uma customização localmente

Para testes e estudos, existe a possibilidade de executar um projeto NodeJS que segue exatamente a mesma estrutura de uma função lambda através de um ambiente local, sem a necessidade de um ambiente de customizações criado em um tenant de cliente (AWS).

Para mais detalhes, acessar o repositório: https://github.com/feeeeliipe/fsw-lambda-mock

## Dicas e boas práticas 

Quando estamos desenvolvendo customizações utilizando o SDK, podemos e devemos utilizar algumas boas práticas que facilitam o desenvolvimento em equipe e por consequência melhoram a qualidade das customizações entregues, abaixo alguns exemplos e padrões de mercado que podemos utilizar nos projetos com o SDK.

### Versionamento de código 

A IDE Cloud9 roda dentro de uma instancia EC2 da AWS, e isso quer dizer que o terminal que visualizamos na tela da IDE, nada mais é que uma linha de comando Linux da máquina onde o Cloud9 está rodando. 

Isso quer dizer que podemos realizar o versionamento do nosso código das funções lambda com o GIT. Inclusive por padrão o GIT já vem instalado na máquina onde o Cloud9 está rondando. 

Bastando então inicializarmos um novo repositório ou clonar um existente dentro do environment do Cloud9 e sair utilizando o GIT para realizar o versionamento do nosso código. 

Os exemplos desse documento foram todos desenvolvidos dessa forma, o mesmo está ligado a um repositório público no Github, porém qualquer cliente git é suportado. 

![Cloud9](/img/GIT.png "Cloud9")
 
Caso você não tenha familiaridade com o GIT e Github você pode acessar o link abaixo que dá uma introdução ao assunto.  

(https://rogerdudler.github.io/git-guide/index.pt_BR.html)

###  Mais sobre AWS Lambda e NodeJs 

 O SDK de customizações utiliza o AWS Lambda, CLoud9 e NodeJs como forma de prover um ambiente em cloud para o desenvolvimento e deploy de customizações em endpoints da Plataforma SeniorX de maneira com que o desenvolvedor não tenha que se preocupar com servidores para codificar, testar, desenvolver e publicar seus códigos, essa é uma abstração que de fato auxilia grandemente no momento de desenvolver customizações para esse novo cenário. 
 
 Porém não podemos nos esquecer que é muito importante saber como essas tecnologias funcionam por baixo dos panos. Visto que assim podemos conhecer toda a gama de possibilidades que as mesmas nos fornecem, bem como conhecer suas limitações e boas práticas na utilização. 
 
 Por esse motivo abaixo listei algumas sugestões de leitura para um aprofundamento nesses assuntos: 

 - Documentação AWS Lambda: (https://docs.aws.amazon.com/lambda/index.html) 
 - Documentação AWS Cloud9: (https://docs.aws.amazon.com/pt_br/cloud9/latest/user-guide/welcome.html)
 - Documentação NodeJs: (https://nodejs.org/dist/latest-v12.x/docs/api/documentation.html)
 - Guia rápido Javascript ES6: (https://github.com/alexmoreno/ES6-para-humanos) 

