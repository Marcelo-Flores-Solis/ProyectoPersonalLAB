# imports necesarios
import http.server, socketserver, os, mimetypes 
from urllib.parse import parse_qs

# Configuracion
PORT = 8000
# Directorio html
TEMPLATE_DIR = 'templates'
# Directorio assets
ASSET_DIR = 'assets'

class MiSitioHandler(http.server.BaseHTTPRequestHandler):

    def do_GET(self):
        """
        Maneja las peticiones GET
        """
        #normalizamos ruta
        path = self.path.rstrip('/')
        if path == '':
            path = '/'

        #asignando direcciones a archivos html
        rutas = {
            '/': 'index.html',
            '/contacto': 'contacto.html',
            '/admin': 'admin.html',
            '/login': 'login.html',
            '/ajedrez': 'aprendeAlgo/ajedrez.html',
            '/piano': 'aprendeAlgo/piano.html',
            '/juegos': 'diviertete/juegos.html',
            '/musica': 'diviertete/musica.html',
            '/series': 'diviertete/series.html'
        }

        try:
            # solicitud de estaticos
            if self.path.startswith('/assets/'):
                self.servir_statico()
                return

            #solicitud de html
            if path in rutas:
                archivo_path = os.path.join(TEMPLATE_DIR, rutas[path])
                self.servir_html(archivo_path)
            else:
                # no existe ruta
                self.send_error(404, "Pagina no encontrada :(")

        except Exception as e:
            self.send_error(500, f"Error interno del servidor: {e}")

    def do_POST(self):

        if self.path == '/enviar-contacto':
            self.manejar_contacto()
        elif self.path == '/autenticar':
            self.manejar_login() 
        else:
            self.send_error(404, "Ruta POST no valida")

    # servir contenido
    def servir_html(self, path_archivo):
        try:
            with open(path_archivo, 'r', encoding='utf-8') as f:
                content = f.read()
            
            self.send_response(200)
            self.send_header('Content-type', 'text/html; charset=utf-8')
            self.end_headers()
            self.wfile.write(content.encode('utf-8'))
        except FileNotFoundError:
            self.send_error(404, "Archivo HTML fisico no encontrado")

    def servir_statico(self):
        path_archivo = self.path[1:] 
        
        try:
            with open(path_archivo, 'rb') as f:
                content = f.read()
            
            mime_type, _ = mimetypes.guess_type(path_archivo)
            
            self.send_response(200)
            if mime_type:
                self.send_header('Content-type', mime_type)
            self.end_headers()
            self.wfile.write(content)
        except FileNotFoundError:
            self.send_error(404, "Archivo estatico no encontrado")

    def manejar_contacto(self):
        # tamaño de datos
        content_length = int(self.headers['Content-Length'])
        # leer datos
        post_data = self.rfile.read(content_length).decode('utf-8')
        datos = parse_qs(post_data)
        
        print(f"Nuevo Mensaje Recibido: {datos}") 

        self.send_response(303) 
        self.send_header('Location', '/')
        self.end_headers()

# iniciar servidor
if __name__ == "__main__":

    os.chdir(os.path.dirname(os.path.abspath(__file__)))

    with socketserver.TCPServer(("", PORT), MiSitioHandler) as httpd:
        print(f"Servidor corriendo en http://localhost:{PORT}")
        print("Presiona Ctrl+C para detenerlo.")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServidor detenido.")
            httpd.server_close()