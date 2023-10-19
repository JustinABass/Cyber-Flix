class ActorSerializer < ActiveModel::Serializer
  attributes :id, :actor, :image
  has_many :connections 
end
