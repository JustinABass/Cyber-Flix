class UserSerializer < ActiveModel::Serializer
include Rails.application.routes.url_helpers
  attributes :id, :username, :image, :username, :unique_movies
  has_many :archives

  def image
    rails_blob_path(object.image, only_path: true) if object.image.attached?
  end

  def unique_movies
    object.movies.uniq
  end

end
