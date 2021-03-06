require 'rails_helper'

RSpec.describe "buyers/show", type: :view do
  before(:each) do
    @buyer = assign(:buyer, Buyer.create!(
      :name => "Name",
      :address => "Address",
      :city => "City"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Name/)
    expect(rendered).to match(/Address/)
    expect(rendered).to match(/City/)
  end
end
