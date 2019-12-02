class PetsController < ApplicationController

  def index
    pets = Pet.all
    render json: pets
  end

  def show
    pet = Pet.find(params[:id])
    render json: pet
  end

  def create
    pet = Pet.create(pet_params)
  end

  private

  def pet_params
      params.require(:pet).permit(:name, :user_id)
  end


end
