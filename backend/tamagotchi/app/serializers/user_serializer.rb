class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  
  has_many :pets, through: :adopt_pets
<<<<<<< HEAD
=======
  has_many :adopt_pets

>>>>>>> ethan
end


