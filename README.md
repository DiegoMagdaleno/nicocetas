# ¿Como correr el proyecto?

Para correr el proyecto, es necesario tener tanto el API, como el proyecto de Angular corriendo.

### Como correr el API

Para poder correr el API, una vez clonado este repositorio, ir a el folder del api en la terminal, con `cd`

```
cd api\
```

Ahora es necesario instalar todos los componentes necesarios para que el proyecto sirva, para ello hacer:

```
npm install
```

En ese mismo directorio. Para poder ejecutar el API, correr el siguiente comando (Aun en el directorio de API)

```
npm run dev
```

Una vez hecho esto, deberiamos de ver una notificion en la consola, similar a esto:

```
~\University\SixthSemester\ProgramacionWebII\recetas\api> npm run dev                 1 06/08/2024 12:43:27 PM

> api@1.0.0 dev
> nodemon index.ts

[nodemon] 3.1.3
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: ts,json
[nodemon] starting `ts-node index.ts`
Server running at http://localhost:3000
[nodemon] restarting due to changes...
[nodemon] starting `ts-node index.ts`
```

***DEJAR LA TERMINAL CORREIENDO, NO CERRAR ESTA PESTAÑA DE LA TERMINAL***

### Como correr el proyecto de Angular

Para correr el proyecto de Angular, es necesario ir ahora al directorio front, con `cd front`

Posteriomrnete, correr el siguiente comando

```
npm install 
```

Ahora deberia de ser posible ejecutar el proyecto con

```
ng serve -o
```