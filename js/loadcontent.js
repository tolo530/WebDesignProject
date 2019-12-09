function active_content(content) {
    
    if(content == "tea"){
        document.getElementById("itemsection").innerHTML = `
            <div class="itementry">
                <div class="iteminfo">
                    <h3>Moruno</h3>
                    <p>Green tea with fresh mint</p>
                </div>
            </div>
            <div class="itementry">
                <div class="iteminfo">
                    <h3>Pakistani</h3>
                    <p>Black tea, spices and milk</p>
                </div>
            </div>
            <div class="itementry">
                <div class="iteminfo">
                    <h3>Earll Grey</h3>
                    <p>Black tea with bergamot</p>
                </div>
            </div>
            <div class="itementry">
                <div class="iteminfo">
                    <h3>Jasmine</h3>
                    <p>Green tea and jasmine</p>
                </div>
            </div>
            <div class="itementry">
                <div class="iteminfo">
                    <h3>Mil Flores</h3>
                    <p>Black tea with flowers</p>
                </div>
            </div>
            <div class="itementry">
                <itemsectiondiv class="iteminfo">
                    <h3>Alhambra</h3>
                    <p>Black tea, green tea, rose and citrics</p>
                </div>
            </div>
            <div class="itementry">
                <div class="iteminfo">
                    <h3>Albacin</h3>
                    <p>Black tea, citric, azahar, and flowers</p>
                </div>
            </div>
            <div class="itementry">
                <div class="iteminfo">
                    <h3>Amantes</h3>
                    <p>Black tea, citric, hibiscus and mallow</p>
                </div>
            </div>
            <div class="itementry">
                <div class="iteminfo">
                    <h3>Embrujo</h3>
                    <p>Black tea, green tea, citrics, flowers and spices</p>
                </div>
            </div>
            <div class="itementry">
                <div class="iteminfo">
                    <h3>Mil y Una Noches</h3>
                    <p>Green tea, black tea and flowers</p>
                </div>
            </div>
        `   
    }

    if(content == "coffee"){
        document.getElementById("itemsection").innerHTML = `
            <div class="itementry">
                <div class="iteminfo">
                    <h3>Expresso</h3>
                    <p>Concentrated coffee</p>
                </div>
            </div>
            <div class="itementry">
                <div class="iteminfo">
                    <h3>Americano</h3>
                    <p>Coffee and water</p>
                </div>
            </div>
            <div class="itementry">
                <div class="iteminfo">
                    <h3>Hot White</h3>
                    <p>Litte coffee and milk</p>
                </div>
            </div>
            <div class="itementry">
                <div class="iteminfo">
                    <h3>Capuccino</h3>
                    <p>Coffee, milk and foam</p>
                </div>
            </div>
            <div class="itementry">
                <div class="iteminfo">
                    <h3>Latte</h3>
                    <p>Coffe and steamed milk</p>
                </div>
            </div>
            <div class="itementry">
                <div class="iteminfo">
                    <h3>Macchiato</h3>
                    <p>Expresoo with a small amount of milk</p>
                </div>
            </div>
            <div class="itementry">
                <div class="iteminfo">
                    <h3>Irish Coffee</h3>
                    <p>Hot coffee, irish whiskey, sugar, stirred, and topped with cream</p>
                </div>
            </div>
            <div class="itementry">
                <div class="iteminfo">
                    <h3>Mocha</h3>
                    <p>Chocolate-flavored variant of latte</p>
                </div>
            </div>
            <div class="itementry">
                <div class="iteminfo">
                    <h3>Vanilla</h3>
                    <p>Vanilla-flavored variant of latte</p>
                </div>
        `
    }

    if(content == "smoothies"){
        document.getElementById("itemsection").innerHTML = `
            <div class="itementry">
                <div class="iteminfo">
                    <h3>Oceano</h3>
                    <p>Strawbery, raspberry, blueberry and blackberry.</p>
                </div>
            </div>
            <div class="itementry">
                <div class="iteminfo">
                    <h3>Tropical</h3>
                    <p>Strawberry, peach, pear and apricot.</p>
                </div>
            </div>
            <div class="itementry">
                <div class="iteminfo">
                    <h3>Isla</h3>
                    <p>Strawberry, banana, pineapple and coconut.</p>
                </div>
            </div>
            <div class="itementry">
                <div class="iteminfo">
                    <h3>Mango</h3>
                    <p>Mango pineapple, banana, peach, and pear.</p>
                </div>
            </div>
        `
    }

    if(content == "sweetcrepes"){
        document.getElementById("itemsection").innerHTML = `
            <div class="itementry">
                <div class="iteminfo">
                    <h3>HazelBerryAna</h3>
                    <p>Fresh strawberries, sliced bananas, and Nutella.</p>
                </div>
            </div>
            <div class="itementry">
                <div class="iteminfo">
                    <h3>Spicy Apple Bottoms</h3>
                    <p>Fresh apples, cooked with cinnamon topped with caramel.</p>
                </div>
            </div>
            <div class="itementry">
                <div class="iteminfo">
                    <h3>Le Classique</h3>
                    <p>Sliced bananas and Nutella.</p>
                </div>
            </div> <div class="itementry">
                <div class="iteminfo">
                    <h3>Al Capone</h3>
                    <p>Fresh Blackberries and sweetened mascarpone cheese.</p>
                </div>
            </div>
            <div class="itementry">
                <div class="iteminfo">
                    <h3>Lemon and sugar</h3>
                    <p>Zesty lemon juice splinkled with granulated sugar.</p>
                </div>
            </div>
            <div class="itementry">
                <div class="iteminfo">
                    <h3>Walnut</h3>
                    <p>Walnuts in caramel.</p>
                </div>
            </div>
            <div class="itementry">
                <div class="iteminfo">
                    <h3>Christine Favor</h3>
                    <p>Bananas, strawberries, almonds, raisins and apple sauce. </p>
                </div>
            </div>
            <div class="itementry">
                <div class="iteminfo">
                    <h3>Extra Toppings</h3>
                    <p>Walnuts</p>
                    <p>Marshmallow</p>
                    <p>Kiwi</p>
                    <p>Cream cheese</p>
                </div>
            </div>
            
            `
    }


     if(content == "saltycrepes"){
        document.getElementById("itemsection").innerHTML = `
            <div class="itementry">
                <div class="iteminfo">
                    <h3>Caprese</h3>
                    <p>Sliced tomato, seasoned chicken, mozzarella and garlic pesto. </p>
                </div>
            </div>
            <div class="itementry">
                <div class="iteminfo">
                    <h3>In the club</h3>
                    <p>Crisps slices of bacon, mozzarella, sliced tomato and sliced avocado.</p>
                </div>
            </div>
            <div class="itementry">
                <div class="iteminfo">
                    <h3>SouthWestern</h3>
                    <p>Grilled peppers and onions, seasoned chicken, cheddar and chipotle sauce.</p>
                </div>
            </div>
            <div class="itementry">
                <div class="iteminfo">
                    <h3>King Brie</h3>
                    <p>Creamy brie cheese with sliced apple, crisp slices of bacon and sliced turkey breasts. </p>
                </div>
            </div>
            <div class="itementry">
                <div class="iteminfo">
                    <h3>Ham & Cheese</h3>
                    <p>Sliced ham and mozzarella cheese.</p>
                </div>
            </div>
            <div class="itementry">
                <div class="iteminfo">
                    <h3>Plain Jane</h3>
                    <p>Crisp slices of bacon, ham, cheddar and a fresh cracked egg. </p>
                </div>
            </div> <div class="itementry">
                <div class="iteminfo">
                    <h3>California Sunrise</h3>
                    <p>Sliced avocado, crisp slices of bacon, sliced tomato, cheddar and a fresh cracked egg. </p>
                </div>
            </div>
              
            <div class="itementry">
                <div class="iteminfo">
                    <h3>Extras</h3>
                    <p>Tomato Sauce</p>
                    <p>Gouda </p>
                    <p>Cheddar </p>

                </div>
            </div>
         
            `
    }

     if(content == "waffles"){
        document.getElementById("itemsection").innerHTML = `
            <div class="itementry">
                <div class="iteminfo">
                    <h3>The chocolate</h3>
                    <p>Nutella or Belgian Chocolate. </p>
                </div>
            </div>
            <div class="itementry">
                <div class="iteminfo">
                    <h3>The Sin </h3>
                    <p>Banana and Nutella. </p>
                </div>
            </div>
            <div class="itementry">
                <div class="iteminfo">
                    <h3>Strawberry Glamour </h3>
                    <p>Strawberries and Belgian Chocolate. </p>
                </div>
            </div>
            <div class="itementry">
                <div class="iteminfo">
                    <h3>The gourmand</h3>
                    <p>Banana, Whipped cream and Caramel. </p>
                </div>
            </div>
            <div class="itementry">
                <div class="iteminfo">
                    <h3>Fruit Delight</h3>
                    <p>Banana, Strawberries and Belgian Chocolate. </p>
                </div>
            </div>
            <div class="itementry">
                <div class="iteminfo">
                    <h3>Oreo Freakin' Party</h3>
                    <p>Oreos, Raspberries and Whipped cream. </p>
                </div>
            </div> <div class="itementry">
                <div class="iteminfo">
                    <h3>Berries Insanity </h3>
                    <p>Strawberries, Raspberries, Bluberries and Blackberries.  </p>
                </div>
            </div>
              
            <div class="itementry">
                <div class="iteminfo">
                    <h3>Extras</h3>
                    <p>Whipped cream. </p>
                    <p>Ice Cream.  </p>
                    <p>Caramel.  </p>
                    <p>Liquid Chocolate. </p>

                </div>
            </div>
         
            `
    }


    if(content == "sandwiches"){
        document.getElementById("itemsection").innerHTML = `
            <div class="itementry">
                <div class="iteminfo">
                    <h3>Classic</h3>
                    <p>Ham and Double cheese. </p>
                </div>
            </div>
            <div class="itementry">
                <div class="iteminfo">
                    <h3> Green</h3>
                    <p>Avocado, Spinach and Panela Cheese. </p>
                </div>
            </div>
            <div class="itementry">
                <div class="iteminfo">
                    <h3>BLT </h3>
                    <p>Crispy bacon, Swiss cheese, tomato and lettuce. </p>
                </div>
            </div>
            <div class="itementry">
                <div class="iteminfo">
                    <h3>Beach</h3>
                    <p>Tuna, Swiss cheese, jalapeno and alfalfa.  </p>
                </div>
            </div>
            <div class="itementry">
                <div class="iteminfo">
                    <h3>Euro</h3>
                    <p>Turkey breasts, Panela cheese, spinach and alfalfa.  </p>
                </div>
            </div>
            <div class="itementry">
                <div class="iteminfo">
                    <h3>Finest</h3>
                    <p>Grilled chicken breasts and Swiss cheese. </p>
                </div>
            </div> <div class="itementry">
                <div class="iteminfo">
                    <h3>Boss</h3>
                    <p>Ham, double cheese, bacon bits and chipotle sauce.  </p>
                </div>
            </div>
            <div class="itementry">
                <div class="iteminfo">
                    <h3>Extras</h3>
                    <p>Avocado. </p>
                    <p>Cheese. </p>
                    <p>Bacon.  </p>
                    <p>Alfalfa. </p>

                </div>
            </div>
         
            `
    }

    if(content == "otherD"){
        document.getElementById("itemsection").innerHTML = `
            <div class="itementry">
                <div class="iteminfo">
                    <h3>Still Water</h3>
                    <p>Bottle of 500ml</p>
                </div>
            </div>
            <div class="itementry">
                <div class="iteminfo">
                    <h3>Soda</h3>
                    <p>Coca-cola, Fanta and Sprite</p>
                </div>
            </div>
            `
    }
}
