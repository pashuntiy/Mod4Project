class CreateActions < ActiveRecord::Migration[6.0]
  def change
    create_table :actions do |t|
      t.belongs_to :pet, null: false, foreign_key: true
      t.belongs_to :action_type, null: false, foreign_key: true

      t.timestamps
    end
  end
end
