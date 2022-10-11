require 'rails_helper'

RSpec.describe Reservation, type: :model do
  context "with valid data" do
    let(:reservation) { create(:reservation) }

    it "is created" do
      expect(reservation).to be_persisted
    end

    it "belongs to other entities" do
      expect(reservation.person).to be_a Person
      expect(reservation.vehicle).to be_a Vehicle
      expect(reservation.location_from).to be_a Location
      expect(reservation.location_to).to be_a Location
    end
  end

  context "with invalid data" do
    it "validates presence" do
      item = build(:reservation,
        person: nil,
        vehicle: nil,
        location_from: nil,
        departure_time: nil,
        location_to: nil
      )

      expect(item.valid?).to be_falsy
      expect(item.errors.full_messages.sort).to eq [
        "Location to must exist",
        "Departure time can't be blank",
        "Location from must exist",
        "Person must exist",
        "Vehicle must exist"
      ].sort
    end

    it "validate uniqueness" do
      reservation = create(:reservation)

      attributes = reservation
        .attributes
        .with_indifferent_access
        .except(:id, :created_at, :updated_at)

      another = Reservation.new(attributes)

      expect(another.save).to be_falsy

      expect(another.errors.full_messages.sort).to eq [
        "Person . Another reservation exists. It should't be repeated."
      ]
    end

    it "validates origin and destination are different" do
      location = create(:location)

      reservation = build(:reservation, location_from: location, location_to: location)

      expect(reservation).not_to be_valid
      expect(reservation.errors.full_messages.sort).to eq [
        "Location from must be different to Location to."
      ]
    end
  end
end
