class UsersController < ApplicationController

  def index
    users = User.all
    render json: users
  end

  def show
    user = User.find(params[:id])
    render json: user, include: [:pets, :adopt_pets => {:include => :pet}]
  end

  def create
    # byebug
    user = User.create(user_params)

    render json: user
  end


  private

  def user_params
      params.require(:user).permit(:username, :password)
  end

end
