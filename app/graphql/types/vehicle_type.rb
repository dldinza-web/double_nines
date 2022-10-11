# frozen_string_literal: true

module Types
  class VehicleType < Types::BaseObject
    field :id, ID, null: false
    field :make, String, null: false
    field :model, String, null: false
    field :vin, String, null: false
    field :color, String, null: false
  end
end
