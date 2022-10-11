require 'rails_helper'

RSpec.describe User, type: :model do
  let(:user) { create(:user) }

  context "with valid data" do
    it "is created" do
      expect(user).to be_persisted
    end

    it "belongs to a person" do
      expect(user.person).to be_a Person
      expect(user.person).to be_persisted
    end
  end

  context "with invalid data" do
    it "validates" do
      invalid_item = build(:user,
        username: nil,
        password: '',
        person: nil
      )

      expect(invalid_item.valid?).to be_falsy
      expect(invalid_item.errors.full_messages.sort).to eq [
        "Username can't be blank",
        "Password can't be blank",
        "Person must exist"
    ].sort
    end
  end
end
