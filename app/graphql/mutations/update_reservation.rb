module Mutations
  class UpdateReservation < BaseMutation
    #parameters
    argument :id, ID, required: true
    argument :person_id, ID, required: true
    argument :vehicle_id, ID, required: true
    argument :location_from_id, ID, required: true
    argument :departure_time, GraphQL::Types::ISO8601DateTime, required: true
    argument :location_to_id, ID, required: true

    #fields
    field :reservation, Types::ReservationType, null: false

    def resolve(args)
      reservation = Reservation.where(id: args[:id]).first

      begin
        reservation.person_id = args[:person_id]
        reservation.vehicle_id = args[:vehicle_id]
        reservation.location_from_id = args[:location_from_id]
        reservation.departure_time = args[:departure_time]
        reservation.location_to_id = args[:location_to_id]

        reservation.save!

        { reservation: reservation }
      rescue StandardError => e
        GraphQL::ExecutionError.new(
          e.message,
          extensions: {
            errors: reservation.errors.full_messages
          }
        )
      end
    end
  end
end
