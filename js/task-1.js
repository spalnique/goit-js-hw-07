const categoryList = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoryList.length}`);

categoryList.forEach(x => {
  console.log(`Category: ${x.querySelector('h2').textContent}`);
  console.log(`Elements: ${x.querySelectorAll('ul > li').length}`);
});

// Усі ці властивості, по суті, є структурою DOM-дерева. Їх варто знати для розуміння DOM. Також питання про ці властивості можуть бути на співбесіді. На практиці, однак, вони застосовуються дуже рідко, оскільки вкладеність елементів і їх кількість може динамічно змінюватись. Це робить код з використанням цих властивостей ненадійним.
