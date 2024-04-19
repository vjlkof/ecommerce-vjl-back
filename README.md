# Backend de ecommerce-VJL

**Instalación y ejecución en local**
clonar el repo

npm install

npm run dev

# Problema encontrado:

- Vienen dos registros con el mismo id desde la fuente de la información
- Repetidos problemas con la API provista.

# Stack que se uso:

- "axios": "^1.6.8", para hacer fetching. Popularidad.
- "cors": "^2.8.5", para evitar errores de cors, se deberia ajustar correctamente para una app real
- "express": "^4.19.1", framwork de node super liviano
- "helmet": "^7.1.0", agrega headers de seguridad
- "winston": "^3.12.0", para login, popular
- "zod": "^3.22.4", validacion de entrada de datos, bastante popular.
- "eslint": "^8.57.0", linter para ayudar a validar el codigo
- "prettier": "3.2.5", formatear
- "typescript": "^5.4.3", ágregue esto porque me parece que es util para el manejo de datos y validaciones
