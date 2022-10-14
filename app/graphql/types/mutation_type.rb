module Types
  class MutationType < Types::BaseObject
    field :remove_reservation, mutation: Mutations::RemoveReservation
    field :update_reservation, mutation: Mutations::UpdateReservation
    field :create_reservation, mutation: Mutations::CreateReservation
  end
end
