class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment, :reply_id, :user_id, :user_avatar, :username

  def user_avatar
    object.user.user_avatar
  end

  def username
    object.user.username
  end
end
