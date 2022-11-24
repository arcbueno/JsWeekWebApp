import closeIcon from '../../assets/images/close-icon.svg';
import { Order } from '../../types/Order';
import { Actions, ModalBody, OrderDetail, Overlay } from './style';
import { formatCurrency } from '../../Utils/formatCurrency';

interface OrderModalProps {
  visible: boolean;
  order: Order | null;
  onClose(): void;


}

export function OrderModal({ visible, order, onClose }: OrderModalProps) {
  if (!visible || !order) {
    return null;
  }

  const total = order.products.reduce((total, { product, quantity }) => {
    return total + (product.price * quantity);
  }, 0);


  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Mesa {order.table}</strong>
          <button type="button">
            <img src={closeIcon} alt="CLOSE" onClick={onClose} />
          </button>
        </header>

        <div className="status-container">
          <small>
            Status do Pedido
          </small>
          <div>
            <span>
              {order.status === 'WAITING' && '⏱'}
              {order.status === 'IN_PRODUCTION' && '👨‍🍳'}
              {order.status === 'DONE' && '✅'}
            </span>

            <strong>
              {order.status === 'WAITING' && 'Fila de espera'}
              {order.status === 'IN_PRODUCTION' && 'Em produção'}
              {order.status === 'DONE' && 'Pronto!'}
            </strong>

            <OrderDetail>
              <strong>
                Itens
              </strong>

              <div className="order-itens">
                {order.products.map(({ _id, product, quantity }) => (
                  <div className='item' key={_id}>
                    <img
                      src="https://www.comidaereceitas.com.br/img/sizeswp/1200x675/2007/12/Pizza_quatro_queijossss.jpg"
                      // src={`http://localhost:3001/uploads/${product.imagePath}`}
                      // alt={product.name}
                      width="56"
                      height="28.51"
                    />

                    <span className='quantity'> {quantity}x</span>

                    <div className="product-details">
                      <strong>{product.name}</strong>
                      <span>{formatCurrency(product.price)}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="total">
                <span>Total</span>
                <strong>{formatCurrency(total)}</strong>
              </div>

            </OrderDetail>

            <Actions>
              <button type='button' className='primary'>
                <span>👨‍🍳</span>
                <strong>Iniciar produção</strong>
              </button>
              <button type='button' className='secondary'>
                Cancelar pedido
              </button>
            </Actions>

          </div>
        </div>
      </ModalBody>
    </Overlay>
  );
}

