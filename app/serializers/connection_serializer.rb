class ConnectionSerializer < ActiveModel::Serializer
  attributes :id, :actor, :actor_image


  # def actor_id
  #   object.actor.id
  # end

  def actor
    object.actor.actor
  end

  def actor_image
    object.actor.image
  end
end
