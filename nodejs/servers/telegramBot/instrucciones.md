# WEATHER

- Responder al comando /tiempo

/tiempo Madrid
/tiempo Santiago de chile

- Dentro de index.js generar el manejador para el comando
- ¿De qué ciudad quiero el tiempo?. De la propiedad text (ctx.message.text) necesito recuperar la ciudad

- Cuando recuperamos la ciudad, hacemos una petición HTTP a la api de OpenWeatherMap para recuperar el tiempo de esa ciudad

- Hay que hacer una petición GET sobre la siguiente URL
- Para lanzar la petición usamos AXIOS (hay que instalarla y requerirla) (vease la doc):
https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
https://api.openweathermap.org/data/2.5/weather?q=Madrid&appid=04f4f8762b4ce35df1c074d18b1e84ab&units=metric

- Necesito responder a través del bot devolviendo la información de: temperatura máxima, temperatura mínima, temperatura actual y humedad

### DONDE

/donde Ballesta 26 Madrid

ctx.replyWithLocation(LAT, LONG);


# RESPUESTAS BOT

- Creamos un fichero ./frases/saludos.txt con frases de saludo
- Creamos un fichero ./frases/despedidas.txt con frases de despedidas

- Si el bot entiende la frase, debemos recuperar el fichero correspondiente
- Leemos dicho fichero y sacamos una frase aleatoria del mismo
    - Importar librería fs
    - Leemos los ficheros con readFile