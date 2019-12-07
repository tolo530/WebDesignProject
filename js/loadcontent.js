function active_drink(content) {
    
    if(content == "tea"){
        document.getElementById("drinksection").innerHTML = `
            <div class="drinkentry">
                <div class="drinkinfo">
                    <h3>Moruno</h3>
                    <p>Green tea with fresh mint</p>
                </div>
            </div>
            <div class="drinkentry">
                <div class="drinkinfo">
                    <h3>Pakistani</h3>
                    <p>Black tea, spices and milk</p>
                </div>
            </div>
            <div class="drinkentry">
                <div class="drinkinfo">
                    <h3>Earll Grey</h3>
                    <p>Black tea with bergamot</p>
                </div>
            </div>
            <div class="drinkentry">
                <div class="drinkinfo">
                    <h3>Jasmine</h3>
                    <p>Green tea and jasmine</p>
                </div>
            </div>
            <div class="drinkentry">
                <div class="drinkinfo">
                    <h3>Mil Flores</h3>
                    <p>Black tea with flowers</p>
                </div>
            </div>
            <div class="drinkentry">
                <div class="drinkinfo">
                    <h3>Alhambra</h3>
                    <p>Black tea, green tea, rose and citrics</p>
                </div>
            </div>
            <div class="drinkentry">
                <div class="drinkinfo">
                    <h3>Albacin</h3>
                    <p>Black tea, citric, azahar, and flowers</p>
                </div>
            </div>
            <div class="drinkentry">
                <div class="drinkinfo">
                    <h3>Amantes</h3>
                    <p>Black tea, citric, hibiscus and mallow</p>
                </div>
            </div>
            <div class="drinkentry">
                <div class="drinkinfo">
                    <h3>Embrujo</h3>
                    <p>Black tea, green tea, citrics, flowers and spices</p>
                </div>
            </div>
            <div class="drinkentry">
                <div class="drinkinfo">
                    <h3>Mil y Una Noches</h3>
                    <p>Green tea, black tea and flowers</p>
                </div>
            </div>
        `   
    }

    if(num == "coffee"){
        document.getElementById("drinksection").innerHTML = `
            <div class="drinkentry">
                <div class="drinkinfo">
                    <h3>Expresso</h3>
                    <p>Concentrated coffee</p>
                </div>
            </div>
            <div class="drinkentry">
                <div class="drinkinfo">
                    <h3>Americano</h3>
                    <p>Coffee and water</p>
                </div>
            </div>
            <div class="drinkentry">
                <div class="drinkinfo">
                    <h3>Hot White</h3>
                    <p>Litte coffee and milk</p>
                </div>
            </div>
            <div class="drinkentry">
                <div class="drinkinfo">
                    <h3>Capuccino</h3>
                    <p>Coffee, milk and foam</p>
                </div>
            </div>
            <div class="drinkentry">
                <div class="drinkinfo">
                    <h3>Latte</h3>
                    <p>Coffe and steamed milk</p>
                </div>
            </div>
            <div class="drinkentry">
                <div class="drinkinfo">
                    <h3>Macchiato</h3>
                    <p>Expresoo with a small amount of milk</p>
                </div>
            </div>
            <div class="drinkentry">
                <div class="drinkinfo">
                    <h3>Irish Coffee</h3>
                    <p>Hot coffee, irish whiskey, sugar, stirred, and topped with cream</p>
                </div>
            </div>
            <div class="drinkentry">
                <div class="drinkinfo">
                    <h3>Mocha</h3>
                    <p>Chocolate-flavored variant of latte</p>
                </div>
            </div>
            <div class="drinkentry">
                <div class="drinkinfo">
                    <h3>Vanilla</h3>
                    <p>Vanilla-flavored variant of latte</p>
                </div>
        `
    }

}