# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_10_10_212000) do
  create_table "locations", force: :cascade do |t|
    t.string "address_1", null: false
    t.string "address_2"
    t.string "city", null: false
    t.string "state", null: false
    t.integer "zip_code", null: false
    t.string "country_code", limit: 3, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "people", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "reservations", force: :cascade do |t|
    t.integer "person_id", null: false
    t.integer "vehicle_id", null: false
    t.integer "location_from_id", null: false
    t.datetime "departure_time", null: false
    t.integer "location_to_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["location_from_id"], name: "index_reservations_on_location_from_id"
    t.index ["location_to_id"], name: "index_reservations_on_location_to_id"
    t.index ["person_id", "vehicle_id", "location_from_id", "location_to_id", "departure_time"], name: "index_unique_reservation", unique: true
    t.index ["person_id"], name: "index_reservations_on_person_id"
    t.index ["vehicle_id"], name: "index_reservations_on_vehicle_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password", null: false
    t.integer "person_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["person_id"], name: "index_users_on_person_id"
  end

  create_table "vehicles", force: :cascade do |t|
    t.string "make", null: false
    t.string "model", null: false
    t.string "vin", null: false
    t.string "color", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "reservations", "locations", column: "location_from_id"
  add_foreign_key "reservations", "locations", column: "location_to_id"
end
