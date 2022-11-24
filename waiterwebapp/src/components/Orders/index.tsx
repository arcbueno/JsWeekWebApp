import { Order } from '../../types/Order';
import { OrdersBoards } from '../OrdersBoard';
import { Container } from './style';

const orders: Order[] = [
  {
    '_id': 'teste123',
    'table': '1',
    'status': 'DONE',
    'products': [
      {
        'product': {
          'name': 'Pizza de quatro queijos',
          'imagePath': '123.png',
          'price': 40,
        },
        'quantity': 3,
        '_id': 'pizza123'
      },
      {
        'product': {
          'name': 'Pizza de quatro queijos',
          'imagePath': '123.png',
          'price': 40,
        },
        'quantity': 3,
        '_id': 'pizza123'
      },
      {
        'product': {
          'name': 'Pizza de quatro queijos',
          'imagePath': '123.png',
          'price': 40,
        },
        'quantity': 3,
        '_id': 'pizza123'
      },
      {
        'product': {
          'name': 'Pizza de quatro queijos',
          'imagePath': '123.png',
          'price': 40,
        },
        'quantity': 3,
        '_id': 'pizza123'
      },
    ]
  },
  {
    '_id': 'teste123',
    'table': '2',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Pizza de quatro queijos',
          'imagePath': '123.png',
          'price': 40,
        },
        'quantity': 3,
        '_id': 'pizza123'
      },
      {
        'product': {
          'name': 'Pizza de quatro queijos',
          'imagePath': '123.png',
          'price': 40,
        },
        'quantity': 3,
        '_id': 'pizza123'
      },
    ]
  }
];

export function Orders() {
  return (
    <Container>
      <OrdersBoards
        icon="⏱"
        title="Fila de espera"
        orders={orders}
      />
      <OrdersBoards
        icon="👨‍🍳"
        title="Em preparação"
        orders={[]}
      />
      <OrdersBoards
        icon="✅"
        title="Pronto!"
        orders={[]}
      />
    </Container >
  );
}
