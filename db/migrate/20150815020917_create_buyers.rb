class CreateBuyers < ActiveRecord::Migration
  def change
    create_table :buyers do |t|
      t.string :name
      t.string :address
      t.string :city
      t.string :email

      t.timestamps null: false
    end
  end
end
