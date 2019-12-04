Rails.application.routes.draw do
  resources :adopt_pets
  resources :actions
  resources :action_types
  resources :pets
  resources :users
  resources :login, only: [:create]

end
