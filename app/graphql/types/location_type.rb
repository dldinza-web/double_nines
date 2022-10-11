# frozen_string_literal: true

module Types
  class LocationType < Types::BaseObject
    field :id, ID, null: false
    field :address_1, String, null: false
    field :address_2, String
    field :city, String, null: false
    field :state, String, null: false
    field :zip_code, Integer, null: false
    field :country_code, String, null: false
    field :address, String, null: false
  end
end
