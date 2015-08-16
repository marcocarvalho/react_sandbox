json.buyerId @buyer.id
json.extract! @buyer, :name, :address, :city, :email
json.updated_at @buyer.updated_at.strftime('%d/%m/%Y')
