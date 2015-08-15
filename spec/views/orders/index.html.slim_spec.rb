require 'rails_helper'

RSpec.describe "orders/index", type: :view do
  before(:each) do
    assign(:orders, [
      Order.create!(
        :buyer => nil,
        :payment => "Payment"
      ),
      Order.create!(
        :buyer => nil,
        :payment => "Payment"
      )
    ])
  end

  it "renders a list of orders" do
    render
    assert_select "tr>td", :text => nil.to_s, :count => 2
    assert_select "tr>td", :text => "Payment".to_s, :count => 2
  end
end
