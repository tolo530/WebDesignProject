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
                    <p>Green tea, jasmine</p>
                </div>
            </div>
        `   
    }

    if(num == "coffee"){
        document.getElementById("drinksection").innerHTML = `
            <div class="drinkentry">
                <div class="drinkinfo">
                    <h3>Nombre</h3>
                    <p>Descripcion</p>
                </div>
                <img src="./static/img/aside1.jpg" alt="Sample photo">
            </div>
            <div class="drinkentry">
                <div class="drinkinfo">
                    <h3>Nombre</h3>
                    <p>Descripcion</p>
                </div>
                <img src="./static/img/aside1.jpg" alt="Sample photo">
            </div>
            <div class="drinkentry">
                <div class="drinkinfo">
                    <h3>Nombre</h3>
                    <p>Descripcion</p>
                </div>
                <img src="./static/img/aside1.jpg" alt="Sample photo">
            </div>
            <div class="drinkentry">
                <div class="drinkinfo">
                    <h3>Nombre</h3>
                    <p>Descripcion</p>
                </div>
                <img src="./static/img/aside1.jpg" alt="Sample photo">
            </div>
        `
    }

}