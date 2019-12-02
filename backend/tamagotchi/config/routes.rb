Rails.application.routes.draw do
  resources :player_moves
  resources :action_types
  resources :actions
  resources :pets
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
