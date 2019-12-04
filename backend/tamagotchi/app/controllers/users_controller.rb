class UsersController < ApplicationController

  def index
    users = User.all
    render json: users
  end

  def show
    user = User.find(params[:id])
    render json: user, include: :pets
  end

  def create
    user = User.create(user_params)
    render json: user
  end


  private

  def user_params
      params.require(:pet).permit(:name, :password)
  end

end
