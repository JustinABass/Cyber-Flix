class UsersController < ApplicationController
    skip_before_action :authorize, only: [:index, :create]


    def index
        render json: User.all.with_attached_image, status: :ok
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end


    def show
       render json: @current_user, status: :ok
    end

    def update
        @current_user.update!(user_params)
        render json: @current_user, status: :accepted
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
        head :no_content
    end


    private

    def user_params
        params.permit(:username, :password, :password_confirmation, :image )
    end


end
