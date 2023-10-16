class Actor < ApplicationRecord
    has_many :connections
    has_many :movies, through: :connections
end
