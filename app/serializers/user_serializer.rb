class UserSerializer < ActiveModel::Serializer
include Rails.application.routes.url_helpers
  attributes :id, :username, :image, :username, :unique_movies, :unique_archives
  has_many :archives
  has_many :movies


  def image
    rails_blob_path(object.image, only_path: true) if object.image.attached?
  end

  def unique_archives
    object.archives.uniq { |a| a[:movie_id]}
  end

  def unique_movies
    object.movies.uniq
  end

end
