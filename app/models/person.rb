class Person < ApplicationRecord
  validates :first_name, presence: true
  validates :last_name, presence: true

  has_one :user
  has_many :reservations
  has_many :vehicles, through: :reservations

  def full_name
    [first_name, last_name]
      .compact
      .join(' ')
  end
end
