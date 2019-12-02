class Pet < ApplicationRecord
  has_many :actions
  belongs_to :user
end
