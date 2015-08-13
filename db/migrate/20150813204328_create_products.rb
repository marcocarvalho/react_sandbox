class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :short_name
      t.string :name
      t.string :url
      t.float :price

      t.timestamps null: false
    end
  end
end
