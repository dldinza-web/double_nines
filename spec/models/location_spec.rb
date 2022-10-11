require 'rails_helper'

RSpec.describe Location, type: :model do
  context "with valid data" do
    it "is created" do
      location = create(:location)

      expect(location).to be_persisted
      expect(location.address_2).to be_nil
    end

    it "with address 2" do
      location = create(:location, :with_address_2)

      expect(location.address_2).to be_present
    end

    it "returns full address" do
      location = create(:location)

      expect(location.address).to eq [
        location.address_1,
        location.address_2,
        location.city,
        location.state,
        location.zip_code,
        location.country_code,
      ].compact.join(', ')
    end
  end

  context "with invalid data" do
    it "validates" do
      location = build(:location,
        address_1: nil,
        address_2: nil,
        city: nil,
        state: nil,
        zip_code: nil,
        country_code: nil
      )

      expect(location).not_to be_valid
      expect(location.errors.full_messages.sort).to eq [
        "Address 1 can't be blank",
        "City can't be blank",
        "State can't be blank",
        "Country code can't be blank",
        "Zip code can't be blank"
      ].sort
    end
  end
end
