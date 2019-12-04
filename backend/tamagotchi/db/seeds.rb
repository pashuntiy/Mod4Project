# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#

AdoptPet.destroy_all
User.destroy_all
Pet.destroy_all


user1 = User.create(username: 'Ethan', password: '123')
user2 = User.create(username: 'Pavel', password: '123')

pet1 = Pet.create(name: 'Bobik', image: 'http://clipart-library.com/img1/729125.png')
pet2 = Pet.create(name: 'Sharik', image: 'http://clipart-library.com/img/729263.png')


adopt_pet1 = AdoptPet.create(user: user1, pet: pet1)
adopt_pet2 = AdoptPet.create(user: user2, pet: pet2)