class AdoptPetSerializer < ActiveModel::Serializer
  attributes :id, :hunger, :social, :fun, :hygiene
  has_one :user
  has_one :pet
end
