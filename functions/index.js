var butter = require('buttercms')("8d6d186981c0902966f48b2f7db8a6aaa5205822");

export async function getCategories() {
  let fetchCategories = await butter.content.retrieve(['categories'])
  let categoriesData = await fetchCategories
  let returnedData = categoriesData.data.data.categories

  return returnedData
}

export async function getSubcategories() {
  let fetchSubcategories = await butter.content.retrieve(['subcategories'])
  let subcategoriesData = await fetchSubcategories
  let returnedData = subcategoriesData.data.data.subcategories

  return returnedData
}

export async function getCategory(id) {
  let fetchCategory = await butter.content.retrieve(['categories'], { "fields.id": id })
  let categoryData = await fetchCategory
  let returnedData = categoryData.data.data.categories[0]

  return returnedData
}

export async function getSubcategory(category_id, id) {

  let fetchPost = await butter.post.list({"category_slug": category_id, "tag_slug": id})
  let postData = await fetchPost
  let data = postData.data.data[0]

  return data
}
