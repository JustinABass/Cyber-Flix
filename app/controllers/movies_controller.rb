class MoviesController < ApplicationController
    skip_before_action :authorize, only: :index

def index
    render json: Movie.all, status: :ok
end


end
