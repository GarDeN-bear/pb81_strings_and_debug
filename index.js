// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);

function task1(product, inBasket, quantity) {
  if (inBasket) {
    let print = quantity + ' x ' + product;
    console.log(print);
  }
  console.log('\n');
}

function task2(username, accountStatus) {
  console.log(username + ' | (' + accountStatus + ') аккаунт');
  let cashbackPercentage = 10;
  if (accountStatus == 'extended') {
    cashbackPercentage = 15;
  } else if (accountStatus == 'premium') {
    cashbackPercentage = 20;
  } else if (accountStatus == 'vip') {
    cashbackPercentage = 30;
  }

  console.log(
    'Вы получаете ' + cashbackPercentage + ' % с покупок на бонусный счёт'
  );
  console.log('\n');
}

function task3() {
  let user = 'Killer2001';
  if (user == 'admin') {
    console.log('Привет, админ!/n Проверь нет ли жалоб от пользователей!');
  } else {
    console.log('Здравствуйте ' + user + '! У нас новые поступления халвы!');
  }

  let newOrders = 6;
  let errorOrders = 3;
  // показываем сколько новых заказов, а сколько заказов с ошибкой
  if (newOrders > errorOrders) {
    console.log(
      'В магазине ' +
        newOrders +
        ' новых заказов (с ошибкой: ' +
        errorOrders +
        ')'
    );
  }

  if (newOrders === errorOrders) {
    console.log(
      'ВНИМАНИЕ! Что-то идет не так! Все новые заказы завершились ошибкой!'
    );
  }
}

task1('Печенье «Юбилейное», 1 кг', true, 5);
task2('Вася', 'premium');
task3();
