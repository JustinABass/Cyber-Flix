class CreateArchives < ActiveRecord::Migration[7.0]
  def change
    create_table :archives do |t|
      t.integer :user_id
      t.integer :movie_id
      t.timestamps
    end
  end
end
