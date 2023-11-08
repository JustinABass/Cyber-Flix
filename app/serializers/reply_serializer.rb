class ReplySerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :reply, :user_id, :review_id, :user_image, :username

  def user_image
    rails_blob_path(object.user.image, only_path: true) if object.user.image.attached?
  end

  def username
    object.user.username
  end
end
