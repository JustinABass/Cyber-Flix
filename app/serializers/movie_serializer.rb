class MovieSerializer < ActiveModel::Serializer
  attributes :id, :title, :trailer
  has_many :connections
end
