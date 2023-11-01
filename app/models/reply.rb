class Reply < ApplicationRecord
    belongs_to :user
    belongs_to :review
    has_many :comments 
end
