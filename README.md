# Gerenciador de Contatos
API feita como desafio da semana 14 da [{reprograma}](https://github.com/reprograma)

## Contrato da API

Endpoints|Descrição|
---|----|
"/"| Retorna index com apresentação { mensagem: bem vinda a lista de contatos }|---
 "/contatos/"| Retorna todos os dados do banco de dados|
 "/contatos/criar"| Cria novo contato e retorna mensagem amigável
 "/contatos/nome/|[NOME]" Retorna contato por nome específico
 "/contatos/id/[ID]" | Retorna contato por id específico|
 "/contatos/deletar/[ID]" | Deleta contato por id específico e retorna mensagem amigávele retorna mensagem amigável | (i
 "/contatos/atualizar/telefone/[ID]" | Atualiza somente telefone do contato por id específico e retorna mensagem amigável |
 "/contatos/atualizar/[ID]" |Atualiza completamente contato e retorna mensagem amigável (id não pode ser modificado)


### Arquitetura MVC

![MVC](./api-contatos\img\CRUD.png)



### Para começar
`npm install e npm start`