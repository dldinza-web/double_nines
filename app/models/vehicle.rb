class Vehicle < ApplicationRecord
  validates :make, presence: true
  validates :model, presence: true
  validates :vin, presence: true
  validates :color, presence: true

  has_many :reservations
  has_many :people, through: :reservations
end
