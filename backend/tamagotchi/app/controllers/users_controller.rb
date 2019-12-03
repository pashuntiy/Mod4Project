class UsersController < ApplicationController

  def show
    user_id = params[:id]
    if current_user_id == user_id.to_i
      user = User.find(user_id)
      render json: user
    else
      render json: { go_away: true }, status: :unauthorized
    end

  end

  def create
    user = User.create(user_params)
  end


  private

  def user_params
      params.require(:pet).permit(:name, :password)
  end

end
