import './Menu.css'
import menu1 from '../../Assets/menu-1.webp'
import menu2 from '../../Assets/menu-2.png'
import menu3 from '../../Assets/menu-3.png'
import menu4 from '../../Assets/menu-4.png'
import menu5 from '../../Assets/menu-5.png'
import menu6 from '../../Assets/menu-6.png'

const Menu = () => {
  return (
    <section className="menu" id="menu">
            <h2 className="menu-heading">OUR MENU</h2>
            <span></span>
            <div className="menu-items">
                <div className="food">
                    <img src={menu1} alt="Hot Beverages menu" className="menu-img"/>
                    <h3 className="img-heading">Hot Beverages</h3>
                    <p className="menu-discription">Wide range of Steaming hot coffee to make you fresh and light.</p>
                </div>
                <div className="food">
                    <img src={menu2} alt="Cold Beverages menu" className="menu-img"/>
                    <h3 className="img-heading">Cold Beverages</h3>
                    <p className="menu-discription">Creamy and frothy cold coffee to make you cool.</p>
                </div>
                <div className="food">
                    <img src={menu3} alt="Refreshment Juice menu" className="menu-img"/>
                    <h3 className="img-heading">Refreshment</h3>
                    <p className="menu-discription">Fruit and icy refreshing drink to make feel refresh.</p>
                </div>
                <div className="food">
                    <img src={menu4} alt="Special Combos menu" className="menu-img"/>
                    <h3 className="img-heading">Special Combos</h3>
                    <p className="menu-discription">Your favorite eating and drinking combations.</p>
                </div>
                <div className="food">
                    <img src={menu5} alt="Dessert menu" className="menu-img"/>
                    <h3 className="img-heading">Dessert</h3>
                    <p className="menu-discription">Satiate your palate and take you on a culinary treat.</p>
                </div>
                <div className="food">
                    <img src={menu6} alt="Burger & French Fries menu" className="menu-img"/>
                    <h3 className="img-heading">Burger & French Fries</h3>
                    <p className="menu-discription">Quick bites to satisfy your small size hunger.</p>
                </div>
            </div>
        </section>
  )
}

export default Menu