# Programação de Funcionalidades
Nesta seção, você encontrará informações sobre os artefatos e estruturas de dados desenvolvidos para cumprir os requisitos estabelecidos nas Especificações do Projeto. Também fornecemos instruções para acessar e verificar a implementação. As tecnologias empregadas incluem as linguagens HTML, CSS e JavaScript.

## Requisitos Atendidos

## Informações 
### Requisitos Funcionais

|ID    | Descrição do Requisito | Prioridade | Artefato Criado |
|------|------------------------|------------|-----------------|
|RF-001| Disponibilizar área com informações com regras de viagem de avião com pet | ALTA | transporte.html| 
|RF-002| Disponibilizar área com informações com regras de viagem de ônibus com pet | ALTA | transporte.html| 
|RF-003| Disponibilizar área com informações com regras de viagem de carro com pet | ALTA | transporte.html|   
|RF-004| Disponibilizar área com informações de hospedagens *pet friendly* em Minas Gerais | ALTA | transporte.html|   
|RF-005| Disponibilizar área com informações de estabelecimentos comerciais privados *pet friendly* em Minas Gerais | ALTA | transporte.html|  
|RF-006| Disponibilizar área com informações de locais públicos *pet friendly* em Minas Gerais | ALTA | transporte.html|  

Para atender aos requisitos RF-001, RF-001, RF-002, RF-003, RF-004, RF-005 e RF-006 foi desenvolvido a página Transporte.
Ao acessar a página Transporte, será exibo seções descrevendo os informações e dicas de viagens e estabelecimentos *pet friendly*.

![Titulo](img/Transporte1.png)
![Titulo](img/transporte2.png)

Esta página HTML contém seções que fornecem informações e dicas úteis sobre como viajar com pets. Também inclui detalhes sobre vários tipos de acomodações e estabelecimentos relacionados.

## Pesquisa 

Para atender aos requisitos RF-008, RF-009 e RF-010 foi desenvolvido a página destino.
Ao acessar a página de destino, você encontrará um filtro que permite pesquisar estabelecimentos por tipo e cidade. A página também apresenta cards com informações detalhadas sobre cada estabelecimento específico.

|RF-008| Disponibilizar funcionalidade que permita pesquisar hospedagens *pet friendly* em Minas Gerais | MÉDIA | 
|RF-009| Disponibilizar funcionalidade que permita pesquisar estabelecimentos comerciais privados *pet friendly* em Minas Gerais | MÉDIA |
|RF-010| Disponibilizar funcionalidade que permita pesquisar locais publicos *pet friendly* em Minas Gerais | MÉDIA |

![Titulo](img/destinos1.png)

## Cadastro 

Para atender ao requisito RF-011 foi desenvolvido a página cadastro estabelecimento.
Ao acessar a página de Cadastro de estabelecimento, você encontrará um formulario que permite cadastrar estabelecimentos.

|RF-011| Disponibilizar página para proprietários de estabelecimentos enviearem informações sobre seus negócios para serem avaliadas e adicionadas à lista de hospedagens e locais pet friendly  | MÉDIA |

![Titulo](img/Cadastro_Estabelecimento.png)


## Descrição das estruturas:

## Notícia
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | Numero (Inteiro)  | Identificador único da notícia            | 1                                              |
| Título         | Texto             | Título da notícia                         | Sistemas de Informação PUC Minas é o melhor                                   |
| Conteúdo       | Texto             | Conteúdo da notícia                       | Sistemas de Informação da PUC Minas é eleito o melhor curso do Brasil                            |
| Id do usuário  | Numero (Inteiro)  | Identificador do usuário autor da notícia | 1                                              |

