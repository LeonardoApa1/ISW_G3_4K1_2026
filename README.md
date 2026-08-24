## ISW_G3_4K1_2026

Repositorio para la materia ingeniería y calidad de software, del curso 4k1 - Grupo 3

## Integrantes del equipo

| # | Integrante | Legajo |
|:-:|:---|:---:|
| 1 | Amor, Gonzalo | 91276 |
| 2 | Apa, Leonardo | 91183 |
| 3 | Cavilla, Matias | 90589 |
| 4 | Cugno, Nicolás | 94949 |
| 5 | Durán, Francisco | 402790 |
| 6 | Ferrer, Felipe | 95785 |
| 7 | Garcia, Bruno | 96596 |
| 8 | Llorens, Juan Cruz | 91927 |
| 9 | López, Iván | 89776 |
| 10 | Musumeci, Agustín | 401068 |
| 11 | Prado, Ignacio | 97286 |
| 12 | Torres Linares, Hernán | 401089 |
| 13 | Zurbriggen, Ignacio | 94110 |
| 14 | Heck, Sebastian | 79848 |

## Estructura del repositorio

La estructura de este repositorio refleja la arquitectura lógica de directorios. Los archivos específicos y sus nomenclaturas se encuentran detallados en la sección de "Ítems de Configuración", manteniendo el directorio raíz limpio y enfocado exclusivamente en la gestión global.

```text
└── ISW_G3_4K1_2026
    ├── 📁 base
    │
    ├── 📁 material_catedra
    │   ├── 📁 bibliografia
    │   ├── 📁 guias
    │   ├── 📁 presentaciones
    │   └── 📁 templates
    │
    ├── 📁 trabajos_practicos
    │   ├── 📁 tp_01
    │   ├── 📁 tp_02
    │   ├── 📁 tp_03
    │   ├── 📁 tp_04
    │   ├── 📁 tp_05
    │   ├── 📁 tp_06
    │   └── 📁 tp_07
    │
    ├── 📁 trabajos_investigacion_grupal
    │   ├── 📁 investigacion_01
    │   └── 📁 investigacion_02
    │
    ├── 📁 ejercicios_practicos
    │   ├── 📁 para_parcial_1
    │   └── 📁 para_parcial_2
    │
    └── 📁 material_complementario
        ├── 📁 apuntes_de_clase
        ├── 📁 parciales_viejos_1
        ├── 📁 parciales_viejos_2
        └── 📁 resumenes_para_parciales

```
## Ítems de configuración

| Ítem de configuración | Regla de nombrado | Ubicación lógica (Carpeta) | Tipo de ítem |
| :--- | :--- | :--- | :--- |
| **Documento Línea Base (SCM)** | `ISW_<NAME_BL>BASE_LINE.md` | `base` | Producción Propia |
| **Bibliografía** | `BIBLIO_<Nombre_Tema>_<Autor>.pdf` | `material_catedra/bibliografia` | Cátedra |
| **Templates (Plantillas)** | `TEMPLATE_<Nombre_Tema>.pdf` | `material_catedra/templates` | Cátedra |
| **Presentaciones (Filminas)** | `PRE_<Nombre_Tema>.pdf` | `material_catedra/presentaciones` | Cátedra |
| **Guías de Cátedra** | `GUIA_<Nombre_Tema>.pdf` | `material_catedra/guias` | Cátedra |
| **Trabajos Prácticos (Entregables)** | `ISW_G<X>_TP<NN>_<Nombre_Tema>.pdf` | `trabajos_practicos/tp_<NN>` | Producción Propia |
| **Trabajos de Investigación** | `ISW_G<X>_INV<NN>_<Nombre_Tema>.pdf` | `trabajos_investigacion_grupal/investigacion_<NN>` | Producción Propia |
| **Ejercicios Prácticos** | `EJER_P<P>_<Nombre_Tema>.pdf` | `ejercicios_practicos/para_parcial_<P>` | Clase |
| **Parciales** | `PARCIAL<P>_<Año>_<Turno>.png` | `material_complementario/parciales_viejos_<P>` | Clase |
| **Resúmenes de Estudio** | `RESUMEN_P<P>_<Nombre_Tema>.pdf` | `material_complementario/resumenes_para_parciales` | Producción Propia |
| **Apuntes de Clase** | `APUNTE_<Fecha>_<Nombre_Tema>_<Autor>.pdf` | `material_complementario/apuntes_de_clase` | Producción Propia |

## Glosario de Nomenclatura

| Etiqueta | Significado y Formato |
| :--- | :--- |
| `<NAME_BL>` | Nombre de la línea base. Se especifica el tipo de línea base. |
| `<X>` | Número identificador del grupo (Ej: 1). |
| `<NN>` | Número correlativo de dos dígitos (Ej: 01, 02, 07). |
| `<P>` | Número identificador del parcial. Valores posibles: 1 o 2. |
| `<Nombre_Tema>` | Descripción corta del tema en formato *snake_case* y sin tildes (Ej: scm, testing). |
| `<Autor>` | Apellido del autor del material de estudio (Ej: sommerville, pressman). |
| `<Año>` | Año en el que se tomó el parcial viejo (Ej: 2024, 2025). |
| `<Turno>` | Turno en el que se tomó el examen. Valores posibles: M (Mañana), T (Tarde), N (Noche). |
| `<Fecha>` | Fecha en la que se tomó el apunte o se dictó la clase. Formato numérico AAAA-MM-DD (Ej: 2026-08-24). |


## Criterio de línea base

Como grupo, hemos decidido que el momento para definir una nueva línea base será cuando el repositorio alcance un hito u objetivo importante en términos de completitud académica y de gestión. Esto sucederá al consolidar un conjunto significativo de entregables o material de estudio, garantizando que el contenido se encuentre en un estado estable y apto para ser auditado, evaluado o utilizado como referencia final.

Para ello, nos aseguraremos de que todos los documentos y resoluciones clave estén finalizados, que no existan inconsistencias estructurales, y que los archivos cumplan con los requisitos formales acordados. Además, la totalidad de los ítems de configuración asociados deberán estar actualizados, respetando la nomenclatura definida, y el material deberá haber pasado por las revisiones del equipo antes de ser marcado formalmente como línea base en el repositorio

## Registro de líneas base

| Versión | Tag de Git | Fecha | Descripción |
| :---: | :---: | :---: | :--- |
| `v1.0` | `v1.0` | 24/08/2026 | Línea base inicial. Establecimiento de la arquitectura del repositorio y aprobación del Plan de Gestión de Configuración (README.md). |


