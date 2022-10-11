FactoryBot.define do
  factory :user do
    username  { Faker::Internet.email }
    password  { Faker::Internet.password }
    person  { association :person }
  end
end
