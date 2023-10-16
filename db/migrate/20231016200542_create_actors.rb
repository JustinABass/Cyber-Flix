class CreateActors < ActiveRecord::Migration[7.0]
  def change
    create_table :actors do |t|
      t.string :actor
      t.string :image

      t.timestamps
    end
  end
end
