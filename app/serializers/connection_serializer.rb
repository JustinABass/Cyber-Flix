class ConnectionSerializer < ActiveModel::Serializer
  attributes :id, :movie_id, :movie_poster, :actor_id, :actor, :actor_image

  def actor
    object.actor.actor
  end

  def actor_image
    object.actor.image
  end

  def movie_poster
    object.movie.poster
  end
end
