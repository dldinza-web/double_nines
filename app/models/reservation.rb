class Reservation < ApplicationRecord
  validates :departure_time, presence: true
  validates :person_id, uniqueness: {
    scope: [:vehicle_id, :location_from_id, :location_to_id, :departure_time],
    message: ". Another reservation exists. It should't be repeated."
  }
  validates :location_from, comparison: {
    other_than: :location_to,
    message: "must be different to Location to."
  }, if: -> { location_from.present? && location_to.present? }

  belongs_to :person
  belongs_to :vehicle
  belongs_to :location_from, class_name: 'Location', foreign_key: 'location_from_id'
  belongs_to :location_to, class_name: 'Location', foreign_key: 'location_to_id'
end
