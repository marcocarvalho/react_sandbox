# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

require 'securerandom'

buyers = []

puts 'Creating buyers'
30.times do
  print '.'
  name = Faker::Name.name
  buyers << Buyer.find_or_create_by(name: name) do |b|
    b.address = Faker::Address.street_address
    b.email   = Faker::Internet.email
    b.city    = Faker::Address.city
  end
end

products = []

puts "\nCreating products"
[
  { image: 'https://unsplash.it/250/200?image=655', name: 'Kombi', description: 'uma kombi veia, caindo aos cacos', price: 500.0 },
  { image: 'https://unsplash.it/250/200?image=643', name: 'Prancha de surf', description: 'prancha de surf azul encalhada na praia dos coqueiros', price: 100.0 },
  { image: 'https://unsplash.it/250/200?image=659', name: 'Filhote de Ruski Siberiano', description: '6 filhotes de ruski siberiano, quase desmamados', price: 1100.0 },
  { image: 'https://unsplash.it/250/200?image=662', name: 'Tenis que andou em machu pitchu', description: 'este tenis andou nos andes, está sujo e fedido, mas é um bom tenis', price: 51.0 },
  { image: 'https://unsplash.it/250/200?image=660', name: 'Uma vela de aniversário usada', description: 'Esta vela está usada, mas foi usada com sabedoria', price: 1.0 },
  { image: 'https://unsplash.it/250/200?image=668', name: 'Mac', description: 'Mac, teclado, aquele treco ali que não sei o nome e a mesa', price: 10100.0 },
  { image: 'https://unsplash.it/250/200?image=674', name: 'Uvas', description: 'Uvas frescas, compre antes que estrague', price: 11.0 },
  { image: 'https://unsplash.it/250/200?image=639', name: 'Passeio em roda gigante', description: 'Passeio em roda gigante com direito a companhante', price: 20.0 },
  { image: 'https://unsplash.it/250/200?image=631', name: 'Gota de orvalho', description: 'Gota fresca e orgânica, colhida no quintal sem conservantes', price: 45.0 },
  { image: 'https://unsplash.it/250/200?image=609', name: 'Pedra 2 em 1', description: 'pedra mistica 2 em 1. Serve de peso de papel e arma branca.', price: 80.0 },
  { image: 'https://unsplash.it/250/200?image=553', name: 'Banco de praça usado', description: 'Banco de praça usado. Tem a marca de algumas bundas. Pode ser adaptado para ser usado em igreja.', price: 999.0 },
  { image: 'https://unsplash.it/250/200?image=535', name: 'Cabides', description: 'vende-se o par, (as roupas não estão incluidas)', price: 15.5 },
  { image: 'https://unsplash.it/250/200?image=526', name: 'Feira do badulaque', description: 'Todos esses badulaques pelo preço de todos.', price: 101.14 },
  { image: 'https://unsplash.it/250/200?image=491', name: 'Ferramentas antigas', description: 'São ótimas para quem quiser deixar guardado e nunca usar.', price: 49.90 },
  { image: 'https://unsplash.it/250/200?image=486', name: 'Maquina de escrever antiga', description: 'modelo perfeito para hipsters e gente que gosta de quinquilharia', price: 2480.0 },
  { image: 'https://unsplash.it/250/200?image=469', name: 'Remo', description: 'Remo de madeira. A canoa é meramente ilustrativa', price: 5.80 },
  { image: 'https://unsplash.it/250/200?image=433', name: 'Abraço de urso', description: 'Abraço de urso, bem apertado, sem unhas.', price: 67.80 },
  { image: 'https://unsplash.it/250/200?image=401', name: 'Passeio de balão', description: 'Passeio de balão, se morrer não devolvemos o dinheiro', price: 109.0 }
].each do |prod_attr|
  print '.'
  products << Product.create!(prod_attr)
end

dates = (Date.new(2015, 4, 1)..Date.new(2015,6,30)).to_a

puts "\nCreating orders"
30.times do
  (2..7).each do |n|
    p = products.combination(n).to_a.sample(((SecureRandom.random_number * 7).floor)+3)
    p.each do |prods|
      print "#{prods.count}"
      o = Order.create(buyer: buyers.sample(1).first, date: dates.sample(1).first)
      prods.each do |prod|
        o.items.create(product: prod, quantity: (SecureRandom.random_number * 10).floor + 1)
      end
    end
  end
end
