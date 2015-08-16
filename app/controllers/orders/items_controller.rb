class Orders::ItemsController < ApplicationController
  def index
    @items = order.items.joins(:product)
  end

  private

  def order
    @order ||= Order.find(params[:order_id])
  end
end
