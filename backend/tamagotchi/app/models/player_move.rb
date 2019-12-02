class PlayerMove < ApplicationRecord
  belongs_to :pet
  belongs_to :action_type
end
