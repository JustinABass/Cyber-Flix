class MoviesController < ApplicationController
  # skip_before_action :authorize, only: [:index, :horror_movies]
  def index
    render json: Movie.all.order('title ASC'), status: :ok
  end

  def horror_movies
    render json: Movie.where(genre: 'Horror')
  end
end
