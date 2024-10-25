import styles from "./canteen.module.css";
import Header from "../header/header";
export default function Canteen() {
  return (
    <>
      <Header />
      <div className={styles.main}>
        <div className={styles.menu_container}>
          <h1 className={styles.main_head}>Our Delicious Menu</h1>
          {/* <!-- Breakfast Menu --> */}
          <div className={styles.menu_section}>
            <h2>Breakfast</h2>
            <div className={styles.menu_items}>
              <div className={styles.menu_item}>
                <img src="./img/pic1.jpg" alt="Pancakes" />
                <div className={styles.item_info}>
                  <h3>Pancakes</h3>
                  <p>Fluffy pancakes with syrup and berries.</p>
                  <p className={styles.price}>$5.99</p>
                </div>
              </div>

              <div className={styles.menu_item}>
                <img src="https://via.placeholder.com/120" alt="Omelette" />
                <div className={styles.item_info}>
                  <h3>Cheese Omelette</h3>
                  <p>Egg omelette stuffed with cheese and herbs.</p>
                  <p className={styles.price}>$4.99</p>
                </div>
              </div>
              <div className={styles.menu_item}>
                <img src="https://via.placeholder.com/120" alt="Toast" />
                <div className={styles.item_info}>
                  <h3>Avocado Toast</h3>
                  <p>Crispy toast topped with avocado and chili flakes.</p>
                  <p className={styles.price}>$6.99</p>
                </div>
              </div>
              <div className={styles.menu_item}>
                <img src="https://via.placeholder.com/120" alt="Smoothie" />
                <div className={styles.item_info}>
                  <h3>Berry Smoothie</h3>
                  <p>A blend of fresh berries and yogurt.</p>
                  <p className={styles.price}>$4.99</p>
                </div>
              </div>
              <div className={styles.menu_item}>
                <img src="https://via.placeholder.com/120" alt="French Toast" />
                <div className={styles.item_info}>
                  <h3>French Toast</h3>
                  <p>Golden-brown French toast served with syrup.</p>
                  <p className={styles.price}>$5.49</p>
                </div>
              </div>
              <div className={styles.menu_item}>
                <img
                  src="https://via.placeholder.com/120"
                  alt="Yogurt Parfait"
                />
                <div className={styles.item_info}>
                  <h3>Yogurt Parfait</h3>
                  <p>Layers of yogurt, granola, and fresh fruit.</p>
                  <p className={styles.price}>$4.99</p>
                </div>
              </div>
              <div className={styles.menu_item}>
                <img
                  src="https://via.placeholder.com/120"
                  alt="Breakfast Burrito"
                />
                <div className={styles.item_info}>
                  <h3>Breakfast Burrito</h3>
                  <p>A tortilla filled with eggs, cheese, and salsa.</p>
                  <p className={styles.price}>$6.99</p>
                </div>
              </div>
              <div className={styles.menu_item}>
                <img src="https://via.placeholder.com/120" alt="Omelette" />
                <div className={styles.item_info}>
                  <h3>Cheese Omelette</h3>
                  <p>Egg omelette stuffed with cheese and herbs.</p>
                  <p className={styles.price}>$4.99</p>
                </div>
              </div>
              <div className={styles.menu_item}>
                <img src="https://via.placeholder.com/120" alt="Fruit Salad" />
                <div className={styles.item_info}>
                  <h3>Fruit Salad</h3>
                  <p>Seasonal fruits tossed together.</p>
                  <p className={styles.price}>$3.99</p>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Lunch Menu --> */}
          <div className={styles.menu_section}>
            <h2>Lunch</h2>
            <div className={styles.menu_items}>
              <div className={styles.menu_item}>
                <img
                  src="https://via.placeholder.com/120"
                  alt="Cheese Burger"
                />
                <div className={styles.item_info}>
                  <h3>Cheese Burger</h3>
                  <p>Juicy patty with melted cheese and fresh veggies.</p>
                  <p className={styles.price}>$9.99</p>
                </div>
              </div>
              <div className={styles.menu_item}>
                <img src="https://via.placeholder.com/120" alt="Omelette" />
                <div className={styles.item_info}>
                  <h3>Cheese Omelette</h3>
                  <p>Egg omelette stuffed with cheese and herbs.</p>
                  <p className={styles.price}>$4.99</p>
                </div>
              </div>
              <div className={styles.menu_item}>
                <img
                  src="https://via.placeholder.com/120"
                  alt="Spaghetti Carbonara"
                />
                <div className={styles.item_info}>
                  <h3>Spaghetti Carbonara</h3>
                  <p>Creamy sauce with pancetta and parmesan.</p>
                  <p className={styles.price}>$14.99</p>
                </div>
              </div>
              <div className={styles.menu_item}>
                <img src="https://via.placeholder.com/120" alt="Caesar Salad" />
                <div className={styles.item_info}>
                  <h3>Caesar Salad</h3>
                  <p>Crisp romaine, croutons, and parmesan.</p>
                  <p className={styles.price}>$7.99</p>
                </div>
              </div>
              <div className={styles.menu_item}>
                <img
                  src="https://via.placeholder.com/120"
                  alt="Grilled Chicken"
                />
                <div className={styles.item_info}>
                  <h3>Grilled Chicken</h3>
                  <p>Marinated grilled chicken served with veggies.</p>
                  <p className={styles.price}>$10.99</p>
                </div>
              </div>
              <div className={styles.menu_item}>
                <img src="https://via.placeholder.com/120" alt="Fried Rice" />
                <div className={styles.item_info}>
                  <h3>Fried Rice</h3>
                  <p>Stir-fried rice with vegetables and eggs.</p>
                  <p className={styles.price}>$8.99</p>
                </div>
              </div>
              <div className={styles.menu_item}>
                <img src="https://via.placeholder.com/120" alt="Tacos" />
                <div className={styles.item_info}>
                  <h3>Chicken Tacos</h3>
                  <p>Soft tortillas with spiced chicken and salsa.</p>
                  <p className={styles.price}>$11.99</p>
                </div>
              </div>
              <div className={styles.menu_item}>
                <img src="https://via.placeholder.com/120" alt="Quinoa Bowl" />
                <div className={styles.item_info}>
                  <h3>Quinoa Bowl</h3>
                  <p>Healthy quinoa with mixed vegetables.</p>
                  <p className={styles.price}>$9.49</p>
                </div>
              </div>
              <div className={styles.menu_item}>
                <img
                  src="https://via.placeholder.com/120"
                  alt="Club Sandwich"
                />
                <div className={styles.item_info}>
                  <h3>Club Sandwich</h3>
                  <p>Triple-decker sandwich with turkey, bacon, and lettuce.</p>
                  <p className={styles.price}>$8.99</p>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Snacks Menu --> */}
          <div className={styles.menu_section}>
            <h2>Snacks</h2>
            <div className={styles.menu_items}>
              <div className={styles.menu_item}>
                <img src="https://via.placeholder.com/120" alt="French Fries" />
                <div className={styles.item_info}>
                  <h3>French Fries</h3>
                  <p>Crispy fries served with ketchup.</p>
                  <p className={styles.price}>$3.49</p>
                </div>
              </div>
              <div className={styles.menu_item}>
                <img src="https://via.placeholder.com/120" alt="Omelette" />
                <div className={styles.item_info}>
                  <h3>Cheese Omelette</h3>
                  <p>Egg omelette stuffed with cheese and herbs.</p>
                  <p className={styles.price}>$4.99</p>
                </div>
              </div>
              <div className={styles.menu_item}>
                <img src="https://via.placeholder.com/120" alt="Nachos" />
                <div className={styles.item_info}>
                  <h3>Nachos</h3>
                  <p>Crunchy tortilla chips with cheese sauce.</p>
                  <p className={styles.price}>$5.49</p>
                </div>
              </div>
              <div className={styles.menu_item}>
                <img src="https://via.placeholder.com/120" alt="Spring Rolls" />
                <div className={styles.item_info}>
                  <h3>Spring Rolls</h3>
                  <p>Crispy rolls filled with vegetables.</p>
                  <p className={styles.price}>$4.49</p>
                </div>
              </div>
              <div className={styles.menu_item}>
                <img src="https://via.placeholder.com/120" alt="Onion Rings" />
                <div className={styles.item_info}>
                  <h3>Onion Rings</h3>
                  <p>Battered onion rings fried to perfection.</p>
                  <p className={styles.price}>$4.99</p>
                </div>
              </div>
              <div className={styles.menu_item}>
                <img
                  src="https://via.placeholder.com/120"
                  alt="Chicken Wings"
                />
                <div className={styles.item_info}>
                  <h3>Chicken Wings</h3>
                  <p>Spicy wings served with blue cheese dressing.</p>
                  <p className={styles.price}>$6.99</p>
                </div>
              </div>
              <div className={styles.menu_item}>
                <img
                  src="https://via.placeholder.com/120"
                  alt="Stuffed Mushrooms"
                />
                <div className={styles.item_info}>
                  <h3>Stuffed Mushrooms</h3>
                  <p>Mushrooms stuffed with cheese and herbs.</p>
                  <p className={styles.price}>$5.99</p>
                </div>
              </div>
              <div className={styles.menu_item}>
                <img src="https://via.placeholder.com/120" alt="Potato Skins" />
                <div className={styles.item_info}>
                  <h3>Potato Skins</h3>
                  <p>Crispy potato skins topped with cheese and bacon.</p>
                  <p className={styles.price}>$6.49</p>
                </div>
              </div>
              <div className={styles.menu_item}>
                <img
                  src="https://via.placeholder.com/120"
                  alt="Cheese Sticks"
                />
                <div className={styles.item_info}>
                  <h3>Cheese Sticks</h3>
                  <p>Fried cheese sticks served with marinara sauce.</p>
                  <p className={styles.price}>$5.49</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
