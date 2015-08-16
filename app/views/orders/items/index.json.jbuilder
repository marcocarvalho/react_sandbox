json.items(@items) do |item|
  json.itemId item.id
  json.product item.product.name
  json.quantity item.quantity
  json.price item.product.price
  json.sub_total item.sub_total
end
