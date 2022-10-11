class Location < ApplicationRecord
  validates :address_1, presence: true
  validates :city, presence: true
  validates :state, presence: true
  validates :zip_code, presence: true
  validates :country_code, presence: true

  def address
    [
      address_1,
      address_2,
      city,
      state,
      zip_code,
      country_code,
    ].compact.join(', ')
  end
end
