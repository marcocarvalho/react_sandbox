class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.references :buyer, index: true, foreign_key: true
      t.date   :date
      t.string :payment

      t.timestamps null: false
    end
  end
end
