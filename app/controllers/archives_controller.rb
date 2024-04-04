class ArchivesController < ApplicationController
    skip_before_action :authorize, only: :index

    def index
        render json: Archive.all, status: :ok
    end

    def create
        render json: @current_user.archives.create!(archive_params), status: :created
    end

    def destroy
        saved_movie = @current_user.archives.find(params[:id])
        saved_movie.destroy
        head :no_content
      end


    private

    def archive_params
        params.permit(:movie_id)
    end
end
