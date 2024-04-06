class MoviesController < ApplicationController
    skip_before_action :authorize, only: :index

def index
    render json: Movie.all, status: :ok
end

def destroy
    saved_movie = @current_user.movies.find(params[:id])
    saved_movie.destroy
    head :no_content
  end


end
