const mysql = require("mysql2");
const { getPageLimit } = require("./getPageLimit");
const bd = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  database: "sushi",
  password: "",
});

/* Получение блюд по категории и обозначаем лимит */
function getDish(params) {
  const limit = params.limit ? `limit ${params.limit.start}, ${params.limit.end}` : "";
  const search = params.search
    ? ` where dish.name like '%${params.search}%' and dish.category_id = ${params.category}`
    : ` where dish.category_id = ${params.category}`;

  /* `SELECT *  FROM dish INNER JOIN nutritional_value on dish.nutritional_value_id = nutritional_value.id WHERE name LIKE '%с%' and dish.category_id = 5 LIMIT 0 , 10` */

  return bd
    .promise()
    .query(
      `SELECT dish.*, nv.energy_value, nv.squirrels, nv.fats, nv.carbohydrates FROM dish INNER JOIN nutritional_value as nv  on dish.nutritional_value_id = nv.id ${search} ${limit}`,
    )
    .then(([rows, fields]) => {
      return rows;
    })
    .catch((err) => console.log(err));
}

/* получаем цены по id блюда */
function getPrice(dish_id) {
  return bd
    .promise()
    .query(`select * from price where price.dish_id = ${dish_id} order by price.portion asc`)
    .then(([rows]) => {
      return rows;
    });
}

function getNumberOfDish(params) {
  const str = params.search
    ? `select count(*) as allProduct from dish where name like '%${params.search}%' and dish.category_id = ${params.category}`
    : `select count(*) as allProduct from dish where dish.category_id = ${params.category}`;
  console.log(str);
  return bd
    .promise()
    .query(str)
    .then(([rows]) => rows[0].allProduct);
}

/* объедением блюдо с ценами */
async function getProduct(params) {
  const numOfDish = await getNumberOfDish(params);

  const infoPage = getPageLimit(numOfDish, +params.page, params.limit);

  const dish = await getDish({
    category: params.category,
    limit: infoPage.limit,
    search: params.search,
  });

  for (let i = 0; i < dish.length; i++) {
    dish[i].price = await getPrice(dish[i].id);
  }

  delete infoPage.limit;
  return { dish, pages: infoPage };
}

module.exports = { bd, getProduct, getDish, getPrice };
