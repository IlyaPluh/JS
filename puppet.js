const { launch } = require('puppeteer')

let scrape = async () => {
    const browser = await launch({headless: false});
    const page = await browser.newPage();

    await page.goto('http://books.toscrape.com/');

    const result = await page.evaluate(() => {
        let data = []; // Создаём пустой массив для хранения данных
        let elements = document.querySelectorAll('.product_pod'); // Выбираем все товары

        for (var element of elements){ // Проходимся в цикле по каждому товару
            let title = element.childNodes[5].innerText; // Выбираем название
            let price = element.childNodes[7].children[0].innerText; // Выбираем цену

            data.push({title, price}); // Помещаем объект с данными в массив
        }

        return data; // Возвращаем массив
    });

    browser.close();
    return result; // Возвращаем данные
};

scrape().then((value) => {
    console.log(value); // Получилось!
});