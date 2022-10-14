module Mutations
  class CreateReservation < BaseMutation

    argument :person_id, ID, required: true
    argument :vehicle_id, ID, required: true
    argument :location_from_id, ID, required: true
    argument :departure_time, GraphQL::Types::ISO8601DateTime, required: true
    argument :location_to_id, ID, required: true

    field :reservation, Types::ReservationType, null: false

    def resolve(
     person_id:,
     vehicle_id:,
     location_from_id:,
     departure_time:,
     location_to_id:
    )
      reservation = Reservation.new(
        person_id: person_id,
        vehicle_id: vehicle_id,
        location_from_id: location_from_id,
        departure_time: departure_time,
        location_to_id: location_to_id
      )

      begin
        reservation.save!

        { reservation: reservation }
      rescue StandardError => e
        GraphQL::ExecutionError.new(e.message, extensions: {
          errors: reservation.errors.full_messages
        })
      end
    end
  end
end
