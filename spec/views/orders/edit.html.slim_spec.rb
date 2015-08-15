require 'rails_helper'

RSpec.describe "orders/edit", type: :view do
  before(:each) do
    @order = assign(:order, Order.create!(
      :buyer => nil,
      :payment => "MyString"
    ))
  end

  it "renders the edit order form" do
    render

    assert_select "form[action=?][method=?]", order_path(@order), "post" do

      assert_select "input#order_buyer_id[name=?]", "order[buyer_id]"

      assert_select "input#order_payment[name=?]", "order[payment]"
    end
  end
end
