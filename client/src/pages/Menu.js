import React, { useEffect } from 'react'
import LogoSecondary from '../components/logo/LogoSecondary';

function Menu() {
  //scroll top
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="food-menu__container">
      <div className="food-menu">
        <LogoSecondary />
        <h1>MENU</h1>
        <span>Salads</span>
        <p>Quinoa, vegetable salad with roasted seeds, herb pesto and salad leaves (V)<br/>$6.70</p>
        <p>Green leaf salad with caramelized goat cheese,walnuts and berry – balsamic sauce (V)<br/>$6.90</p>
        <p>Green leaf salad with sesame seeds, balsamic, honey, ginger sauce and
          grilled chicken fillet $7.50 / tiger prawns $8.90 / salmon $8.90</p>
        <span>Soups</span>
        <p>Soup of the day<br/>$4.50</p>
        <p>Bisque soup with salmon and onion crisps<br/>$5.90</p>
        <span>Sandwiches</span>
        <p>So Cal - roasted chicken, avocado, pepper jack cheese, green leaf lettuce, tomatillo salsa, chipotle aioli<br/>$5.50</p>
        <p>Southwest - marinated southwest chicken, avocado, corn & black bean salsa, pepper jack cheese, chipotle aioli<br/>$5.50</p>
        <p>Santa Maria BBQ - marinated BBQ chicken, Applewood-smoked bacon, cheddar cheese, housemade apple coleslaw, ranch dressing<br/>$6.20</p>
      </div>
    </div>
  )
}

export default Menu
