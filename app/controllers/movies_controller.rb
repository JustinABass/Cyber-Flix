class MoviesController < ApplicationController
  skip_before_action :authorize, only: :index

  def index
    render json: Movie.all.order('title ASC'), status: :ok
  end

  def random
    random_trailer = Movie.order("RANDOM()").limit(1)
    # trailer_list = Movie.all.map(&:trailer)
    # random = trailer_list.order("RANDOM()").limit(1)
    render json: random_trailer
  end

end
