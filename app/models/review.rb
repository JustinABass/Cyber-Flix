class Review < ApplicationRecord
    has_many :replies 
    belongs_to :user
    belongs_to :movie
end
