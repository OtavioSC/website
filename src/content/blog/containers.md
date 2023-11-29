---
title: "Docker as a learning tool"
description: "How I use docker to learn new programming languages"
pubDate: "Jun 26 2023"
heroImage: "/blog-placeholder-3.jpg"
---

![Containers](https://user-images.githubusercontent.com/54047040/248972188-b8ace05e-ba42-4c79-956b-27624eaefc03.jpg)

## Contexto

Mesmo gostando do ecossistema Javascript, no último ano venho tomando meu tempo livre pra estudar algumas linguagens que acredito que possam me mostrar caminhos diferentes de se pensar em desenvolvimento de software.

Exemplos como Clojure, Rust e OCaml são ótimos para criar esse tipo de "desconforto", devido as suas sintaxes, paradigmas e [Developer Experience](https://github.blog/2023-06-08-developer-experience-what-is-it-and-why-should-you-care/).

Após trabalhar com Rust, decidi que queria partir para uma linguagem da familia do Lisp, muito por influência de como são abordados seus conceitos no livro [How to Design Programs](https://htdp.org/) com a linguagem [Racket](https://htdp.org/).

### "Ta mas onde entram os containers nessa história?"

Como qualquer outra linguagem, o **Clojure** requer um ambiente específico de desenvolvimento para utilização de suas ferramentas, como depedências e pacotes próprios, o que no geral não é algo que eu gosto de manter no meu fluxo padrão de trabalho.

> Organizar um espaço separado para desenvolver em uma nova tecnologia é importante para garantir um menor risco de efeitos colaterais.

## Inspiração

Criar esse espaço é algo simples e que possue diversas alternativas, e mesmo já utilizando as Máquinas Virtuais que garantem um maior isolamento de recursos, foi após uma [aula de OCaml](https://www.youtube.com/watch?v=FOB2NKRJPmk&t=2735s) realizada pelo [Camilo Cunha](https://github.com/Camilotk) e pela galera da [UBL](https://github.com/Universidade-Livre/ciencia-da-computacao), que notei o quão mais fácil seria se eu migra-se esse fluxo para os containers.

Pois mesmo querendo algo a parte, eu ainda sim precisava que fosse de _rápido acesso e que mantesse meus esforços apenas no aprendizado do Clojure_. Foi então que eu pensei em um script simples que pudesse subir um container com uma imagem linux que eu desejasse e que persistisse suas alterações após fechar o ambiente.

## ![Ideia](https://user-images.githubusercontent.com/54047040/249013972-206ba1bf-dd35-4a2c-8714-55b2fcf74c60.jpg)

## Como criar o script no Linux

Primeiramente vou criar um arquivo com a extensão .sh, que será capaz de executar os comandos.

```shell
  touch script.sh
```

Vou acessar o script com meu editor de preferência (utilizarei o Neovim 🖤) para definir suas instruções.

```shell
  nvim script.sh
```

Dentro do arquivo, é necessário antes de tudo adicionar a notação abaixo para assim definir que o interpretador Bash deve executar o script.

```shell
  #!/bin/bash
```

Feito isso, criarei duas variáveis para facilitar alterações futuras no nome do container e também da escolha da imagem linux:

```shell
container_name="fedora-container"
image_name="fedora"
```

> vou utilizar fedora como exemplo, mas fique a vontade para escolher sua distro de preferência

Para que seja acessado o mesmo container caso ele já esteja em execução, o if abaixo verificará seu status através do _docker ps_ e fará um novo attach caso a condição seja verdadeira utilizando o _docker exec_:

```shell
if [ "$(docker ps -q -f name="$container_name")" ]; then
    echo "$container_name is already running. Attaching to it..."
    docker exec -it "$container_name" bash
```

Precisamos agora definir o que o script irá fazer caso não exista um container em execução com o nome que definimos na variável, listando os containers parados, gerando um _docker start_ e um novo attach:

```shell
    elif [ "$(docker ps -aq -f name="$container_name")" ]; then
      echo "Starting the existing $container_name container..."
      docker start "$container_name"
      docker exec -it "$container_name" bash
```

Por fim, finalizaremos essa condicional com o último caso, que seria se precisássemos criar um novo container com uma nova imagem:

```shell
else
    echo "Creating and starting a new container..."
    docker run -it --name "$container_name" "$image_name" bash
fi
```

Nosso arquivo ficou assim:

```shell
  #!/bin/bash

container_name="fedora-container"
image_name="fedora"

if [ "$(docker ps -q -f name="$container_name")" ]; then
    echo "$container_name is already running. Attaching to it..."
    docker exec -it "$container_name" bash
elif [ "$(docker ps -aq -f name="$container_name")" ]; then
    echo "Starting the existing $container_name container..."
    docker start "$container_name"
    docker exec -it "$container_name" bash
else
    echo "Creating and starting a new container..."
    docker run -it --name "$container_name" "$image_name" bash
fi
```

Devemos salvar nossas alterações e voltar para o terminal:

```shell
  :wq!
```

> sim, é possível sair do neovim

Antes de movermos o arquivo, vamos atribuir a permissão de execução para ele:

```shell
  chmod +x script.sh
```

E por fim, vamos movê-lo para o diretório _/usr/local/bin/_ e definir um alias alterando seu nome(nesse caso _fedora_)

```shell
  sudo mv script.sh /usr/local/bin/fedora
```

---

## Conclusão

Digitando _fedora_ no terminal, tivemos esse resultado:

![Fedora](https://user-images.githubusercontent.com/54047040/249010778-f4c939e7-4e9a-497f-a97b-e0464b488871.png)

Por já se referir a um container utilizado para os estudos do Clojure, os arquivos que criei com testes simples de funções ainda se mantém disponiveis para uso e com as ferramentas da linguagem funcionando corretamente.

### Obrigado por ter chegado até aqui e espero que tenha gostado.
