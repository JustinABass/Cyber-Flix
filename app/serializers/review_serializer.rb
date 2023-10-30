class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :review, :user_id, :movie_id, :user_avatar, :username
  has_many :replies

  def user_avatar
    object.user.user_avatar
  end

  def username
    object.user.username
  end
end
