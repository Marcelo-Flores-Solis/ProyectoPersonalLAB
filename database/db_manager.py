import mysql.connector

# Configuracion de conexion
DB_CONFIG = {
    'host': 'localhost',
    'user': 'root',
    'password': '',
    'database': 'cefiro_db'
}

def guardar_mensaje(nombre, email, mensaje):
    conexion = None
    try:
        conexion = mysql.connector.connect(**DB_CONFIG)
        cursor = conexion.cursor()
        
        sql = "INSERT INTO mensajes (nombre, email, mensaje) VALUES (%s, %s, %s)"
        val = (nombre, email, mensaje)
        
        cursor.execute(sql, val)
        conexion.commit()
        print("DB: Mensaje guardado correctamente.")
        
    except mysql.connector.Error as err:
        print(f"DB Error: {err}")
    finally:
        if conexion and conexion.is_connected():
            cursor.close()
            conexion.close()

def obtener_mensajes():
    conexion = None
    filas_html = ""
    try:
        conexion = mysql.connector.connect(**DB_CONFIG)
        cursor = conexion.cursor()
        
        cursor.execute("SELECT id, nombre, email, mensaje, fecha FROM mensajes ORDER BY fecha DESC")
        resultados = cursor.fetchall()
        
        for row in resultados:
            filas_html += f"""
            <tr>
                <td>{row[0]}</td>
                <td>{row[1]}</td>
                <td>{row[2]}</td>
                <td>{row[3]}</td>
                <td>{row[4]}</td>
            </tr>
            """
            
    except mysql.connector.Error as err:
        print(f"DB Error: {err}")
        filas_html = "<tr><td colspan='5'>Error de conexios</td></tr>"
    finally:
        if conexion and conexion.is_connected():
            cursor.close()
            conexion.close()
            
    return filas_html