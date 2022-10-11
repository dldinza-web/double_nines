class CreateVehicles < ActiveRecord::Migration[7.0]
  def change
    create_table :vehicles do |t|
      t.string  :make, null: false
      t.string  :model, null: false
      t.string  :vin, null: false
      t.string  :color, null: false

      t.timestamps
    end
  end
end
