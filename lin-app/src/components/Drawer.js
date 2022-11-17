function Drawer({onClose, onRemove, items = [] }) {
    return(
        <div className="overlay">
        <div className="draver">
        <div className="d-flex justify-between">
        <h2 className="cu-p mb-30">Cart</h2>
        <img onClick={onClose} className="cu-p" src="/img/btn-remove.svg" alt="Remove" />
        </div>

        {
          items.length > 0 ?  (
            <div className="d-flex flex-column container">
                        <div className="items">
          {items.map((obj) => (
                    <div className="cartItem d-flex align-center mb-20">
                    <div 
                        style={{ backgroundImage: `url(${obj.imageUrl})` }} 
                        className="cartItemImg">
                    </div>
            
                      <div className="mb-20 flex">
                        <p className="mb-5">{obj.title}</p>
                        <b>{obj.price} руб.</b>
                      </div>
                      <img 
                      onClick={() => onRemove(obj.id)} 
                      className="removeBtn" 
                      src="/img/btn-remove.svg" 
                      alt="Remove" 
                      />
                    </div>            
          ))}
        </div>
                <div className="cartTotalBlock">
                <ul>
                  <li>
                    <span>Итого:</span>
                    <div></div>
                    <b>21 498 руб.</b>
                  </li>
                  <li>
                  <span>Налог 5%:</span>
                    <div></div>
                    <b>1074 руб.</b>
                  </li>
                </ul>
                <button className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="Arrow" /></button>
        
                </div>

            </div>
        ) : (
          <div className="cartEmpty d-flex align-center justyfy-center flex-column flex">
          <img className="mb-20 box" width={120} height={120} src="/img/empty-cart.jpg" alt="emptyCart" />
          <h2>Cart is empty </h2>
          <p className="opacity-6">Add an item to your cart to place an order</p>
          <button onClick={onClose} className="greenButton">
            <img src="/img/arrow.svg" alt="arrow" />
            Back to order
          </button>
        </div>
        )}

        </div>
      </div>

    )
}

export default Drawer