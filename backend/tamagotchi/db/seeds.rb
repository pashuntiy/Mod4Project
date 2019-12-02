# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#
user1 = User.create(username: 'Ethan', password_digest: '123')
user2 = User.create(username: 'Pavel', password_digest: '123')

pet1 = Pet.create(name: 'Bobik', image: 'url', user_id: user1.id)
pet2 = Pet.create(name: 'Sharik', image: 'url', user_id: user2.id)
