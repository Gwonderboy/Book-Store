run:
	docker run -it -p 3010:3010 gwonderboy/book-store

build:
	docker build -t gwonderboy/

push:
	docker push gwonderboy/book-store