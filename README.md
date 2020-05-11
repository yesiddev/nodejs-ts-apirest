# nodejs-ts-apirest
Ejemplo practico de una api rest emulando la creación de un usuario y una publicación(post)

# Agregando primer post (Postman)
{
	"title": "Primer Post",
	"url": "primer-post",
	"content": "Esto es solo una prueba, espero funcione ;)",
	"image": "https://image.freepik.com/foto-gratis/tabla-madera-sobremesa-vacia-fondo-borroso_1253-1584.jpg"
}

#agregando primer usuario (PD: la contraseña no está encriptada)
{
	"name": "Will Smith",
	"email": "willsmith@gmail.com",
	"password": "123456",
	"username": "Willsito"
}

#asignarle un post a un usuario  (en posts se agrega dentro de un array el id de tu primer post)
{
	"name": "Will Smith",
	"email": "willsmith@gmail.com",
	"password": "123456",
	"username": "Willsito",
	"posts": [
			"Aqui va el id de tu primer post"
		] 
}
