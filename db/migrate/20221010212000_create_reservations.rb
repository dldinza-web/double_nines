class CreateReservations < ActiveRecord::Migration[7.0]
  def change
    create_table :reservations do |t|
      t.references :person, null: false
      t.references  :vehicle, null: false
      t.references  :location_from, foreign_key: { to_table: :locations }, null: false, index: true
      t.datetime  :departure_time, null: false
      t.references :location_to, foreign_key: { to_table: :locations }, null: false, index: true

      t.timestamps
    end

    add_index :reservations,
      [
        :person_id,
        :vehicle_id,
        :location_from_id,
        :location_to_id,
        :departure_time
      ],
      unique: true,
      name: 'index_unique_reservation'
  end
end
