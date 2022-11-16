import {Link} from 'react-router-dom'

function Header (props){
  console.log(props)
    return(
        <header className="d-flex justify-between align-center p-40">
      <Link to='/'>
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/satanLinPhoto/logo.jpg" alt="Logo" />
        <div>
          <h3 className="text-uppercase"> Nasty S.Lin </h3>
          <p className="opacity-5">Custom Store</p>
        </div>
        </div>
      </Link>
        <ul className="d-flex">
          <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={18} height={18} src="/img/cart.svg" alt="Корзина" />
            <span>1205 руб.</span>
          </li>
          <li className="mr-20 cu-p">
            <Link to='/favorites'>
              <img width={18} height={18} src="/img/heart.svg" alt="Закладки" />
            </Link>
          </li>
          <li>
          <img width={18} height={18} src="/img/user.svg" alt="Профиль" />
          </li>
        </ul>
      </header>

    )
}

export default Header