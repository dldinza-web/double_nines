class CreateLocations < ActiveRecord::Migration[7.0]
  def change
    create_table :locations do |t|
      t.string  :address_1, null: false
      t.string  :address_2
      t.string  :city, null: false
      t.string  :state, null: false
      t.integer :zip_code, null: false
      t.string  :country_code, limit: 3, null: false

      t.timestamps
    end
  end
end
