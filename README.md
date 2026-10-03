# iCars

Guía de autos disponibles en el mercado mexicano, desde hot hatches de los 2000 hasta deportivos recientes. Cada ficha incluye especificaciones técnicas, calificación de confiabilidad de usuarios y una estimación de qué tan caro es mantener el auto y conseguir refacciones en México.

**🚗 Demo en vivo:** https://icars-six.vercel.app

![iCars](./docs/preview.gif)

## Por qué lo hice

[2–3 líneas tuyas. Ejemplo: "Al buscar autos usados me di cuenta de que la información sobre costos de mantenimiento y refacciones en México está dispersa en foros y grupos. Quise reunirla en un solo lugar, modelo por modelo."]

## Funcionalidades

- 32 modelos documentados de 12 marcas, con ficha técnica y contexto histórico
- Calificaciones de confiabilidad de otros usuarios
- Comparador de modelos lado a lado
- Glosario de términos automotrices
- Botón "Sorpréndeme" para descubrir un modelo al azar
- Diseño responsivo y meta tags para compartir en redes (Open Graph y Twitter Cards)

## Tecnologías

- **Astro**: sitio [estático / híbrido] con rutas dinámicas para cada modelo
- **Tailwind CSS**: estilos y diseño responsivo
- **Supabase**: base de datos para [calificaciones de usuarios / datos de modelos]
- **Vercel**: despliegue continuo desde GitHub

## Decisiones técnicas

- [Cómo guardas los datos de cada modelo: content collections, JSON, tablas en Supabase…]
- [Cómo se generan las páginas /modelos/[slug]]
- [Cómo funciona el comparador]
- **Seguridad en Supabase:** [Row Level Security activado; el frontend solo usa la clave pública y las políticas limitan…]

## Retos y aprendizajes

- [Algo que te costó trabajo y cómo lo resolviste]
- [Algo que aprendiste]

## Cómo ejecutarlo

```bash
git clone https://github.com/michelxzs10-oss/icars.git
cd icars
npm install
npm run dev
```

Se necesita un archivo `.env` con las variables de Supabase (ver `.env.example`).

## Próximos pasos

- Más modelos y marcas
- [Integración de links de afiliado]

## Créditos

Las imágenes pertenecen a sus respectivas marcas y autores y se usan con fines informativos y documentales.

## Autor

Michel Arturo Jaime Guerrero · [GitHub](https://github.com/michelxzs10-oss) · [LinkedIn]