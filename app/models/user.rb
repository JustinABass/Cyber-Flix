class User < ApplicationRecord
has_many :reviews
has_many :replies
has_many :comments 

end
