json.orders(@orders) do |order|
  json.orderId order.id
  json.buyer order.buyer.name
  json.buyerId order.buyer_id
  json.quantity order.items_count
  json.date order.date.strftime('%d/%m/%Y')
  json.total order.total
end
json.page page
json.per_page per_page
json.total_pages @orders.total_pages
