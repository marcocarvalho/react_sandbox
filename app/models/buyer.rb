class Buyer < ActiveRecord::Base
end

# == Schema Information
#
# Table name: buyers
#
#  id         :integer          not null, primary key
#  name       :string
#  address    :string
#  city       :string
#  email      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
