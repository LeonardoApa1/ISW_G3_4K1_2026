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
    └── 📁 parciales
        ├── 📁 parciales_viejos_1
        ├── 📁 parciales_viejos_2
        └── 📁 resumenes_para_parciales
```
*(Nota de infraestructura: Debido a que el sistema de control de versiones Git no rastrea directorios vacíos, las carpetas que temporalmente no posean contenido incluyen un archivo oculto `.gitkeep`. Este archivo es de carácter puramente estructural para mantener la arquitectura del repositorio, no se considera un Ítem de Configuración y puede ser eliminado una vez que el directorio aloje los entregables correspondientes).*

## Ítems de configuración

| Ítem de configuración | Regla de nombrado | Ubicación lógica (Carpeta) | Tipo de ítem |
| :--- | :--- | :--- | :--- |
| **Documento Línea Base (SCM)** | `ISW_<NAME_BL>BASE_LINE.md` | Directorio raíz | Producción Propia |
| **Bibliografía** | `BIBLIO_<Nombre_Tema>_<Autor>.pdf` | `material_catedra/bibliografia` | Cátedra |
| **Templates (Plantillas)** | `TEMPLATE_<Nombre_Tema>.pdf` | `material_catedra/templates` | Cátedra |
| **Presentaciones (Filminas)** | `PRE_<Nombre_Tema>.pdf` | `material_catedra/presentaciones` | Cátedra |
| **Guías de Cátedra** | `GUIA_<Nombre_Tema>.pdf` | `material_catedra/guias` | Cátedra |
| **Trabajos Prácticos (Entregables)** | `ISW_G<X>_TP<NN>_<Nombre_Tema>.pdf` | `trabajos_practicos/tp_<NN>` | Producción Propia |
| **Trabajos de Investigación** | `ISW_G<X>_INV<NN>_<Nombre_Tema>.pdf` | `trabajos_investigacion_grupal/investigacion_<NN>` | Producción Propia |
| **Ejercicios Prácticos** | `EJER_P<P>_<Nombre_Tema>.pdf` | `ejercicios_practicos/para_parcial_<P>` | Clase |
| **Parciales** | `PARCIAL<P>_<Año>_<Turno>.img` | `parciales/parciales_viejos_<P>` | Clase |
| **Resúmenes de Estudio** | `RESUMEN_P<P>_<Nombre_Tema>.pdf` | `parciales/resumenes_para_parciales` | Producción Propia |

## Glosario de Nomenclatura

| Etiqueta | Significado y Formato |
| :--- | :--- |
| `<NAME_BL>` | Nombre de la línea base. Se especifica el tipo de línea base. |
| `<X>` | Número identificador del grupo (Ej: 1). |
| `<NN>` | Número correlativo de dos dígitos (Ej: 01, 02, 07). |
| `<P>` | Número identificador del parcial. Valores posibles: 1 o 2. |
| `<Nombre_Tema>` | Descripción corta del tema en formato *snake_case* y sin tildes (Ej: scm, testing). |
| `<Autor>` | Apellido del autor del material de estudio. Si el material tiene múltiples autores, se utiliza el apellido del autor principal seguido de `_et_al` (Ej: `sommerville`, `pressman_et_al`).|
| `<Año>` | Año en el que se tomó el parcial viejo (Ej: 2024, 2025). |
| `<Turno>` | Turno en el que se tomó el examen. Valores posibles: M (Mañana), T (Tarde), N (Noche). |


## Criterio de línea base

Una **Línea Base** representa un estado estable, formalmente revisado y congelado de los ítems de configuración del proyecto. Como grupo, definimos que se establecerán líneas base en los siguientes hitos:

1. **Línea Base Inicial:** Se establece al aprobar el diseño de la arquitectura del repositorio y este Plan de Gestión de Configuración (SCM).
2. **Línea Base de Entrega:** Se establece en el momento exacto en que se finaliza y se congela el desarrollo de un Trabajo Práctico o Investigación para ser entregado a la cátedra para su evaluación.
3. **Línea Base de Corrección:** Se establece únicamente si la cátedra solicita correcciones o re-entregas sobre una Línea Base de Entrega previa.

Cada línea base se marcará obligatoriamente mediante un **Tag de Git** en el repositorio utilizando la nomenclatura semántica **`v[MAJOR].[MINOR]`**, donde:

* **`MAJOR`**: Se incrementa cada vez que se alcanza un nuevo hito principal (Ej: Aprobación del repositorio inicial `v1.0`, Entrega del TP 1 `v2.0`, Entrega del TP 2 `v3.0`).
* **`MINOR`**: Se incrementa exclusivamente cuando se integran correcciones, ajustes o parches sobre un hito mayor ya entregado, producto del feedback de la cátedra (Ej: Si el TP 1 entregado en la `v2.0` requiere ajustes, la nueva versión corregida será la `v2.1`).

## Registro de líneas base

| Versión | Tag de Git | Fecha | Descripción |
| :---: | :---: | :---: | :--- |
| `v1.0` | `v1.0` | 24/08/2026 | Línea base inicial. Establecimiento de la arquitectura del repositorio y aprobación del Plan de Gestión de Configuración (README.md). |
