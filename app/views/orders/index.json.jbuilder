json.array!(@orders) do |order|
  json.extract! order, :id, :buyer_id, :payment
  json.url order_url(order, format: :json)
end
