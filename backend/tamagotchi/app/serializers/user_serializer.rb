class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
<<<<<<< HEAD

  has_many :pets, through: :adopt_pets
  has_many :adopt_pets
=======
  has_many :pets, through: :adopt_pets
  has_many :adopt_pets

>>>>>>> 78db82b9739b7caa8b686368662870f74c0a6131
end


