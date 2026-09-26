export async function getCategories() {
  const categories = await fetch(
    "https://wedding-photographer.b.goit.study/api/categories"
  );

  return categories.json();
}

getCategories().then(categories => {
    const allCategories = [{ category: 'All Photos' }, ...categories,];

    const buttons = allCategories.map(({ category }) => {
    return `
    <li class="portfolio-category-item">
      <button type="button">${category}</button>
    </li>
  `;
});
    
    const categoryList = document.querySelector('.portfolio-category-list');
    categoryList.innerHTML = buttons.join('');
});


