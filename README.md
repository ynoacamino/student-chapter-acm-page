# 📌 **ACM UNSA - Página Oficial**  

Este proyecto es la página web oficial del **Capítulo Estudiantil ACM** de la **Universidad Nacional de San Agustín (UNSA)**.  

La página fue diseñada y desarrollada bajo la dirección de **[Yenaro Joel Noa Camino](https://github.com/ynoacamino)**, presidente del **Comité de Desarrollo Web**, con la colaboración de **[Luis Gustavo Sequeiros](https://github.com/gustadev24)**, voluntario del comité.  

La plataforma está optimizada para **SEO**, ofrece contenido dinámico y estática, y permite una gestión eficiente de imágenes, eventos y miembros del capítulo.

---

## 🚀 **Tecnologías Utilizadas**  

### **Frontend**  
- **Framework:** [Next.js](https://nextjs.org/) (con `output: export` para generación de archivos estáticos).  
- **Estilos:** Tailwind CSS  
- **Animaciones:** Framer Motion  
- **Manejo de Datos:** SWR  
- **Base de Datos en Cliente:** PocketBase (para consultas ligeras)  

### **Backend**  
- **Servidor:** PocketBase  
- **Lenguaje:** Go  
- **Manejo de Migraciones:** Sistema de migraciones para configuración automatizada  
- **Optimización de Imágenes:** Hook en Go que convierte imágenes a **WebP** y genera versiones en **miniatura**  

---

## 📂 **Estructura del Proyecto**  

```
📦 student-chapter-acm-page
├── 📂 frontend/ (Next.js)
│   ├── 📂 app/
│   ├── 📂 components/
│   │   ├── layout/
│   │   ├── pages/
│   │   ├── providers/
│   │   └── ui/
│   ├── 📂 config/
│   ├── 📂 hooks/
│   ├── 📂 lib/
│   ├── 📂 types/
│   └── 📜 globals.css
│
└── 📂 backend/ (PocketBase)
    ├── 📂 hooks/ # Convierte imágenes a WebP y genera miniaturas
    ├── 📂 migrations/
    │   ├── 1741202450_add_super_user.go
    │   ├── 1741202826_set_init_config.go
    │   └── ...
    ├── main.go
    ├── Dockerfile
    ├── go.mod
    └── go.sum
```

---
<!-- 
## 📸 **Capturas de Pantalla**  
🚀 *Aquí puedes incluir imágenes de la página principal, la galería, los comités, etc.*  

--- -->

## 🔥 **Funcionalidades Principales**  

### 🔹 **Generación de Contenido Estático y Dinámico**  
El proyecto sigue una estrategia **híbrida** de generación de datos:  
- **Datos estáticos** (comités, secciones) se generan en la **compilación** con `generateStaticParams()` y **Server Components**.  
- **Datos dinámicos** (eventos, imágenes de la galería) se obtienen desde el **cliente** con `SWR` para asegurar actualizaciones en tiempo real.  

### 🔹 **Página de Comités (`comites/[committeeSlug]`)**  
- Se generan **rutas estáticas** en la compilación:  
  ```tsx
  export async function generateStaticParams() {
    const committees = await api.getCommittees();
    return committees.map(({ name }) => ({
      committeeSlug: slugify(name),
    }));
  }
  ```
- Los datos principales del comité (nombre, descripción, integrantes) se obtienen en **Server Components** para mejorar el rendimiento y SEO.  
- **Eventos del comité** se consultan **dinámicamente** con `SWR`, permitiendo actualizaciones sin recargar la página.  

### 🔹 **Eventos**  
- **Eventos pasados** y datos generales de eventos futuros se generan en la **compilación**.  
- **Eventos muy próximos** se consultan en el **cliente** con `SWR`, asegurando que siempre se muestren los más recientes.  
- Skeleton loaders para una mejor experiencia mientras se cargan los datos.  

### 🔹 **Galería (`galeria/page.tsx`)**  
- Clasificación de imágenes por categorías.  
- Carga dinámica con `useGallery.tsx`.  
- Optimización de imágenes en el backend (WebP y miniaturas).  

### 🔹 **Optimización de Imágenes (Backend)**  
- Hook en **Go** que:  
  ✅ Convierte imágenes a **WebP** automáticamente.  
  ✅ Recorta imágenes con el **ratio óptimo** si no se especifica.  
  ✅ Genera dos versiones: **original** y **miniatura**.  

### 🔹 **Migraciones en PocketBase (`backend/migrations/`)**  
- Configuración inicial automatizada (usuarios, eventos, imágenes, etc.).  
- Permite desplegar la base de datos sin intervención manual.  


## 🛠 **Instalación y Configuración**  

### **1️⃣ Clonar el repositorio**  
```sh
git clone https://github.com/tuusuario/acm-unsa-web.git
cd acm-unsa-web
```

### **2️⃣ Configurar el entorno**  
Crea un archivo **`.env.local`** en la carpeta `frontend/` y agrega:  

```
NEXT_PUBLIC_BACKEND_URL="http://localhost:8080"
NEXT_PUBLIC_FRONTEND_URL="http://localhost:3000"
```

En la carpeta `backend/`, configura `.env`:  

```
# SUPERUSER_EMAIL=""
# SUPERUSER_PASSWORD=""

# APP_URL=""
```

### **3️⃣ Instalar dependencias**  
**Frontend:**  
```sh
cd frontend
pnpm install
```

**Backend:**  
```sh
cd backend
go mod tidy
```

### **4️⃣ Ejecutar el proyecto**  
Para correr **PocketBase** (backend):  
```sh
cd backend
go run main.go
```

Para correr **Next.js** (frontend):  
```sh
cd frontend
npm run dev
```

---