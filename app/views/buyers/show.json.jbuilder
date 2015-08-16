json.buyerId @buyer.id
json.extract! @buyer, :name, :address, :city, :email
json.updatedAt @buyer.updated_at.strftime('%d/%m/%Y')
