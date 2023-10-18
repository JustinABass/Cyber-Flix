class CreateMovies < ActiveRecord::Migration[7.0]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :poster
      t.string :trailer
      t.string :year
      t.string :genre
      t.boolean :new_release
      t.boolean :trending_now
      t.boolean :popular

      t.timestamps
    end
  end
end
