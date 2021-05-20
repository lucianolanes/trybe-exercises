const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const motoboy = order.order.delivery.deliveryPerson;
  const cliente = order.name;
  const fone = order.phoneNumber;
  const rua = order.address.street;
  const numCasa = order.address.number;
  const apto = order.address.apartment;
  
  return `Olá ${motoboy}, entregar para: ${cliente}, Telefone ${fone} R.${rua}, Nº${numCasa}, AP:${apto}.`;
}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const novoCliente = order.name = 'Luiz Silva';
  const pizzas = Object.keys(order.order.pizza);
  const refresco = order.order.drinks.coke.type;
  const precoMargherita = order.order.pizza.margherita.price;
  const precoPepperoni = order.order.pizza.pepperoni.price;
  const precoCoca = order.order.drinks.coke.price;


  return `Olá ${novoCliente}, o seu pedido de ${pizzas} e ${refresco} é de R$${precoMargherita + precoPepperoni + precoCoca}.00`;
}

console.log(orderModifier(order));