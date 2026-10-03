<div align="center">

#  iCars

**Guía de autos disponibles en el mercado mexicano**
Especificaciones técnicas, confiabilidad y costo real de mantenimiento, modelo por modelo.

[![Demo](https://img.shields.io/badge/Demo-icars--six.vercel.app-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://icars-six.vercel.app)

![Astro](https://img.shields.io/badge/Astro-BC52EE?style=flat-square&logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3FCF8E?style=flat-square&logo=supabase&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)


</div>

## 📌 El problema

Cuando buscas un auto usado en México, los anuncios de venta te dicen el precio, pero no qué tan confiable es el modelo, cuánto cuesta mantenerlo ni qué tan fácil es conseguir refacciones. Esa información existe, pero está dispersa en foros, grupos y experiencias de otros dueños.

**iCars** reúne todo eso en un solo lugar: no es un catálogo de venta ni una base de datos genérica, sino una referencia construida modelo por modelo, pensada para crecer como una wiki hecha por y para quienes disfrutan la mecánica y la historia detrás de cada auto.

## ✨ Funcionalidades

- **32 modelos documentados de 12 marcas**, desde hot hatches de los 2000 hasta deportivos más recientes
- **Fichas técnicas completas** con contexto histórico de cada modelo
- **Calificaciones de confiabilidad** aportadas por otros usuarios
- **Estimación de costos** de mantenimiento y disponibilidad de refacciones en México
- **Comparador** de modelos lado a lado
- **Glosario** de términos automotrices
- **"Sorpréndeme"** para descubrir un modelo al azar
- **Diseño responsivo** y metadatos Open Graph / Twitter Cards para que cada página se vea bien al compartirse

<!--
## 📸 Capturas

| Ficha de modelo | Comparador |
|---|---|
| ![Ficha](./docs/ficha.png) | ![Comparador](./docs/comparador.png) |

| Glosario | Vista móvil |
|---|---|
| ![Glosario](./docs/glosario.png) | ![Móvil](./docs/movil.png) |
-->

## 🛠 Cómo está construido

| Tecnología | Uso |
|---|---|
| **Astro** | Generación del sitio y rutas dinámicas para cada modelo (`/modelos/[slug]`) |
| **Tailwind CSS** | Estilos y diseño responsivo |
| **Supabase** | Base de datos para las calificaciones de los usuarios |
| **Vercel** | Despliegue continuo desde la rama `main` |

### Decisiones técnicas

- **Una página por modelo con rutas dinámicas:** cada auto tiene su propia URL legible (por ejemplo `/modelos/volvo-c30`), lo que facilita compartir fichas y mejora el SEO.
- **SEO desde el inicio:** cada página genera su título, descripción, URL canónica e imagen para redes sociales.
- **Contenido modelo por modelo:** en lugar de importar una base de datos genérica, cada ficha se documenta individualmente para priorizar información útil para el mercado mexicano.


## 🚀 Ejecutarlo en local

```bash
git clone https://github.com/michelxzs10-oss/icars.git
cd icars
npm install
npm run dev
```

Abre http://localhost:4321

Para las funciones que usan la base de datos se necesita un archivo `.env` con las variables de conexión a Supabase.

## 🗺 Próximos pasos

- [ ] Documentar más modelos y marcas
- [ ] Agregar capturas y demo en video a este README
- [ ] Ampliar la información de costos de refacciones por modelo

## 📄 Créditos

Proyecto personal sin fines de lucro. Las imágenes pertenecen a sus respectivas marcas y autores y se usan con fines informativos y documentales.

---

<div align="center">

Hecho por **Michel Arturo Jaime Guerrero**
[GitHub](https://github.com/michelxzs10-oss)

</div>