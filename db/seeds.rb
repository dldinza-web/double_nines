# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

person = FactoryBot.create(:person, :with_user)

FactoryBot.create(:reservation, person: person)

2.times {
  FactoryBot.create(:person)
  FactoryBot.create(:vehicle)
  FactoryBot.create(:location)
}
