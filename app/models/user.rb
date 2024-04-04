class User < ApplicationRecord
    has_secure_password
    has_one_attached :image

    has_many :reviews, dependent: :destroy
    has_many :replies, dependent: :destroy
    has_many :archives
    has_many :movies, through: :archives

    # validates :username, presence: true, uniqueness: true
    # validates :image, attached: true
end
