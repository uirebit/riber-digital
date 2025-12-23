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

Para que el formulario de contacto envíe emails, necesitas configurar Resend:

1. Crea una cuenta gratuita en [resend.com](https://resend.com)
2. Obtén tu API key
3. Crea un archivo `.env.production`:

```env
NODE_ENV=production
PORT=3000
RESEND_API_KEY=re_tu_clave_aqui
```

4. Descomenta la sección `env_file` en `docker-compose.yml`

**Alternativa:** Configura la variable directamente en Docker:
```bash
docker run -d -p 3000:3000 -e RESEND_API_KEY=re_tu_clave_aqui --name riber-digital-web riber-digital-web
```

**Nota:** Sin configurar RESEND_API_KEY, el formulario seguirá funcionando pero solo registrará los mensajes en los logs del contenedor.

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
