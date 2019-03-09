install:
	npm install

start:
	npx babel-node 'src/bin/weather.js' 'Londons'

build:
	rm -rf dist
	npm run build

test:
	npm test

test-watch:
	npm run test:watch

lint:
	npx eslint .

publish: lint test
	npm publish

.PHONY: test
