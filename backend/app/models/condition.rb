# == Schema Information
#
# Table name: conditions
#
#  id                     :integer          not null, primary key
#  global                 :boolean          default(TRUE)
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  trackable_usages_count :integer          default(0)
#

class Condition < ActiveRecord::Base
  #
  # Localized attributes
  #
  translates :name
end
