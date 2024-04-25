# Ejecicio 1 Cajero

> logica
```js

    limpiarBtn.addEventListener('click', function () {
        limpiarCampoContraseña();
    });

    function limpiarCampoContraseña() {
        passwordInput.value = '';
    }

    const buttons = Array.from(document.querySelectorAll('.btn'));
    const numbers = Array.from({ length: 10 }, (_, index) => index);

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffle(numbers);

    buttons.forEach((btn, index) => {
        if (numbers[index] !== undefined) {
            btn.innerText = numbers[index];
        }
    });

```

> vista
```html
        <div class="keyboard">
            <div class="row">
                <div class="col">
                    <button class="btn btn-1"></button>
                    <button class="btn btn-2"></button>
                    <button class="btn btn-3"></button>
                </div>
                <div></div>
                <div class="col">
                    <button class="btn btn-4"></button>
                    <button class="btn btn-5"></button>
                    <button class="btn btn-6"></button>
                </div>
                <div></div>
                <div class="col">
                    <button class="btn btn-7"></button>
                    <button class="btn btn-8"></button>
                    <button class="btn btn-9"></button>
                </div>
                <div></div>
                <div class="col">
                    <button class="btn btn-0"></button>
                    <button type="button" id="limpiar">Limpiar</button>
                </div>
                <input type="password" id="password" name="password" required>
            </div>
        </div>
```

# Ejecicio 2 Calculadora

> logica
```js
function calculate() {
    try {
        let result;
        if (displayValue.includes('x')) {
            // Si la expresión contiene la variable 'x', la reemplaza con su valor
            const exprWithX = displayValue.replace(/x/g, x);
            result = eval(exprWithX);
        } else {
            result = eval(displayValue);
        }
        displayValue = result.toString();
        document.getElementById('display').value = displayValue;
        stack.push(displayValue);
        displayStack();
    } catch (error) {
        alert('Error en la expresión.');
        clearDisplay();
    }
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
}

```

> vista
```html
 <input type="text" id="display" readonly>
    <br>
    <button onclick="addToDisplay('7')">7</button>
    <button onclick="addToDisplay('8')">8</button>
    <button onclick="addToDisplay('9')">9</button>
    <button onclick="addToDisplay('+')">+</button>
    <br>
    <button onclick="addToDisplay('4')">4</button>
    <button onclick="addToDisplay('5')">5</button>
    <button onclick="addToDisplay('6')">6</button>
    <button onclick="addToDisplay('-')">-</button>
    <br>
    <button onclick="addToDisplay('1')">1</button>
    <button onclick="addToDisplay('2')">2</button>
    <button onclick="addToDisplay('3')">3</button>
    <button onclick="addToDisplay('*')">*</button>
    <br>
    <button onclick="addToDisplay('0')">0</button>
    <button onclick="addToDisplay('.')">.</button>
    <button onclick="addToDisplay('x')">x</button>
    <button onclick="calculate()">=</button>
    <button onclick="addToDisplay('/')">/</button>
    <br>
    <button onclick="clearDisplay()">C</button>
    <button onclick="setVariable()">Set x</button>

```

# Ejecicio 3 Juego


> logica
```js
    function dibujarParte() {
        switch (intentosRestantes) {
            case 6:
                // Base
                ctx.beginPath();
                ctx.moveTo(20, 380);
                ctx.lineTo(180, 380);
                ctx.stroke();
                break;
            case 5:
                // Poste
                ctx.beginPath();
                ctx.moveTo(100, 380);
                ctx.lineTo(100, 50);
                ctx.stroke();
                break;
            case 4:
                // Travesaño
                ctx.beginPath();
                ctx.moveTo(100, 50);
                ctx.lineTo(250, 50);
                ctx.stroke();
                break;
            case 3:
                // Cuerda
                ctx.beginPath();
                ctx.moveTo(250, 50);
                ctx.lineTo(250, 100);
                ctx.stroke();
                break;
            case 2:
                // Cabeza
                ctx.beginPath();
                ctx.arc(250, 130, 30, 0, Math.PI * 2);
                ctx.stroke();
                break;
            case 1:
                // Cuerpo
                ctx.beginPath();
                ctx.moveTo(250, 160);
                ctx.lineTo(250, 270);
                ctx.stroke();
                break;
            case 0:
                // Brazos
                ctx.beginPath();
                ctx.moveTo(250, 180);
                ctx.lineTo(200, 220);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(250, 180);
                ctx.lineTo(300, 220);
                ctx.stroke();
                // Piernas
                ctx.beginPath();
                ctx.moveTo(250, 270);
                ctx.lineTo(200, 320);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(250, 270);
                ctx.lineTo(300, 320);
                ctx.stroke();
                break;
        }
        intentosRestantes--;
    }

```

> vista
```html
<h1>El Ahorcado</h1>
<canvas id="hangmanCanvas" width="400" height="400"></canvas>
<div>
    <button onclick="dibujarParte()">Dibujar Parte</button>
</div>

```

