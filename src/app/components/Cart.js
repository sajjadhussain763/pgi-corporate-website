'use client';

import { useCart } from '../context/CartContext';
import styles from './Cart.module.css';

export default function Cart() {
  const { items, isOpen, totalPrice, dispatch } = useCart();

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={() => dispatch({ type: 'SET_OPEN', payload: false })}>
      <div className={styles.drawer} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h3>Your Training Order</h3>
          <button className={styles.closeBtn} onClick={() => dispatch({ type: 'SET_OPEN', payload: false })}>
            ✕
          </button>
        </div>

        <div className={styles.items}>
          {items.length === 0 ? (
            <div className={styles.empty}>
              <div className={styles.emptyIcon}>🛒</div>
              <p>Your order is empty. Select a programme to get started.</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className={styles.item}>
                <div className={styles.itemInfo}>
                  <p className={styles.itemName}>{item.name}</p>
                  <p className={styles.itemPrice}>£{item.price.toLocaleString()}</p>
                </div>
                <div className={styles.controls}>
                  <button 
                    onClick={() => dispatch({ type: 'UPDATE_QTY', payload: { id: item.id, quantity: item.quantity - 1 } })}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button 
                    onClick={() => dispatch({ type: 'UPDATE_QTY', payload: { id: item.id, quantity: item.quantity + 1 } })}
                  >
                    +
                  </button>
                  <button 
                    className={styles.remove}
                    onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className={styles.footer}>
            <div className={styles.totalRow}>
              <span>Subtotal</span>
              <span>£{totalPrice.toLocaleString()}</span>
            </div>
            <div className={styles.totalRow}>
              <span>VAT (included)</span>
              <span>£0</span>
            </div>
            <div className={`${styles.totalRow} ${styles.grandTotal}`}>
              <span>Total Amount</span>
              <span>£{totalPrice.toLocaleString()}</span>
            </div>
            <button className={`btn btn-primary ${styles.checkoutBtn}`}>
              Checkout Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
