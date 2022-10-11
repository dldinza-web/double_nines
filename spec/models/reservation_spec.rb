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
    it "validates" do
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
  end
end
