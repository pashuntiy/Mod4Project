Rails.application.routes.draw do
  resources :actions
  resources :action_types
  resources :pets
  resources :users
  resources :login, only: [:create]

end
