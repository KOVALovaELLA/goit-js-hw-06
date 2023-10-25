



const categoriesLi = document.querySelector('#categories');
const categoryItems = categoriesLi.querySelectorAll('.item');

console.log('Number of categories:', categoryItems.length);

categoryItems.forEach((item) => {
    const categoryTitle = item.querySelector('h2').textContent;
    const categoryElements = item.querySelectorAll('li').length;

    console.log('Category:', categoryTitle);
    console.log('Elements:',categoryElements)
})
