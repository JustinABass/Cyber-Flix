class User < ApplicationRecord
has_many :reviews
has_many :replies

end
