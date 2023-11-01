class RepliesController < ApplicationController

    def index
        render json: Reply.all
    end
end
