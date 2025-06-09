
# 📖 Documentación técnica — **frontDeezer**

## 📌 Descripción del proyecto

Este proyecto es un frontend de React + Vite para una app tipo Deezer. Permite:

* Ver playlists.
* Ver detalles de las canciones de una playlist.
* Buscar canciones vía Deezer API.
* Agregar canciones a playlists.
* Eliminar canciones de playlists.

Usa **React Router**, **TanStack Query**, **Axios**, **TailwindCSS**, **DaisyUI** y otros componentes modernos para una experiencia de usuario fluida.

---

## 📦 Dependencias usadas y cómo instalarlas

> 📖 Instalación desde documentación oficial:

### Producción

| Paquete                 | Comando instalación                                        | Uso                         |
| :---------------------- | :--------------------------------------------------------- | :-------------------------- |
| `react`                 | `npm create vite@latest misuperapp -- --template react`                              | Librería base frontend      |
| `react-router-dom`      | `npm install react-router-dom`                             | Ruteo SPA                   |
| `axios`                 | `npm install axios`                                        | Llamadas HTTP               |
| `@tanstack/react-query` | `npm install @tanstack/react-query`                        | Fetching de datos eficiente |
| `@tanstack/react-store` | `npm install @tanstack/react-store`                        | Gestión de estado ligera    |
| `lucide-react`          | `npm install lucide-react`                                 | Iconografía moderna         |

### Estilo y herramientas

| Paquete       | Comando instalación                               | Uso                         |
| :------------ | :------------------------------------------------ | :-------------------------- |
| `tailwindcss` | `npm install tailwindcss@latest @tailwindcss/vite@latest` | Framework CSS utility-first |
| `daisyui`     | `npm install daisyui@latest`                          | Componentes predefinidos    |


---

## 📌 ¿Para qué se usa **TanStack Query**?

### 📖 ¿Qué es?

Es una librería moderna para manejar peticiones de datos, caché y estado de carga/error de forma optimizada.

### 📦 Instalación:

```bash
npm install @tanstack/react-query
```

### 📌 Cómo se usa:

**1️⃣ Crear un `QueryClient` y envolver la app:**

```jsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

<QueryClientProvider client={queryClient}>
  <AppRouter />
</QueryClientProvider>
```

**2️⃣ Hacer peticiones con `useQuery`:**

```jsx
const { data, isLoading, isError } = useQuery({
  queryKey: ['playlists'],
  queryFn: getPlaylists
})
```

**3️⃣ Refrescar datos manualmente:**

```jsx
queryClient.invalidateQueries(['playlist', id])
```

✅ Ventajas:

* Evita estados locales intermedios.
* Caché automática.
* Actualización reactiva.
* Control de error y loading automático.

---

## 📌 Cómo pasar IDs o nombres por parámetro en las rutas

### 📖 Definición de rutas (React Router v7)

```jsx
<Route path="/playlist/:id" element={<PlaylistDetailPage />} />
<Route path="/playlist/:id/search" element={<SearchPage />} />
```

### 📌 Recuperarlos en una página

```jsx
import { useParams } from 'react-router-dom'
const { id } = useParams()
```

### 📌 Pasar información adicional vía `state`

```jsx
navigate(`/playlist/${id}`, {
  state: { playlistName: name, mood }
})
```

### 📌 Recuperarla en la otra página

```jsx
const location = useLocation()
const playlistName = location.state?.playlistName
```

---

## 📌 Navegar por un ID dinámico a otra página

Ejemplo desde un `onClick`:

```jsx
const navigate = useNavigate()

const handleClick = () => {
  navigate(`/playlist/${id}`, {
    state: { playlistName: name }
  })
}
```

---

## 📂 Estructura del proyecto

```
frontDeezer/
├── src/
│   ├── components/          # Componentes reutilizables
│   ├── constants/           # Variables globales
│   ├── pages/               # Vistas principales
│   ├── router/              # Definición de rutas
│   ├── services/            # Llamadas a APIs externas
│   ├── store/               # Store global simple
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── vite.config.js
└── package.json
```

---

## 📦 Servicios y sus endpoints

📍 **src/services/PlaylistService.js**

* `getPlaylists()` → GET `/api/v1/playlists`
* `getTracksByPlaylist(playlistId)` → GET `/api/v1/playlists/{playlistId}/tracks`
* `addTrackToPlaylist(playlistId, track)` → POST `/api/v1/playlists/{playlistId}/tracks`
* `removeTrackFromPlaylist(playlistId, trackId)` → DELETE `/api/v1/playlists/{playlistId}/tracks/{trackId}`

📍 **src/services/DeezerService.js**

* `searchDeezer(query)` → GET `/api/v1/deezer/search?q=${query}`

---

## 📖 Resumen

| Tecnología            | Uso principal                         |
| :-------------------- | :------------------------------------ |
| React + Vite          | SPA frontend                          |
| React Router DOM      | Navegación con parámetros             |
| TanStack Query        | Fetching, caching y control de estado |
| Axios                 | Requests HTTP                         |
| TailwindCSS + DaisyUI | Diseño responsivo rápido              |
| Lucide React          | Iconografía moderna                   |
| TanStack Store        | Store global ligero                   |


