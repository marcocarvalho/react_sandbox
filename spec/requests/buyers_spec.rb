require 'rails_helper'

RSpec.describe "Buyers", type: :request do
  describe "GET /buyers" do
    it "works! (now write some real specs)" do
      get buyers_path
      expect(response).to have_http_status(200)
    end
  end
end
