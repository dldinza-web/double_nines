module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    field :vehicles,
      [Types::VehicleType],
      null: false,
      description: "List of Vehicles"
    def vehicles
      Vehicle.all
    end

    field :people,
      [Types::PersonType],
      null: false,
      description: "List of People"
    def people
      Person.all
    end

    field :locations,
      [Types::LocationType],
      null: false,
      description: "List of locations"
    def locations
      Location.all
    end

    field :user, Types::UserType, null: false,
      description: "Simulated current user"
    def user
      User.order('RANDOM()').first
    end

    field :reservations, [Types::ReservationType], null: false,
      description: "List of Reservations"
    def reservations
      Reservation.all
    end

    field :reservation, Types::ReservationType do
      argument :reservation_id, Integer, required: true
    end
    def reservation(reservation_id:)
      Reservation.where(id: reservation_id).first
    end
  end
end
