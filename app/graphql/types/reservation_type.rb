# frozen_string_literal: true

module Types
  class ReservationType < Types::BaseObject
    field :id, ID, null: false
    field :person, Types::PersonType, null: false
    field :vehicle, Types::VehicleType, null: false
    field :location_from, Types::LocationType, null: false
    field :departure_time, GraphQL::Types::ISO8601DateTime, null: false
    field :location_to, Types::LocationType, null: false
  end
end
