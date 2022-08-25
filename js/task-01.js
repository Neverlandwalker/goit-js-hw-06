const categoryCount = document.querySelectorAll('.categories-item');
console.log('Number of categories:', categoryCount.length);

categoryCount.forEach(function (categories) {
    console.log("Category:", categories.firstElementChild.textContent);
    console.log("Element:", categories.lastElementChild.children.length);
})