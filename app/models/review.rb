class Review < ApplicationRecord
    has_many :replies, dependent: :destroy
    belongs_to :user
    belongs_to :movie

    validates :review, presence: true
end
