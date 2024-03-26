class ListSerializer < ActiveModel::Serializer
  attributes :id, :movie_poster

  def movie_poster
    object.movie.poster
  end
end
