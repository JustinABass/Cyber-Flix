class ReplySerializer < ActiveModel::Serializer
  attributes :id, :reply, :user_id, :review_id, :user_avatar, :username

  def user_avatar
    object.user.user_avatar
  end

  def username
    object.user.username
  end
end
