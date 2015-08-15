require 'rails_helper'

RSpec.describe "buyers/index", type: :view do
  before(:each) do
    assign(:buyers, [
      Buyer.create!(
        :name => "Name",
        :address => "Address",
        :city => "City"
      ),
      Buyer.create!(
        :name => "Name",
        :address => "Address",
        :city => "City"
      )
    ])
  end

  it "renders a list of buyers" do
    render
    assert_select "tr>td", :text => "Name".to_s, :count => 2
    assert_select "tr>td", :text => "Address".to_s, :count => 2
    assert_select "tr>td", :text => "City".to_s, :count => 2
  end
end
