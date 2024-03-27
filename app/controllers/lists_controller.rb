class ListsController < ApplicationController
    skip_before_action :authorize, only: :index

    def index
        render json: List.all, status: :ok
    end

    def create
        l = List.create!(list_params)
        render json: l, status: :created
    end

    private

    def list_params
        params.permit(:user_id, :movie_id)
    end
end
