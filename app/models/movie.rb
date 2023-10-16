class Movie < ApplicationRecord
    has_many :connections
    has_many :actors, through: :connections
end
