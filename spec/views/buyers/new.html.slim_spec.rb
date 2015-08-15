require 'rails_helper'

RSpec.describe "buyers/new", type: :view do
  before(:each) do
    assign(:buyer, Buyer.new(
      :name => "MyString",
      :address => "MyString",
      :city => "MyString"
    ))
  end

  it "renders new buyer form" do
    render

    assert_select "form[action=?][method=?]", buyers_path, "post" do

      assert_select "input#buyer_name[name=?]", "buyer[name]"

      assert_select "input#buyer_address[name=?]", "buyer[address]"

      assert_select "input#buyer_city[name=?]", "buyer[city]"
    end
  end
end
