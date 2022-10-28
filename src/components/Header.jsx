import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Menu from '@components/Menu';
import MyOrder from '@containers/MyOrder';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import AppContext from '@context/AppContext';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import styles from '@styles/Header.module.scss';

const Header = () => {
  const { state, toggleOrder, toggleMenu } = useContext(AppContext);
  const router = useRouter();
  return (
    <>
      <nav className={styles.Nav}>
        <Image src={menu} alt="menu" className={styles.menu} />
        <div className={styles['navbar-left']}>
          <Image
            src={logo}
            alt="logo"
            className={styles['nav-logo']}
            width={50}
            height={50}
            onClick={() => {
              router.push('/');
            }}
          />
          <ul>
            <li>
              <a href="/">All</a>
            </li>
            <li>
              <a href="/">Clothes</a>
            </li>
            <li>
              <a href="/">Electronics</a>
            </li>
            <li>
              <a href="/">Furnitures</a>
            </li>
            <li>
              <a href="/">Toys</a>
            </li>
            <li>
              <a href="/">Others</a>
            </li>
          </ul>
        </div>
        <div className={styles['navbar-right']}>
          <ul>
            <li className={`${styles['more-clickable-area']} ${styles['navbar-email']} ${styles['pointer']}`} onClick={() => toggleMenu()}>
              platzi@example.com
            </li>
            <li className={styles['navbar-shopping-cart']} onClick={() => toggleOrder()}>
              <Image className={`${styles['more-clickable-area pointer']}`} src={shoppingCart} alt="shopping cart" />
              {state && state.cart ? state.cart.length > 0 ? <div>{state.cart.length}</div> : null : null}
            </li>
          </ul>
        </div>
        {state ? state.menuIsOpen && <Menu /> : null}
      </nav>
      {state ? state.orderIsOpen && <MyOrder /> : null}
    </>
  );
};

export default Header;
