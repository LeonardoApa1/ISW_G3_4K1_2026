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
    ├── 📁 base_line
    │
    ├── 📁 material_catedra
    │   ├── 📁 bibliografia
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
    │   ├── 📁 tp_07
    │   ├── 📁 tp_08
    │   ├── 📁 tp_09
    │   ├── 📁 tp_10
    │   ├── 📁 tp_11
    │   ├── 📁 tp_12
    │   └── 📁 tp_13
    │
    ├── 📁 trabajos_investigacion_grupal
    │   ├── 📁 investigacion_01
    │   └── 📁 investigacion_02
    │
    ├── 📁 ejercicios_practicos
    │
    └── 📁 material_complementario
        ├── 📁 apuntes_de_clase
        └── 📁 resumenes_para_parciales

```
## Ítems de configuración

| Ítem de configuración | Regla de nombrado | Ubicación lógica (Carpeta) | Tipo de ítem |
| :--- | :--- | :--- | :--- |
| **Documento Línea Base (SCM)** | `ISW_<NAME_BL>BASE_LINE.md` | `base_line` | Producción Propia |
| **Bibliografía** | `BIBLIO_<Nombre_Tema>_<Autor>.pdf` | `material_catedra/bibliografia` | Cátedra |
| **Templates (Plantillas)** | `TEMPLATE_<Nombre_Tema>.pdf / .xlsx` | `material_catedra/templates` | Cátedra |
| **Presentaciones (Filminas)** | `PRE_<Nombre_Tema>.pdf` | `material_catedra/presentaciones` | Cátedra |
| **Trabajos Prácticos** | `ISW_G<X>_TP<NN>_<Nombre_Tema>.pdf` | `trabajos_practicos/tp_<NN>` | Producción Propia |
| **Trabajos Prácticos (Código Fuente)** | `Nomenclatura nativa del lenguaje utilizado (Ej: py, js)` | `trabajos_practicos/tp_<NN>` | Producción Propia |
| **Trabajos de Investigación** | `ISW_G<X>_INV<NN>_<Nombre_Tema>.pdf` | `trabajos_investigacion_grupal/investigacion_<NN>` | Producción Propia |
| **Ejercicios Prácticos** | `EJER_<Nombre_Tema>.pdf` | `ejercicios_practicos` | Clase |
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
| `<Fecha>` | Fecha en la que se tomó el apunte o se dictó la clase. Formato numérico AAAA-MM-DD (Ej: 2026-08-24). |


## Criterio de línea base

Como grupo, hemos establecido que la creación de nuevas líneas base estará ligada al ciclo de vida de los Trabajos Practicos y Trabajos de Investigación. Este enfoque asegura que el establecimiento de líneas base sea predecible, auditable y directamente proporcional al avance de la materia.

Se definirá y etiquetará una nueva línea base cuando se cumplan los siguientes hitos:

1. **Hito de Entrega Inicial:** Se hara una línea base en el momento en que se finalice la versión inicial de un Trabajo Practico o Trabajo de Investigacion.
2. **Hito de Corrección / Aprobación:** Se establecerá una nueva línea base al momento de integrar al repositorio los ajustes, correcciones o mejoras solicitadas por el equipo docente referido al trabajo".

## Registro de líneas base

| Versión | Tag de Git | Fecha | Descripción |
| :--- | :--- | :--- | :--- |
| `v1.0` | `v1.0` | 2026-08-24 | Primera línea base correspondiente a la entrega del TP4. Incluyendo la creación de la estructura inicial de carpetas, el Plan de Configuración (README.md) y el material de estudio inicial provisto por la cátedra. |
| `v1.1` | `v1.1` | 2026-09-24 | Línea base correspondiente a la corrección del TP4. Incluye la carga completa del material anual de la UV, la estabilización de la estructura del repositorio y la actualización del Plan SCM (mejora en el criterio de línea base y flexibilización de extensiones en la nomenclatura). |
| `v1.2` | `v1.2` | 2026-09-25 | Línea base correspondiente a la resolución del TP1 (Gestión Lean-Ágil de Productos de Software). Contiene las tarjetas de Historias de Usuario para el dominio "Mis Gastos Familiares". |
| `v1.3` | `v1.3` | 2026-09-27 | Línea base correspondiente a la resolución e integración del TP2 (Gestión Lean-Ágil). Contiene la identificación de roles, definición del MVP, y las Historias de Usuario (canónicas y estimadas) para el caso "EcoHarmony Park". |
| `v1.4` | `v1.4` | 2026-10-05 | Línea base correspondiente a la resolución e integración del TP3 (Gestión Lean-Ágil). Contiene la identificación de roles, definición del MVP y las Historias de Usuario para el dominio "Recircula tus prendas - Cuida el planeta". |