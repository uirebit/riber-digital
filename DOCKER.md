# Docker para Riberdigital Web

## Construcción y ejecución

### Opción 1: Usando Docker Compose (Recomendado)

```bash
# Construir y ejecutar
docker-compose up -d

# Ver logs
docker-compose logs -f

# Detener
docker-compose down
```

### Opción 2: Usando Docker directamente

```bash
# Construir la imagen
docker build -t riber-digital-web .

# Ejecutar el contenedor
docker run -d -p 3000:3000 --name riber-digital-web riber-digital-web

# Ver logs
docker logs -f riber-digital-web

# Detener y eliminar
docker stop riber-digital-web
docker rm riber-digital-web
```

## Acceso

Una vez ejecutado, la aplicación estará disponible en:
- http://localhost:3000
- http://[IP-DE-TU-NAS]:3000

## Configuración en Synology NAS

### Usando Docker en DSM:

1. Abre la aplicación **Docker** en tu NAS
2. Ve a **Imagen** > **Añadir** > **Añadir desde archivo**
3. O construye desde la terminal SSH:
   ```bash
   cd /ruta/a/tu/proyecto
   docker-compose up -d
   ```

### Configurar Reverse Proxy (opcional):

1. Abre **Panel de Control** > **Portal de Aplicaciones** > **Reverse Proxy**
2. Crea una nueva regla:
   - Nombre de origen: riberdigital.tudominio.com
   - Protocolo: HTTP/HTTPS
   - Nombre de host: localhost
   - Puerto: 3000

## Variables de entorno

Si necesitas añadir variables de entorno, crea un archivo `.env.production`:

```env
NODE_ENV=production
PORT=3000
```

Y descomenta la sección `env_file` en `docker-compose.yml`.

## Actualización

Para actualizar la aplicación:

```bash
# Reconstruir la imagen
docker-compose build --no-cache

# Reiniciar el contenedor
docker-compose up -d
```

## Recursos

El contenedor está configurado para usar:
- CPU: 0.5-1 núcleo
- RAM: 256MB-512MB

Puedes ajustar estos límites en `docker-compose.yml`.
