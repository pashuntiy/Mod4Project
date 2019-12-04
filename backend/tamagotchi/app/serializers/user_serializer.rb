class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
<<<<<<< HEAD
  has_many :pets, through: :adopt_pets
  has_many :adopt_pets

=======

  has_many :pets, through: :adopt_pets

  has_many :adopt_pets
>>>>>>> 112605360c16f9a7e97dd7d29d4585a10da3ed87
end


