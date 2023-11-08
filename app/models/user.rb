class User < ApplicationRecord
    has_secure_password
    has_one_attached :image

    has_many :reviews, dependent: :destroy
    has_many :replies, dependent: :destroy

    validates :username, presence: true
    validates :image, attached: true
end
