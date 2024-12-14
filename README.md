# semana 14 Tutoria Taraea
>
>[!NOTE]
>Con lo visto en la tutoría, se te pide crear una calculadora completamente funcional con react, usando taildwind como recurso para crear tu diseño. De todas forma puedes usar otro de ser necesario.
>
>Para tener un orden, tu proyecto deberá estar en un nuevo repositorio. Además de crear un readme explicando el uso de las propiedades que has utilizado en tu pagina web, como adicional a esto en el propio readme adjuntar captura de pantalla de la pagina.

## Calculadora en React

Esta es una calculadora simple construida con React y estilizada con Tailwind CSS. La aplicación permite realizar operaciones matemáticas básicas como suma, resta, multiplicación y división, así como manejar números decimales.

## Funcionalidades

- **Operaciones Básicas**: La calculadora puede realizar las cuatro operaciones matemáticas básicas: suma (`+`), resta (`-`), multiplicación (`*`) y división (`/`).
- **Números Decimales**: Permite la entrada de números decimales utilizando el botón de punto (`.`).
- **Resultado**: Al presionar el botón de igual (`=`), se evalúa la expresión matemática ingresada y se muestra el resultado.
- **Borrar**: Un botón de "Clear" que permite limpiar la pantalla y reiniciar la calculadora.

## Estructura del Código

### Componentes Principales

- **Calculator.js**: Este es el componente principal que contiene la lógica y la interfaz de la calculadora.

### Lógica de la Calculadora

1. **Estado**: Utiliza el hook `useState` para manejar el estado de la entrada del usuario.

   ```javascript
   const [input, setInput] = useState('');

### Manejo de Botones

- `handleButtonClick(value)`: Agrega el valor del botón presionado a la entrada.
- `handleClear()`: Limpia la entrada y reinicia la calculadora.
- `handleCalculate()`: Evalúa la expresión matemática ingresada. Utiliza `eval()` para calcular el resultado y maneja errores en caso de que la expresión sea inválida.

### Renderizado

La interfaz de usuario se construye utilizando botones para cada número y operador, organizados en una cuadrícula. Los estilos se aplican utilizando clases de Tailwind CSS.

## Captura de Pantalla

![Captura de pantalla de la calculadora](img/Captura%20de%20pantalla%202024-12-14%20184433.png)

## Estilos

- **Tailwind CSS**: Se utiliza para estilizar la calculadora, proporcionando un diseño limpio y responsivo. Los colores de los botones se definen utilizando clases de Tailwind, lo que permite una fácil personalización.

## Ejemplo de Código

- Aquí hay un fragmento del código que muestra cómo se manejan los botones javascript

```js
<div className="grid grid-cols-4 gap-2">
  {['7', '8', '9', '/'].map((item) => (
    <button
      key={item}
      onClick={() => handleButtonClick(item)}
      className={`bg-blue-500 text-white p-4 rounded hover:bg-blue-600`}
    >
      {item}
    </button>
  ))}
  ...
  <button
    onClick={() => handleButtonClick('0')}
    className={`bg-blue-500 text-white p-4 rounded hover:bg-blue-600`}
  >
    0
  </button>
  {['.', '=', '+'].map((item) => (
    <button
      key={item}
      onClick={item === '=' ? handleCalculate : () => handleButtonClick(item)}
      className={`bg-yellow-500 text-white p-4 rounded hover:bg-yellow-600`}
    >
      {item}
    </button>
  ))}
</div>
```

- Aquí hay un fragmento del código que muestra cómo se manejan los botones de operadores
<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh -->
