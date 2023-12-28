const categoryList = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoryList.length}`);

categoryList.forEach(x => {
  console.log(`Category: ${x.querySelector('h2').textContent}`);
  console.log(`Elements: ${x.querySelectorAll('li').length}`);
});

// for (const each of categoryList) {
//   console.log(
//     `Category: ${each.querySelector('h2').textContent}\nElements: ${
//       each.querySelectorAll('li').length
//     }`,
//   );
// }
