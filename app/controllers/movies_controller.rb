class MoviesController < ApplicationController
    skip_before_action :authorize, only: :index


    def index
        render json: Movie.all, status: :ok
    end

    def show
        render json: Movie.find(params[:id])
    end


    def destroy
        @current_user.movies.delete(Movie.find(params[:id]))
        
        head :no_content
    end


end
