import React from "react";
//import logo from "../../image/logo.png";
import bananabread from "../../foods/bananabread.jpg";
import kibbe from "../../foods/kibbe.jpg";
import kibeh from "../../foods/kibeh.jpg";
import wara2 from "../../foods/wara2.jpg";
import tortilla from "../../foods/tortilla.jpg";
import FoodPlate from "../../foods/FoodPlate.png";
import gallary_3 from "../../foods/gallary_3.jpg";
import gallary_4 from "../../foods/gallary_4.jpg";
import gallary_6 from "../../foods/gallary_6.jpg";
import Spanchi from "../../foods/Spanchi.jpg";
import { NavLink } from "react-router-dom";
import "../../components/RestaurantMenu/RestaurantMenu.css";

const RestaurantMenu = () => {
  return (
    <>
      <section class="menu">
        <div class="menu-container">
          <div class="menu-head">
            <NavLink to={"/"}>
              <h2>Special Food Menu</h2>
            </NavLink>
            <p>
              Introducing our delectable menu, filled with an array of
              mouth-watering dishes sure to satisfy any palate. From savory
              entrees to decadent desserts, our restaurant offers a culinary
              experience that will leave you wanting more!
            </p>
          </div>

          <div class="menu-btns">
            <button type="button" class="menu-btn active-btn" id="featured">
              Breakfast
            </button>
            <button type="button" class="menu-btn" id="today-special">
              Lunch
            </button>
            <button type="button" class="menu-btn" id="new-arrival">
              Dinner
            </button>
          </div>

          <div class="food-items">
            <div class="food-item featured">
              <div class="food-img">
                <img src={bananabread} alt="food image" />
              </div>
              <div class="food-content">
                <h2 class="food-name">Banana Bread With Butter & Milk</h2>
                <div class="line"></div>
                <p>Description</p>
                <h3 class="food-price">$25.00</h3>
              </div>
            </div>

            {/* <div class="food-item featured">
              <div class="food-img">
                <img src={fool} alt="food image" />
              </div>
              <div class="food-content">
                <h2 class="food-name">Lebanese Foul</h2>
                <div class="line"></div>
                <p>desc</p>
                <h3 class="food-price">$5.00</h3>
              </div>
            </div>
            <div class="food-item featured">
              <div class="food-img">
                <img src={fatteh} alt="food image" />
              </div>
              <div class="food-content">
                <h2 class="food-name">Lebanese Fatteh</h2>
                <div class="line"></div>
                <p>desc</p>
                <h3 class="food-price">$8.00</h3>
              </div>
            </div>

            <div class="food-item featured">
              <div class="food-img">
                <img src={manakich} alt="food image" />
              </div>
              <div class="food-content">
                <h2 class="food-name">Lebanese Manaqish</h2>
                <div class="line"></div>
                <p>desc</p>
                <h3 class="food-price">$10.00</h3>
              </div>
            </div>
            <div class="food-item featured">
              <div class="food-img">
                <img src={kenefeh} alt="food image" />
              </div>
              <div class="food-content">
                <h2 class="food-name">Lebanese kenefeh</h2>
                <div class="line"></div>
                <p>desc</p>
                <h3 class="food-price">$8.00</h3>
              </div>
            </div>
            <div class="food-item featured">
              <div class="food-img">
                <img src={turkichknefeh} alt="food image" />
              </div>
              <div class="food-content">
                <h2 class="food-name">Turkish Knefeh</h2>
                <div class="line"></div>
                <p>desc</p>
                <h3 class="food-price">$12.00</h3>
              </div>
            </div> */}
            {/* <div class="food-item featured">
              <div class="food-img">
                <img src={croissant} alt="food image" />
              </div>
              <div class="food-content">
                <h2 class="food-name">Croissant</h2>
                <div class="line"></div>
                <p>desc</p>
                <h3 class="food-price">$3.00</h3>
              </div>
            </div>
            <div class="food-item featured">
              <div class="food-img">
                <img src={toast} alt="food image" />
              </div>
              <div class="food-content">
                <h2 class="food-name">Avocado Toast with Egg</h2>
                <div class="line"></div>
                <p>desc</p>
                <h3 class="food-price">$5.00</h3>
              </div>
            </div>
            <div class="food-item featured">
              <div class="food-img">
                <img src={juse} alt="food image" />
              </div>
              <div class="food-content">
                <h2 class="food-name">Fresh Juice</h2>
                <div class="line"></div>
                <p>desc</p>
                <h3 class="food-price">$2.00</h3>
              </div>
            </div>
            <div class="food-item featured">
              <div class="food-img">
                <img src={gallary_1} alt="food image" />
              </div>
              <div class="food-content">
                <h2 class="food-name">Mortadella sandwich</h2>
                <div class="line"></div>
                <p>desc</p>
                <h3 class="food-price">$3.00</h3>
              </div>
            </div> */}
            {/* 
            <div class="food-item today-special">
              <div class="food-img">
                <img src={barbecue} alt="food image" />
              </div>
              <div class="food-content">
                <h2 class="food-name">Barbecue</h2>
                <div class="line"></div>
                <p>desc</p>
                <h3 class="food-price">$20.00</h3>
              </div>
            </div>

            <div class="food-item new-arrival">
              <div class="food-img">
                <img src={ramen} alt="food image" />
              </div>
              <div class="food-content">
                <h2 class="food-name">Barbecued Roasted Duck Ramen</h2>
                <div class="line"></div>
                <p>desc</p>
                <h3 class="food-price">$35.00</h3>
              </div>
            </div>

            <div class="food-item featured">
              <div class="food-img">
                <img src={butter} alt="food image" />
              </div>
              <div class="food-content">
                <h2 class="food-name">Bread With Seeds & Butter</h2>
                <div class="line"></div>
                <p>desc</p>
                <h3 class="food-price">$27.00</h3>
              </div>
            </div>

            <div class="food-item featured">
              <div class="food-img">
                <img src={lebBreak} alt="food image" />
              </div>
              <div class="food-content">
                <h2 class="food-name">Lebanese Breakfast</h2>
                <div class="line"></div>
                <p>desc</p>
                <h3 class="food-price">$30.00</h3>
              </div>
            </div>

            <div class="food-item today-special">
              <div class="food-img">
                <img src={vegetables} alt="food image" />
              </div>
              <div class="food-content">
                <h2 class="food-name">Breadfast Sandwich</h2>
                <div class="line"></div>
                <p>desc</p>
                <h3 class="food-price">$15.00</h3>
              </div>
            </div>

            <div class="food-item new-arrival">
              <div class="food-img">
                <img src={vegsalad} alt="food image" />
              </div>
              <div class="food-content">
                <h2 class="food-name">Middle Eastern Vegetable Salad</h2>
                <div class="line"></div>
                <p>desc</p>
                <h3 class="food-price">$8.00</h3>
              </div>
            </div>
            <div class="food-item new-arrival">
              <div class="food-img">
                <img src={tunasalad} alt="food image" />
              </div>
              <div class="food-content">
                <h2 class="food-name">Tuna Salad</h2>
                <div class="line"></div>
                <p>desc</p>
                <h3 class="food-price">$7.00</h3>
              </div>
            </div>

            <div class="food-item new-arrival">
              <div class="food-img">
                <img src={sandwich} alt="food image" />
              </div>
              <div class="food-content">
                <h2 class="food-name">Sandwich</h2>
                <div class="line"></div>
                <p>desc</p>
                <h3 class="food-price">$3.00</h3>
              </div>
            </div>

            <div class="food-item today-special">
              <div class="food-img">
                <img src={beetroot} alt="food image" />
              </div>
              <div class="food-content">
                <h2 class="food-name">Chicken Breast Steaks</h2>
                <div class="line"></div>
                <p>desc</p>
                <h3 class="food-price">$15.00</h3>
              </div>
            </div>

            <div class="food-item today-special">
              <div class="food-img">
                <img src={Hotdog} alt="food image" />
              </div>
              <div class="food-content">
                <h2 class="food-name">Hot Dog</h2>
                <div class="line"></div>
                <p>desc</p>
                <h3 class="food-price">$6.00</h3>
              </div>
            </div>

            <div class="food-item today-special">
              <div class="food-img">
                <img src={lasagna} alt="food image" />
              </div>
              <div class="food-content">
                <h2 class="food-name">Lasagna</h2>
                <div class="line"></div>
                <p>desc</p>
                <h3 class="food-price">$12.00</h3>
              </div>
            </div>

            <div class="food-item today-special">
              <div class="food-img">
                <img src={biryani} alt="food image" />
              </div>
              <div class="food-content">
                <h2 class="food-name">Lebanese Biryani</h2>
                <div class="line"></div>
                <p>desc</p>
                <h3 class="food-price">$20.00</h3>
              </div>
            </div>
            <div class="food-item today-special">
              <div class="food-img">
                <img src={pasta} alt="food image" />
              </div>
              <div class="food-content">
                <h2 class="food-name">Pasta</h2>
                <div class="line"></div>
                <p>desc</p>
                <h3 class="food-price">$14.00</h3>
              </div>
            </div>

            <div class="food-item today-special">
              <div class="food-img">
                <img src={oranges} alt="food image" />
              </div>
              <div class="food-content">
                <h2 class="food-name">Chicken Legs</h2>
                <div class="line"></div>
                <p>desc</p>
                <h3 class="food-price">$29.00</h3>
              </div>
            </div>

            <div class="food-item today-special">
              <div class="food-img">
                <img src={fries} alt="food image" />
              </div>
              <div class="food-content">
                <h2 class="food-name">French Fries</h2>
                <div class="line"></div>
                <p>desc</p>
                <h3 class="food-price">$2.00</h3>
              </div>
            </div>

            <div class="food-item today-special">
              <div class="food-img">
                <img src={rice} alt="food image" />
              </div>
              <div class="food-content">
                <h2 class="food-name">Fried Rice</h2>
                <div class="line"></div>
                <p>desc</p>
                <h3 class="food-price">$5.00</h3>
              </div>
            </div>

            <div class="food-item today-special">
              <div class="food-img">
                <img src={prawns} alt="food image" />
              </div>
              <div class="food-content">
                <h2 class="food-name">King Prawns</h2>
                <div class="line"></div>
                <p>desc</p>
                <h3 class="food-price">$11.00</h3>
              </div>
            </div>

            <div class="food-item today-special">
              <div class="food-img">
                <img src={noodles} alt="food image" />
              </div>
              <div class="food-content">
                <h2 class="food-name">Noodles</h2>
                <div class="line"></div>
                <p>desc</p>
                <h3 class="food-price">$5.00</h3>
              </div>
            </div>

            <div class="food-item today-special">
              <div class="food-img">
                <img src={cheese} alt="food image" />
              </div>
              <div class="food-content">
                <h2 class="food-name">Cheese Pizza</h2>
                <div class="line"></div>
                <p>desc</p>
                <h3 class="food-price">$12.00</h3>
              </div>
            </div>

            <div class="food-item today-special">
              <div class="food-img">
                <img src={burger} alt="food image" />
              </div>
              <div class="food-content">
                <h2 class="food-name">Juicy beef burger</h2>
                <div class="line"></div>
                <h3 class="food-price">$14.00</h3>
              </div>
            </div> */}

            {/* <div class="food-item today-special">
              <div class="food-img">
                <img src={tacos} alt="food image" />
              </div>
              <div class="food-content">
                <h2 class="food-name">Tacos with pulled pork</h2>
                <div class="line"></div>
                <p>desc</p>
                <h3 class="food-price">$22.00</h3>
              </div>
            </div>

            <div class="food-item today-special">
              <div class="food-img">
                <img src={tinyburger} alt="food image" />
              </div>
              <div class="food-content">
                <h2 class="food-name">tiny pickles</h2>
                <div class="line"></div>
                <p>desc</p>
                <h3 class="food-price">$7.00</h3>
              </div>
            </div>
            <div class="food-item today-special">
              <div class="food-img">
                <img src={tabbouleh} alt="food image" />
              </div>
              <div class="food-content">
                <h2 class="food-name">Tabbouleh</h2>
                <div class="line"></div>
                <p>desc</p>
                <h3 class="food-price">$3.00</h3>
              </div>
            </div> */}
            <div class="food-item today-special">
              <div class="food-img">
                <img src={kibbe} alt="food image" />
              </div>
              <div class="food-content">
                <h2 class="food-name">Lebanese Kebbeh nayeh</h2>
                <div class="line"></div>
                <p>desc</p>
                <h3 class="food-price">$5.00</h3>
              </div>
            </div>
            <div class="food-item today-special">
              <div class="food-img">
                <img src={kibeh} alt="food image" />
              </div>
              <div class="food-content">
                <h2 class="food-name">Kibbeh</h2>
                <div class="line"></div>
                <p>desc</p>
                <h3 class="food-price">$7.00</h3>
              </div>
            </div>
            <div class="food-item today-special">
              <div class="food-img">
                <img src={wara2} alt="food image" />
              </div>
              <div class="food-content">
                <h2 class="food-name">Wara2 Enab</h2>
                <div class="line"></div>
                <p>desc</p>
                <h3 class="food-price">$6.00</h3>
              </div>
            </div>

            <div class="food-item new-arrival">
              <div class="food-img">
                <img src={tortilla} alt="food image" />
              </div>
              <div class="food-content">
                <h2 class="food-name">tortilla chips</h2>
                <div class="line"></div>
                <p>desc</p>
                <h3 class="food-price">$8.00</h3>
              </div>
            </div>

            <div class="food-item new-arrival">
              <div class="food-img">
                <img src={FoodPlate} alt="food image" />
              </div>
              <div class="food-content">
                <h2 class="food-name">Chiken Salad</h2>
                <div class="line"></div>
                <p>desc</p>
                <h3 class="food-price">$7.00</h3>
              </div>
            </div>
            <div class="food-item new-arrival">
              <div class="food-img">
                <img src={gallary_3} alt="food image" />
              </div>
              <div class="food-content">
                <h2 class="food-name">cup cake chocolat</h2>
                <div class="line"></div>
                <p>desc</p>
                <h3 class="food-price">$1.50</h3>
              </div>
            </div>
            <div class="food-item new-arrival">
              <div class="food-img">
                <img src={gallary_4} alt="food image" />
              </div>
              <div class="food-content">
                <h2 class="food-name">blueberry cake</h2>
                <div class="line"></div>
                <p>desc</p>
                <h3 class="food-price">$1.50</h3>
              </div>
            </div>
            <div class="food-item new-arrival">
              <div class="food-img">
                <img src={gallary_6} alt="food image" />
              </div>
              <div class="food-content">
                <h2 class="food-name">Blueberry chocolate cake</h2>
                <div class="line"></div>
                <p>desc</p>
                <h3 class="food-price">$2.50</h3>
              </div>
            </div>

            <div class="food-item new-arrival">
              <div class="food-img">
                <img src={Spanchi} alt="food image" />
              </div>
              <div class="food-content">
                <h2 class="food-name">Spanchi cake</h2>
                <div class="line"></div>
                <p>desc</p>
                <h3 class="food-price">$1.50</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RestaurantMenu;
