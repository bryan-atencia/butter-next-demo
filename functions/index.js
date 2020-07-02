export async function getCategories() {
  let fetchMain = await fetch("https://api.buttercms.com/v2/content/?keys=categories&auth_token=8d6d186981c0902966f48b2f7db8a6aaa5205822")
  let blob = await fetchMain.json()
  let res  = await blob
  return res.data.categories
}

export async function getSubcategories() {
  let fetchSubs = await fetch("https://api.buttercms.com/v2/content/?keys=subcategories&auth_token=8d6d186981c0902966f48b2f7db8a6aaa5205822")
  let blob = await fetchSubs.json()
  let res  = await blob
  return res.data.subcategories
}
