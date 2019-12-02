class CreatePets < ActiveRecord::Migration[6.0]
  def change
    create_table :pets do |t|
      t.string :name
      t.integer :hunger, default: 100
      t.integer :social, default: 100
      t.integer :fun, default: 100
      t.integer :hygiene, default: 100
      t.string :image
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
