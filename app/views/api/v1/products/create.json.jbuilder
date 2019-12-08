json.product do
  json.id @product.id
  json.name number_to_currency(@product.name)
  json.price @product.price
  json.description @product.deacription
  json.user_id @product.user_id
end
