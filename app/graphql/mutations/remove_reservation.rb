module Mutations
  class RemoveReservation < BaseMutation
    argument :reservation_id, ID, required: true

    field :reservation, Types::ReservationType, null: false

    def resolve(args)
      begin
        reservation = Reservation.find(args[:reservation_id])
        reservation.destroy!

        { reservation: reservation }
      rescue StandardError => e
        GraphQL::ExecutionError.new(e.message, extensions: {
          errors: reservation ? reservation.errors.full_messages : [e.message]
        })
      end
    end
  end
end
