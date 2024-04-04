class ArchivesController < ApplicationController
    skip_before_action :authorize, only: :index

    def index
        render json: Archive.all, status: :ok
    end

    def create
        render json: @current_user.archives.create!(archive_params), status: :created
    end


    private

    def archive_params
        params.permit(:movie_id)
    end
end
