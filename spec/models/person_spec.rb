require 'rails_helper'

RSpec.describe Person, type: :model do
  context "with valid data" do
    let!(:person) { create(:person) }

    it "is created" do
      expect(person).to be_persisted
    end

    it "has one user" do
      create(:user, person: person)

      person.reload

      expect(person.user).to be_a User
      expect(person.user).to be_persisted

      another_person = create(:person, :with_user)
      expect(another_person).to be_persisted
      expect(another_person.user).to be_a User
    end

    it "has many reservations" do
      2.times { create(:reservation, person: person) }

      person.reload

      expect(person.reservations.count).to eq 2
    end

    it "has many used vehicles through reservations" do
      2.times { create(:reservation, person: person) }

      expect(person.vehicles.count).to eq 2
    end

    it "returns full name" do
      expect(person.full_name).to eq [
        person.first_name,
        person.last_name
      ].compact.join(' ')
    end
  end

  context "with invalid data" do
    it "validates" do
      person = build(:person,
        first_name: nil,
        last_name: nil
      )

      expect(person).not_to be_valid
    end
  end
end
