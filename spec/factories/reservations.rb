FactoryBot.define do
  factory :reservation do
    person
    vehicle
    departure_time { Faker::Time.between(from: DateTime.now, to: DateTime.now + 1.hour) }
    location_from { association :location }
    location_to { association :location }
  end
end
