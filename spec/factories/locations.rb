FactoryBot.define do
  factory :location do
    address_1 { Faker::Address.street_address }
    city { Faker::Address.city }
    state { Faker::Address.state }
    zip_code { Faker::Address.zip_code }
    country_code { Faker::Address.country_code }

    trait "with_address_2" do
      address_2 { Faker::Address.secondary_address }
    end
  end
end
