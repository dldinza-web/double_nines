FactoryBot.define do
  factory :person do
    first_name  { Faker::Name.first_name }
    last_name   { Faker::Name.last_name }
  end

  trait "with_user" do
    user
  end
end
