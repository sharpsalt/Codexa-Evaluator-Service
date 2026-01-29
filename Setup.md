## How to setup a new TypeScript Express Project

```
1. 
npm init -y
```

```
2. 
npm install -D typescript
npm install concurrently
```

```
3. tsc --init 
```


```
4
Add the following scipts in package.json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "watch": "npx tsc -w",
    "build": "tsc",
    "start": "node dist/index.js",
    "prestart": "npm run build",
    "dev": "npx concurrently \"npm run watch\" \"npm start\""
  }
```

NOTE-Make relevant config changes in tsconfig.json

```
5.
npm run dev
```

