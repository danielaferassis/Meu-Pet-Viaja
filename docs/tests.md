# Testes

Neste projeto serão realizados dois tipos de testes:

 - O **Teste de Software**, que utiliza uma abordadem de caixa preta, e tem por objetivo verificar a conformidade do software com os requisitos funcionais e não funcionais do sistema.
 - O **Teste de Usabilidade**, que busca avaliar a qualidade do uso do sistema por um usuário do público alvo. 

Se quiser conhecer um pouco mais sobre os tipos de teste de software, leia o documento [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/).

A documentação dos testes é dividida nas seguintes seções:

 - [Plano de Testes de Software](#plano-de-testes-de-software)
 - [Registro dos Testes de Software](#registro-dos-testes-de-software)
 - [Avaliação dos Testes de Software](#avaliação-dos-testes-de-software)
 - [Cenários de Teste de Usabilidade](#cenários-de-teste-de-usabilidade)
 - [Registro dos Testes de Usabilidade](#registro-dos-testes-de-usabilidade)
 - [Avaliação dos Testes de Usabilidade](#avaliação-dos-testes-de-usabilidade)

## Plano de Testes de Software

**Caso de Teste** | **CT-01 - Visualizar informações de regras de viagem com pet por diferentes meios de transporte**
 :--------------: | ------------
**Procedimento**  | Usuário acessa página "Transporte seu Pet" e visualiza as regras de viagem de avião, ônibus ou carro com pet.
**Requisitos associados** | RF-001, RF-002 e RF-003
**Resultado esperado** | Espera-se que o usuário consiga visualizar as regras de viagem com pet.
**Página** | Transporte seu Pet

**Caso de Teste** | **CT-02 - Pesquisar hospedagens pet-friendly em MG, filtrando por cidade, e mostrar as informações da hospedagem**
 :--------------: | ------------
**Procedimento**  | 1) Usuário acessa a página "Destinos em MG" e utiliza o filtro de pesquisa por tipo de estabelecimento, selecionando "hospedagem". Também pode filtrar por cidade;<br>2) Serão mostradas as opções de hospedagem cadastradas no site para o usuário selecionar a desejada e ver as informações desse estabelecimento.
**Requisitos associados** | RF-004 e RF-008
**Resultado esperado** | Espera-se que o usuário consiga:<br>1) realizar a pesquisa, utilizando os filtros por tipo de estabelecimento - hospedagem -  e por cidade;<br>2) selecionar a hospedagem desejada;<br>3) ser redirecionado para a página das informações da hospedagem selecionada.
**Página** | Destinos em MG

**Caso de Teste** | **CT-03 - Pesquisar estabelecimentos comerciais privados pet-friendly em MG, filtrando por cidade, e mostrar as informações do estabelecimento**
 :--------------: | ------------
**Procedimento**  | 1) Usuário acessa a página "Destinos em MG" e utiliza o filtro de pesquisa por tipo de estabelecimento, selecionando "restaurante" ou "estabelecimento privado". Também pode filtrar por cidade;<br>2) Serão mostradas as opções de estabelecimentos comerciais privados cadastrados no site para o usuário selecionar o desejado e ver as informações desse estabelecimento.
**Requisitos associados** | RF-005 e RF-009
**Resultado esperado** | Espera-se que o usuário consiga:<br>1) realizar a pesquisa, utilizando os filtros por tipo de estabelecimento e por cidade;<br>2) selecionar o estabelecimento comercial privado desejado;<br>3) ser redirecionado para a página das informações do estabelecimento comercial privado selecionado.
**Página** | Destinos em MG

**Caso de Teste** | **CT-04 - Pesquisar locais públicos pet-friendly em MG, filtrando por cidade, e mostrar as informações do local público**
 :--------------: | ------------
**Procedimento**  | 1) Usuário acessa a página "Destinos em MG" e utiliza o filtro de pesquisa por tipo de estabelecimento, selecionando "ponto turístico". Também pode filtrar por cidade;<br>2) Serão mostradas as opções de locais públicos cadastrados no site para o usuário selecionar o desejado e ver as informações desse ponto turístico.
**Requisitos associados** | RF-006 e RF-010
**Resultado esperado** | Espera-se que o usuário consiga:<br>1) realizar a pesquisa, utilizando os filtros por tipo de estabelecimento e por cidade;<br>2) selecionar o ponto turístico desejado;<br>3) ser redirecionado para a página das informações do ponto turístico selecionado.
**Página** | Destinos em MG

**Caso de Teste** | **CT-05 - Inserir e consultar depoimentos/feedback sobre hospedagens e estabelecimentos pet friendly em Minas Gerais**
 :--------------: | ------------
**Procedimento**  | Usuário acessa a página "Destinos em MG"...
**Requisitos associados** | RF-007
**Resultado esperado** | Espera-se que o usuário consiga enviar o depoimento através do formulário contido na página...
**Dados de entrada** | Inserção de dados válidos no formulário de depoimento.
**Página** | ...

**Caso de Teste** | **CT-06 - Cadastrar novo estabelecimento**
 :--------------: | ------------
**Procedimento**  | 1) Usuário acessa a página "Destinos em MG" e clica no botão "Cadastrar Estabelecimento";<br>2) O usuário é redirecionado para a página de formulário onde preencherá as informações do estabelecimento que deseja cadastrar: nome, tipo do estabelecimento, e-mail, telefone, endereço, cidade, estado, website, instagram, descrição, upload de foto e texto acessível da foto. O usuário submete o formulário ao clicar no botão "enviar";<br>3) O formulário valida os dados e informa ao usuário se o cadastro foi realizado ou não;<br>4) Os dados são armazenados caso sejam validados e o usuário é redirecionado para a página "Destinos em MG".
**Requisitos associados** | RF-011
**Resultado esperado** | Espera-se que o usuário consiga enviar as informações do estabelecimento através do formulário contido na página e seja redirecionado para a página "Destinos em MG" 
**Dados de entrada** | Inserção de dados válidos no formulário de informações do estabelecimento.
**Página** | Destinos em MG

**Caso de Teste** | **CT-07 - Cadastrar depoimento com perfil de usuário anônimo**
 :--------------: | ------------
**Procedimento**  | Usuário acessa a página "Destinos em MG"...
**Requisitos associados** | RF-012
**Resultado esperado** | Espera-se que o usuário consiga ... 
**Dados de entrada** | Inserção de dados válidos ...
**Página** | ...

**Caso de Teste** | **CT-08 - Enviar depoimento com usuário logado - Criar conta de usuário parte 1**
 :--------------: | ------------
**Procedimento**  | 1) Usuário acessa página "..." onde estará o formulário de depoimentos e clica na opção de efetuar o "login";<br>2) O usuário será redirecionado para a página "Entre" que contém o formulário para o usuário que já possui conta cadastrada realizar o login ou a opção de criar conta;<br>3) Supondo que o usuário ainda não tenha conta cadastrada, ao clicar na opção de "criar conta", o usuário é redirecionado para o formulário de cadastro onde deverá preencher os campos: nome, usuário, e-mail, senha e enviar uma foto;<br>4) O formulário valida as informações e retorna se o cadastro foi realizado ou não;<br>5) Os dados são armazenados caso sejam validados e o usuário é redirecionado para a página "Entre".
**Requisitos associados** | RF-012
**Resultado esperado** | Espera-se que o usuário consiga cadastrar a conta e prosseguir para a parte 2 do cadastro.
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro.
**Página** | ...

**Caso de Teste** | **CT-09 - Enviar depoimento com usuário logado - Criar conta de usuário parte 2**
 :--------------: | ------------
**Procedimento**  | 1) Usuário preenche as informações de login na página "Entre": e-mail/usuário e senha;<br>2) O formulário valida os dados e retorna para o usuário caso não sejam;<br>3) Os dados são armazenados caso sejam validados e o usuário é redirecionado para cadastrar o depoimento permanecendo logado.
**Requisitos associados** | RF-012
**Resultado esperado** | Espera-se que o usuário consiga cadastrar um depoimento estando logado. 
**Dados de entrada** | Inserção de dados válidos no formulário de login.
**Página** | ...


## Registro dos Testes de Software


|**Caso de Teste**                                 |**CT-01 - Visualizar informações de regras de viagem com pet por diferentes meios de transporte**                                  |
|---|---|
|**Requisito Associado** | RF-001 - Disponibilizar área com informações com regras de viagem de avião com pet.<br>RF-002 - Disponibilizar área com informações com regras de viagem de ônibus com pet.<br>RF-003 - Disponibilizar área com informações com regras de viagem de carro com pet.|
|**Link do vídeo do teste realizado:** | https://drive.google.com/file/d/1aUTIYXBmX4qBlZl6yjuhqyo0n3u9uflU/view?usp=sharing|
|**Resultado obtido** | Sucesso |

|**Caso de Teste**                                 |**CT-02 - Pesquisar hospedagens pet-friendly em MG, filtrando por cidade, e mostrar as informações da hospedagem**                                         |
|---|---|
|**Requisito Associado** | RF-004 - Usuários não autenticados podem se cadastrar para criar uma conta e serem autenticados.<br>RF-008 - Disponibilizar funcionalidade que permita pesquisar hospedagens pet friendly em Minas Gerais.|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1HHsiQ_ozbxNuG9HzpWj9ChW_dBNcsDjd/view?usp=sharing |
|Resultado obtido | Sucesso |

|**Caso de Teste**                                 |**CT-03 - Pesquisar estabelecimentos comerciais privados pet-friendly em MG, filtrando por cidade, e mostrar as informações do estabelecimento**                                         |
|---|---|
|**Requisito Associado** | RF-005 - Disponibilizar área com informações de estabelecimentos comerciais privados pet friendly em Minas Gerais.<br>RF-009 - Disponibilizar funcionalidade que permita pesquisar estabelecimentos comerciais privados pet friendly em Minas Gerais.|
|**Link do vídeo do teste realizado:** | https://drive.google.com/file/d/1HHsiQ_ozbxNuG9HzpWj9ChW_dBNcsDjd/view?usp=sharing |
|**Resultado obtido** | Sucesso |

|**Caso de Teste**                                 |**CT-04 - Pesquisar locais públicos pet-friendly em MG, filtrando por cidade, e mostrar as informações do local público**                                         |
|---|---|
|**Requisito Associado** | RF-006 - Disponibilizar área com informações de locais públicos pet friendly em Minas Gerais.<br>RF-010 - Disponibilizar funcionalidade que permita pesquisar locais publicos pet friendly em Minas Gerais.|
|**Link do vídeo do teste realizado:** | https://drive.google.com/file/d/1HHsiQ_ozbxNuG9HzpWj9ChW_dBNcsDjd/view?usp=sharing |
|**Resultado obtido** | Sucesso |

|**Caso de Teste**                                 |**CT-05 - Inserir e consultar depoimentos/feedback sobre hospedagens e estabelecimentos pet friendly em Minas Gerais**                                         |
|---|---|
|**Requisito Associado** | RF-007 - Disponibilizar página em que o usuário poderá inserir e consultar depoimentos/feedback sobre hospedagens e estabelecimentos pet friendly em Minas Gerais.|
|**Link do vídeo do teste realizado:** | ... |
|**Resultado obtido** | Sucesso |

|**Caso de Teste**                                 |**CT-06 - Cadastrar novo estabelecimento**                                         |
|---|---|
|**Requisito Associado** | RF-011 - Disponibilizar página para proprietários de estabelecimentos enviearem informações sobre seus negócios para serem avaliadas e adicionadas à lista de hospedagens e locais pet friendly.|
|**Link do vídeo do teste realizado:** | ... |
|**Resultado obtido** | Sucesso |

|**Caso de Teste**                                 |**CT-07 - Cadastrar depoimento com perfil de usuário anônimo**                                         |
|---|---|
|**Requisito Associado** | RF-012 - Disponibilizar funcionalidade que permita definir perfil de usuário anônimo ou identificado para depoimentos.|
|**Link do vídeo do teste realizado:** | https://drive.google.com/file/d/16fFxEAoIzBOiGYL0_-YhiX07-2rT-lAZ/view?usp=drivesdk |
|**Resultado obtido** | Sucesso |

|**Caso de Teste**                                 |**CT-08 - Enviar depoimento com usuário logado - Criar conta de usuário**                                         |
|---|---|
|**Requisito Associado** | RF-012 - Disponibilizar funcionalidade que permita definir perfil de usuário anônimo ou identificado para depoimentos.|
|**Link do vídeo do teste realizado:** | ... |
|**Resultado obtido** | Sucesso |

|**Caso de Teste**                                 |**CT-09 - Enviar depoimento com usuário logado - Efetuar Login (usuário autenticado)**                                         |
|---|---|
|**Requisito Associado** | RF-012 - Disponibilizar funcionalidade que permita definir perfil de usuário anônimo ou identificado para depoimentos.|
|**Link do vídeo do teste realizado:** | ... |
|**Resultado obtido** | Sucesso |


## Avaliação dos Testes de Software

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.



## Testes de unidade automatizados (Opcional)

Se o grupo tiver interesse em se aprofundar no desenvolvimento de testes de software, ele podera desenvolver testes automatizados de software que verificam o funcionamento das funções JavaScript desenvolvidas. Para conhecer sobre testes unitários em JavaScript, leia o documento  [Ferramentas de Teste para Java Script](https://geekflare.com/javascript-unit-testing/).


# Testes de Usabilidade

O objetivo do Plano de Testes de Usabilidade é obter informações quanto à expectativa dos usuários em relação à  funcionalidade da aplicação de forma geral.

Para tanto, elaboramos quatro cenários, cada um baseado na definição apresentada sobre as histórias dos usuários, definido na etapa das especificações do projeto.

Foram convidadas quatro pessoas que os perfis se encaixassem nas definições das histórias apresentadas na documentação, visando averiguar os seguintes indicadores:

Taxa de sucesso: responde se o usuário conseguiu ou não executar a tarefa proposta;

Satisfação subjetiva: responde como o usuário avalia o sistema com relação à execução da tarefa proposta, conforme a seguinte escala:

1. Péssimo; 
2. Ruim; 
3. Regular; 
4. Bom; 
5. Ótimo.

Tempo para conclusão da tarefa: em segundos, e em comparação com o tempo utilizado quando um especialista (um desenvolvedor) realiza a mesma tarefa.

Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.


Apresente os cenários de testes utilizados na realização dos testes de usabilidade da sua aplicação. Escolha cenários de testes que demonstrem as principais histórias de usuário sendo realizadas. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)


## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você é uma pessoa que deseja comprar um iphone. Encontre no site um iphone e veja detalhes de localização e contato da loja que anunciando. |
| 2             | Você é uma pessoa que deseja comprar um smartphone até R$ 2.000,00. Encontre no site smartphone's nessa faixa de preço. |



## Registro de Testes de Usabilidade

Cenário 1: Você é uma pessoa que deseja comprar um iphone. Encontre no site um iphone e veja detalhes de localização e contato da loja que anunciando.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 27.87 segundos                  |
| 2       | SIM             | 5                    | 17.11 segundos                  |
| 3       | SIM             | 5                    | 39.09 segundos                  |
|  |  |  |  |
| **Média**     | 0%           | 0                | 0 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 8.66 segundos |


    Comentários dos usuários: Achei o site muito bom e intuitivo. 
    Não tive dificuldades e acho que ficou bem intuitivo.




Cenário 2: Você é uma pessoa que deseja comprar um smartphone até R$ 2.000,00. Encontre no site smartphone's nessa faixa de preço.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 22.54 segundos                          |
| 2       | SIM             | 5                    | 31.42 segundos                          |
| 3       | SIM             | 5                    | 36.21 segundos                          |
|  |  |  |  |
| **Média**     | 0%           | 0                | 0 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 13.57 segundos |


    Comentários dos usuários: O site é fácil de acessar, mas algumas páginas poderiam 
    redirecionar a gente automaticamente para outras. Senti a falta de mais opções de filtros, 
    tanto na hora da pesquisa, quanto depois dela, nos resultados.




## Avaliação dos Testes de Usabilidade


Tomando como base os resultados obtidos, foi possível verificar que a aplicação web apresenta bons resultados quanto à taxa de sucesso na interação dos usuários, tendo em vista que os cenários propostos foram concluídos com sucesso.

Além disso, a aplicação obteve também uma elevada satisfação subjetiva dos usuários no momento que realizavam os cenários propostos. Prova são as médias das avaliações em cada um dos cenários, que variou entre 4 (bom) e 5 (ótimo).

Com relação ao tempo para conclusão de cada tarefa/cenário, notamos discrepância entre a média de tempo dos usuários e o tempo do especialista/desenvolvedor em todos os cenários. Tal discrepância, em certa medida, é esperada, tendo em vista que o desenvolvedor já tem prévio conhecimento de toda a interface da aplicação, do posicionamento dos elementos, lógica de organização das páginas, etc.

Contudo, tendo em vista que a diferença foi relevante (por exemplo, 113 segundos — média usuários — contra 25 segundos — especialista — no cenário três), e ainda os comentários feitos por alguns usuários, entendemos haver oportunidades de melhoria na usabilidade da aplicação.



