class MovieSerializer < ActiveModel::Serializer
  attributes :id, :title, :poster, :trailer, :year, :genre, :new_release, :trending_now, :popular
  has_many :connections
end
