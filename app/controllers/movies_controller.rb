class MoviesController < ApplicationController
  
  def index
    render json: Movie.all.order('title ASC'), status: :ok
  end

end
