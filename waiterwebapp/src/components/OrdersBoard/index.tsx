import { Order } from '../../types/Order';
import { Board, OrdersContainer } from './style';
import { useState } from 'react';
import { OrderModal } from '../OrderModal';

interface OrderBoardProps {
  icon: string;
  title: string;
  orders: Order[],
}

export function OrdersBoards({ icon, title, orders }: OrderBoardProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<null | Order>(null);

  function handleOpenModal(order: Order) {
    setIsModalVisible(true);
    setSelectedOrder(order);
  }

  function handleCloseModal() {
    setIsModalVisible(false);
    setSelectedOrder(null);
  }


  return (

    <Board>
      <OrderModal
        visible={isModalVisible}
        order={selectedOrder}
        onClose={handleCloseModal}
      />


      <header>
        <span>
          {icon}
        </span>
        <strong>{title}</strong>
        <span>({orders?.length})</span>
      </header>


      {orders.length > 0 && (<OrdersContainer>
        {orders.map((order) => (
          <button type="button" key={order._id} onClick={() => handleOpenModal(order)}>
            <strong>Mesa {order.table}</strong>
            <span>{order.products.length}</span>
          </button>
        ))
        }
      </OrdersContainer>
      )}
    </Board>
  );
}
