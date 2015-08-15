class Product < ActiveRecord::Base
end

# == Schema Information
#
# Table name: products
#
#  id          :integer          not null, primary key
#  name        :string
#  description :string
#  price       :float
#  image       :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
