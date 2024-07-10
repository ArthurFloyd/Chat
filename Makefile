lint-frontend:
	make -C frontend lint

install:
	npm ci
	cd frontend & npm ci

start-frontend:
	make -C frontend start

build:
	npm run build

start-backend:
	npx start-server

start:
	make start-backend & make start-frontend