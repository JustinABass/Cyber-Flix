class Archive < ApplicationRecord
    # belongs_to :user
    # belongs_to :movie
    # # belongs_to :user, optional: true
    # # has_and_belongs_to_many :movies
    belongs_to :user
    belongs_to :movie

    # validates :id uniqueness: { scope: :movie_id,
    # message: "should happen once per year" }
end
