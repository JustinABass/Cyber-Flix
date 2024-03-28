class ListSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :movie_id, :poster

  def user_id
    object.user.id
  end

  def movie_id
    object.movie.id
  end

  def poster
    object.movie.poster
  end

end
