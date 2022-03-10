To get started

```sh
npm install

npm i -g sequelize-cli
or
sudo npm i sequelize
```

---

create project structure

```sh
sequelize init
```

create models

```sh
sequelize model:create --name NameUpperCamelCase --attributes field:int,field:string
```

create migrations

```sh
sequelize migration:generate --name camelCase
```

Upload migrations

```sh
sequelize-cli db:migrate
```

Undoing migrations

```sh
sequelize-cli db:migrate:undo

sequelize-cli db:migrate:undo:all --to XXXXXXXXXXXXXX-create-posts.js
```

---

### License

MIT
