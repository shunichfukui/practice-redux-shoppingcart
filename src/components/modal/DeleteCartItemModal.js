import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../features/modal/DeleteCartItemModal';
import { clearCart, removeItem } from '../../features/cart/CartSlice';

const DeleteCartItemModal = () => {
  const dispatch = useDispatch();
  const { targetId } = useSelector((state) => state.modal);

  const ClearCartModal = () => {
    return (
      <>
        <div className='modal'>
            <h4>カートの中を全て空にしますか？</h4>
            <div className='btn-container'>
              <button className='btn confirm-btn' onClick={() => {
                dispatch(clearCart());
                dispatch(closeModal());
              }}>OK</button>
              <button className='btn clear-btn' onClick={() => dispatch(closeModal())}>キャンセル</button>
            </div>
        </div>
      </>
    );
  };

  const RemoveItemtModal = () => {
    return (
      <>
        <div className='modal'>
            <h4>アイテムをカートから削除しますか？</h4>
            <div className='btn-container'>
              <button className='btn confirm-btn' onClick={() => {
                dispatch(removeItem(targetId));
                dispatch(closeModal());
              }}>はい</button>
              <button className='btn clear-btn' onClick={() => dispatch(closeModal())}>いいえ</button>
            </div>
        </div>
      </>
    );
  };

  return (
    <aside className='modal-container'>
        {targetId ? <RemoveItemtModal /> : <ClearCartModal />}
    </aside>
  );
};

export default DeleteCartItemModal;