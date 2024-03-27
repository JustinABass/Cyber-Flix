class Movie < ApplicationRecord
    has_many :connections
    has_many :actors, through: :connections
    has_many :reviews
    has_many :lists
    has_many :users, through: :lists
end
