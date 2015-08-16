class Order < ActiveRecord::Base
  belongs_to :buyer
  has_many :items, class_name: 'OrderItem'
  has_many :products, through: :items

  def total
    items.joins(:product).sum('order_items.quantity * products.price')
  end

  def items_count
    items.count
  end
end

# == Schema Information
#
# Table name: orders
#
#  id         :integer          not null, primary key
#  buyer_id   :integer
#  date       :date
#  payment    :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_orders_on_buyer_id  (buyer_id)
#
