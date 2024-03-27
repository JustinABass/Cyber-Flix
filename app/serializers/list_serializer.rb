class ListSerializer < ActiveModel::Serializer
  attributes :id, :movie_poster, :user_id, :movie_id

  def movie_poster
    object.movie.poster
  end

  def user_id
    object.user.id
  end

  def movie_id
    object.movie.id
  end

end
