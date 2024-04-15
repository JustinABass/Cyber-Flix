class ArchiveSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :movie_id, :movie
 


  def user_id
    object.user.id
  end

  def movie_id
    object.movie.id
  end



end
