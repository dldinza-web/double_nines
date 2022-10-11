class User < ApplicationRecord
  validates :username, presence: true
  validates :password, presence: true

  belongs_to :person
end
