const categoryList = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoryList.length}`);

categoryList.forEach(x => {
  console.log(`Category: ${x.querySelector('h2').textContent}`);
  console.log(`Elements: ${x.querySelectorAll('li').length}`);
});
