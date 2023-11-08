class ReviewSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :review, :user_id, :movie_id, :user_image, :username
  has_many :replies

  def user_image
    rails_blob_path(object.user.image, only_path: true) if object.user.image.attached?
  end

  def username
    object.user.username
  end
end
