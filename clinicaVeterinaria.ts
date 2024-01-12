 //Sistema de Gestão de Clínicas Veterinárias
class Animal {
  nome: string;
  especie: string;
  raca: string;
  cor: string;
  idade: number;

  constructor(nome: string, especie: string, raca: string, cor: string, idade: number) {
    this.nome = nome;
    this.especie = especie;
    this.raca = raca;
    this.cor = cor;
    this.idade = idade;
  }
}
class Cachorro extends Animal {
  private porte: string;
  constructor(nome: string, especie: string, raca: string, cor: string, idade: number, porte: string) {
    super(nome, especie, raca, cor, idade);
    this.porte = porte;
  }
}
class Gato extends Animal {
  private pelagem: string;
  constructor(nome: string, especie: string, raca: string, cor: string, idade: number, pelagem: string) {
    super(nome, especie, raca, cor, idade);
    this.pelagem = pelagem;
  }
}
class Passaro extends Animal {
  private porte: string;
  constructor(nome: string, especie: string, raca: string, cor: string, idade: number, porte: string) {
    super(nome, especie, raca, cor, idade);
    this.porte = porte;
  }
}
class Peixe extends Animal {
  private tipo: string;
  constructor(nome: string, especie: string, raca: string, cor: string, idade: number, tipo: string) {
    super(nome, especie, raca, cor, idade);
    this.tipo = tipo;
  }
}
class Roedor extends Animal {
  private porte: string;
  constructor(nome: string, especie: string, raca: string, cor: string, idade: number, porte: string) {
    super(nome, especie, raca, cor, idade);
    this.porte = porte;
  }
}

class Servico {
  private nome: string;
  private preco: number;
  private status: boolean;
  private id: number;
  constructor(nome: string, preco: number, status: boolean, id: number) {
    this.nome = nome;
    this.preco = preco;
    this.status = status;
    this.id = id;
  }
}
class Banho extends Servico {
  private tipo: string;
  constructor(nome: string, preco: number, status: boolean, id: number, tipo: string) {
    super(nome, preco, status, id);
    this.tipo = tipo;
  }
}
class Tosa extends Servico {
  private tipo: string;
  constructor(nome: string, preco: number,status: boolean,  id: number, tipo: string) {
    super(nome, preco, status,id);
    this.tipo = tipo;
  }
}
class Consulta extends Servico {
  private tipo: string;
  constructor(nome: string, preco: number,status: boolean, id: number, tipo: string) {
    super(nome, preco, status, id);
    this.tipo = tipo;
  }
}
class Vacina extends Servico {
  private aplicada: boolean;
  constructor(nome: string, preco: number, status: boolean, id: number,aplicada: boolean) {
    super(nome, preco, status, id);
    this.aplicada = aplicada;
  }
  aplicarVacina(): string {
    if (this.aplicada) {
      return 'Vacina ja aplicada';
    }
    this.aplicada = true;
    return 'Vacina aplicada com sucesso';
  }
}

class Reserva {
  data: string;
  horario: number;
  constructor(data: string, horario: number) {
    this.data = data;
    this.horario = horario;
  }
}
class Agendamento {
  private reservas : Reserva[] = [];
  private servico: Servico;
  private animal:Animal;
  constructor(servico: Servico, animal: Animal) {
    this.servico = servico;
    this.animal = animal;
  }
  horarioDisponivel(data:string, horario:number):boolean {
    return this.reservas.every(reserva => reserva.data !== data || reserva.horario !== horario);
  }//esse trecho de código verifica se o horário esta disponível para agendamento
  adicionarReserva(data: string, horario: number): string {
    if (!this.horarioDisponivel(data, horario) || horario < 8 || horario > 18) {
      return 'Horario indisponível';
    }
    try {
      const novaReserva: Reserva = { data, horario };
      this.reservas.push(novaReserva);
      const mensagem = `Reserva para ${this.animal.nome} no dia ${data} às ${horario} horas`;
      return mensagem;
    } catch (error) {
      console.error(error.message);
      return 'Horario indisponível'; 
    }
  }
}

class Produto {
  private nome: string;
  private preco: number;
  private quantidade: number;
  constructor(nome: string, preco: number, quantidade: number) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }
  get getNome() {
    return this.nome;
  }
  get getPreco() {
    return this.preco;
  }
  get getQuantidade() {
    return this.quantidade;
  }
  set setNome(nome: string) {
    this.nome = nome;
  }
  set setPreco(preco: number) {
    this.preco = preco;
  }
  set setQuantidade(quantidade: number) {
    this.quantidade = quantidade;
  }
 addEstoque(quantidade: number): string {
    try {
      if (quantidade > this.quantidade) {
        throw new Error('Quantidade indisponível');
      }
      this.quantidade -= quantidade;
      const mensagem = `Comprado ${quantidade} itens`;
      return mensagem;
    } catch (error) {
      console.error(error.message);
      return 'Estoque indisponível';
    }
 }
 remEstoque(quantidade: number): string {
    try {
      if (quantidade > this.quantidade) {
        throw new Error('Quantidade indisponível');
      }
      this.quantidade += quantidade;
      const mensagem = `Vendido ${quantidade} itens`;
      return mensagem;
    } catch (error) {
      console.error(error.message);
      return 'Estoque indisponível';
    }
 }
}
class Venda {
  quantidade: number;
  valor: number;
  constructor(quantidade: number, valor: number) {
    this.quantidade = quantidade;
    this.valor = valor;
  }
  processarVenda(valor:number, quantidade:number): string {
    
    if (quantidade > this.quantidade) {
      throw new Error('Quantidade indisponível');
    }
    this.quantidade -= quantidade;
    const mensagem = `Pagamento de R$ ${valor.toFixed(2)} processado com sucesso!`;
    return mensagem;
  }
}
class VendaVista extends Venda {
  processarVenda(valor:number, quantidade:number): string {
    try {
      if (quantidade > this.quantidade) {
        throw new Error('Quantidade indisponível');
      }
      this.quantidade -= quantidade;
      const mensagem = `Pagamento a vista de R$ ${valor.toFixed(2)} processado com sucesso!`;
      return mensagem;
    } catch (error) {
      console.error(error.message);
      return 'Estoque indisponível';
    }
  }
}
class VendaCartao extends Venda {
  processarVenda(valor:number, quantidade:number): string;
  processarVenda(valor:number, quantidade:number,parcelas:number): string;
  processarVenda(valor:number, quantidade:number,parcelas?:number): string{
    
   try {
    if (quantidade > this.quantidade) {
      throw new Error('Quantidade indisponível');
    }
    if(parcelas){
      return `Pagamento via cartão de ${parcelas}x de R$ ${valor.toFixed(2)} processado com sucesso!`;
    }
    this.quantidade -= quantidade;
    const mensagem = `Pagamento via cartão de R$ ${valor.toFixed(2)} processado com sucesso!`;
    return mensagem;
   } catch (error) {
    console.error(error.message);
    return 'Estoque indisponível';
   }
  }
}
class VendaPix extends Venda {
  processarVenda(valor:number, quantidade:number): string {
   try {
    if (quantidade > this.quantidade) {
      throw new Error('Quantidade indisponível');
    }
    this.quantidade -= quantidade;
    const mensagem = `Pagamento via pix de R$ ${valor.toFixed(2)} processado com sucesso!`;
    return mensagem;
   } catch (error) {
    console.error(error.message);
    return 'Estoque indisponível';
   }
  }
}