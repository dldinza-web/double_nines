FactoryBot.define do
  factory :vehicle do
    make { Faker::Vehicle.make }
    model { Faker::Vehicle.model(make_of_model: make) }
    vin   { Faker::Vehicle.vin }
    color   { Faker::Vehicle.color }
  end
end
