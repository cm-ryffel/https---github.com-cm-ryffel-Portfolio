function Drawer() {
    return(
        <div style={{display:'none'}} className="overlay">
        <div className="draver">
        <div className="d-flex justify-between">
        <h2 className="cu-p mb-30">Корзина</h2>
        <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
        </div>

        <div className="items">

        <div className="cartItem d-flex align-center mb-20">
        <div 
            style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }} 
            className="cartItemImg"></div>

          <div className="mb-20 flex">
            <p className="mb-5">Мужские кроссовки Nike Blazer Mid Suede</p>
            <b>12 999 руб.</b>
          </div>
          <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
        </div>

        <div className="cartItem d-flex align-center mb-20">
        <div 
            style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }} 
            className="cartItemImg"></div>

          <div className="mb-20 flex">
            <p className="mb-5">Мужские кроссовки Nike Blazer Mid Suede</p>
            <b>12 999 руб.</b>
          </div>
          <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
        </div>

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
      </div>

    )
}

export default Drawer