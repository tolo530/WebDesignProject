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
                <div class="iteminfo">
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
                    <p>strawbery, raspberry, blueberry and blackberry</p>
                </div>
            </div>
            <div class="itementry">
                <div class="iteminfo">
                    <h3>Tropical</h3>
                    <p>strawberry, peach, pear and apricot</p>
                </div>
            </div>
            <div class="itementry">
                <div class="iteminfo">
                    <h3>Isla</h3>
                    <p>strawberry, banana, pineapple and coconut</p>
                </div>
            </div>
            <div class="itementry">
                <div class="iteminfo">
                    <h3>Mango</h3>
                    <p>mango pineapple, banana, peach, and pear</p>
                </div>
            </div>
        `
    }

    if(content = "crepes"){
        document.getElementById("foodsection").innerHTML = `
            <div class="drinkentry">
                <div class="drinkinfo">
                    <h3>Nutella and strawberries</h3>
                    <p>2.5</p>
                </div>
                <img src="./static/img/aside1.jpg" alt="Sample photo">
            </div>
            <div class="drinkentry">
                <div class="drinkinfo">
                    <h3>Nutella, straberries and banana</h3>
                    <p>Descripcion</p>
                </div>
                <img src="./static/img/aside1.jpg" alt="Sample photo">
            </div>
            <div class="drinkentry">
                <div class="drinkinfo">

            `
    }
}