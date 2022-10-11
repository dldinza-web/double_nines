require 'rails_helper'

RSpec.describe Vehicle, type: :model do
  let(:vehicle) { create(:vehicle) }

  context "with valid data" do
    it "be created" do
      expect(vehicle).to be_persisted
    end

    it "might have many drivers" do
      2.times { create(:reservation, vehicle: vehicle) }

      vehicle.reload

      expect(vehicle.reservations.count).to eq 2
      expect(vehicle.people.count).to eq 2
    end
  end

  context "with invalid data" do
    it "validates" do
      vehicle = build(:vehicle,
        make: nil,
        model: nil,
        vin: nil,
        color: nil,
      )

      expect(vehicle.valid?).to be_falsy
      expect(vehicle.errors.full_messages.sort).to eq [
        "Color can't be blank",
        "Make can't be blank",
        "Model can't be blank",
        "Vin can't be blank"
      ].sort
    end
  end
end
