require 'rails_helper'

RSpec.describe "buyers/edit", type: :view do
  before(:each) do
    @buyer = assign(:buyer, Buyer.create!(
      :name => "MyString",
      :address => "MyString",
      :city => "MyString"
    ))
  end

  it "renders the edit buyer form" do
    render

    assert_select "form[action=?][method=?]", buyer_path(@buyer), "post" do

      assert_select "input#buyer_name[name=?]", "buyer[name]"

      assert_select "input#buyer_address[name=?]", "buyer[address]"

      assert_select "input#buyer_city[name=?]", "buyer[city]"
    end
  end
end
