json.array!(@buyers) do |buyer|
  json.extract! buyer, :id, :name, :address, :city
  json.url buyer_url(buyer, format: :json)
end
